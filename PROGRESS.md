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

## État au 2026-09-05

> **Le tour le plus récent est le 13 (2026-09-12, l'éclosion peuple le monde).**
> Sa section est plus bas, juste avant « Défauts connus », précédée de celles
> des tours 10 à 12. Ce qui suit ici est l'état du tour 9, conservé parce qu'il
> décrit encore correctement la stack et la procédure de reprise — **sauf le
> lien de test, qui a été cassé au tour 10 et réparé au tour 12.**

**PR #23 mergée dans `main`** (`0f1a28a`). La ligne « pas encore mergée » de
la précédente version de ce fichier est obsolète — `git log main` le confirme.
Ce round (nocturne, autonome, sans capture possible — voir plus bas) travaille
directement sur une branche `auto/round-*` à partir de `main`.
**Stack :** Three.js 0.169 + Vite 5, projet npm à la racine `game/`.
**Lien de test :** voir le tableau du `README.md` (build `game/dist/`, servi
par raw.githack depuis la branche).

### Round du 2026-09-05 (nocturne, sans écran)

Ce round tournait sur un VPS ARM sans GPU : Chromium y retombe sur
SwiftShader, donc aucun harnais `verify-*.mjs` (tous basés sur Playwright/
Chromium et sur des chiffres de perf) n'a été lancé, et rien n'a été jugé sur
capture. Seule tâche retenue : une tâche vérifiable sans image.

**Livré : `game/scripts/test-logic.mjs`** (`npm run test:logic`, ou
`node scripts/test-logic.mjs`) — un premier harnais de tests **non
graphiques**, pur Node, pour la géométrie et le confinement de `world/**`.
Il importe les vrais modules de production (`terrain.js`, `founding.js`,
`underground.js`, `player/avatar.js`) via un hook de résolution Node
(`scripts/logic-test/loader.mjs`) qui ne redirige que `world/texturing.js`
vers un stub inerte (`scripts/logic-test/texturing-stub.mjs`) — c'est le seul
module de ce sous-graphe qui touche le DOM (`document.createElement('canvas')`,
`THREE.TextureLoader`). Tout le reste (three.js core, le bruit, les maths de
tube, `containUnderground`, `foundNest`, `groundY`) tourne tel quel.

Ce que ça teste, avec les vraies fonctions publiques (pas de réimplémentation
de leur formule — la largeur franchissable est mesurée en sondant
`containUnderground()` par dichotomie, pas recalculée) :
- la reine fondatrice (rayon de collision 3,3) passe dans la galerie
  principale et dans les trois corridors de salle (`underground.js`) ;
- elle passe dans le puits creusé à l'exécution (`founding.js foundNest()`,
  `SHAFT_R = 4,2`) ;
- `groundY()` n'a pas de marche à la couture galerie/surface
  (`z = TUNNEL_MOUTH`).

C'est exactement la classe de bug que `PROGRESS.md` documente comme la plus
coûteuse du projet (§ « Pièges », #6 — une constante calibrée sur une échelle
et laissée derrière), rencontrée trois fois côté rendu (brouillard, brins,
alésage du nid). Le harnais a été validé positif *et* négatif : passe à 15/15
sur l'état actuel, et j'ai temporairement cassé `SHAFT_R` (4,2 → 2,0) pour
confirmer qu'il le détecte (`1 failed`), puis restauré la valeur — `git diff`
est revenu propre avant de continuer. Aucun fichier de `world/**` ou
`player/**` n'a été modifié par ce round, seuls les trois fichiers de script
ci-dessus et une ligne dans `package.json`.

**Ce que ce harnais ne fait pas, volontairement :** il ne dit rien sur ce qui
*se voit* — DA, lisibilité, defaut #2 (bouche du vieux tunnel), defaut #5
(RIG_PROLOGUE), la fondation jamais vue (défaut #1). Tout ça reste dû à l'œil,
sur une machine avec GPU, comme avant.

**Vérification visuelle restant due** sur : rien de nouveau n'a été rendu ce
round, donc rien de neuf à re-vérifier à l'œil — mais tous les défauts connus
listés plus bas (1 à 8) restent entiers et n'ont pas avancé.

### Pour reprendre en trois minutes

```
git -C <repo> status --short        # 3 rounds sur 3, des agents ont été coupés
                                    # en pleine session : leur travail est SUR
                                    # LE DISQUE. L'inventorier avant tout.
cd game && npx vite build           # doit passer sans erreur
node scripts/test-logic.mjs         # géométrie/confinement, non graphique, sûr sans GPU
node scripts/verify-terrain.mjs _s  # 13 vues + perf + mémoire — a besoin d'un vrai GPU
```
Puis **regarder les PNG** produits par `verify-terrain.mjs`. Tous les défauts
rattrapés depuis le round 3 l'ont été en regardant des images, aucun en
relisant du code — `test-logic.mjs` complète ça, il ne le remplace pas : il
n'attrape que les incohérences numériques (une créature qui ne passe plus
dans un tunnel), pas ce qui se juge à l'œil.

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
- Pas de repop des ressources, pas d'ouvrières. ~~Pas de ponte~~ — la ponte
  existe depuis le tour 10, mais elle n'a jamais été vue tourner.
- La bascule visuelle prologue → colonie fondée est câblée mais **jamais vue**.

---

## Round du 2026-09-11 (tour 10 — nocturne, VPS ARM sans GPU)

**Ticket travaillé : #6 — Prologue de la reine seule et mécanisme de ponte.**
Le §1 (prologue) était livré depuis le round 6 ; ce round livre le **§2, la
ponte**. Choisi parce que « Prochaines étapes » le désignait, parce qu'il
débloque #37/#36/#38/#7, et surtout parce que son cœur — coût, capacité,
incubation, point de bascule — est de la **logique pure**, donc la seule
chose vérifiable sur une machine sans GPU. Aucun `verify-*.mjs` n'a été lancé.

### Où on en est

**La reine pond.** `P` dans la chambre fondée dépose une couvée, qui coûte
`EGG_COST = 3` unités de réserve (n'importe quelle espèce), incube
`EGG_INCUBATION_SECONDS = 25` s, puis éclôt.

| Fichier | Rôle |
|---|---|
| `player/brood.js` **(nouveau)** | Le cœur. **Module pur** : ni THREE, ni DOM, ni `world/**`. Tout lui est passé en argument, ce qui permet à `test-logic.mjs` de l'importer **directement**, sans le hook de résolution ni le stub de `texturing.js` |
| `player/index.js` | La touche `P`, la porte « est-elle dans le couvoir », `populateNest()`, la rampe `founded` |
| `player/hud.js` | Ligne couvain : réserve, `n`/capacité, prochaine éclosion, ouvrières écloses, phrase de refus |
| `player/interaction.js` | L'objectif permanent enseigne `P` **au moment où elle devient utile**, et dit s'il manque de la réserve |
| `main.js` | **A cessé de piloter `setFoundedMix()`** — voir ci-dessous |

Deux décisions d'arbitrage prises pendant le round, toutes deux contre ce que
le code faisait :

1. **`main.js` ne déclenche plus la bascule crépuscule → jour.** Il la lançait
   dès que `nestOrigin()` devenait vrai, c'est-à-dire **au coup de pelle** —
   exactement ce que `design/ressources-et-fondation.md` §7a interdit. La rampe
   (6 s) vit maintenant dans `player/index.js` et part à la **première ponte**,
   parce que c'est le joueur qui connaît l'événement. Un seul écrivain du
   scalaire, plus deux. `main.js` porte un commentaire qui dit où elle est
   partie et pourquoi.
2. **`populateNest()` reçoit les pontes _cumulées_ (`brood.laidTotal`), pas les
   couvées en cours.** Le premier câblage lui passait `broodCount()` : chaque
   éclosion aurait donc **éteint une lampe**, et la chambre serait devenue noire
   à mesure que la colonie réussit — l'inverse de l'arc de
   `ambiance-prologue.md` §2c (« chaque ponte *ajoute* sa lampe »). Les deux
   notions sont désormais distinctes et le restent : un couvain plein est
   temporaire, une lampe allumée est acquise.

**Tests : 38 passent, 0 échouent** (15 avant ce round), `npx vite build` passe.
Le harnais a été validé **en négatif** : la garde tout-ou-rien de la dépense a
été cassée volontairement, 4 tests sont tombés — dont la réserve à **−1** —
puis la garde a été restaurée et le 38/0 re-vérifié.

### Ce qui est cassé ou en attente

- **Rien de tout ça n'a été vu.** C'est la limite entière de ce round.
- **#6 n'est pas fermé.** Le mécanisme est là, mais deux choses manquent : le
  rebranchement des 3 ouvrières PNJ comme *résultat* de la ponte (c'est #36 +
  #37, tickets à part, frontière documentée dans l'en-tête de `brood.js` :
  l'éclosion incrémente `workersAvailable` et rien d'autre), et la
  confirmation à l'œil. Le point ouvert « caste au hasard ou au choix » reste
  ouvert, c'est #38.
- **Constante recopiée à la main — défaut latent de la famille #6 des
  « Pièges ».** `BROOD_ROOM_CAPACITY = 6` dans `player/index.js` duplique
  `MAX_BROOD` de `world/founding.js`, que le baril `world/index.js` n'exporte
  pas. Si `MAX_BROOD` change, le joueur pourra pondre une couvée que la
  chambre ne sait pas afficher, **sans aucune erreur**. Correctif à un ligne :
  exporter `MAX_BROOD` et le lire. À faire au prochain round côté Atta.
- **Le build publié (`game/dist/`) est resté à celui du tour 9 — délibérément.**
  `dist/` est dans `.gitignore` alors que son contenu est *suivi* (force-ajouté
  autrefois). `npx vite build` supprime donc l'ancien bundle, que git voit
  partir, et écrit le nouveau, que git ignore : commiter en l'état aurait
  publié un `index.html` pointant vers un fichier absent, c'est-à-dire une page
  blanche au bout du lien de test du README. J'ai remis `dist/` à son contenu
  commité. **Conséquence : le lien de test ne montre pas la ponte.** Pour la
  voir, rebuilder localement, puis `git add -f game/dist` — ou, mieux, régler
  la contradiction une bonne fois (soit `dist/` suivi et sorti du `.gitignore`,
  soit publié par une action CI plutôt que commité à la main).
- **`verify-round6.mjs` ne montrera plus jamais l'état « jour ».** Son seam
  `window.__world6` fonde le nid sans contrôleur joueur ; personne n'anime donc
  plus `foundedMix()` sur ce chemin, et la valeur reste à 0. C'est le bon repli
  (mode prologue), mais ce harnais ne peut plus servir à juger l'éclairage
  post-fondation.

### À juger à l'œil, sur une machine avec GPU

Par ordre d'importance :

1. **La bascule découverte à la remontée.** Jouer la boucle entière — récolter,
   fonder, descendre, pondre, ressortir — et vérifier que le monde a changé
   *pendant* qu'on était dans le noir. C'est tout l'intérêt de l'arbitrage §7a
   et c'est la seule chose qu'aucun test ne peut prouver.
2. La première lampe chaude à la première ponte, une de plus par ponte, la
   perle à la 4ᵉ (`populateNest`).
3. La ligne HUD du couvain : placement (`bottom:14px`, serrée contre le bord)
   et son ambre chaud contre le reste de la colonne.
4. Le rayon de 14 unités qui décide « elle est dans le couvoir » — contre une
   reine longue d'environ 24,5 unités. Aucun test ne dit si `P` répond là où
   le joueur s'y attend.

### Quoi faire ensuite

1. **Voir la ponte** (point 1 ci-dessus) — et voir la fondation par la même
   occasion, défaut 1, jamais levé depuis trois rounds.
2. Exporter `MAX_BROOD` et supprimer la constante recopiée.
3. **#36 puis #37** : la couche d'entités, branchée sur
   `brood.workersAvailable`. Le compteur les attend.
4. Le reste de la liste ci-dessous est inchangé.

---

## Round du 2026-09-12 (tour 11 — nocturne, VPS ARM sans GPU)

**Ticket travaillé : #35 — « Index spatial partagé : supprimer les balayages
linéaires par image ».**

Pourquoi lui et pas #36 que le tour 10 désignait : #36 dit noir sur blanc
« **Dépend de #35** », et son critère de fin exige des captures et des chiffres
de perf GPU — impossible ce round. #35, lui, est de l'algorithmique pure :
c'est le seul maillon de la chaîne #35 → #36 → #37 → #38 entièrement
vérifiable sans écran, et il débloque les trois autres. Aucun `verify-*.mjs`
n'a été lancé.

### Où on en est

**Plus aucune requête de proximité ne balaie la carte entière.** Une grille
uniforme unique porte les 1862 objets statiques (1600 brins, 83 champignons,
34 cailloux, 145 nœuds de ressources), et les cinq appelants qui balayaient
par image l'interrogent.

| Fichier | Rôle |
|---|---|
| `core/spatialIndex.js` **(nouveau)** | La grille. **Module pur : aucun `import` du tout** — ni THREE, ni DOM, ni `world/**`. Comme `player/brood.js` au tour 10, `test-logic.mjs` l'importe directement, sans le hook de résolution ni le stub de `texturing.js` |
| `world/index.js` | Construit **un seul** index partagé au `createWorld()`. Expose `worldIndex`, `getGrassFootprints()` et enfin `MAX_BROOD` |
| `player/climb.js` | `nearestClimbable()` : 1600 brins par image → une requête. Exporte `grassBlades` |
| `player/resources.js`, `harvest.js` | `nodeInReach()` indexé, et le **second** balayage par image (la recherche de `activeId` pendant la récolte) remplacé par une Map |
| `player/decorCollision.js` | `forEachCollider()` indexé, champignons/cailloux/brins |
| `player/siteQuality.js` | `probeShade()` / `probeFood()` |
| `scripts/bench-spatial.mjs` **(nouveau)** | Micro-mesure CPU pur Node (`npm run bench:spatial`) |

**Cellule de 12 unités**, écrite contre les portées réelles pour la **reine**
(rayon 3,3, `scale` 2,2) : `reach()` = 9,9 ; grimpe d'arbre 13,2 ; récolte ≈ 8 ;
collision décor ≈ 7 (jusqu'à ~14 pour un chapeau grossi). Toute requête par
image touche donc un bloc 2×2 ou 3×3. Mesuré : 642 cellules, 2,9 entrées par
cellule en moyenne, 15 au pire. C'est le piège n°6 traité en face : le chiffre
est annoté contre le corps qui l'a fixé.

**Mesures CPU (pur Node, aucun Chromium, aucun GPU), checksums identiques
balayage/index dans les quatre cas :**

| Requête | Balayage | Indexée | Gain |
|---|---|---|---|
| `nearestClimbable` | 33,2 µs | 2,6 µs | **×13** |
| `nodeInReach` | 7,4 µs | 0,7 µs | **×11** |
| collision décor, passe herbe | 32,8 µs | 0,8 µs | **×43** |
| `probeShade` (r = 26, 4 Hz) | 14,8 µs | 4,2 µs | ×3,5 |
| `move()` de 20 fourmis | — | 5,2 µs/image | — |

Lecture honnête : pour **une** fourmi, ~73 µs d'arithmétique par image
deviennent ~4 µs. Le vrai gain est en croissance — à 20 ouvrières, 1,5 ms par
image (9 % du budget de 16,7 ms) deviennent ~0,09 ms. C'est exactement ce que
#36 allait faire exploser.

**Tests : 38 → 86, 0 échec.** `npx vite build` passe (2,3 s). La moitié de ces
tests sont des tests d'**équivalence** : pour chacun des quatre appelants, une
implémentation de référence par balayage linéaire (recopiée de l'état d'avant)
est confrontée à la version indexée sur ~1070 points tirés déterministement
sur la vraie carte. C'est ce qui remplace les captures ce round. Validé **en
négatif** cinq fois (filtre de hauteur retiré → 409 désaccords ; filtre
`amount` → 25 ; extent des champignons → 3 tests, 55 désaccords ; etc.), puis
86/0 re-constaté.

Deux arbitrages pris pendant le round :

1. **Le second `createGrassField()` de `climb.js` a été supprimé.** Le
   gameplay construisait son propre champ de brins, déterministe et identique
   à celui du rendu, et s'y référait par indice. Les `id` de l'index viennent
   du champ *rendu* : deux tableaux jumeaux qui se désalignent silencieusement
   dès qu'un seul des deux appels change de graine ou d'effectif. Tout le monde
   lit maintenant `getGrassFootprints()`.
2. **Les rayons de collision ajustés ne sont pas poussés dans l'index.**
   `decorCollision.js` n'utilise pas le `mushroomCollideR()` stocké mais
   `fittedRadius()`, qui grossit un chapeau jusqu'à ~14 unités — un
   `forEachWithin` naïf aurait **raté** ces chapeaux, seul vrai changement de
   comportement possible du ticket (les tests le confirment : 3 échecs). Il
   interroge donc par distance au centre avec sa propre borne. Écrire un rayon
   ajusté dans l'index partagé le ferait dépendre de l'avatar courant, et
   `maxExtent` ne décroît jamais : les ouvrières de #36, qui ont un autre corps,
   auraient hérité d'un balayage gonflé à vie.

### Ce qui est cassé ou en attente

- **#35 n'est pas fermé, à une chose près.** Tout est livré et prouvé sauf le
  chiffre exact que réclame son critère de fin : « temps CPU **d'une image**,
  avant/après, même harnais ». Celui-là inclut Three.js et exige une machine
  avec GPU. Les µs ci-dessus sont le coût de l'arithmétique de proximité
  seule — honnêtes, mais ce n'est pas la même mesure. **À faire tourner sur
  machine avec GPU, puis fermer.**
- **LE LIEN DE TEST DU README EST CASSÉ, et l'était déjà avant ce round.** Le
  commit du tour 10 (`b072d97`) a **supprimé** `dist/assets/index-LmX2wDE8.js`
  et pointé `dist/index.html` vers `index-xyXCMNBS.js`, qui n'a jamais été
  ajouté. La branche publie donc un `index.html` qui charge un fichier absent :
  page blanche. La note du tour 10 croyait avoir évité ça, c'est l'inverse qui
  s'est produit. Réparation, une ligne, à faire depuis une machine où git
  écrit : `cd game && npx vite build && git add -f dist/index.html dist/assets/*.js`.
  Je n'ai pas pu la faire ici : **toute écriture git est refusée dans cet
  environnement** (`git add`, `git checkout` rejetés par le bac à sable), c'est
  aussi pourquoi `dist/index.html` apparaît modifié dans le diff de ce round.
  Mieux vaudrait régler la contradiction pour de bon — `dist/` est dans
  `.gitignore` alors que 6 de ses fichiers sont suivis : soit on l'en sort,
  soit on publie par CI.
- Le commentaire d'en-tête de `world/index.js` affirme encore que
  `MUSHROOMS`/`ROCKS`/`mushroomCollideR` sont « deliberately not wired into the
  player controller ». C'est faux depuis plusieurs tours. Une ligne à corriger.
- **Rien de tout ça n'a été vu.** Par construction rien ne *doit* se voir.

### À juger à l'œil, sur une machine avec GPU

Par ordre d'importance :

1. **Que rien n'ait changé.** C'est le critère de fin de #35, mot pour mot :
   « le jeu doit se jouer exactement pareil ». Rejouer la boucle — grimper un
   brin, récolter, déposer, **frôler un amas de champignons sous terre** (le
   cas que l'arbitrage n°2 a failli casser), lire la note de site — et
   confirmer que la sensation au clavier est identique. Les tests prouvent
   l'égalité des *requêtes*, pas celle du ressenti.
2. Le temps CPU par image avant/après, pour clore le ticket.
3. Tout ce que le tour 10 attendait déjà et qui n'a toujours pas été vu : la
   ponte, la bascule crépuscule → jour à la remontée, la fondation (défaut 1).

### Quoi faire ensuite

1. **Réparer le lien de test** (une ligne ci-dessus). Sans lui, aucun des
   points « à juger à l'œil » accumulés depuis trois tours n'est atteignable.
2. **#36 — la couche d'entités.** Sa dépendance est levée : l'index sait déjà
   déplacer une entrée (`move()`, 5,2 µs pour 20 fourmis) et le type `'ant'`
   n'attend qu'à être inséré.
3. Puis **#37** (l'éclosion peuple le monde) et **#38** (le choix de caste),
   branchés sur `brood.workersAvailable` qui les attend depuis le tour 10.
4. Le reste de la liste ci-dessous est inchangé.

---

## Round du 2026-09-12 (tour 12 — nocturne, VPS ARM sans GPU)

**Ticket travaillé : #36 — « Couche d'entités : une fourmi qui n'est pas le
joueur ».** Désigné nommément par « Quoi faire ensuite » du tour 11, dépendance
(#35) levée au tour 11, et il débloque à lui seul #37, #38, #8 et #34. Son
cœur est de la logique pure, donc la moitié vérifiable sans écran. Aucun
`verify-*.mjs` n'a été lancé.

### Où on en est

**Une fourmi qui n'est pas le joueur a enfin un endroit où vivre, et le rendu
peut en tenir vingt.** Les deux moitiés du ticket ont été livrées, par
Cataglyphis puis par Atta à qui j'ai passé le résultat de la première.

| Fichier | Rôle |
|---|---|
| `core/entities.js` **(nouveau)** | **Module pur, zéro import** — comme `spatialIndex.js` (t. 11) et `brood.js` (t. 10), donc importé directement par `test-logic.mjs`. `createEntity`, `makePatrolGoal`/`goalWish` (aller-retour), `snapshotEntity`/`restoreEntity`. Le profil est référencé par `profileId` (chaîne), pas par objet : c'est la clause « sérialisable » tenue même si `avatar.js` gagne un jour une closure |
| `player/entities.js` **(nouveau)** | La couche impure. `spawnEntity()` (résout le profil, construit le `legState`, insère dans `worldIndex` en type `'ant'`), **`updateEntity()` — la fonction UNIQUE de mise à jour, joueur ou PNJ**, `driveFromInput`, `removeEntity` |
| `player/index.js` | Le joueur n'est plus un chemin de code à part : il est créé par `spawnEntity(..., {id:'player', controlled:true})` et avancé par `updateEntity()`. Le `legState` a cessé d'être une variable locale, il vit sur `ant.legState` |
| `core/instancedPool.js` **(nouveau)** | Pool `InstancedMesh` à capacité fixe (`MAX_ANTS = 32`), réservation de slots, **échoue bruyamment** en dépassement plutôt que de réallouer en silence |
| `player/antMesh.js` **(réécrit)** | Ne crée plus un `Mesh` par pièce : il réserve des slots dans deux pools partagés (sphères, cylindres), un seul matériau `vertexColors` teinté **par instance** |
| `core/outline.js` | La coque partage l'`instanceMatrix` du corps **par référence** et son `count` est un getter live ; un `WeakSet` empêche de ré-envelopper un pool |
| `scripts/bench-antmesh.mjs` **(nouveau)** | Compte meshes/géométries/matériaux/instances en pur Node, sans GPU — 22 checks |

**Le vrai travail technique du ticket, mesuré et non estimé.** Le ticket
annonçait « ~30 meshes par fourmi » ; le compte réel était **72 (ouvrière) à
74 (reine)**, contour compris — le contour doublait la note, ce que le ticket
ne disait pas.

| | avant | après |
|---|---|---|
| Draw calls, 1 fourmi | 72–74 | **4** |
| Draw calls, 5 fourmis | 360–370 | **4** |
| Draw calls, 20 fourmis | 1440–1480 | **4** |
| Matériaux | 4–6 (cache par teinte) | **2** |
| Géométries | 2 | 2 |

Le nombre de draw calls est devenu **constant**. Ce qui croît avec la colonie,
c'est le nombre d'instances posées (36 par ouvrière, 37 par reine : 728 à
vingt fourmis mixtes), pas le nombre d'appels de dessin.

**Tests : 86 → 113, 0 échec** (+19 côté entités, +8 côté rendu).
`npx vite build` passe (2,3 s). J'ai relancé les deux moi-même après chaque
agent. Validé **en négatif** quatre fois : bascule d'arrivée du patrol
désactivée → 3 tests tombent ; `collideRadius(profile)` remplacé par le
littéral `1.5` → 1 test tombe, précisément celui qui interdit la constante
recopiée ; `MAX_ANTS` ramené à 2 → échec bruyant à la 3ᵉ fourmi ; partage de
l'`instanceMatrix` du contour retiré → 6 checks du bench tombent (le contour
reste figé sur la première fourmi). Restaurés, 113/113 re-constaté à chaque fois.

**Arbitrages pris pendant le round, tous contre ce que le code faisait :**

1. **Couleur par instance, plus un matériau par teinte.** L'ancien cache par
   hex aurait plafonné les pools à un draw call par couleur distincte. Un seul
   matériau `vertexColors` couvre toutes les teintes, présentes et futures.
2. **Pool à capacité fixe plutôt que croissante.** Une réallocation casserait
   le partage par référence de l'`instanceMatrix` avec le contour — la coque
   pointerait sur un buffer périmé. Capacité généreuse et documentée, qui
   lève une erreur, contre un mécanisme plus fin impossible à valider sans rendu.
3. **`legState` (l'IK des pattes) reste hors de la forme sérialisable.** C'est
   de l'état d'animation, pas de l'état de partie : une entité restaurée
   replante ses pieds à la première image, comme une entité neuve.
4. **`dist/` sorti du `.gitignore`** — voir ci-dessous.

**Le lien de test du README est réparé.** C'était le blocage le plus cher du
projet : `dist/index.html` et 5 PNG étaient *suivis* alors que `dist/` était
*ignoré*, et le bundle JS — dont le nom porte un hash qui change à chaque
build — n'a jamais pu être ré-ajouté. La branche publiait donc un `index.html`
chargeant un fichier absent, c'est-à-dire une page blanche, depuis le tour 10.
Le contournement à la main a échoué **deux tours de suite**. J'ai tranché pour
la solution que ce fichier recommandait depuis deux tours : `dist/` ne figure
plus dans `game/.gitignore`, avec le pourquoi écrit dedans. Vérifié sur le
disque : `dist/index.html` pointe sur `assets/index-B4DWIMPw.js`, qui existe
et que git voit enfin. Coût assumé : ~580 Ko de JS dans l'historique par build ;
la vraie sortie reste une action CI, pas un retour à l'ignorance du dossier.

### Ce qui est cassé ou en attente

- **#36 n'est pas fermé, et il s'en faut de la moitié visible.** Son critère de
  fin est « cinq fourmis non contrôlées qui se déplacent sur la pelouse sans
  que l'image s'effondre, chiffres à l'appui. **Captures obligatoires.** »
  Or **aucun PNJ n'est instancié dans le jeu** : `main.js` n'en fait naître
  aucun. Ce qui existe est le chemin complet — la couche d'entités, la fonction
  de mise à jour commune, le rendu qui tient vingt corps — prouvé par 113 tests
  et par un bench d'objets de scène, mais **jamais joué**. Le câblage final
  (faire naître cinq ouvrières et les lâcher sur la pelouse) est court et sûr
  maintenant ; il a été laissé à un round qui peut regarder l'écran, parce que
  le livrer à l'aveugle aurait produit exactement le genre d'affirmation que ce
  fichier reproche depuis onze tours.
- **La teinte par instance n'a jamais été vue.** `instanceColor` est documenté
  par Three.js mais n'a jamais tourné ici. C'est le point le plus incertain du
  round.
- **La grimpe reste un mécanisme de joueur contrôlé.** `updateEntity()` route
  bien la branche `ant.climb` par le chemin commun, mais aucun objectif d'IA ne
  déclenche d'escalade. Noté dans le fichier, pas un oubli silencieux.
- **Pas d'évitement mutuel entre entités.** L'index porte pourtant déjà le type
  `'ant'` et sait les retrouver : c'est prêt, ce n'est pas branché.
- La cellule de 12 unités de l'index spatial, dimensionnée contre la reine au
  tour 11, a été **revérifiée avec des ouvrières dedans** : leur portée (~4,5–8)
  est strictement sous la bande déjà couverte, et les extents sont par type.
  Rien à corriger — c'est le piège n°6 regardé en face plutôt que supposé.
- Le commentaire d'en-tête de `world/index.js` ment toujours (« deliberately
  not wired into the player controller »). Une ligne, toujours pas faite.

### À juger à l'œil, sur une machine avec GPU

Par ordre d'importance :

1. **Faire naître cinq ouvrières et les regarder marcher** — c'est le critère
   de fin de #36, et c'est maintenant à une poignée de lignes dans `main.js`.
   Relever les FPS à 5 puis à 20, capturer. C'est ce qui ferme le ticket.
2. **La teinte par instance** : chaque pièce (gastre, mandibules, pattes)
   affiche-t-elle la bonne couleur, fourmi par fourmi ? Le mécanisme est neuf
   ici et c'est le plus incertain.
3. **Le contour sur un corps instancié** : épaisseur et couleur du liseré,
   pièce par pièce. Le calcul de `oDist` par instance a été corrigé mais jamais
   affiché. Et il vise « ~1,3 px constant » — vérifier que ça tient aussi pour
   une ouvrière, deux fois plus petite que la reine.
4. **Les ombres portées** : `castShadow` est posé sur les deux pools ; chaque
   instance se projette-t-elle dans la shadow map ?
5. **Que la reine se pilote exactement pareil.** Elle passe désormais par le
   chemin de code commun. Aucun test ne mesure le ressenti au clavier.
6. Tout l'arriéré des tours 10-11, toujours jamais vu : la ponte, la bascule
   crépuscule → jour à la remontée, la fondation (défaut 1). **Le lien de test
   marche à nouveau — ils sont enfin atteignables.**

### Quoi faire ensuite

1. **Ouvrir le lien de test et vérifier qu'il affiche le jeu.** Une minute, et
   ça valide la réparation ci-dessus. Si c'est blanc, le diagnostic est à
   refaire, pas à contourner une troisième fois.
2. **Fermer #36** : faire naître cinq ouvrières, capturer, relever les chiffres.
3. **#37** (l'éclosion peuple le monde) — `brood.workersAvailable` l'attend
   depuis le tour 10, et il a maintenant un corps où aller. Puis **#38**.
4. Le reste de la liste ci-dessous est inchangé.

---

## Round du 2026-09-12 (tour 13 — nocturne, VPS ARM sans GPU)

**Ticket travaillé : #37 — « Éclosion : la première couvée donne des ouvrières ».**
Désigné nommément par « Quoi faire ensuite » du tour 12 ; ses deux dépendances
(#35 index spatial, #36 couche d'entités) étaient levées depuis les tours 11 et
12 ; `brood.workersAvailable` l'attendait depuis le tour 10. Son cœur — la
machine à états d'une butineuse et le branchement éclosion → naissance — est de
la logique pure, donc la moitié vérifiable sans écran. Aucun `verify-*.mjs` n'a
été lancé.

### Où on en est

**La reine n'est plus seule — dans le code.** Une couvée qui éclôt fait naître
autant d'ouvrières, chacune sort du nid, marche vers le nœud de ressource le
plus proche, récolte, rentre et dépose dans **la réserve du joueur**, sans
aucune intervention.

| Fichier | Rôle |
|---|---|
| `player/forage.js` **(nouveau)** | La machine à états SEEK → HARVEST → RETURN → DEPOSIT. **Module pur, zéro `import`** — comme `brood.js` (t. 10), `spatialIndex.js` (t. 11), `core/entities.js` (t. 12) : tout passe par un `ctx` de callbacks, donc `test-logic.mjs` l'importe directement, sans hook de résolution ni stub de `texturing.js`. Elle ne rend qu'un **souhait de déplacement** et des **événements** (a pris 1 unité, a déposé 1 unité) |
| `player/workers.js` **(nouveau)** | La couche impure. Draine `brood.workersAvailable`, fait naître par `spawnEntity()`, avance par **`updateEntity()` — le chemin commun du tour 12**, pas un second contrôleur —, construit mesh et contour, dépose dans la vraie réserve |
| `player/resources.js` | Ajout de `nearestNode(x, z)` : « vers quoi marcher », question distincte de `nodeInReach()` qui répond « suis-je déjà dessus » |
| `player/index.js` | Le câblage : `createWorkerSwarm()`, `spawnFromBrood()` après `updateBrood()`, la mise à jour dans la boucle, `dispose()` |

**Tests : 113 → 145, 0 échec.** `npx vite build` passe (2,38 s). Je les ai
relancés moi-même après chaque passe de l'agent, pas seulement lus dans son
rapport. Validé **en négatif cinq fois** : constante recopiée à la place de
`node.r + bodyR*0.6` → 2 échecs ; `spawnFromBrood` qui spawne `n*2` → 4 échecs ;
drain de `workersAvailable` supprimé → 3 ; dépôt créditant 2 unités au lieu
d'1 → 2 ; et le test d'équivalence de `nearestNode` est tombé tout seul,
en cours de round, sur une version intermédiaire du correctif ci-dessous — il a
fait son travail sans qu'on ait à le provoquer. 145/0 re-constaté après chaque
restauration.

**Arbitrages pris pendant le round :**

1. **`nearestNode()` ne devait surtout pas interroger l'index à rayon fixe.**
   La première livraison appelait `worldIndex.nearest(x, z, 2000, …)`. Or
   `spatialIndex.nearest()` **ne cherche pas par anneaux croissants** : il
   calcule la boîte de cellules qui couvre le rayon et la balaie entière. À
   2000 unités avec une cellule de 12, c'est de l'ordre de **10⁵ cellules
   visitées pour trouver un nœud parmi 145** — donc *plus cher que le balayage
   linéaire que le tour 11 avait justement supprimé*. Trouvé à la relecture, pas
   par un test (aucun ne mesurait le coût), et renvoyé à l'agent. Remplacé par
   une **recherche à rayon croissant** : 32 unités d'abord (l'espacement moyen
   réel des ~145 nœuds sur les 398×250 du pré), doublé tant que rien n'est
   trouvé, plafonné à 600 (diagonale de `LAWN_BOUNDS` ≈ 470, avec marge). C'est
   exact : `nearest()` rendant le minimum sur tout le rayon, le premier rayon
   qui répond rend forcément le vrai plus proche global. Cas courant : **49
   cellules** au lieu de ~10⁵. Les deux nombres sont annotés contre la densité
   réelle des nœuds et contre `LAWN_BOUNDS` — piège n°6 appliqué à un rayon de
   recherche plutôt qu'à un corps.
2. **Une butineuse latche son nœud cible** (même raison que `harvest.js`) :
   sans ça elle oscillerait entre deux nœuds proches et ne marcherait jamais.
3. **Dispersion déterministe à la naissance (spirale à angle d'or), pas
   `Math.random()`.** Une couvée entière éclôt sur la même image ; le tirage
   aléatoire rendait un test instable et n'éparpillait pas mieux.
4. **`controlled: true` pour une IA**, contre la lettre de l'en-tête de
   `core/entities.js`. Le code ne teste que `entity.controlled && drive` : une
   ouvrière est le même contrôleur avec un `drive` venu d'une machine à états au
   lieu d'un clavier. L'alternative propre (un type de `goal` « forage » dans
   `core/entities.js`) sort du périmètre de fichiers de l'agent. Documenté en
   tête de `workers.js` pour que le prochain lecteur n'y voie pas un oubli.

### Ce qui est cassé ou en attente

- **#37 n'est pas fermé, et il s'en faut de la capture.** Son critère de fin est
  « une capture de la reine et de ses premières ouvrières sur la pelouse, et une
  ouvrière qui rapporte une ressource au dépôt sans intervention du joueur ».
  Le chemin de code est entier et prouvé par 145 tests dont la conservation des
  unités de bout en bout — **mais aucune ouvrière n'a jamais été vue marcher.**
- **Le ticket #36 reste ouvert pour la même raison**, et ce round le rapproche :
  faire naître des ouvrières ne demande plus de câblage jetable dans `main.js`,
  il suffit désormais de **jouer jusqu'à la première éclosion** (pondre, attendre
  `EGG_INCUBATION_SECONDS = 25` s). Les deux tickets se ferment sur la même
  session avec écran.
- **Pas d'évitement mutuel entre ouvrières.** Elles ne se traversent pas le
  décor (`resolveDecorCollision`) mais se traversent entre elles. L'index les
  connaît déjà sous le type `'ant'` : c'est prêt, ce n'est pas branché. À juger
  à l'œil avant de décider si ça vaut un ticket.
- **Pas de HUD pour les ouvrières** (aucun compteur de la population écloses),
  délibérément hors périmètre ce round.
- Chaque éclosion produit une `WORKER` et rien d'autre : le choix de caste est
  #38, frontière documentée depuis `brood.js` au tour 10.
- Le commentaire d'en-tête de `world/index.js` ment toujours (« deliberately not
  wired into the player controller »). Une ligne, trois tours que je la note.

### À juger à l'œil, sur une machine avec GPU

Par ordre d'importance :

1. **Le critère de fin de #37** : jouer jusqu'à la première éclosion et regarder
   une ouvrière sortir, marcher jusqu'à un nœud, récolter et revenir déposer
   toute seule. Capturer. C'est ce qui ferme le ticket — et #36 avec, puisque
   les ouvrières visibles sont exactement ce qu'il réclamait.
2. **La dispersion à la naissance** : une couvée entière éclôt sur la même
   image, dispersée en spirale de 4,5 à 15 unités autour de la bouche du nid.
   Ni tas, ni essaim trop large — ça ne se juge qu'à l'œil.
3. **La teinte par instance et le contour sur un vrai mélange** reine + N
   ouvrières, jamais vus depuis le tour 12 : c'est maintenant le cas normal.
4. **Le ressenti de la reine** : elle passe par le même `updateEntity()` que les
   ouvrières, et personne n'a mesuré que le clavier répond pareil.
5. Tout l'arriéré des tours 10-12 : la ponte, la bascule crépuscule → jour à la
   remontée, la fondation (défaut 1). Le lien de test marche depuis le tour 12,
   ils sont atteignables.

### Quoi faire ensuite

1. **Une session avec écran qui ferme #37 et #36 d'un coup** : jouer la boucle
   entière — récolter, fonder, pondre, attendre l'éclosion, ressortir — et
   capturer. Cinq tickets de suite se sont arrêtés faute de cet œil.
2. **#38 — le choix de caste à la ponte.** `brood.js` et `workers.js` ont tous
   deux la frontière déjà tracée ; c'est le prochain morceau de logique pure,
   donc le prochain faisable de nuit.
3. Corriger l'en-tête menteur de `world/index.js` (une ligne).
4. Le reste de la liste ci-dessous est inchangé.

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

## Prochaines étapes

1. **Voir la fondation** (défaut 1). Rejouer la boucle de bout en bout et
   capturer le moment. Tant qu'il n'est pas vu, il n'est pas livré.
2. ~~**#6 — la ponte**~~ — **fait au tour 10**, y compris la bascule déplacée
   à la première ponte (§7a). Reste à la **voir**. ~~exporter `MAX_BROOD`~~ —
   fait au tour 11.
2 bis. ~~**#35 — l'index spatial**~~ — **fait au tour 11**, sauf le chiffre de
   temps par image qui le fermera. Il lève la dépendance de #36.
2 ter. ~~**#36 — la couche d'entités**~~ — **faite au tour 12**, logique *et*
   rendu instancié. ~~Ce qui reste pour le fermer est visuel : faire naître cinq
   ouvrières dans `main.js`~~ — plus besoin de câblage jetable depuis le tour 13 :
   il suffit de jouer jusqu'à la première éclosion. Reste à **regarder et
   capturer**.
2 quater. ~~**#37 — l'éclosion donne des ouvrières**~~ — **faite au tour 13**,
   machine à états de butineuse et naissance branchée sur
   `brood.workersAvailable`. Reste sa capture, la même session que #36. Puis
   **#38**, le choix de caste, dont la frontière est tracée des deux côtés.
3. **La colonie abandonnée** — remettre le nid pré-construit sur la carte comme
   petit nid mort à trouver : entrée effondrée avec du relief, champignons
   toujours luminescents (le champignon survit à la colonie). Corrige aussi le
   défaut 2 au passage, puisque la bouche devient un éboulis et non un trou.
4. **Lisibilité de la reine** (défaut 3) — mesurer, puis chiffrer.
5. Bloom sélectif (défaut 8), points 4-7 de la spec des brins (défaut 7).
6. **#34 — mode macro**, le nid en coupe vue de côté.

## Où sont les choses

| Je cherche… | C'est dans… |
|---|---|
| La hauteur du sol, le relief, la rivière | `world/terrain.js` — `groundY()` est la **seule** source de vérité, dehors et dedans |
| Où le joueur peut marcher | `containSurface()` (dehors), `containUnderground()` (dedans) |
| Ce que vaut un sol | `world/terrain.js` `sampleTerrain()` → `player/siteQuality.js` traduit en verdict de jeu |
| Les ressources | `world/resources.js` (données + mesh), `player/harvest.js` (ce qu'on en fait) |
| Ce que fait une ouvrière toute seule | `player/forage.js` (la machine à états, module pur) et `player/workers.js` (la naissance, le mesh, les vraies requêtes monde) |
| Creuser le nid | `world/founding.js` — `canFoundAt` / `foundNest` / `populateNest` |
| Le ciel, le soleil, la bascule prologue→colonie | `world/sun.js` (`RIG_PROLOGUE`, `RIG_FOUNDED`, `setFoundedMix`) |
| Les tailles/vitesses de la fourmi | `player/avatar.js` — un second corps = une entrée de plus, pas un contrôleur |
| Les textures | `world/texturing.js` (triplanaire), `scripts/generate-procedural-textures.mjs` (génération) |
| L'éclairage du nid | `world/lighting.js` — `applyNestShading()` s'applique à toute la scène depuis `main.js` |
| Qu'y a-t-il près d'ici ? | `core/spatialIndex.js` (la grille, module pur) et `worldIndex` exporté par `world/index.js`. **Aucun code ne rebalaie un tableau entier par image** — voir `design/api-monde-gameplay.md` §6 |
| Le contrat monde ↔ gameplay | `design/api-monde-gameplay.md` — **fait autorité, aucun agent ne le modifie** (§6 ajouté par l'orchestrateur au tour 11, comme l'exige #35) |
| Tester une constante de taille sans écran | `scripts/test-logic.mjs` — voir son en-tête ; à étendre plutôt qu'à dupliquer si une autre échelle se retrouve un jour fausse |

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
- **Les harnais de vérification graphiques :** `game/scripts/verify-terrain.mjs`
  (12 vues + perf + mémoire), `verify-room-access.mjs` (accès aux 3 salles),
  `verify-textures.mjs`. Chromium **doit** être lancé avec
  `--use-gl=angle --use-angle=d3d11`, sinon on mesure le rasteriseur logiciel —
  ce qui les rend inutilisables sur une machine sans GPU (ex. VPS ARM
  d'un round nocturne).
- **Le harnais non graphique :** `game/scripts/test-logic.mjs`
  (`npm run test:logic`) — géométrie et confinement de `world/**` en pur Node,
  sans Chromium ni GPU. Ne juge rien à l'œil (DA, lisibilité, aplomb d'un
  seam) ; attrape seulement les incohérences numériques du genre « une
  créature ne passe plus dans un tunnel ». Voir son en-tête pour comment il
  importe les vrais modules de production sans DOM.
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
| 13 | **L'éclosion peuple le monde** (#37) : `player/forage.js` pur (SEEK → HARVEST → RETURN → DEPOSIT), `player/workers.js` qui draine `brood.workersAvailable` et fait naître par le chemin commun du tour 12. Une ouvrière récolte et dépose dans la réserve du joueur sans intervention. `nearestNode()` corrigé d'un rayon fixe de 2000 (≈10⁵ cellules balayées, pire que le balayage que le tour 11 avait supprimé) vers une recherche à rayon croissant : 49 cellules dans le cas courant. Tests 113 → 145. Round nocturne sur VPS sans GPU, **aucune ouvrière n'a été vue marcher** | *(voir la note de round)* |
| 12 | **La couche d'entités** (#36, les deux volets) : `core/entities.js` pur et sérialisable, `player/entities.js` avec `updateEntity()` unique — **le joueur passe par le même chemin que les PNJ**. Rendu instancié : 72–74 draw calls par fourmi → **4, constants quel que soit l'effectif**, matériaux 4–6 → 2. Tests 86 → 113. `dist/` sorti du `.gitignore` : le lien de test, page blanche depuis le tour 10, est réparé. Round nocturne sur VPS sans GPU, **aucune fourmi n'a été vue marcher** | *(voir la note de round)* |
| 11 | **L'index spatial** (#35) : `core/spatialIndex.js` pur, grille uniforme partagée de 1862 objets, cellule 12 u. Les 5 balayages par image rebranchés (`nearestClimbable` ×13, collision décor ×43). Second champ d'herbe du gameplay supprimé, `MAX_BROOD` enfin exporté. Tests 38 → 86, moitié d'équivalence contre les balayages d'avant. Round nocturne sur VPS sans GPU, rien de vu | *(voir la note de round)* |
| 10 | **La ponte** (#6 §2) : `player/brood.js` pur, coût en réserve, incubation, capacité de couvoir, HUD, touche `P`. Bascule crépuscule → jour déplacée du coup de pelle à la **première ponte** (§7a) : `main.js` cesse de piloter `setFoundedMix()`. Tests 15 → 38. Round nocturne sur VPS sans GPU, rien de vu | *(voir la note de round)* |
| 9 | Harnais de tests non graphiques (`test-logic.mjs`) — géométrie/confinement de `world/**` vérifiés en pur Node, sans GPU. Round nocturne sur VPS sans GPU, aucun rendu touché | *(non commité par l'agent — voir note de round ci-dessus)* |
| 8 | Commandes affichées, jauge de maintien, anneau de cible ; alésage du nid mis à l'échelle de la reine ; nid pré-construit retiré du jeu | `a5860e4`, `a7bcd35` |
| 7 | Ombres portées de l'herbe, contours sur les créatures, prologue sorti de la sous-exposition | `ef63596` |
| 6 | Boucle de récolte, portage, fondation à l'exécution ; ressources et ombre côté monde ; herbe affinée ; sol corrigé | `6ca9546`, `379bd0e`, `f5f9c5a`, `24a1bc3`, `9a0faec` |
| 5 | Carte de surface écrite à la main, rivière, horizon ; textures branchées ; reine fondatrice jouable ; lecture du sol | `dea42af`, `a277ef3` |
| 5 (DA) | Ambiance du prologue, bark v3, chitin v2, dégradés de ciel | `b45ed22`, `28eb5f5` |
| 4 | Charte de stylisation + 6 textures ; module triplanaire ; collision décor ; caméra sous terre | `7033614`, `4fec981`, `5a66a88` |
| 3 | Ligne de vue dégagée dans l'herbe, caméra libérée sous terre | `a829cdc` |
| 2 | Intérieur du nid + rig de lumières locales | `75f2ba9` |
| 1 | Migration Three.js/Vite, escalade des tiges | `06c94cd` |
