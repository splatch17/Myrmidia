# Contrat d'interface monde ↔ gameplay

**Ce fichier fait autorité. Aucun agent ne le modifie** — il est écrit par
l'intégration, en amont, et c'est le seul point d'accord entre `world/**`
(Atta) et `player/**` (Cataglyphis). Si un nom d'ici ne convient pas,
la demande de changement remonte à l'intégration ; elle ne se règle pas en
inventant un synonyme de son côté.

## Pourquoi ce fichier existe

Au round 5, `player/siteQuality.js` a été écrit contre `soilAt()` renvoyant
des noms français et `waterDistance()`. `world/terrain.js` a livré des noms
anglais et `distanceToWater()`. Les deux fichiers étaient corrects, bien
commentés, et testés séparément. Ensemble ils ne se parlaient pas : chaque
facteur retombait sur son repli « supposé » et le HUD affichait la même chose
partout sur la carte. Personne ne l'a vu, parce qu'il n'y avait **aucune
erreur** — juste une lecture silencieusement fausse.

Le coût n'était pas dans le code. Il était dans le fait que les deux moitiés
d'une même feature aient été spécifiées deux fois, séparément.

## Règle de consommation

`player/**` lit ces exports **à travers une copie de l'espace de noms**
(`const W = { ...world };`), jamais par accès direct `world.foo`. Un export
qui n'existe pas encore vaut alors `undefined`, ce qui est un cas gérable,
au lieu d'être une erreur de résolution du bundler. Chaque sonde a un repli
**honnête** : elle marque sa valeur comme approximée plutôt que d'inventer
un chiffre. C'est la discipline déjà en place dans `siteQuality.js`, elle
reste la règle.

---

## 1. Terrain — livré (round 5), stable

```
groundY(x, z)            -> number     hauteur du sol, dehors et dedans
groundNormal(x, z)       -> [x,y,z]    normale unitaire
groundSlope(x, z)        -> number     tan(angle) : 0 plat, 1 = 45°
soilAt(x, z)             -> { kind, moss, slope, depth, toWater }
                            kind ∈ 'water' | 'sand' | 'rock' | 'moss' | 'soil'
sampleTerrain(x, z)      -> tout ce qui précède + `diggable: boolean`
waterDepthAt(x, z)       -> number     0 sur terre ferme
distanceToWater(x, z)    -> number     signé, positif côté sec
riverEdgeAt(z)           -> number     x de la ligne d'eau à cette profondeur
containSurface(x, z)     -> [x, z]     clamp dans la carte marchable
LAWN_BOUNDS, TERRAIN_BOUNDS, WATER_Y, RIVER
```

Les noms `kind` restent en anglais côté monde. La traduction en libellés de
jeu est une décision de design et vit dans `player/siteQuality.js`.

---

## 2. Ombre — à livrer par Atta (round 6)

```
shadeAt(x, z) -> number   0..1, 1 = totalement à l'ombre
```

Ferme le facteur `shade` de `siteQuality.js`, aujourd'hui approximé par un
proxy grossier (la canopée + les hautes herbes proches). Doit tenir compte du
relief : avec le soleil au ras, une crête projette loin, et c'est précisément
ce qui doit rendre le creux derrière la butte intéressant.

Contrainte : appelé jusqu'à 4×/s depuis le HUD, et potentiellement en boucle
pour une future évaluation de plusieurs sites. Analytique, pas un lancer de
rayon dans la scène.

---

## 3. Ressources — à livrer par Atta (round 6)

Les nœuds sont **des données du monde**, pas du gameplay : ils ont une
position, un mesh, et ils vivent dans `world/**`. Ce qu'on en fait est du
gameplay et vit dans `player/**`.

```
RESOURCE_NODES -> Array<{
  id:     number,        // stable, sert de clé — jamais réattribué
  x, z:   number,
  kind:   'graine' | 'brindille' | 'miellat',
  amount: number,        // unités restantes, décroît
  r:      number,        // rayon d'interaction, en unités monde
}>

harvestNode(id, qty) -> number   // quantité réellement retirée (0 si épuisé
                                 // ou id inconnu). Le monde met à jour le
                                 // visuel du nœud lui-même.
```

`RESOURCE_NODES` est un **tableau vivant** : `amount` change, et un nœud épuisé
reste dans le tableau avec `amount: 0` plutôt que d'être retiré — sinon tout
index mémorisé ailleurs se décale sous les pieds de son propriétaire.

Placement : semé une fois au démarrage, pas de repop pour l'instant. Densité
plus forte près de l'arbre et dans le creux, plus faible sur les crêtes nues
et nulle dans l'eau — de sorte que le facteur `food` de `siteQuality.js`
mesure enfin quelque chose de réel et que les sites cessent tous de se valoir.

---

## 4. Fondation du nid — à livrer par Atta (round 6)

```
canFoundAt(x, z)  -> { ok: boolean, reason?: string }
foundNest(x, z)   -> { ok: boolean, reason?: string }
nestOrigin()      -> { x, z } | null    // null tant que rien n'est fondé
```

`foundNest()` creuse la **première chambre**, à l'exécution, à l'endroit
demandé. Pas la galerie complète, pas les trois salles annexes : une chambre
et son puits d'accès. Le nid actuel construit au démarrage devient l'état
« déjà fondé » et n'est plus la scène de départ.

`canFoundAt()` répond sans rien construire, pour que le HUD puisse le demander
en continu. Les deux doivent donner le **même verdict** pour les mêmes
coordonnées : `foundNest()` appelle `canFoundAt()`, il ne redécide pas.

`reason` est une chaîne technique stable (`'rock'`, `'water'`, `'slope'`,
`'already-founded'`), pas une phrase pour le joueur. La phrase est du ressort
de `player/**`, comme pour `soilAt`.

---

## 5. Ce que `player/**` livre en face (round 6)

Récolte et fondation. Rien de tout cela n'est appelé depuis `world/**` :
le monde ne connaît pas le joueur, le joueur appelle le monde. La dépendance
va dans un seul sens, et c'est ce qui permet de tester le monde sans
contrôleur.

---

## 6. Index spatial partagé — livré (round 11, #35)

`world/index.js` exporte `worldIndex`, **une** grille uniforme
(`core/spatialIndex.js`, cellule de 12 unités) contenant tous les objets
statiques de la carte dont `player/**` demande la proximité. Elle est créée
vide à l'import du module et remplie par `createWorld()` : toute requête a
donc lieu dans la boucle d'image, après la construction.

`world/index.js` exporte aussi `getGrassFootprints()`, le tableau des brins
réellement rendus. C'est la **seule** source des brins côté gameplay : le
second `createGrassField()` que `climb.js` construisait pour lui-même a été
supprimé, parce que deux champs déterministes identiques désalignent les `id`
de l'index sans lever la moindre erreur dès que l'un des deux appels change de
graine ou d'effectif.

**Types et signification de `id`** — ces quatre tableaux ne sont ni réordonnés
ni compactés : un index reste valide pour toute la partie.

| type | `id` | `extent` |
|---|---|---|
| `'grass'` | index dans `getGrassFootprints()` | demi-largeur `w` |
| `'mushroom'` | index dans `MUSHROOMS` | `mushroomCollideR(m)` |
| `'rock'` | index dans `ROCKS` | `r` |
| `'resource'` | index dans `RESOURCE_NODES` | rayon de cueillette `n.r` |

**Ce que l'index ne contient pas :** ni maillage, ni objet vivant, ni
fermeture — seulement `(type, id, x, z, extent)`. C'est ce qui le rend
sérialisable et ce qui permet de le tester en pur Node.

**Invalidation.** L'épuisement d'un nœud (`amount → 0`) et `foundNest()`
**n'invalident rien** : un nœud vide garde sa place et sa position, les
appelants filtrent sur `amount` comme avant. Tout objet qui bouge, apparaît ou
disparaît appelle `worldIndex.move/insert/remove` pour **sa seule entrée**,
jamais une reconstruction. C'est le chemin prévu pour les entités de #36.

**Requêtes** — `type` accepte une chaîne, un tableau de chaînes ou `null`
(= tous). Les callbacks reçoivent `(id, dist, x, z, extent)`.

```
nearest(x, z, radius, type, accept?)       nearestWithin(x, z, slack, type, accept?)
forEachInRadius(x, z, radius, type, fn)    forEachWithin(x, z, slack, type, fn)
countInRadius(x, z, radius, type, accept?) collectInRadius(x, z, radius, type, out?)
maxExtent(type?)
```

`*Within` teste `dist <= extent + slack`, c'est-à-dire la portée propre de
l'objet ; `*InRadius` teste la distance au centre. **Les bornes de l'index
sont inclusives, et plusieurs balayages d'origine étaient stricts** : un
appelant qui veut `d < r` doit le dire dans son prédicat `accept`. C'est le
piège n°1 du rebranchement, il ne se voit sur aucune capture.

**Si un consommateur substitue son propre rayon à celui de l'entrée** — c'est
le cas de `decorCollision.js`, dont `fittedRadius()` peut grossir un chapeau
de champignon bien au-delà du `mushroomCollideR()` stocké — il interroge par
distance au centre avec sa propre borne. Il ne pousse **pas** son rayon dans
l'index : un rayon ajusté dépend du corps qui marche, et `maxExtent` ne
décroît jamais, donc l'écrire dans une structure partagée le ferait grossir
définitivement pour toutes les autres fourmis.

---

## 7. Creusement à l'exécution — à livrer par Atta (round 15, #57)

Étape 2/4 vers « voir le premier tunnel se creuser et pouvoir y entrer ».
Écrit **avant** distribution, comme le §6 au round 11. Aucun agent ne le
modifie : si une signature ci-dessous se révèle impraticable, l'agent le
signale dans son rapport et l'orchestrateur tranche.

`world/founding.js` étend le nid **fondé** (celui que `foundNest()` creuse à
l'exécution), pas la galerie pré-construite de `world/underground.js`, qui est
hors jeu depuis le round 8 (`SHOW_PREBUILT_NEST = false`).

```
DIG_SITES_MAX                -> number   chantiers possibles (constante)
DIG_GALLERY_LEN              -> number   longueur d'une galerie complète, en unités monde
DIG_GALLERY_R                -> number   demi-largeur creusée, en unités monde

planDigSite(i)               -> site | null          // pur, ne construit rien
digSites()                   -> site[]               // les chantiers ouverts
openDigSite(i)               -> { ok, reason?, site? }
advanceDig(id, dFraction)    -> { ok, progress, done, reason? }
digProgress(id)              -> 0..1                 // 0 si l'id est inconnu
containFoundedNest(x, z)     -> [x, z] | null
```

Un **site** est un objet nu, sérialisable, sans maillage ni fermeture :

```
{ id: string, mouth: { x, y, z }, dir: { x, z }, length: number,
  r: number, progress: number }
```

- `dir` est **horizontal et normé** ; la galerie part de `mouth` (un point de
  la paroi de la chambre fondée, au niveau du sol) et s'enfonce dans cette
  direction. `mouth` et `dir` suffisent à un appelant pour savoir **où aller
  se poster** : `player/**` ne recalcule jamais la géométrie du nid.
- `planDigSite(i)` est **pur et déterministe** : même nid, même `i`, même
  réponse, aucun `Math.random()`. `null` si rien n'est fondé ou si `i` sort de
  `[0, DIG_SITES_MAX)`.
- `openDigSite(i)` ouvre le chantier à `progress = 0`. Ré-ouvrir un chantier
  déjà ouvert rend le même site sans le réinitialiser (`ok: true`). `reason`
  est une chaîne technique stable comme au §4 (`'not-founded'`,
  `'bad-index'`), jamais une phrase pour le joueur.
- `advanceDig(id, dFraction)` ajoute une **fraction de galerie** (sans unité,
  bornée à `[0, 1]` au total) et rend l'état après coup. `done` est vrai
  quand `progress` atteint 1. Additif par construction : deux creuseuses qui
  appellent la même image avancent deux fois plus vite, et c'est tout le sens
  de la caste.

**Où vit la vitesse de creusement.** Pas ici. La cadence est une propriété du
corps qui creuse, donc une valeur de `player/avatar.js` exprimée en **unités
monde par seconde** ; l'appelant la convertit avec la longueur que le monde
publie : `dFraction = digSpeed * dt / DIG_GALLERY_LEN`. Aucun des deux côtés
ne recopie la constante de l'autre — c'est le piège n°6 de `PROGRESS.md`
appliqué à une durée plutôt qu'à une taille.

**`containFoundedNest(x, z)`** est le jumeau de `containUnderground()` pour le
nid fondé : il rend le point légal le plus proche dans le volume réellement
creusé — la chambre, plus chaque galerie ouverte **sur sa longueur creusée
seulement** (`progress * length`). Ce qui n'est pas creusé n'est pas
marchable, et un front de taille est un mur. Il rend `null` tant que rien
n'est fondé, pour que l'appelant distingue « pas de nid » de « clampé ».

**Ce que ce contrat ne couvre pas, volontairement :** le branchement de
`containFoundedNest()` dans `player/movement.js` (étape 3/4, ça se juge à
l'écran), le coût en ressources, et le décor de la galerie.
