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

## 6. Marcher dans le nid — à livrer (round 15, #40 + #41)

C'est la moitié de contrat la plus risquée écrite jusqu'ici, parce que les deux
côtés touchent **la même fonction** : `groundY()`, que `terrain.js` déclare
explicitement « la seule source de vérité pour la hauteur du sol, dehors et
dedans ». Le joueur ne peut pas marcher dans une galerie tant que `groundY()`
répond « la pelouse » pour un point situé vingt unités sous elle.

### Ce que `world/**` livre

```
groundY(x, z)            -> number
```
**Signature inchangée.** Elle répond désormais le sol du nid quand (x, z) tombe
dans l'empreinte du nid creusé, et la pelouse partout ailleurs. Aucun appelant
existant ne change : le contrôleur, les pattes IK, la caméra et l'herbe
l'appellent déjà et suivront.

```
nestFootprint()  -> { contains(x, z), floorY(x, z), headroom(x, z) } | null
```
`null` tant que rien n'est creusé. Sert à `player/**` pour savoir qu'il est
**dedans** sans redériver la géométrie — c'est la question « suis-je sous
terre », et une seconde réponse à cette question est exactement le genre de
divergence que ce document existe pour empêcher.

```
descentPath()    -> [{x, y, z}, ...] | null
```
La ligne médiane praticable de la bouche jusqu'à la chambre. Publiée même si la
descente devient une rampe que le contrôleur suit tout seul : c'est ce qui
permet à la caméra, aux creuseuses et à une future ouvrière d'emprunter le même
chemin que la reine sans que chacune se le recalcule.

### Contrainte de conception, arbitrée

La descente doit être **franchissable par le contrôleur qui suit le sol**. La
séquence de ponte est scriptée sur ~14 secondes précisément parce qu'un puits
vertical ne l'est pas, et ce scriptage est déjà signalé comme non répétable
(`PROGRESS.md`). Donc : **une rampe, pas un puits.** Le puits actuel est
`AXIS_TILT = 0.22` sur `SHAFT_LEN = 15` — quasi vertical. La galerie, elle, a
déjà été creusée **à plat** au round 13 pour ne pas aggraver ce problème.

Si la rampe change la silhouette du cratère vue de la pelouse, c'est acceptable
et même souhaitable : une entrée qu'on voit être une entrée vaut mieux qu'un
trou.

### Ce que `player/**` livre en face

Rien de neuf côté monde. Le contrôleur cesse de supposer « dehors » :

- la marche suit `groundY()` sans cas particulier ;
- la caméra sous terre existe déjà (`fittedBoom`, #27) et n'est pas à refaire ;
- la séquence scriptée de `laying.js` doit **rester jouable si on la coupe** :
  une fois la descente marchable, elle devient une mise en scène facultative,
  pas la seule façon d'arriver en bas.

### Critère de fin commun

Une capture de la reine **dans la galerie**, arrivée en marchant, pilotée par
le vrai pipeline d'entrée. Et une autre d'elle ressortie. Ni l'une ni l'autre
ne compte si la position a été écrite dans l'état.

---

## 7. Creuser : salles, liaisons, fronts de taille — round 16 (#48, #51, #52)

Écrit **avant** l'implémentation, comme les six sections précédentes, et pour
la même raison : les deux moitiés touchent la même fonction. Le round 15 a
montré ce que coûte l'inverse — un prédicat côté joueur calibré contre un
`groundY()` que le monde avait changé sous lui, et une paroi qui devenait une
porte sans que rien ne lève d'erreur.

### Ce qui change de forme

La « première galerie » du round 13 était un cas particulier : un tube unique,
codé en dur, avec ses propres tests d'appartenance. Le porteur demande une
**salle** au bout du premier creusement, puis d'autres tunnels creusés depuis
elle. Un deuxième cas particulier serait le troisième fichier à dire où est le
sol, donc l'excavation devient une **liste**, dès maintenant :

```
rooms : [{ id, x, z, r, wall, roof }]     salle 0 = la chambre de fondation
links : [{ id, ax, az, bx, bz, hw, roof }]  couloir droit entre deux salles
faces : [{ id, x, z, y, nx, nz, needed, worked, opens }]
```

`chamber` reste exposé comme alias de `rooms[0]` : c'est ce que lisent déjà
`nest.js`, la caméra et les harnais, et le contrat n'a pas à se casser pour un
refactor interne.

### Ce que `world/**` livre

```
nestFootprint()   -> { contains(x,z), floorY(x,z), headroom(x,z) } | null
                     (§6, inchangé — il couvre maintenant les salles et les
                      liaisons de la liste, ce qui ne change pas sa signature)
digFaces()        -> [{ id, x, y, z, nx, nz, needed, worked, opens }]
                     les fronts de taille ouverts. `nx, nz` = la normale
                     horizontale sortant de la paroi, pour qu'un appelant sache
                     de quel côté se tenir sans re-dériver la géométrie.
advanceDigFace(id, antSeconds) -> { worked, needed, done, opened }
                     avance UN front. `done` la première fois seulement ;
                     idempotent au-delà, parce que l'appelant est une jauge et
                     les jauges dépassent.
```

**Règle : `player/**` ne creuse pas.** Il compte des fourmis-secondes et les
verse dans `advanceDigFace()`. Où la salle apparaît, quelle forme elle a et ce
qu'elle ouvre ensuite sont des décisions du monde. C'est la même direction de
dépendance que §4 (`foundNest`) et pour la même raison : un harnais doit
pouvoir creuser tout le nid sans qu'aucune fourmi existe.

### Ce que `player/**` livre en face

- Les fouisseuses (`digger`, cf. #50) vont au front de taille **ouvert le plus
  proche**, pas à la bouche du nid. `stepDigger()` cesse de viser
  `nestOrigin()`.
- Le HUD dessine la jauge **à la position du front**, projetée à l'écran. Elle
  n'existe que tant qu'`advanceDigFace` progresse.
- L'état reste sérialisable : un front est un identifiant et des nombres.

### Contrainte de conception, arbitrée

**On arrive en bas vite.** Le porteur : *« on peut au départ arriver simplement
en bas devant de la terre à creuser »*. La descente reste marchable — c'est
l'acquis du round 15 — mais elle est courte, et **le premier front de taille
est en vue depuis le pied de la rampe**. Une entrée qui se négocie n'est pas
une entrée.

**Les parois glissent.** Aucune surface du jeu n'arrête net sauf le nid ; c'est
un défaut, pas une règle (#49).

### Critère de fin commun

Une capture de la jauge circulaire en cours au front de taille, et une du
**hall ouvert** avec la reine dedans, arrivée à pied. Plus un harnais qui longe
les parois — pas la ligne centrale — et ressort quand même.

---

## 8. Creuser depuis le hall : le nid pousse — round 19 (#62, #59)

Écrit **avant** la répartition, comme les sept précédentes. Le round 16 a livré
un front de taille : celui que la reine trouve au pied de la rampe, et qui
ouvre le hall. Le hall est resté nu. Cette section dit comment il cesse de
l'être, sans décider à la place du porteur ce que coûte un tunnel (#63) : les
nombres ci-dessous sont des **valeurs de départ**, pas un arbitrage.

### Ce qui change de forme

Rien, et c'est le but : `rooms` / `links` / `faces` (§7) sont déjà des listes,
`digFaces()` et `advanceDigFace()` ne changent pas de signature. Ce qui change
est **quand** le monde ajoute des fronts, et **comment il choisit où ils
mènent**.

### Ce que `world/**` livre

```
digFaces()        -> inchangé. Contient désormais, dès que le hall s'ouvre,
                     2 ou 3 fronts posés sur SES parois.
advanceDigFace(id, antSeconds) -> inchangé. `opened` nomme la salle ouverte,
                     laquelle porte à son tour ses propres fronts.
```

**Une direction est jugée sur tout son parcours, pas sur son point d'arrivée
(#59).** Un front n'est publié que si le tunnel qu'il ouvrira *et* la salle au
bout restent sous terre sur **toute leur longueur** : le toit construit doit
rester sous la pelouse, avec la même marge de couverture que le dôme de la
chambre, échantillonnée le long du parcours et non à son extrémité. Un site
qui ne passe pas ce test n'est pas corrigé après coup : il n'est pas proposé.
C'est la même règle que `canFoundAt()` — refuser avant, plutôt que réparer
après.

**Valeurs de départ, en fourmis-secondes** (la cadence de test les divise par
5) : le premier front, celui du hall, reste à 75. Les fronts posés sur les
parois du hall valent 120. Ceux de la génération suivante, 180. Elles vivent
dans `world/founding.js`, en une seule constante par génération, pour qu'un
arbitrage de #63 soit une ligne à changer et pas une chasse.

**Une profondeur par génération.** Le nid descend : chaque salle ouverte depuis
une autre est posée un cran plus bas, jamais plus haut. C'est ce qui garde le
test de couverture satisfiable quand la pelouse remonte.

### Ce que `player/**` livre en face

- Les fouisseuses visent le front **ouvert le plus proche** (§7, inchangé), ce
  qui les répartit d'elles-mêmes quand il y en a plusieurs.
- Le menu de la reine (`C`) liste les chantiers ouverts : un nom, l'avancement,
  le nombre de fouisseuses dessus. Lire, pas piloter — l'affectation manuelle
  attend #63.
- Le HUD ne dessine la jauge que pour le front **regardé**, sinon trois jauges
  se recouvrent à l'écran.

### Critère de fin commun

Une capture du hall avec ses fronts de taille visibles sur les parois, une de
la deuxième salle ouverte avec la reine dedans arrivée à pied, et un harnais
qui creuse deux générations de suite sans qu'aucun toit ne perce la pelouse
(0 cellule ouverte, comme `verify-descent` le mesure déjà).

## 9. Décors : jardin et champignons du nid — round 22 (#80)

Ajouté par Atta avec le ticket, à la demande de l'intégrateur (« ajoute au
contrat si tu ajoutes une API »). Rien d'existant n'est renommé.

### Ce que `world/**` livre

```
ROCKS          -> inchangé de forme ({x, z, r}). Contient maintenant tout ce
                  que le jardin DESSINE : cailloux moussus, champignons
                  (tige seule si le chapeau passe au-dessus de la reine,
                  chapeau sinon), feuille morte (sa moitié relevée).
                  Les 42 cailloux invisibles de l'ancien nid pré-construit
                  en sont sortis : ils collisionnaient sans être dessinés.
                  Un décor recouvert par une fondation (fosse, déblais,
                  embouchure) est retiré de ROCKS ET de l'index spatial.
NEST_FUNGUS    -> nouveau. Les bouquets lumineux des salles creusées,
                  {x, z, r, y, room}, remplis quand une salle s'ouvre
                  (une salle sur deux, le hall d'abord). Vidé par
                  _resetFounding().
```

### Ce que `player/**` livre en face

- **Rien à faire pour le jardin** : `decorCollision.js` lit déjà `ROCKS` sur la
  pelouse.
- **À brancher pour le nid** : `forEachCollider()` sort tôt quand
  `insideNest(x, z)` est vrai, donc aucun collisionneur n'est testé dans le
  nid. `NEST_FUNGUS` doit y être parcouru (liste courte, balayage linéaire
  suffisant), avec le même rayon `r` que le monde publie. Les bouquets sont
  posés contre la paroi, loin des fronts et du couloir d'entrée : ils ne
  peuvent pas fermer un passage.

### Critère de fin commun

`scripts/verify-decor-80.mjs` : chaque décor du jardin est vu par
`__decorPenetration`, une reine lâchée dedans en ressort ; le hall porte un
bouquet contre sa paroi, à plus de 7 unités de tout front.

## 10. Mode macro : le nid en maquette — round 22 (#34, première tranche)

Ajouté par Atta avec le ticket, à la demande de l'intégrateur. Rien d'existant
n'est renommé ; `dugRooms()` gagne un champ.

### Ce que `world/**` livre

```
dugRooms()     -> inchangé, plus `size` : 'chamber' pour la salle 0,
                  'small' | 'medium' | 'large' pour une salle creusée
                  (libellé technique, comme `kind` de soilAt).
createWorld()  -> gagne `surface` : { lawn, water, horizon, grass, tree,
                  resources, garden, atmosphere } — ce que la maquette cache.
world/macroView.js
  createMacroView({ world, scene }) -> {
    setActive(on, focus), update(dt, elapsed, camera, forEachAnt, focus),
    rooms(), faces(), bounds(),          // relus à 4 Hz
    setHover(room | null), setSelected(room | null),
  }
  applyMacroEnvironment({ scene, renderer, hemi }, mix)
```

La maquette ne reconstruit rien : chaque maillage de cavité (coque de
fondation, salles, tunnels) change de matériau (intérieur opaque, faces vers
la caméra coupées) et reçoit un double en faces arrière (silhouette en
fresnel additif). La pelouse, l'herbe, le décor, l'arbre, l'eau, les déblais
sont cachés ; la surface reste lisible par une grille posée sur `lawnY()` et
l'anneau de la bouche. Tout est rendu à l'identique en sortie.

### Ce que `core/macroMode.js` livre (câblé dans `main.js`)

```
createMacroMode({ camera, domElement, view, getAnt, forEachAnt, faceCrew, hud })
  toggle()                 // la touche M (Échap sort aussi)
  mode                     // 'play' | 'enter' | 'macro' | 'exit'
  freezesPlayer()          // vrai hors 'play' : le joueur ne pilote plus
  mix()                    // 0..1, suit la transition de 0,6 s
  getSelection()           // salle choisie (forme de dugRooms()) | null
  onSelect(fn)             // fn(salle | null) à chaque clic ; renvoie le
                           // désabonnement
  setTool({ hover(pick), click(pick) })   // null = outil 'select'
  pickAt(x, y) -> { room, point }         // salle sous un point écran
  roomScreen(id) -> { x, y }              // pour les harnais
```

`pick` = `{ room, point, hit }` : la salle dont le disque de sol est sous le
curseur, et le point touché. C'est la prise pour la suite — peindre un volume
à creuser, attribuer une fonction à une salle — : un outil de plus, pas un
second mode.

### Ce que `player/**` livre en face (fait dans ce ticket, minimal)

- `update(dt, elapsed, { macro })` : en macro, pas de déplacement, pas de E,
  la caméra de suivi n'est pas écrite ; l'état caméra d'`input.js` est remis
  à la sortie (le glisser/la molette de la maquette passent aussi par lui).
  Retour garanti sur la pose de jeu exacte.
- `macroInfo.forEachAnt(fn)` → `fn(x, y, z, 'queen'|'worker'|'digger')`, sans
  allocation ; `macroInfo.faceCrew(face)` → `{ diggers, required }`.
- `hud.setMacro(on)` : cache commandes, invite, barre d'action, jauge et
  objectif ; garde la vie de la reine et les castes ; affiche la légende.

### Critère de fin

`scripts/verify-macro-34.mjs` : M avant fondation (note « pas encore de
fourmilière »), puis nid à trois salles, trois angles d'orbite, zoom, survol +
infobulle, clic → sélection, retour sur la pose de jeu à 0,1 unité près,
≥ 60 i/s en maquette à 1280×800, aucune erreur console.

## 11. Le nid en volume libre — round 23 (#81, fondation)

Ajouté par Atta avec le ticket, à la demande de l'intégrateur. Rien de §6–§10
n'est renommé : ce qui change est **d'où viennent les réponses**.

### Ce qui change de forme

Tout ce qui est **sous un toit** (la chambre, sa porte, les salles et couloirs
ouverts par les fronts, tout ce qui sera creusé librement) est un **volume** :
une densité signée sur une grille de 1 unité (négatif = air creusé), en blocs
de 16³ alloués seulement où l'on a creusé (`world/nestVolume.js`). La paroi est
le passage par zéro, maillée par *surface nets* bloc par bloc
(`world/nestVolumeMesh.js`), remaillée seulement là où le volume a changé et
sous un budget par image. Creuser = `min(densité, pinceau)` : idempotent.

La **tranchée à ciel ouvert** reste analytique (`world/excavation.js`) : elle
n'est pas une cavité, elle est ouverte sur le ciel. Ses bords sont désormais
irréguliers (`cutJitterAt`, vers l'extérieur seulement, donc tout ce qui était
praticable le reste).

`rooms` / `links` / `faces` (§7) restent, comme **métadonnées** : nom, taille,
tas de déblais, lampes, tests de placement des plans suivants. Ils ne disent
plus où est le sol.

### Ce que `world/**` livre (réexporté par `world/index.js`)

```
openCells(brush)        -> number   cellules ouvertes (terre -> air). Creuse
                                    et remaille (budgété), étire l'obscurité
                                    du nid jusqu'à ce qui est creusé.
                                    Idempotent. Rien avant la fondation.
isOpen(x, y, z)         -> boolean  air creusé ?
floorAt(x, z, nearY?)   -> number | null
                                    sol de l'espace ouvert qui contient nearY
                                    (ou du premier sous lui) ; sans nearY, le
                                    plus bas. C'est la requête d'un nid
                                    empilé : groundY(x, z) reste 2D et
                                    répond le plus bas.
volumeSpan(x, z, nearY?) -> { floor, ceil } | null
walkableAt(x, z, nearY?) -> { floor, ceil } | null
                                    là où la reine tient : hauteur >= 6, et
                                    corps à >= 1,3 de la paroi à 2,5 du sol.
planCells(brush)        -> { id, cells }   un plan (fantôme), stocké, PAS
                                    creusé — la prise pour #82
plannedCells()          -> [{ id, brush, cells }]
removePlan(id)          -> boolean
isPlanned(x, y, z)      -> boolean  dans un plan et pas encore creusé
onVolumeChange(fn)      -> unsubscribe   fn({ kind: 'open'|'plan'|'unplan'|
                                    'clear', ... }) ; 'open' porte les blocs
                                    touchés
volumeVersion()         -> number   change à chaque creusement
brushShape(brush)       -> { sdf, box }  la forme exacte que creusera le
                                    pinceau (aperçu fantôme de #82)
flushNestMesh()         // remaille tout de suite (harnais, boucle arrêtée)
nestMeshStats()         -> { meshes, tris, verts, pending, ... }
MIN_COVER               // 3 : terre gardée sous la pelouse par défaut
```

`brush` = données pures (sérialisable, pour un plan envoyé au serveur) :

```
{ center: [x,y,z] | {x,y,z}, radius,
  end?: [x,y,z],          // capsule center -> end
  endRadius?,             // capsule effilée
  floor?: true | y | [a, b],   // sol plat : true = 0,55 r sous l'axe,
                               // un y absolu, ou une rampe du centre au bout
  noise?,                 // grain de paroi (vers l'extérieur), défaut 14 % de r
  cover?: number | null } // terre gardée sous la pelouse, défaut MIN_COVER ;
                          // null = aucune (réservé au monde : ses salles ont
                          // un tas de déblais)
```

**Inchangés, et adossés au volume** : `groundY`, `nestFootprint()` (contains /
floorY / headroom), `descentPath()`, `digFaces()`, `payDigFace()`,
`advanceDigFace()`, `dugRooms()`, `NEST_FUNGUS`, `LAMP_GLOWS`. Un front
**creuse désormais au fil de sa jauge** : le couloir avance du front vers la
salle prévue sur la première moitié, la salle se creuse depuis sa porte sur la
seconde. `dugRooms()` ne la nomme qu'une fois le front fini, comme avant
(`opened` inchangé). `containUnderground` / `profileR` restent ceux du vieux nid
pré-construit (non affiché) et ne concernent pas le nid fondé.

### Ce que `player/**` livre en face

- **Rien d'obligatoire** : la marche, la caméra, les pattes lisent déjà
  `groundY` / `nestFootprint()`.
- **#83 (creuser à la main)** : appeler `openCells({ center, radius, floor })`
  depuis la fouisseuse contrôlée ; `onVolumeChange` pour réagir (trouvailles
  #87). Un creusement qui passe **au-dessus** d'une salle existante demande
  `floorAt(x, z, ant.y)` plutôt que `groundY` : c'est le seul cas où la
  réponse 2D n'est plus la bonne.
- **#82 (plans en macro)** : `planCells(brush)` stocke le fantôme ;
  `brushShape(brush).sdf` le dessine ; le chantier le creuse en appelant
  `openCells` avec un pinceau qui grandit (min() est idempotent : ré-appliquer
  un pinceau plus grand ne recreuse que la différence).

### Critère de fin

`scripts/verify-volume-81.mjs` : fondation en volume, tunnel en L et salle
irrégulière creusés au pinceau, praticables hors ligne médiane, sous toit ; la
reine y entre au clavier et reste au sol ; ≥ 50 i/s en creusant à chaque
image ; captures en jeu (dont la porte en gros plan et les bords de la
tranchée) et en maquette.
