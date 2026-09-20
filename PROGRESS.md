# Myrmidia — journal de progression

> **Nouveau : [`REPRISE.md`](REPRISE.md) est le dossier de reprise complet** —
> objectifs, arbitrages actés, demande en cours, pièges. À lire **avant** ce
> fichier-ci quand la session repart de zéro.

Fichier de reprise. À lire en premier au début d'une session, à mettre à jour
à la fin. Il répond à trois questions et rien d'autre : **où on en est**,
**ce qui est cassé/en attente**, **quoi faire ensuite**.

Les décisions de design vivent dans `design/boucle-de-jeu.md` (§0 = les
arbitrages actés, qui l'emportent sur le reste du document). La direction
artistique vit dans `design/charte-stylisation.md`,
`design/ambiance-prologue.md`, `design/herbe-brins.md` et
`design/ressources-et-fondation.md`. Ce fichier-ci ne les recopie pas.

---

## État au 2026-09-20 (tour 18)

**Branche de travail :** `feature/threejs-migration`.
**`main` :** la [PR #23](https://github.com/splatch17/Myrmidia/pull/23) est
**mergée** (`0f1a28a`, 2026-09-03). Le moteur est sur `main`, le lien de test du
README pointe dessus. Le travail continue sur la branche et repassera par une PR.
**Stack :** Three.js 0.169 + Vite 5, projet npm à la racine `game/`.
**Lien de test :** voir le tableau du `README.md` (build `game/dist/`, servi
par raw.githack depuis la branche).

> ### ⚠ La cadence de test est ACTIVE
> `core/pace.js` divise toutes les attentes par 8 et tous les coûts par 5.
> C'est volontaire pendant la phase de debug, mais **le rythme réel du jeu ne
> peut pas être jugé avec ça allumé** — une galerie en cinq secondes est un
> débogueur, pas un design. `P` puis `5` la coupe. À repasser en réel avant
> tout arbitrage de game design.

### Pour reprendre en trois minutes

```
git -C <repo> status --short        # 3 rounds sur 3, des agents ont été coupés
                                    # en pleine session : leur travail est SUR
                                    # LE DISQUE. L'inventorier avant tout.
cd game && npx vite build           # doit passer sans erreur
node scripts/verify-terrain.mjs _s  # 13 vues + perf + mémoire
```
Puis **regarder les PNG**. Tous les défauts rattrapés depuis le round 3 l'ont
été en regardant des images, aucun en relisant du code.

### Ce qui tourne aujourd'hui

**Le prologue est complet, et prouvé de bout en bout sur captures.** La reine
apparaît seule sur la prairie au crépuscule. Elle récolte (maintien de E, elle
**porte** visiblement ce qu'elle a pris), rapporte, dépose — le premier dépôt
fixe le site. Au seuil atteint, sur un sol creusable, elle creuse : la chambre
est excavée **à l'exécution** à l'endroit choisi, elle descend son propre puits,
**pond sa première couvée**, et pendant qu'elle est sous terre le monde bascule
du crépuscule au jour. Elle ressort dans un jour qu'elle n'a pas vu arriver.

`node scripts/verify-harvest.mjs _s` rejoue tout et capture chaque étape.
**Tous les tests passent.**

| Domaine | État |
|---|---|
| Carte de surface | Écrite à la main, **608×460 jouables**, 770×540 maillés, zéro aléatoire |
| Eau | Rivière à l'ouest + **mare dans le creux est** — et `waterDepthAt()` a enfin une empreinte |
| Ponte | Séquence scriptée de ~14 s : descente, ponte, bascule du ciel hors champ, remontée |
| **Colonie** | La couvée éclot. Les ouvrières récoltent et rapportent sans le joueur. Rendu instancié : 6 ouvrières = 47 draw calls |
| **Castes** | La reine choisit ce qu'elle pond (5 = ouvrières, 6 = creuseuses). Une caste est une ligne dans `avatar.js`, jamais un fichier. **La creuseuse se débloque à la 2e ponte** |
| **Cadence de test** | `core/pace.js` : attentes /8, coûts /5 (plancher 1 unité). **ON par défaut** — `P` puis `5` pour la couper |
| **Creuser** | **Un front de taille sur la paroi de la chambre, une jauge circulaire posée dessus, et au bout une salle — le hall.** L'excavation est une liste de salles et de liaisons (`world/excavation.js`), donc le tunnel suivant est une donnée, pas un troisième fichier qui a un avis sur où est le sol |
| **Menu de la reine** | `C`. Ponte et caste, réserve et coût, effectifs, chantiers. Attaché au **drapeau `manages` du profil**, pas à « est-ce le joueur » — un ouvrier se le voit refuser, ce qui est le vrai critère de #53 |
| ~~Première galerie~~ | **Les creuseuses creusent, jauge en digger-secondes, puis la galerie s'ouvre d'un coup — et on y descend à pied.** Rampe (`world/excavation.js`), chambre, ponte sur place, fond de galerie, remontée. Éclairée par trois lampes réparties sur la longueur, pas une au bout |
| **Descendre / remonter** | `nestFootprint()` / `descentPath()` (contrat §6) côté monde, `player/nest.js` côté joueur. Pente pire cas 0,43 ; aucun à-pic > 0,11 sur 323 pas ; la paroi tient (`headroom()` finie = jamais une porte) |
| Index spatial | Une grille uniforme sous toutes les requêtes de proximité. `nearestClimbable` ×42, une image à 20 fourmis passe de 3,43 ms à 0,10 ms |
| Rivière | Bord ouest, plan d'eau ondulé, berge de sable, Fresnel vers le ciel |
| Horizon | Deux rideaux de crêtes qui suivent la caméra en x/z |
| Herbe | 3400 brins, largeur par instance, quille de normale + vrille, **ombre portée** (même fonction GLSL pour la passe visible et la passe de profondeur) |
| Ressources | 3 espèces semées une fois, denses près de l'arbre et dans le creux, aucune dans l'eau |
| Récolte | Approche → maintien → portage visible → dépôt. Réserve affichée |
| Fondation | `foundNest()` creuse la 1re chambre au point choisi. L'ancien nid devient l'état « déjà fondé » |
| Qualité de site | **Les 5 facteurs lisent des données réelles** — le « ? » a disparu du HUD |
| Ciel | Deux rigs (prologue crépusculaire / colonie fondée) commutés par un scalaire `founded` |
| Textures | 6 albédos triplanaires + `seed`. `lawn-soil` corrigé, ne vire plus au rouille |
| Contours | Coque inversée sur les créatures, ~1,3 px constant à l'écran, ardoise dehors / noir chaud dedans |
| Lisibilité | Panneau de commandes (H), jauge de maintien, anneau au sol sous la cible de E (décal doux additif, arc qui tourne) |
| Réglages | **P** ouvre les graphismes : 1 résolution, 2 ombres, 3 herbe, 4 textures. Compteur d'images en bas à droite. Persisté en `localStorage` |
| Nid pré-construit | **Désactivé** (`SHOW_PREBUILT_NEST = false` dans `world/index.js`). Il n'avait plus de rôle depuis que la colonie se creuse à l'exécution |
| Perf | 145k tris, 18 programmes, 427 Ko VRAM textures, pire médiane 6,3 ms à hauteur de fourmi, 0 erreur console |

### Ce qui n'existe pas encore

- Pas de mode macro (le nid en coupe, vue de côté).
- Pas de post-process (bloom, contours).
- Pas de repop des ressources, pas d'ouvrières, pas de ponte.
- La bascule visuelle prologue → colonie fondée est câblée mais **jamais vue**.

---

## Défauts connus (vus sur captures, non corrigés)

| # | Défaut | Gravité |
|---|---|---|
| 1 | ~~On ne peut pas entrer dans la galerie (#40)~~ **Fait au tour 15**, et le tour 16 a corrigé ce qui restait pénible (#48, #49) | ✅ |
| 1b | **Le hall est nu** : aucun front de taille sur ses parois — [#62](https://github.com/splatch17/Myrmidia/issues/62), nombres en attente du brainstorm [#63](https://github.com/splatch17/Myrmidia/issues/63) | P1 |
| 1c | ~~**Fentes dans le sol du nid**~~ **Corrigé au tour 18** ([#60](https://github.com/splatch17/Myrmidia/issues/60), [#67](https://github.com/splatch17/Myrmidia/issues/67)) : 0 rayon sur 144 s'échappe sous la chambre, le couloir et le hall. Le volume **publié** et la coque **construite** sont deux jeux de nombres, la coque est bâtie strictement en dehors du marchable | ✅ |
| 1d | ~~« Grimper au brin d'herbe » s'affiche sous terre~~ **Fausse piste** ([#64](https://github.com/splatch17/Myrmidia/issues/64)) : les captures de `verify-dig` figent l'interface avant que la reine ait bougé. Prouvé au tour 18 en descendant au clavier. Un vrai jumeau a été trouvé et corrigé : `harvest.target()` proposait une graine de surface depuis le fond du nid | ✅ |
| 2 | **Les touches 5/6 sont committées sans capture** — [#61](https://github.com/splatch17/Myrmidia/issues/61) | P1 |
| 2b | ~~La reine surexposée sous la lampe de la bouche~~ **Corrigé au tour 16** : `WARM_MOUTH_LIGHT` ramenée à `[0.46,0.26,0.10]`, le plancher d'ambiance à 0,55 portant désormais l'entrée | ✅ |
| 3 | La séquence de ponte est scriptée : ~14 s sans contrôle. Acceptable une fois, pas répétable | Design |
| 4 | La reine reste sombre de corps ; le contour la détache mais sa chitine est à la valeur du sol | DA |
| 5 | `RIG_PROLOGUE` retouché quatre fois à l'intégration. **La DA n'a jamais arbitré** (Cephalotes coupé 3 tours de suite) | À arbitrer |
| 6 | La bouche de l'ancien tunnel montre le ciel si `SHOW_PREBUILT_NEST` est réactivé | Bloque la colonie abandonnée |
| 7 | `nearestClimbable()` et `harvest.target()` scannent encore linéairement | Perf |
| 8 | Tramage de dissolution très visible ; points 4-7 de `herbe-brins.md` ; pas de bloom | Reste à faire |

## Prochaines étapes

La file vit dans GitHub, plus ici : **[tickets `P1-prochain-round`](https://github.com/splatch17/Myrmidia/issues?q=is%3Aopen+label%3AP1-prochain-round)** (3 à 5 par round), puis `P2`, `P3`.
Round 19 : #61 touches 5/6 prouvées · #35 fin de l'index spatial · #59 direction de la galerie · #62 fronts de taille du hall.
Round 18 livré : #67 nid agrandi + bosse (emporte #60 et #65) · #68 animation de creusement (emporte #64).
Le brainstorm sur l'économie du creusement (#63) appartient au porteur.

## Où sont les choses

| Je cherche… | C'est dans… |
|---|---|
| La hauteur du sol, le relief, la rivière | `world/terrain.js` — `groundY()` est la **seule** source de vérité, dehors et dedans |
| Où le joueur peut marcher | `containSurface()` (dehors), `containUnderground()` (dedans) |
| Ce que vaut un sol | `world/terrain.js` `sampleTerrain()` → `player/siteQuality.js` traduit en verdict de jeu |
| Les ressources | `world/resources.js` (données + mesh), `player/harvest.js` (ce qu'on en fait) |
| Creuser le nid | `world/founding.js` — `canFoundAt` / `foundNest` / `populateNest` |
| Le ciel, le soleil, la bascule prologue→colonie | `world/sun.js` (`RIG_PROLOGUE`, `RIG_FOUNDED`, `setFoundedMix`) |
| Les tailles/vitesses de la fourmi | `player/avatar.js` — un second corps = une entrée de plus, pas un contrôleur |
| Les textures | `world/texturing.js` (triplanaire), `scripts/generate-procedural-textures.mjs` (génération) |
| L'éclairage du nid | `world/lighting.js` — `applyNestShading()` s'applique à toute la scène depuis `main.js` |
| Le contrat monde ↔ gameplay | `design/api-monde-gameplay.md` — **fait autorité, aucun agent ne le modifie** |

---

## Pièges qui ont déjà coûté du temps

Chacun a coûté au moins une demi-session. Ils ne lèvent aucune erreur.

1. **`tex.colorSpace = THREE.SRGBColorSpace`** sur tout albédo. L'oubli délave
   le rendu en silence. Rampes toon et `_orm`/`_normal` en `NoColorSpace`.
2. **Chromium sans `--use-gl=angle --use-angle=d3d11`** mesure le rasteriseur
   logiciel. Le cap `Math.min(dt, 0.05)` fait ramper le temps de jeu et les
   harnais expirent pour rien.
3. **`onBeforeCompile` compose, ne remplace jamais**, et toute injection pose
   son `material.userData.shaderTag` — sinon deux matériaux aux mêmes
   paramètres partagent un programme et l'un perd son injection.
4. **Les backticks dans un commentaire GLSL** terminent le template literal JS.
   Erreur de parsing à des lignes de distance.
5. **Une normale substituée dans le vertex shader** (l'eau) ne survit pas à une
   orientation de face inversée : `faceDirection` la retourne. C'est ce qui
   éclairait le dessous de la rivière.
6. **Un chiffre calibré sur une échelle, laissé derrière quand l'échelle
   change.** C'est le bug le plus fréquent du projet, rencontré **trois fois** :
   le brouillard du prologue (40 unités = 2 longueurs de corps), la largeur des
   brins (9,1 contre une reine de 7,0), et l'alésage du nid (couloir de 3,3
   pour une reine de 3,3 — infranchissable). Aucun ne lève d'erreur, aucun ne
   se voit sans mesurer. **Réflexe : quand une constante décrit une taille, se
   demander contre quel corps elle a été écrite.** Et au tour 15, la même
   erreur **sous forme de prédicat** : `movement.js` demandait « ce bord est-il
   une porte ? » par `groundY(bord) - floorY(bord)`, ce qui était juste tant
   que `groundY()` ne répondait que la pelouse. Depuis #41 elle répond le sol
   du nid dans toute l'empreinte, donc sur le bord elle comparait le sol à
   lui-même, lisait zéro, et déclarait porte **chaque paroi**. Une constante
   n'est pas seule à pouvoir être calibrée contre un monde qui a changé — un
   test l'est aussi.
7. **Un harnais qui suit la ligne centrale ne touche jamais un mur.** L'alésage
   de la galerie a publié 3,1 de demi-largeur marchable pour une reine de rayon
   3,3 pendant deux tours, et trois harnais verts n'ont rien vu — ils visaient
   tous des points de la ligne médiane. **Un test de couloir doit viser le
   mur**, pas le milieu. (Et c'est la 4e occurrence du piège 6.)
8. **Un arc doit contenir ses propres extrémités.** `rampOffset()` rejetait
   `u < 0` sans tolérance ; `u` étant reconstruit par un `atan2` et un wrap, le
   point de départ tombait à ±1e-16 selon le site. Une fois sur deux le seuil
   sortait de la rampe et `descentPath()` annonçait la profondeur de la chambre
   à la place — une porte 18 unités sous la prairie, sur la moitié des sites
   seulement. **Toute paramétrisation reconstruite par trigonométrie a besoin
   d'un epsilon à ses bornes.** L'avatar est passé de
   l'ouvrière (rayon 1,5) à la reine (3,3, `scale` 2,2) au tour 6, et tout ce
   qui n'a pas suivi est un défaut latent.

---

## Comment on travaille

Tickets, labels, agents, cycle d'un round, harnais, publication : **[`CONTRIBUTING.md`](CONTRIBUTING.md)**.
Rappel qui a déjà coûté un tour : les harnais servent `dist/` — **recompiler avant chaque passe**.

---

## Historique des tours

| Tour | Livré | Commits |
|---|---|---|
| 18 | **Un nid où la reine passe** : chambre de rayon 11 → 18,15, dôme 13 → 20,5, rampe et couloirs de 2 à 3 reines de demi-largeur, bosse de déblais d'une seule pièce au-dessus du dôme ([#67](https://github.com/splatch17/Myrmidia/issues/67), [#60](https://github.com/splatch17/Myrmidia/issues/60), [#65](https://github.com/splatch17/Myrmidia/issues/65)). **Animation de creusement du terrier** avant la ponte, qui garde sa cinématique d'origine ([#68](https://github.com/splatch17/Myrmidia/issues/68), [#64](https://github.com/splatch17/Myrmidia/issues/64)) | `04f1bbb`, `69ebede`, `f49912f` |
| 17 | **Habillage de MMORPG pour tous les menus** (`player/uiTheme.js`) ; **le passage chambre → hall est dégagé** (la paroi de la chambre le bouchait), pied des parois rentré sous le sol, couloir à sol plat. Dépôt structuré : gabarits de tickets/PR, `CONTRIBUTING.md`, labels de priorité | voir `git log` |
| 16 | **Descente raccourcie, front de taille + jauge circulaire, le hall, le menu de la reine.** Les parois glissent, la galerie n'est plus plus étroite que la reine | `3175592`, `f3a5015` |
| 15 | **On entre dans la galerie et on en ressort à pied**, rampe au lieu du puits, galerie éclairée sur sa longueur, palette d'avatar de la DA | `da6d7ce` |
| 14 | Cadence de test, déblocage de la creuseuse à la 2e ponte | `4b0adb2` |
| 13 | **Choix de caste à la ponte, creuseuses, jauge, première galerie qui s'ouvre** | `cdd6d5b`, `254b189` |
| 12 | **Éclosion et ouvrières qui récoltent seules**, rendu instancié | `15c9e7b` |
| 11 | Index spatial sous toutes les requêtes de proximité ; analyse du projet | `6c62128`, `3b13267` |
| 10 | **Première ponte et prologue prouvé de bout en bout** ; mare à l'est ; `waterDepthAt()` corrigé ; ombres de l'herbe à un tiers du prix | `b0b5e2f`, `53b1a9c` |
| 9 | Panneau de réglages graphiques + compteur d'images, anneau de cible refait en décal doux, carte ×2,7 avec 7 nouveaux reliefs écrits à la main | `25086bc` |
| 8 | Commandes affichées, jauge de maintien, anneau de cible ; alésage du nid mis à l'échelle de la reine ; nid pré-construit retiré du jeu | `a5860e4`, `a7bcd35` |
| 7 | Ombres portées de l'herbe, contours sur les créatures, prologue sorti de la sous-exposition | `ef63596` |
| 6 | Boucle de récolte, portage, fondation à l'exécution ; ressources et ombre côté monde ; herbe affinée ; sol corrigé | `6ca9546`, `379bd0e`, `f5f9c5a`, `24a1bc3`, `9a0faec` |
| 5 | Carte de surface écrite à la main, rivière, horizon ; textures branchées ; reine fondatrice jouable ; lecture du sol | `dea42af`, `a277ef3` |
| 5 (DA) | Ambiance du prologue, bark v3, chitin v2, dégradés de ciel | `b45ed22`, `28eb5f5` |
| 4 | Charte de stylisation + 6 textures ; module triplanaire ; collision décor ; caméra sous terre | `7033614`, `4fec981`, `5a66a88` |
| 3 | Ligne de vue dégagée dans l'herbe, caméra libérée sous terre | `a829cdc` |
| 2 | Intérieur du nid + rig de lumières locales | `75f2ba9` |
| 1 | Migration Three.js/Vite, escalade des tiges | `06c94cd` |
