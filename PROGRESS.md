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

## État au 2026-09-03

**Branche de travail :** `feature/threejs-migration`.
**Pull request :** [#23](https://github.com/splatch17/Myrmidia/pull/23), ouverte
contre `main`, mergeable. **Pas encore mergée** — le merge a été refusé par le
classificateur d'auto-mode, il faut l'autoriser ou cliquer sur GitHub.
**Stack :** Three.js 0.169 + Vite 5, projet npm à la racine `game/`.
**Lien de test :** voir le tableau du `README.md` (build `game/dist/`, servi
par raw.githack depuis la branche).

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

**Le prologue a une boucle, plus seulement un décor.** La reine apparaît seule
sur la prairie au crépuscule. Elle récolte (maintien de E, ça prend du temps,
elle **porte** visiblement ce qu'elle a pris), rapporte, dépose — et le premier
dépôt fixe le site de la colonie. Au seuil atteint, sur un sol creusable, elle
fonde : la première chambre est creusée **à l'exécution**, à l'endroit choisi.

| Domaine | État |
|---|---|
| Carte de surface | Écrite à la main, 398×250 jouables, 552×322 maillés, zéro aléatoire |
| Rivière | Bord ouest, plan d'eau ondulé, berge de sable, Fresnel vers le ciel |
| Horizon | Deux rideaux de crêtes qui suivent la caméra en x/z |
| Herbe | 1600 brins, largeur par instance, quille de normale + vrille, **ombre portée** (même fonction GLSL pour la passe visible et la passe de profondeur) |
| Ressources | 3 espèces semées une fois, denses près de l'arbre et dans le creux, aucune dans l'eau |
| Récolte | Approche → maintien → portage visible → dépôt. Réserve affichée |
| Fondation | `foundNest()` creuse la 1re chambre au point choisi. L'ancien nid devient l'état « déjà fondé » |
| Qualité de site | **Les 5 facteurs lisent des données réelles** — le « ? » a disparu du HUD |
| Ciel | Deux rigs (prologue crépusculaire / colonie fondée) commutés par un scalaire `founded` |
| Textures | 6 albédos triplanaires + `seed`. `lawn-soil` corrigé, ne vire plus au rouille |
| Contours | Coque inversée sur les créatures, ~1,3 px constant à l'écran, ardoise dehors / noir chaud dedans |
| Lisibilité | Panneau de commandes (H), jauge de maintien, **anneau au sol sous la cible de E** (miel = possible, rouge = refusé) |
| Nid pré-construit | **Désactivé** (`SHOW_PREBUILT_NEST = false` dans `world/index.js`). Il n'avait plus de rôle depuis que la colonie se creuse à l'exécution |
| Perf | 145k tris, 18 programmes, 427 Ko VRAM textures, pire médiane 6,3 ms à hauteur de fourmi, 0 erreur console |

### Ce qui n'existe pas encore

- Pas de mode macro (le nid en coupe, vue de côté).
- Pas de post-process (bloom, contours).
- Pas de repop des ressources, pas d'ouvrières.
- **Ponte : première tranche seulement (round 9, `player/ponte.js`).** Tenir
  E près de la bouche du nid, ça coûte `PONTE_COST` unités de réserve et ça
  révèle la clutch suivante (`populateNest`). Pas d'incubation, pas
  d'éclosion en ouvrière — ça reste à faire, voir défaut 9.
- La bascule visuelle prologue → colonie fondée est câblée, et se déclenche
  maintenant à la première ponte plutôt qu'au premier coup de pelle
  (corrigé round 9, voir défaut 9) — mais elle reste, comme tout le reste
  de la fondation, **jamais vue**.

---

## Défauts connus (vus sur captures, non corrigés)

| # | Défaut | Gravité |
|---|---|---|
| 1 | **La fondation n'a jamais été vue.** Les captures s'arrêtent à « Réserve : 3/5 ». Le code est là et compile, le moment ne l'est pas | **Bloquant** |
| 2 | La bouche de l'ancien tunnel montre le ciel au travers quand le nid est réactivé : le tube élargi a son plafond à y=24, la couture de `terrain.js` a été taillée pour y=11 | Bloque la réactivation |
| 3 | La reine reste sombre de corps. Le contour la détache mais sa chitine est à la même valeur que le sol | DA |
| 4 | Le tramage de dissolution proche caméra est très visible sur les brins traversés | Petit mais voyant |
| 5 | `RIG_PROLOGUE` a été retouché quatre fois à l'intégration. Chaque valeur est annotée contre celle de `ambiance-prologue.md`. **La DA n'a jamais arbitré** | À arbitrer |
| 6 | Rayons de grimpe et de collision des tiges divisés par ~2,1 avec l'affinement des brins. Jamais jugé sur capture | À vérifier |
| 7 | Points 4 à 7 de `design/herbe-brins.md` non câblés | Reste à faire |
| 8 | Pas de bloom sur les émissifs — 3e volet de #28 | Reste à faire |
| 9 | **La ponte (round 9) n'a jamais été vue, comme tout ce qui suit la fondation.** Écrite et câblée à l'aveugle (VPS sans GPU, voir l'en-tête de session) : le calcul (coût, plafond `MAX_BROOD`, portée) et le déclenchement de `founded` à `brood > 0` sont relus mais pas joués. Dépend en plus d'un chemin non vérifié — marcher jusqu'à la chambre creusée à l'exécution, défaut 1 — donc le geste de pondre est volontairement rattaché à la **bouche** (surface) et non à la chambre, justement pour ne pas dépendre de #1. Voir `design/api-monde-gameplay.md` §4bis/§5bis pour ce qui a été ajouté au contrat | **À voir avant tout** |

## Prochaines étapes

1. **Voir la fondation ET la ponte** (défauts 1 et 9 — le même blocage : rien
   après « Réserve : 3/5 » n'a jamais tourné sous des yeux). Rejouer la
   boucle de bout en bout : fonder, marcher jusqu'à la chambre (ou, si ça ne
   marche pas, jusqu'à la bouche — le geste de pondre a été câblé pour ne pas
   en dépendre), pondre, et regarder si `founded` monte bien à ce moment-là
   et pas avant. Tant que ce n'est pas vu, rien de round 9 n'est livré.
   Choses précises à juger sur capture :
   - la chambre est-elle atteignable en marchant (défaut 1, jamais tranché) ;
   - le anneau/prompt de ponte se déclenche-t-il à la bonne distance de la
     bouche (`PONTE_RADIUS = 16`, non calibré sur mesure) ;
   - le monde s'éclaire-t-il au bon instant, sur 6 s, sans à-coup ;
   - `PONTE_COST = 3` et `PONTE_SECONDS = 2.5` sont des premiers chiffres, pas
     un équilibrage — à ajuster une fois vus en jeu.
2. **La colonie abandonnée** — remettre le nid pré-construit sur la carte comme
   petit nid mort à trouver : entrée effondrée avec du relief, champignons
   toujours luminescents (le champignon survit à la colonie). Corrige aussi le
   défaut 2 au passage, puisque la bouche devient un éboulis et non un trou.
3. **Lisibilité de la reine** (défaut 3) — mesurer, puis chiffrer.
4. Bloom sélectif (défaut 8), points 4-7 de la spec des brins (défaut 7).
5. **#34 — mode macro**, le nid en coupe vue de côté.
6. **Incubation et éclosion en ouvrière** — la tranche que round 9 a
   délibérément laissée de côté (pas de timer, pas d'entité ouvrière à qui
   remettre la main). `player/ponte.js` pose `layEgg()`/`broodCount()`
   comme les seuls points d'entrée à faire évoluer ; rien d'autre dans
   `player/**` ne connaît la ponte.

## Où sont les choses

| Je cherche… | C'est dans… |
|---|---|
| La hauteur du sol, le relief, la rivière | `world/terrain.js` — `groundY()` est la **seule** source de vérité, dehors et dedans |
| Où le joueur peut marcher | `containSurface()` (dehors), `containUnderground()` (dedans) |
| Ce que vaut un sol | `world/terrain.js` `sampleTerrain()` → `player/siteQuality.js` traduit en verdict de jeu |
| Les ressources | `world/resources.js` (données + mesh), `player/harvest.js` (ce qu'on en fait) |
| Creuser le nid | `world/founding.js` — `canFoundAt` / `foundNest` / `populateNest` |
| Pondre | `player/ponte.js` — `canPonte` / `layEgg` / `broodCount`, câblé dans `player/interaction.js` |
| Le ciel, le soleil, la bascule prologue→colonie | `world/sun.js` (`RIG_PROLOGUE`, `RIG_FOUNDED`, `setFoundedMix`) ; le déclenchement (à `brood > 0`, pas à `foundNest()`) est dans `main.js` `advanceFoundedMix()` |
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
| 9 | Round nocturne solo, sur un VPS ARM sans GPU (les harnais `verify-*.mjs` étaient interdits) : première tranche de la ponte (`player/ponte.js`) et correction du déclenchement de la bascule crépuscule→jour (`main.js`, `brood > 0` au lieu de `nestOrigin()`). **Rien de tout cela n'a été vu tourner** — voir défaut 9, `npx vite build` est la seule vérification faite | *(à committer par le script appelant)* |
| 8 | Commandes affichées, jauge de maintien, anneau de cible ; alésage du nid mis à l'échelle de la reine ; nid pré-construit retiré du jeu | `a5860e4`, `a7bcd35` |
| 7 | Ombres portées de l'herbe, contours sur les créatures, prologue sorti de la sous-exposition | `ef63596` |
| 6 | Boucle de récolte, portage, fondation à l'exécution ; ressources et ombre côté monde ; herbe affinée ; sol corrigé | `6ca9546`, `379bd0e`, `f5f9c5a`, `24a1bc3`, `9a0faec` |
| 5 | Carte de surface écrite à la main, rivière, horizon ; textures branchées ; reine fondatrice jouable ; lecture du sol | `dea42af`, `a277ef3` |
| 5 (DA) | Ambiance du prologue, bark v3, chitin v2, dégradés de ciel | `b45ed22`, `28eb5f5` |
| 4 | Charte de stylisation + 6 textures ; module triplanaire ; collision décor ; caméra sous terre | `7033614`, `4fec981`, `5a66a88` |
| 3 | Ligne de vue dégagée dans l'herbe, caméra libérée sous terre | `a829cdc` |
| 2 | Intérieur du nid + rig de lumières locales | `75f2ba9` |
| 1 | Migration Three.js/Vite, escalade des tiges | `06c94cd` |
