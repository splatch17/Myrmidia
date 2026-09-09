# Myrmidia — dossier de reprise

> **À lire en entier au démarrage d'une session neuve.** Ce fichier existe pour
> qu'une session Claude qui ne sait rien de l'historique puisse reprendre le
> travail sans qu'aucune de mes décisions ni aucun de mes objectifs ne soit
> perdu. `PROGRESS.md` dit *où en est le code* ; celui-ci dit *ce que je veux,
> pourquoi, et ce qui a été décidé une fois pour toutes*.
>
> Ordre de lecture : **ce fichier** → `PROGRESS.md` → `design/boucle-de-jeu.md`
> §0 → `design/castes-et-micro-macro.md` → `design/api-monde-gameplay.md`.

---

## 0. LA DEMANDE EN COURS — c'est ici qu'on reprend

### Mon dernier prompt, littéralement

> **« ok il faut pouvoir voir la galerie et y entrer. Assigne des tickets aux
> agents nécessaires à ça. »**

### C'EST FAIT (tour 15, `da6d7ce`, poussé)

La reine descend sa propre rampe à pied, entre dans la chambre, **pond là où
elle se tient** (sans être emportée par la cinématique scriptée), continue
jusqu'au fond de la première galerie, et **ressort sur la prairie**. Chaque pas
sur de vraies touches. Les deux moitiés de la demande sont tenues :

- **Voir** — la galerie est éclairée sur toute sa longueur (trois lampes
  réparties, plus `DIG_FACE_LIGHT` au front de taille), plancher d'ambiance à
  0,55. Avant, une seule lampe au bout : un disque clair et quarante unités de
  noir.
- **Entrer** — une rampe, pas un puits, comme arbitré. Pente pire cas **0,43**
  (le puits était à 4,4), aucune marche > 0,11 sur 323 pas.

```
cd game
node scripts/verify-descent.mjs        # SEUL — 11 vérifs, 14 vues
node scripts/verify-gallery-walk.mjs   # SEUL — la marche complète
```
**Les deux passent intégralement.** Captures dans `game/_descent-shots/` et
`game/_gallery-shots/` (non suivis par git depuis ce tour).

Le bug de l'anneau non fermé — le tube ouvert sur le ciel — n'existe plus :
`world/excavation.js` a remplacé le puits, la chambre est voûtée et la bouche
est une arche dans sa paroi.

### Les trois bugs qu'il a fallu corriger pour y arriver

Le travail des deux agents coupés était bien sur le disque et il a été
récupéré, pas refait — sixième fois sur six que ça vaut mieux. Il restait :

1. **`rampOffset()` rejetait `u < 0` sans tolérance.** `u` est reconstruit par
   un `atan2` + wrap, donc le seuil tombait à ±1e-16 selon le site : une fois
   sur deux il sortait de la rampe et `descentPath()` annonçait la profondeur
   de la chambre. Le contrôleur refusait alors — à raison — de faire descendre
   la reine dans un trou de 18 unités. C'est ce qui faisait échouer le harnais
   différemment à chaque exécution.
2. **`movement.js` testait la porte avec `groundY(bord) - floorY(bord)`.** Juste
   tant que `groundY()` ne répondait que la pelouse ; depuis #41 elle répond le
   sol du nid dans l'empreinte, donc sur le bord elle comparait le sol à
   lui-même et déclarait porte **chaque paroi**. La reine traversait le mur de
   la galerie et était remontée de 28 unités jusqu'à la prairie. C'est le piège
   récurrent du projet (une valeur calibrée contre un monde qui a changé) sous
   forme de prédicat. Corrigé avec `headroom()` — finie = plafond = jamais une
   porte — et un échantillon pris **hors** de l'empreinte.
3. **Le harnais ne savait pas contourner un caillou** : il reculait et
   revisait le même cap, donc il rentrait dans le même caillou. Il contourne
   maintenant par côtés alternés et de plus en plus larges.

### Ce qui reste ouvert sur cette demande

Un seul point, et c'est un arbitrage de DA, pas un bug : **la reine est
surexposée près de la bouche** (`_gallery-shots/01-at-the-entrance.png`). Sa
chitine a été éclaircie et la lampe de la bouche a été descendue à `mouthY -
2.5` — les deux chiffres viennent de la DA, mais pris séparément, et personne
n'a mesuré leur somme à deux unités de distance. Voir §6.

## 1. Le projet, et ce que j'en attends

**Myrmidia** — un **MMORPG de fourmis**. On commence en contrôlant **la reine,
seule au milieu de nulle part**. On cherche un endroit, on récolte les premières
ressources, **on fonde la colonie à l'endroit qu'on a choisi**, puis on la fait
croître en contrôlant des fourmis et la reine via un **switch micro/macro**.

Ce que j'ai demandé et qui vaut en permanence :

- **Prévenir dès que c'est testable.** « tiens-moi au courant dès que c'est prêt
  à tester » — un lien de test, pas une description.
- **Pousser le WIP sur une branche (jamais `main` directement)** et donner le
  lien. Les liens de test s'affichent dans le `README.md`.
- **Documenter l'avancement sur GitHub** (issues, PR), et **remplir
  `PROGRESS.md` et les fichiers annexes** qui facilitent la reprise.
- **RAM / CPU / GPU bas**, tout en visant un rendu beau. Ça a été dit avant que
  ça lagge et ça reste vrai après.
- **Direction artistique : type World of Warcraft, stylisé à notre manière.**
- **Orchestrer les agents** : leur assigner des tickets, en créer de nouveaux,
  prioriser. C'est explicitement ma méthode de travail attendue, pas une option.
- Réfléchir au cœur du gameplay **en parallèle**, en l'adaptant aux mesures
  prises pendant le développement.

Nuance importante que j'ai posée : **le but n'est pas de développer un nid
énorme.** C'est d'avoir une idée de ce qui peut se faire. La base — la reine
dehors, dans un vrai monde (herbes, arbres, rivières sur certains bords,
montagnes au loin) — suffit pour commencer à développer le vrai gameplay.

---

## 2. Arbitrages actés — ne pas les rouvrir

Chacun a été tranché par moi, souvent via une question à choix. Ils font
autorité sur tout document plus ancien qui les contredirait.

| Sujet | Décision |
|---|---|
| Stack | **Three.js + Vite** (projet npm à la racine `game/`) |
| Priorités | **Rendu et gameplay en parallèle**, pas l'un puis l'autre |
| Assets | **Mix : procédural + quelques packs CC0** |
| Contraste | **Par zone** |
| Post-process | **Léger** |
| Carte | **Fixe, faite à la main** — pas de procédural |
| Site du nid | **Libre, mais le terrain compte** |
| Mode macro | **Le nid en coupe, vue de côté** |
| Départ | **La reine dehors, dans un vrai monde** |
| Creusement | La galerie s'ouvre **d'un coup** derrière une jauge — pas de creusement mètre par mètre (coûteux à générer, illisible) |
| Descente | **Une rampe, pas un puits** — arbitré pour cette demande-ci |
| Progression | **Phase de test/debug : rapporter UNE seule graine suffit** pour aller à la 2e ponte, qui débloque directement les nouvelles espèces |

### Note pour plus tard, à ne jamais contredire

En **mode micro**, on pourra prendre le contrôle de **n'importe quelle** fourmi
de la colonie — pas seulement la reine. Et **quand on prend le contrôle de la
reine, un menu de gestion particulier s'affiche** (pondre, choisir la caste,
affecter les creuseuses, agrandir le nid).

Conséquences **immédiates** sur le code (`design/castes-et-micro-macro.md` §3) :

1. **Aucune fourmi ne doit être structurellement « le joueur ».** Le contrôle
   est un attribut, pas une classe.
2. **Une caste est une donnée, pas un fichier.** Une ligne dans `avatar.js`. Si
   quelqu'un écrit `digger.js` à côté de `worker.js`, on s'écarte.
3. **Le HUD doit pouvoir dépendre de qui est contrôlé.**
4. **L'état de la colonie reste sérialisable** — nombres et identifiants de
   profil, aucune référence Three.js, aucune fermeture.

### Ordre de développement arbitré

| # | Étape | État |
|---|---|---|
| 1 | Choix de la caste à la ponte | ✅ fait |
| 2 | Les creuseuses creusent, jauge visible | ✅ fait |
| 3 | Le tunnel s'ouvre d'un coup | ✅ fait |
| 4 | **Y entrer et en sortir** | ✅ **fait au tour 15** (`da6d7ce`) |
| 5 | **Le menu de gestion de la reine** | 🔴 **la suite — c'est ici qu'on repart** |
| 6 | Contrôler n'importe quelle fourmi | à venir (demande que le joueur cesse d'être un cas particulier) |

---

## 3. Retours que j'ai faits, et ce qu'ils ont changé

Ils comptent autant que les specs : ils disent comment je juge le travail.

- **« ça lagge un peu »** → j'ai demandé un moyen d'activer/désactiver textures
  et résolution pour mieux tester. Résultat : le panneau **P**. Diagnostic réel :
  3,4 ms sur 8,0 ms partaient dans 3400 brins d'herbe rasterisés dans la carte
  d'ombres. Corrigé par un cull de portée au stade vertex, **pas** en supprimant
  la fonctionnalité.
- **« le cercle ne rend pas très bien, inspire-toi de vrais MMORPG »** →
  `player/marker.js` réécrit en décal additif doux avec un arc qui tourne.
- **« c'est ok mais pas beaucoup d'améliorations, rien de neuf »** → deux fois.
  La leçon retenue : **ne pas mettre du travail invisible (index spatial,
  refactor) devant du contenu visible** au moment où je dis que rien n'avance.
  Si un tour ne produit rien que je puisse voir, c'est une erreur
  d'orchestration.
- **« clairement moins d'herbe pour l'instant »** → 3400 → **1800 brins**.
- **« on est en phase de test/debug »** → d'où `core/pace.js`. **Attention :
  la cadence de test est ON par défaut** (attentes ÷8, coûts ÷5). `P` puis `5`
  la coupe. **Le rythme réel du jeu ne peut pas être jugé avec ça allumé.**
- **« j'apprécie la petite cinématique de ponte, bonne idée »** → garder ce
  registre : des moments scriptés courts et lisibles.

---

## 4. Comment le travail est organisé

### Les trois agents et leurs répertoires — strictement disjoints

| Agent | Rôle | Périmètre exclusif |
|---|---|---|
| **Atta** | Rendu / monde | `world/**`, `core/**`, `main.js`, `scripts/**` |
| **Cataglyphis** | Gameplay / joueur | `player/**`, `scripts/**` |
| **Cephalotes** | Direction artistique | `design/**`, générateur de textures, `assets/textures/**` |

**Les agents committent en local et ne poussent jamais.** J'intègre et je pousse.

### La règle qui a sauvé deux tours

**Écrire le contrat d'interface AVANT de dispatcher.** L'échec du tour 5, c'était
deux moitiés d'une même fonctionnalité spécifiées séparément. Depuis que
`design/api-monde-gameplay.md` existe, deux agents ont livré sous des noms
identiques sans se consulter, **deux fois**.

§6 du contrat (« Marcher dans le nid »), écrit et commité *avant* le dispatch
actuel (`f605027`), parce que les deux moitiés touchent la même fonction :

```
groundY(x, z)            -> number       (signature inchangée ; répond le sol
                                          du nid à l'intérieur de l'empreinte)
nestFootprint()          -> { contains(x, z), floorY(x, z), headroom(x, z) } | null
descentPath()            -> [{x, y, z}, ...] | null
```

Règle de consommation : `player/**` lit à travers une copie de namespace
(`const W = { ...world }`) avec des replis honnêtes.

### Deux modes d'échec d'agent, deux réflexes opposés

- **Coupé par la limite de session** (tours 4, 5, 6, 10, 15) — l'implémentation
  **est sur le disque**. La récupérer bat toujours la refaire.
- **Bloqué sur le watchdog sans rien produire** (tour 7, les trois) — ne pas
  attendre : faire le travail moi-même.

---

## 5. Pièges techniques qui ont déjà coûté du temps

1. **Le répertoire courant du shell dérive** vers `game/`, et les commandes git
   de la racine échouent (`could not open directory 'game/game/'`). Ça a déjà
   fait atterrir **deux fois** un commit de `dist` **sans ses sources**.
   → Toujours préfixer `cd /c/Users/33778/dev/MYRMIDIA && `.
2. **Un backtick dans un commentaire GLSL termine le template literal JS.**
   Deux builds cassés. Interdire les backticks dans les commentaires GLSL.
3. **Un `\n` dans un heredoc Python** devient une vraie nouvelle ligne à
   l'intérieur d'une chaîne JS. Utiliser `chr(92) + "n"`.
4. **`tex.colorSpace = THREE.SRGBColorSpace` sur tout albédo**, obligatoire.
   `_orm` / `_normal` / rampes toon restent en `NoColorSpace`.
5. **Les harnais Playwright sont sensibles à la charge** — ils passent seuls et
   échouent quand la machine est occupée (la boucle plafonne `dt` à 50 ms, donc
   les maintiens de touche à durée fixe sous-livrent). **Les lancer seuls.**
   Chromium **doit** démarrer avec `args: ['--use-gl=angle','--use-angle=d3d11']`.
6. **`onBeforeCompile` compose, n'écrase jamais.** Chaque injection pose
   `material.userData.shaderTag` et une `customProgramCacheKey`.
7. **Avant toute commande qui peut jeter du travail non commité**
   (`git checkout` / `restore` / `reset` / `clean`, `rm -rf` dans le dépôt) :
   `git status` d'abord, puis stash (`-u` pour les non-suivis) ou commit.
   Au moment de stager, relire ce qui est inclus ; si un fichier pourrait
   révéler un secret, même sous un nom anodin, en lire le contenu avant de
   pousser.

### Crochets de debug sur `window`

`__ant`, `__rooms`, `__camera`, `__scene`, `__world`, `__contain`, `__profileR`,
`__groundY`, `__renderer`, `__tree`, `__frame`, `__decorPenetration`,
`__renderView`, `__site`, `__nodes`, `__colony`, `__foundNest`, `__nestOrigin`,
`__gallery`, `__caste`, `__spatial`, `__laying`.

---

## 6. Les chiffres livrés par Cephalotes — CÂBLÉS au tour 15

Tout ce qui suit est **en place dans le code**, sauf mention contraire. Gardé
ici parce que c'est la dérivation des valeurs, et qu'un réglage futur doit
savoir contre quoi elles ont été mesurées avant de les bouger.

**Ce qui n'a PAS été câblé, et pourquoi :** `RIM_H` 1,6 → 4,0 et « la rampe
perce la lèvre d'un seul côté, le cratère se lit comme un C ». Ces deux-là
décrivent le **puits**, que `world/excavation.js` a remplacé au même tour : la
rampe perce déjà la lèvre d'un seul côté par construction. Les rejouer
reviendrait à régler une géométrie qui n'existe plus. À refaire arbitrer sur
les captures actuelles, pas à appliquer tel quel.

**À arbitrer en priorité :** la reine surexposée sous la lampe de la bouche
(§0). `WARM_MOUTH_LIGHT` descendue à `mouthY - 2.5` + chitine éclaircie de 30 %
= elle part au blanc à deux unités. Chacun des deux chiffres est bon seul.

**Géométrie de l'entrée** — `world/founding.js`
- `RIM_H` 1.6 → **4.0**
- La rampe perce la lèvre **d'un seul côté** (8–10 unités, orientée sur l'`az`
  du puits) : le cratère doit se lire comme un **C**, pas comme un **O**
- Intérieur de la bouche ≤ **L 12** ; parois de la rampe **L≈20** en haut de la
  coupe, retombant à **≤12** au niveau de la gorge
- Quart extérieur du tas de déblais : lerp vers le sol de la prairie, mélange
  `C_CHITIN` **0.12 → 0.04**

**Lumière**
- `WARM_MOUTH_LIGHT` `[1.05,0.62,0.24]` à `mouthY + 1.0`
  → **`[0.85,0.48,0.17]` à `mouthY - 2.5`**
- `AMBIENT_FLOOR` 0.30 → **0.55** (`world/lighting.js`)
- **Trois lampes de galerie** à t = 0.18 / 0.55 / 0.92 de `GALLERY_LEN`, à
  `c.y + GALLERY_R*0.55 + 1.5`, radiances `[0.95,0.56,0.22]` / `[0.72,0.42,0.16]`
  / `[1.15,0.66,0.24]`
- Nouveau **`DIG_FACE_LIGHT = [1.15,0.66,0.24]`** — ne pas réutiliser
  `WARM_MOUTH_LIGHT`
- `sunIntensity` 5.4 → **6.1** (`world/sun.js`) ; dérivation
  `sin(51°)/sin(18.5°) = 2.45 × 2.5 = 6.13`

**Couleurs d'avatar** — `player/avatar.js` (la reine mesure L 27,6 contre son
propre tas de déblais à L 31,9 : plus sombre que son sol, albédo peint 30 % sous
l'entrée de palette)
- reine : `chitinA 0xb07226→0xdda254`, `chitinB 0x5e3d16→0x8f5a25`,
  `limb 0x5e3d16→0x94612a`, `mandible 0xb07226→0xe8c078`
- ouvrière : `chitinA 0x8b5a24→0xc98a3c`, `chitinB 0x432d15→0x855828`,
  `limb 0x6b4420→0x8a5b28`
- creuseuse : `chitinA 0x6d4520→0xa8763a`, `chitinB 0x2f2010→0x805426`,
  `limb 0x4a2f16→0x7a5227`

**Texture** — `DIRT_TILE = 5.0` : période de répétition visible sur les grandes
surfaces horizontales. Monter à ~8 ou décaler l'échantillon triplanaire par un
hash.

**Ce que Cephalotes a validé et qu'il ne faut pas retoucher :** le contraste
butte↔prairie est déjà juste (L 135,5 vs 33,9) ; le problème de la galerie est
la **distribution**, pas l'exposition (l'atténuation `1/(1 + 0.017 d²)` donne
0,027 à 46 unités) ; le rig du prologue est validé, à un seul changement près
(`sunIntensity`).

---

## 7. La file d'attente

Par ordre de priorité. L'étape 4 étant faite, **le prochain travail est le
menu de gestion de la reine** (§2, étape 5) : il y a deux castes à arbitrer
depuis le tour 14 et le choix se fait aujourd'hui par deux touches sans écran.

0. **Faire arbitrer l'exposition par la DA** — la reine part au blanc près de
   la bouche (§0, §6). Court, et c'est la première chose qu'on voit.
1. **Prouver les raccourcis de caste 5/6 sur une capture** — défaut #2 de
   `PROGRESS.md`, partis sans capture parce que mon harnais jetable
   `_pace.mjs` ne délivrait **aucune** entrée clavier alors que
   `verify-harvest.mjs` pilote la même page correctement. Non isolé.
2. **Le menu de gestion de la reine** (étape 5).
3. **[#34] Mode macro** — le nid en coupe, vue de côté.
4. **[#36] Contrôler n'importe quelle fourmi** — demande d'abord de supprimer
   l'asymétrie « le joueur est un chemin de code à part ».
5. Finir la conversion vers l'index spatial pour `nearestClimbable()` et
   `harvest.target()`.
6. Colonie abandonnée ; bloom ; points 4–7 de la spec d'herbe.
7. Convenir d'une **plage de ports par agent** (Cephalotes a perdu un cycle sur
   une collision de port de serveur de dev, 4187).

---

## 8. Repères de code

- `game/` — projet npm. `base: './'` pour que le build soit servi par
  raw.githack. Build : `cd game && npx vite build`.
- `game/src/world/` — terrain (`terrain.js`, 703 lignes, table `RELIEF` écrite
  à la main), `founding.js` (fondation + galerie), `grass.js`, `sun.js`,
  `lighting.js`, `texturing.js` (projection triplanaire en espace monde, choisie
  parce que la géométrie procédurale est régénérée).
- `game/src/player/` — `index.js`, `movement.js`, `camera.js`, `avatar.js`
  (table des profils : `worker`, `queen`, `digger`), `colony.js` (œufs,
  ouvrières, creuseuses, jauge), `crowd.js` (toutes les fourmis non-joueur en
  **deux** draw calls, via le `poseParts()` partagé de `antMesh.js`),
  `marker.js`, `laying.js`.
- `game/src/core/` — `pace.js` (cadence de test), `quality.js` (panneau **P**),
  `spatialIndex.js` (grille uniforme, `DEFAULT_CELL = 16` — ne pas y toucher,
  14/16/20/24 sont à 10 % près et 16 est le milieu du plateau),
  `worldIndexBridge.js` (la couture entre `forEachNear` et `queryDisc`),
  `outline.js`.
- Contrat partagé `antState` : `{ position: THREE.Vector3, radius: number }`.
- Textures : `game/src/assets/textures/<mat>/<mat>_<map>.png`, 128×128, ~20 Ko
  pièce, ~449 Ko de VRAM au total. Générateur sans dépendance
  (`scripts/generate-procedural-textures.mjs`, `npm run gen:textures`), encodeur
  PNG maison sur `node:zlib`.

---

*Dernière mise à jour : 2026-09-09 (tour 15). HEAD `da6d7ce`, branche
`feature/threejs-migration`, poussée. Lien de test de la branche : voir le
tableau du `README.md`.*
