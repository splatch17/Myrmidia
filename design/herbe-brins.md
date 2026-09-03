# Brins d'herbe — spécification chiffrée

Réponse au **défaut 2 de `PROGRESS.md`** : « les brins d'herbe sont larges et
raides de près, plus *lames* que végétaux ».

`game/src/world/grass.js` appartient à Atta ; ce document ne contient donc pas
de code à appliquer mais des **nombres à câbler**, dans le même format que
`charte-stylisation.md` §1a, qui a pu être repris verbatim.

Se pose au-dessus de `charte-stylisation.md` (palette §1e, rampe toon §2,
langage de contour §3) et de `ambiance-prologue.md` (§1d, critères d'ombre sur
capture). Ne les refait pas.

---

## 0. Le constat, en nombres

Lu dans le code et mesuré sur les captures de `scripts/verify-terrain.mjs`
(1280×800, Chromium ANGLE/D3D11, build du 2026-09-02).

**Largeur.** `grass.js` calcule la demi-largeur du brin à la base comme
`(1.7 + h × 0.028) × taperK + 0.05`, soit une largeur pleine de
`3.4 + 0.056 × h`. Pour la distribution de hauteurs actuelle
(`h = 26 + R()·74·(0.5 + 0.5·vnoise)`, donc 26 à 100) :

| Hauteur `h` | Largeur pleine à la base | Rapport longueur : largeur |
|---|---|---|
| 26 (le plus court) | **4,96 unités** | **5 : 1** |
| 54 (la médiane) | **6,4 unités** | **8 : 1** |
| 100 (le plus haut) | **9,1 unités** | **11 : 1** |

Mesurée sur `player/avatar.js` (`FOUNDING_QUEEN`, `scale: 2.2` appliqué à
`QUEEN_BODY`), la reine fait **24,5 unités de long** et **7,0 unités de large
au premier segment de gastre**. Autrement dit : **un brin d'herbe haut est
plus large que la reine.** Un vrai brin est entre 30 : 1 et 60 : 1. À 5 : 1 on
ne dessine pas de l'herbe, on dessine une feuille de maïs — et c'est
exactement ce que la capture montre. C'est la cause première, avant la
courbure et avant la couleur.

**Et ce n'est pas une erreur d'origine, c'est une dérive.** La largeur
généreuse vient de #19 (`blade.js` : « grass used to read as a thread an ant
balances on rather than a stalk it climbs ») et elle était calibrée sur
l'**ouvrière** : corps de 11,1 unités, largeur 2,7. Un brin de 9,1 faisait
alors 3,4 fois la largeur du grimpeur — déjà large, mais cohérent avec
l'intention. L'avatar est passé à une reine 2,2 × plus grande *après* ; la
largeur du brin, elle, n'a pas bougé. Corriger la largeur n'annule pas la
décision de #19, ça la recalibre sur le corps qui est réellement à l'écran.

**Un brin n'a qu'une seule valeur.** Le ruban est plat : une seule normale
pour toute la face, donc aucun brin n'a de côté éclairé et de côté à l'ombre.
Mesuré sur `_shots/ant-knoll-foot.png`, cinq brins différents pris chacun sur
40×120 px : luminances **86, 94, 95, 101, 115**. L'écart de 29 est *entre
brins*, et il est nul *dans* un brin. `ambiance-prologue.md` §1d demande au
moins **45 de différence entre le côté soleil et le côté ombre d'un même
brin** — aujourd'hui ce critère n'est pas seulement raté, il est
structurellement inatteignable.

**Aucun brin ne porte d'ombre.** `mesh.castShadow = false` (commentaire du
fichier : différé, faute de matériau de profondeur pour la forme courbée).
Une pelouse dont les brins ne s'ombrent ni entre eux ni sur le sol se lit
comme des décalcomanies posées sur un plan, quel que soit leur profil.

**La courbure est uniforme.** `bend = t²·h·0.26` : une parabole simple, donc
la moitié basse est presque droite et la pointe ne retombe pas. Un vrai brin
est raide en bas et **s'affaisse** dans le dernier tiers.

**Plus de la moitié des brins sont des « troncs ».** `CLIMB_MIN_H = 42`
(`player/climb.js`) sépare déjà les tiges escaladables du décor, et la
distribution actuelle met **~55 %** des brins au-dessus. La largeur de tige
s'applique donc à la majorité du champ au lieu d'une minorité : c'est ce
qui transforme une pelouse en palissade.

---

## 1. Le principe

**Deux populations, une seule géométrie.** Le seuil existe déjà et il est
partagé par `climb.js` et `decorCollision.js` : `CLIMB_MIN_H = 42`.

- **Tiges** (`h ≥ 42`, cible **22 % du champ**) : larges, escaladables,
  solides. Ce sont des objets de gameplay et des repères de silhouette.
- **Herbe** (`h < 42`, **78 %**) : fine, dense, purement décorative. Rien ne
  l'escalade, rien ne la percute, donc rien ne contraint sa largeur.

Tout le reste de ce document découle de là.

---

## 2. Largeur — le nombre qui compte

`aWidth` devient un **attribut par instance** (largeur *pleine* à la base, en
unités monde), calculé au moment du semis :

```
h <  42 :  aWidth = clamp(h / 40, 0.55, 1.45)
h >= 42 :  aWidth = clamp(2.10 + (h - 42) * 0.038, 2.10, 4.40)
```

| Hauteur | Largeur pleine, aujourd'hui | **Cible** | Rapport visé |
|---|---|---|---|
| 20 (herbe courte) | — | **0,55** | 36 : 1 |
| 40 (herbe haute) | 5,6 | **1,00** | 40 : 1 |
| 48 (tige courte) | 6,1 | **2,33** | 21 : 1 |
| 100 (tige haute) | 9,1 | **4,30** | 23 : 1 |

Une tige à 4,30 unités fait **62 % de la largeur de la reine** : elle est
assez large pour qu'on voie qu'on la grimpe, et assez étroite pour que la
reine l'enserre au lieu de se tenir dessus comme sur une planche — ce qu'elle
fait aujourd'hui avec ses 9,1 unités, qui dépassent sa propre largeur. C'est
le rapport que #19 visait, appliqué au corps qui est effectivement à l'écran.
Une herbe à 1,00 unité, elle, est un brin.

**Profil de largeur.** Remplacer `taperK = (1 - t)(1 - 0.25t)`, qui rétrécit
dès la base, par un profil qui tient sa largeur puis pointe :

```
taper(t) = pow(1 - pow(t, 2.6), 0.55)
```

| `t` | 0 | 0,30 | 0,50 | 0,70 | 0,85 | 0,95 | 1 |
|---|---|---|---|---|---|---|---|
| `taper` | 1,00 | 0,98 | 0,91 | 0,75 | 0,55 | 0,31 | **0,00** |

C'est le profil d'un vrai brin : constant sur 60 %, puis une pointe. Et il
atteint **exactement zéro** — supprimer le `+ 0.05` actuel. Une pointe coupée
net est le tell « géométrique » le plus visible du lot, et il est gratuit à
enlever. Demi-largeur finale envoyée au sommet :
`width = aWidth * 0.5 * taper(t) + 0.02` (le plancher de 0,02 évite seulement
la normale dégénérée exactement à la pointe).

**Conséquence pour Cataglyphis :** `footprints[].w` doit rester la
**demi-largeur** (`aWidth * 0.5`), comme aujourd'hui. `decorCollision.js`
calcule `grassCollideR(g) = g.w * 0.75`, donc le rayon de collision d'une
tige de `h = 100` passe de **3,41 à 1,61 unité**. C'est le comportement
correct pour une tige devenue deux fois plus fine, mais c'est un changement
de sensation au contact : à revoir sur capture, pas à compenser à l'aveugle.

---

## 3. Densité et distribution des hauteurs

Rendre les brins fins sans en mettre davantage vide la pelouse. Les deux
changements vont ensemble.

```
count : 900  ->  1600

patch = 0.72 + 0.28 * vnoise(bx * 0.01, bz * 0.01)      // inchangé dans l'esprit
h = R() < 0.22 ?  48 + R() * 60 * patch      // tiges,  48..108, toujours >= 42
               : (14 + R() * 26) * patch     // herbe,  10..40,  jamais >= 42
```

Le tirage est **explicite** plutôt que le produit d'une puissance de `R()` :
c'est le seul moyen de garantir que la population « herbe » ne franchit jamais
`CLIMB_MIN_H` par accident et n'ajoute pas de collider invisible.

Comptes attendus : **352 tiges escaladables** (contre ~495 aujourd'hui, sur un
champ 1,8× plus dense) et **1 248 brins**. Le joueur trouve autant de tiges
qu'avant à parcours égal, et il marche dans de l'herbe au lieu de slalomer
entre des poteaux.

---

## 4. Courbure — raide en bas, retombante en haut

`bend = t² · h · 0.26` devient, avec deux flottants par instance :

```
bend(t) = aH * ( aTilt * t  +  aLean * (0.10 * t*t + 0.26 * t*t*t*t) )
y(t)    = aH * t * (1 - 0.22 * t*t*t)

aTilt = 0.34 * R() * R()      // 0 .. 0.34, médiane 0.085 — inclinaison de pied
aLean = 0.55 + 0.80 * R()     // 0.55 .. 1.35 — souplesse de la tige
```

| | Aujourd'hui | **Cible (médiane)** |
|---|---|---|
| Décalage horizontal à mi-hauteur | 0,065 h | **0,073 h** |
| Décalage horizontal à la pointe | 0,26 h | **0,41 h** |
| Hauteur de la pointe | 0,87 h | **0,78 h** |
| Angle avec la verticale à la pointe | 35° | **~78°** |

Ce que ces quatre lignes disent : **le bas ne bouge presque pas, la pointe
part.** Le terme en `t⁴` est ce qui fait un affaissement plutôt qu'un arc ;
avec le terme en `t²` seul, un brin qui retombe autant serait déjà penché à
mi-hauteur et le champ se lirait comme couché par le vent.

`aTilt` sépare deux choses que la formule actuelle confond : *où pousse le
brin* (l'inclinaison de son pied, aléatoire) et *combien il ploie* (sa
souplesse). Aujourd'hui les deux sortent du même `t²` et tous les brins
partent verticaux, ce qui est la deuxième raison de la lecture « raide ».

**Contrainte de câblage, non négociable.** La courbe existe **deux fois** :
en GLSL dans `grass.js` et sur CPU dans `world/blade.js`
(`bladeCurvePoint` / `bladeClimbBasis`), que `player/climb.js`, `legs.js` et
`decorCollision.js` consomment — et que **`world/tree.js` utilise pour le
tronc**. Si les deux divergent, la fourmi grimpe à côté du brin.

La migration sûre, à faire d'un bloc : `bladeCurvePoint` teste la présence de
`g.lean`. Absent → l'ancienne formule, que `TREE` est le seul à utiliser, donc
l'arbre ne bouge pas d'un pouce. Présent → la nouvelle. Et `footprints` pousse
`tilt` / `lean` en plus de `x, z, h, baseY, w, ang`, ce qui suffit à ce que
tout le côté joueur suive sans le savoir.

---

## 5. Ce qui fait qu'un brin cesse d'être une carte

Trois changements, tous **à coût géométrique nul**, dans l'ordre de leur
effet.

### 5a. Une quille de normale (pas de quille de géométrie)

Un vrai brin est plié en V dans sa section : c'est ce pli qui lui donne un
côté clair et un côté sombre. On peut l'obtenir **sans un seul sommet
supplémentaire** en inclinant la normale à travers la largeur du ruban, avec
`aSide` qui vaut déjà ±1 :

```glsl
objectNormal = normalize(nRolled - perpRolled * (aSide * 0.62));
```

0,62 place les normales des deux bords à **63° l'une de l'autre**. Avec la
rampe toon de la charte §2 (plateaux 0,30 / 0,62 / 1,00), un brin qui
traverse un genou montre deux paliers au lieu d'un : passage de
luminance ~95 à ~153, soit **Δ58** — le critère de `ambiance-prologue.md` §1d
(≥ 45) est atteint, et il l'est *dans* un brin, ce qui est le point.

Volontairement **pas** de quille en géométrie (une colonne de sommets à
`aSide = 0`, dupliquée pour des facettes nettes) : ×2,6 sur les triangles du
champ pour un gain de silhouette qui ne se voit que sur les brins vus par la
tranche. À reconsidérer seulement si une capture montre les brins de profil
comme des fils de zéro largeur.

### 5b. Une vrille le long du brin

Aujourd'hui `perp` est fixé perpendiculairement à `ang` : la face du ruban
regarde toujours la même direction sur toute sa longueur, et le champ
présente des cartes toutes orientées de la même façon par rapport à leur
propre courbure. Un vrai brin vrille. Un flottant par instance, une rotation
2D par sommet :

```glsl
float roll = aTwist * gT;              // aTwist ∈ [-0.85, +0.85] rad
float cr = cos(roll), sr = sin(roll);
vec3 perpRolled = perp * cr + n0 * sr;
vec3 nRolled    = n0   * cr - perp * sr;
```
(`n0 = normalize(cross(tangentDir, perp))`, déjà calculé.)

C'est le changement qui casse le plus efficacement la lecture « toutes des
cartes » depuis n'importe quel angle de caméra : certains brins présentent
leur tranche, d'autres leur face, et **chaque brin change d'orientation sur
sa propre longueur**.

### 5c. Une gaine claire au pied

Les 9 % du bas d'un vrai brin sont une gaine pâle qui enveloppe la tige.
C'est le détail qui fait qu'une touffe se lit comme *plusieurs* brins plutôt
que comme une masse sombre unique — et le pied de touffe est précisément
l'endroit que la caméra à hauteur de fourmi regarde le plus.

```glsl
float sheath = mix(1.30, 1.0, smoothstep(0.0, 0.09, gT));
```

---

## 6. Dégradé base → pointe

`vGrassColor = mix(uBaseColor, aTip, gT) * (0.52 + 0.48 * gT)` devient :

```glsl
float shade = (0.46 + 0.54 * pow(gT, 0.72)) * sheath;   // sheath : §5c
vGrassColor = mix(uBaseColor, aTip, pow(gT, 0.85)) * shade;
```

| `t` | 0 | 0,15 | 0,25 | 0,50 | 0,75 | 1 |
|---|---|---|---|---|---|---|
| valeur, aujourd'hui | 0,52 | 0,59 | 0,64 | 0,76 | 0,88 | 1,00 |
| **cible** (hors gaine) | 0,46 | **0,60** | **0,66** | 0,79 | 0,90 | 1,00 |

La rampe monte plus vite en sortant du pied : l'assombrissement se lit comme
une **ombre de touffe** sur les 15 % du bas, au lieu de teinter la moitié du
brin comme aujourd'hui. Le plancher descend de 0,52 à 0,46 parce que la gaine
(×1,30) reprend la valeur juste au-dessus — les deux se compensent et le pied
gagne un contraste interne qu'il n'avait pas.

**Pointes sèches — 12 % des instances.** Une pelouse entièrement verte est un
gazon synthétique. Pour 12 % des brins tirés au semis :

```
aTip = mix(C_MOSS_TIP, #C8B463, 0.55 + 0.45 * R())
```

`#C8B463` est du miel `#E6B558` désaturé et refroidi — dans la palette, et
délibérément **moins saturé que le miel** (38 % contre 62 %), qui reste le
signal « objet interactif » de la charte §3 et ne doit jamais être confondu
avec de la matière morte.

---

## 7. Contre-jour — restaurer ce que la charte demandait

La charte §1e demandait une translucidité de contre-jour ; `grass.js`
l'implémente comme un terme constant, `uTransl = 0.16` ajouté à
`gl_FragColor` sans condition. Le commentaire du fichier explique pourquoi
(des brins entièrement noirs dos au soleil) et il a raison — mais un ajout
constant **travaille contre** le critère de contraste de
`ambiance-prologue.md` §1d : il remonte le côté ombre autant que le côté
soleil. Il faut garder le plancher, beaucoup plus bas, et remettre le reste
sous le terme directionnel :

```glsl
float back = pow(max(dot(normalize(vViewDir), -uSunDir), 0.0), 3.0);
float tipMask = smoothstep(0.25, 0.90, gT);
gl_FragColor.rgb += vGrassColor * (0.056 + back * 0.55 * tipMask);
```

`0.056` (soit 0,35 × 0,16) garde la garantie « aucun brin n'est une
silhouette noire » ; les 0,55 restants ne s'allument que quand on regarde
vers le soleil à travers le brin, et seulement au-dessus de `t = 0.25`, parce
que c'est la pointe fine qui est translucide, pas la gaine.

Avec le soleil rasant du prologue (`ambiance-prologue.md` §1b, élévation
18,5°), ce terme est actif sur une grande partie du champ : c'est le moment
où il rapporte le plus, et c'est aussi ce qui doit empêcher le prologue
d'être seulement *sombre*.

---

## 8. Segments, et le budget

`SEGS = 6` ne suffit pas à un affaissement en `t⁴` : la courbure se concentre
dans le dernier cinquième, où il ne reste qu'un segment. **`SEGS = 9`**, avec
des rangées resserrées vers la pointe :

```
t_s = 1 - pow(1 - s / SEGS, 1.35)
    ->  0, 0.145, 0.288, 0.419, 0.547, 0.666, 0.774, 0.869, 0.949, 1.000
```

Quatre segments au-dessus de `t = 0.77`, là où le brin retombe ; le dernier
ne fait que 0,051 de longueur, ce qui donne une pointe propre.

| | Aujourd'hui | **Cible** |
|---|---|---|
| Sommets par brin | 14 | **20** |
| Triangles par brin | 12 | **18** |
| Instances | 900 | **1600** |
| Triangles du champ | 10 800 | **28 800** |
| Part de la scène (145 k tris) | 7,4 % | **~17 %** (163 k au total) |

+18 k triangles sur une scène qui tourne à 0,73 ms sur la pire image libre
(ANGLE/D3D11, `PROGRESS.md`). Un seul draw call, une seule géométrie, aucun
uniform nouveau au-delà des attributs par instance.

**Attributs par instance : 4 flottants ajoutés** (`aWidth`, `aTilt`,
`aLean`, `aTwist`) aux 8 existants, soit 1 600 × 12 flottants = 77 Ko de
buffer. Négligeable devant les 3,9 Mo d'attributs déjà mesurés.

---

## 9. Ce que je demande, dans l'ordre

À **Atta** (`world/grass.js`, `world/blade.js`) :

1. **La largeur** (§2) — profil + `aWidth` par instance. Seul ce point-là
   change déjà tout ; s'il ne fallait en faire qu'un, c'est celui-là.
2. **La distribution des hauteurs et le compte** (§3). Va avec 1 : fin sans
   dense donne une pelouse chauve.
3. **La quille de normale** (§5a) et **la vrille** (§5b). Gratuites toutes
   les deux, et ce sont elles qui donnent au brin un volume.
4. **La courbure** (§4) — avec la migration de `blade.js` décrite au même
   endroit, en un seul bloc, pour que l'arbre ne bouge pas.
5. **Le dégradé et les pointes sèches** (§6), **le contre-jour** (§7),
   **`SEGS = 9`** (§8).

À **Cataglyphis** (`player/**`) :

6. Le rayon de collision des tiges suit `g.w` et se réduit d'un facteur ~2,1
   (§2). Rien à coder, mais **à juger sur capture** : si la reine traverse
   maintenant des tiges qu'elle bousculait, c'est `grassCollideR`
   (`g.w * 0.75`) qu'il faut remonter, pas la largeur du brin.
7. `footprints[]` gagne `tilt` et `lean` (§4). `climb.js` et `legs.js` les
   reçoivent sans rien changer puisqu'ils passent l'enregistrement entier à
   `bladeCurvePoint` / `bladeClimbBasis`.

---

## 10. Délibérément pas fait

- **`grass-blade_albedo`.** Inchangé depuis `charte-stylisation.md` §8 : un
  brin est un objet *orienté*, donc le seul matériau du set qui ne peut pas
  passer par l'échantillonneur triplanaire de `texturing.js`. Et tout ce
  qu'une texture apporterait ici — la nervure, la gaine, le dégradé — est
  obtenu ci-dessus par la normale et la couleur, sans dépliage et sans
  sampler.
- **Une quille en géométrie.** Raison chiffrée en §5a.
- **Les ombres portées des brins.** `castShadow = false` aujourd'hui, et
  c'est le plus gros tell « décalcomanie » qui restera après tout ce qui
  précède : une pelouse sans ombre de contact est une pelouse posée sur le
  sol, pas plantée dedans. L'activer demande un `customDepthMaterial`
  répliquant exactement le déplacement de `begin_vertex` (sinon Three.js
  ombre le ruban plat non déformé), plus une passe d'ombre sur 28 800
  triangles. C'est une décision de rendu et de budget, donc celle d'Atta —
  je la signale comme **le prochain grand pas après ce document**, pas comme
  une demande de ce round.
- **Toucher à `world/grass.js`.** Hors périmètre DA, et Atta y travaille en
  parallèle.
