# Myrmidia — journal de progression

Fichier de reprise. À lire en premier au début d'une session, à mettre à jour
à la fin. Il répond à trois questions et rien d'autre : **où on en est**,
**ce qui est cassé/en attente**, **quoi faire ensuite**.

Les décisions de design vivent dans `design/boucle-de-jeu.md` (§0 = les
arbitrages actés, qui l'emportent sur le reste du document). La direction
artistique vit dans `design/charte-stylisation.md`,
`design/ambiance-prologue.md`, `design/herbe-brins.md` et
`design/ressources-et-fondation.md`. Ce fichier-ci ne les recopie pas.

---

## État au 2026-09-05 (tour 13)

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
| **Première galerie** | **Les creuseuses creusent, jauge en digger-secondes, puis la galerie s'ouvre d'un coup.** Elle existe, elle est éclairée — personne n'y est encore entré |
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
| 1 | **On ne peut pas entrer dans la galerie** (#40). Elle existe et elle est éclairée, personne n'y a marché. C'est le critère de fin de l'objectif en cours | **Bloquant** |
| 2 | **Les touches 5/6 sont committées sans capture.** Mon harnais jetable n'envoie aucune touche (H n'y bascule pas le panneau non plus) alors que `verify-harvest.mjs` y arrive. Défaut du script, pas du jeu — mais à prouver | À vérifier |
| 3 | La séquence de ponte est scriptée : ~14 s sans contrôle. Acceptable une fois, pas répétable | Design |
| 4 | La reine reste sombre de corps ; le contour la détache mais sa chitine est à la valeur du sol | DA |
| 5 | `RIG_PROLOGUE` retouché quatre fois à l'intégration. **La DA n'a jamais arbitré** (Cephalotes coupé 3 tours de suite) | À arbitrer |
| 6 | La bouche de l'ancien tunnel montre le ciel si `SHOW_PREBUILT_NEST` est réactivé | Bloque la colonie abandonnée |
| 7 | `nearestClimbable()` et `harvest.target()` scannent encore linéairement | Perf |
| 8 | Tramage de dissolution très visible ; points 4-7 de `herbe-brins.md` ; pas de bloom | Reste à faire |

## Prochaines étapes

L'objectif nommé par le porteur : **voir la première galerie se creuser et
pouvoir y entrer.** Trois quarts sont faits.

1. **#40 — entrer dans le nid et en ressortir à pied.** C'est le critère de fin,
   pas un bonus : une galerie qu'on regarde depuis la surface ne montre rien du
   futur du jeu. Le blocage est nommé — une reine ne peut pas descendre un puits
   vertical avec un contrôleur qui suit le sol. Deux pistes, à trancher sur
   mesure : une rampe plutôt qu'un puits (le moins cher, probablement le bon),
   ou une vraie locomotion souterraine (plus général, et le mode macro le
   demandera de toute façon).
2. **Le menu de gestion de la reine** (`castes-et-micro-macro.md` §2). Il
   commence à exister dès qu'il y a deux castes à arbitrer, ce qui est le cas
   depuis ce tour. Aujourd'hui le choix de caste est deux touches sans écran.
3. **#34 — mode macro**, le nid en coupe vue de côté.
4. **Contrôler n'importe quelle fourmi** — demande d'abord que le joueur cesse
   d'être un cas particulier (#36, `etat-des-lieux.md` §2c).
5. Finir la conversion à l'index (`nearestClimbable`, `harvest.target`).
6. Lisibilité de la reine, arbitrage du rig, bloom, colonie abandonnée.

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
   demander contre quel corps elle a été écrite.** L'avatar est passé de
   l'ouvrière (rayon 1,5) à la reine (3,3, `scale` 2,2) au tour 6, et tout ce
   qui n'a pas suivi est un défaut latent.

---

## Comment on travaille

- **Le contrat d'interface d'abord.** `design/api-monde-gameplay.md` fixe les
  noms que `world/**` exporte et que `player/**` consomme, il est écrit avant
  la distribution et aucun agent ne le modifie. Sans lui, au round 5, les deux
  moitiés d'une même feature avaient été spécifiées séparément et ne se
  parlaient pas — sans lever la moindre erreur. Au round 6 les deux agents ont
  livré sous les mêmes noms sans se consulter.
- **Trois agents, répertoires disjoints.** Atta → `world/**` + `main.js` +
  `core/**`. Cataglyphis → `player/**`. Cephalotes → `design/**` + le
  générateur de textures + `assets/textures/**`. Ils commitent en local et ne
  poussent jamais ; l'intégration et le push se font ici.
- **Rien n'est déclaré fini sans capture.** Les trois défauts corrigés dans
  `dea42af` (brouillard du nid sur la pelouse, rivière noire, absence de
  reflet) ont tous été trouvés en regardant les images, aucun en relisant le
  code.
- **Les harnais de vérification :** `game/scripts/verify-terrain.mjs` (12 vues
  + perf + mémoire), `verify-room-access.mjs` (accès aux 3 salles),
  `verify-textures.mjs`. Chromium **doit** être lancé avec
  `--use-gl=angle --use-angle=d3d11`, sinon on mesure le rasteriseur logiciel.
- **Piège récurrent :** tout albédo doit porter
  `tex.colorSpace = THREE.SRGBColorSpace`. L'oubli ne lève aucune erreur, il
  délave simplement le rendu. Les rampes toon et les cartes `_orm`/`_normal`
  restent en `NoColorSpace`.
- **Les agents tombent, et de deux façons différentes.** Tours 4, 5 et 6 :
  coupés par la limite de session, systématiquement au moment d'écrire leur
  harnais — mais leur implémentation était **sur le disque**, et la récupérer a
  toujours été moins cher que la refaire. Tour 7 : les trois ont calé sur le
  watchdog (600 s sans progrès) **sans produire une ligne**, et le travail a été
  fait ici. Donc, dans l'ordre : `git status` d'abord ; si rien n'a été produit,
  ne pas relancer le même agent, faire le travail.
- Aux agents : **écrire et lancer le harnais tôt**, pas à la fin. C'est
  exactement ce qui n'a jamais été atteint trois tours de suite.

---

## Historique des tours

| Tour | Livré | Commits |
|---|---|---|
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
