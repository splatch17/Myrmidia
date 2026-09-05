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

### 4bis. La chambre qui se peuple (#12) — ajout au contrat, round 8

```
getFoundedNest() -> { x, z, mouth: {x,y,z,r}, chamber: {x,y,z,ceilY,r},
                      brood: number, sealed: boolean, ... } | null
populateNest(n)  -> number   // révèle n clutchs, borné à MAX_BROOD, renvoie
                             // le compte réellement posé
sealNest(sealed) -> void     // ferme/rouvre le puits froid (ambiance §2c plan 3)
MAX_BROOD        -> number   // capacité du couvoir, 6 aujourd'hui
```

Le nid existe en coquille vide dès `foundNest()` ; `populateNest(n)` ne
reconstruit rien, il révèle ce qui est déjà bâti et caché. `nest.brood` est
la seule source de vérité sur combien de pontes ont eu lieu — `player/**` ne
garde pas de compteur parallèle, il lit celui-ci.

---

## 5. Ce que `player/**` livre en face (round 6)

Récolte et fondation. Rien de tout cela n'est appelé depuis `world/**` :
le monde ne connaît pas le joueur, le joueur appelle le monde. La dépendance
va dans un seul sens, et c'est ce qui permet de tester le monde sans
contrôleur.

### 5bis. La ponte (`player/ponte.js`, round 8) — première tranche

```
canPonte(ant, stock) -> { ok: boolean, reason?: string }
layEgg()             -> { ok: boolean, laid: number }
broodCount()         -> number
```

Coûte des ressources stockées (la même réserve que la fondation,
`harvest.js`), tenue à la **bouche** du nid (`nest.mouth`) et non à la
chambre : marcher jusqu'à la chambre creusée à l'exécution est
`PROGRESS.md` défaut #1, jamais vu fonctionner, et cette tranche ne veut pas
en dépendre. Pas d'incubation, pas d'éclosion en ouvrière — la première
ponte ne fait aujourd'hui que révéler la clutch suivante (`populateNest`) et
déclencher la bascule crépuscule → jour (`design/ressources-et-fondation.md`
§7a : c'est la ponte qui l'ouvre, pas le coup de pelle). `main.js` lit
`getFoundedNest().brood > 0` pour ça, plus `nestOrigin()` seul.
