# Ressources récoltables et moment de la fondation — spec visuelle

Spec DA pour le round 6 : les nœuds `'graine'`, `'brindille'`, `'miellat'`
d'`api-monde-gameplay.md` §3, et le pivot dramatique de `foundNest()` (§4).

Se pose au-dessus de `charte-stylisation.md` (palette, rampe, langage de
contour §3) et de `ambiance-prologue.md` (§2 la bascule, §3d les grappes,
§3f l'ellipse de site). Ne les refait pas — quand un point est déjà tranché
là-bas, ce document le cite et enchaîne.

`api-monde-gameplay.md` fait autorité sur les **noms** ; ce document ne parle
que de ce que ça montre à l'écran.

---

## 0. L'étalon : à quelle échelle on dessine

Tout ce qui suit est chiffré contre le corps qui est à l'écran 100 % du
temps. Mesuré dans `game/src/player/avatar.js`, `FOUNDING_QUEEN`
(`scale: 2.2` appliqué à `QUEEN_BODY`) :

| | Unités monde |
|---|---|
| Longueur du corps, tête → gastre | **24,5** |
| Avec les mandibules tendues | 26,6 |
| Largeur de la tête | **5,2** |
| Largeur maximale (premier segment de gastre) | 7,0 |
| Portée de préhension (`CLIMB_RADIUS × scale`) | 9,9 |
| Plafond de l'herbe courte (cf. `herbe-brins.md` §3) | **40** |
| Tiges hautes | 48 à 108 |

Deux nombres commandent tout le reste : **5,2** (une graine doit être plus
grosse que sa tête) et **40** (au-dessous, un objet posé au sol est invisible
à hauteur de fourmi, quoi qu'on fasse de sa couleur).

> Note de correction : la consigne de round parlait d'une reine « ~15 unités
> de long ». La mesure sur `avatar.js` donne 24,5. Tous les chiffres ci-dessous
> viennent de la mesure, pas de l'estimation.

---

## 1. La règle qui organise tout

`charte-stylisation.md` §3 a déjà fixé : **contour = vivant**, **halo miel
pulsé `#E6B558` = interactif**. Les trois ressources portent donc *le même*
halo miel. Elles ne peuvent donc pas se distinguer par la couleur.

> **La silhouette porte l'espèce. Le halo miel porte « ça se ramasse ». La
> valeur porte l'état (plein / épuisé).**

Trois signaux, trois canaux, aucun recouvrement. C'est la même discipline que
`ambiance-prologue.md` §3a (« le chaud est creusable, le froid est interdit »)
et §3f (« la qualité est dans le rayon, pas dans la couleur »).

Concrètement, les trois silhouettes sont choisies pour être **les trois
seules formes de leur genre** dans un champ de verticales :

| Espèce | Silhouette | Ce qu'elle est dans un champ d'herbe |
|---|---|---|
| `graine` | un **épi courbé** qui dépasse l'herbe, et un tas au pied | la seule verticale qui *se termine par une masse* |
| `brindille` | une **barre calée en diagonale** | la seule diagonale |
| `miellat` | un **chapelet de gouttes suspendu** | la seule chose qui brille en hauteur sans être le ciel |

À 40 unités, à travers l'herbe, on ne lit rien d'autre que ça — et ça suffit.

---

## 2. `graine`

### 2a. La graine elle-même

Ce n'est pas une icône, c'est un objet qu'on porte dans ses mandibules.

| | Valeur |
|---|---|
| Longueur | **7,0 unités** (± 1,2 par instance) |
| Largeur / hauteur | 4,6 × 4,2 |
| Rapport à la tête de la reine | **1,35 ×** |
| Forme | ovoïde en goutte, pointe au hile |
| Géométrie | tour à 8 côtés, 5 anneaux — **40 sommets, 64 triangles** |
| Sillon | **une arête creusée** sur toute la longueur, 12 % du rayon |
| Couleur sommet | `#A8864A`, ± 0,12 de valeur par instance |
| Texture | `seed_albedo` (§6), `worldPerTile = 6` |

**Le sillon est en géométrie, pas en texture** — un anneau de sommets
rentré de 12 % — parce que l'échantillonneur de `texturing.js` est
triplanaire : un motif directionnel sur un petit ovoïde montrerait ses rayures
dans trois directions à la fois sur le même objet. Le sillon donne aussi une
arête vive qui accroche la lumière : c'est ce qui empêche la graine d'être une
bille lisse, exactement le défaut relevé sur les chapeaux fongiques
(`charte-stylisation.md` §0.6).

**Pourquoi cette couleur.** `#A8864A` est pâle, chaude et **peu saturée
(35 %)**. C'est délibérément à côté du miel `#E6B558` (62 %), qui reste le
halo d'interaction et ne doit jamais se confondre avec de la matière. Contre
le sol `#86673B` et contre l'herbe, la graine ressort par la **valeur**, pas
par la teinte — c'est ce qui la rend trouvable à hauteur de fourmi et sous
n'importe quelle lumière, y compris le crépuscule affaibli du prologue.

### 2b. Le nœud : un épi qui a versé

Une graine seule au sol est invisible. Le nœud, c'est **la plante qui la
produit** :

- une **tige sèche**, `h = 52 à 64`, donc franchement au-dessus du plafond de
  l'herbe courte (40) et sous les tiges hautes ;
- courbée plus fort que l'herbe (`aLean` équivalent ≈ 1,6) : elle **ploie
  sous son épi**, ce qui est exactement ce qui la fait lire comme chargée ;
- l'**épi** au bout, entre 40 et 52 d'altitude : 4 à 7 graines encore
  accrochées, serrées en fuseau ;
- **3 à 6 graines déjà tombées** au pied, dans un rayon de 6 unités, à demi
  enfoncées dans le sol.

Couleur de la tige : `#B5A46A` — de l'herbe qui a séché, donc la même famille
que les pointes sèches de `herbe-brins.md` §6. C'est la même idée réutilisée
à une autre échelle, pas un matériau de plus.

`RESOURCE_NODES[i].r` (rayon d'interaction) : **12 unités** — au-dessus de la
portée de préhension de la reine (9,9), de sorte qu'elle n'a jamais à se
placer au pixel près.

### 2c. Grappes

`ambiance-prologue.md` §3d : 3 à 6 nœuds dans un rayon de 12 unités. Pour la
graine, ça veut dire **une touffe d'épis** — et une touffe d'épis penchés
dans des directions différentes est une forme qu'on reconnaît de loin, alors
qu'un épi isolé se confond avec une tige haute.

---

## 3. `brindille`

| | Valeur |
|---|---|
| Longueur | **34 à 52 unités** — plus longue que la reine (24,5) |
| Épaisseur | 3,2 à 4,8, décroissante vers la pointe |
| Géométrie | prisme à 6 côtés, 3 ou 4 tronçons coudés (5-12° par coude) |
| Texture | **`bark_albedo` déjà livrée**, `worldPerTile = 16` (inchangé) |
| Couleur sommet | famille écorce, `#6F5330` → `#4A3822` |
| `r` | **14 unités** (l'objet est long : on doit pouvoir l'attraper par n'importe où) |

**Elle est calée, pas posée à plat.** Une extrémité repose sur un caillou ou
une touffe, l'autre au sol : inclinaison **15 à 30°**, extrémité haute entre
**34 et 44 unités**. Une brindille couchée à plat disparaît sous l'herbe
courte et ne participe à aucune décision ; calée, elle est la seule diagonale
du champ et elle **crée son propre point d'accroche de silhouette** au sens de
`ambiance-prologue.md` §3e — un endroit qu'on peut nommer.

**La cassure fraîche est la lecture.** L'extrémité rompue montre du bois clair
et esquillé, `#C6A874`, sur 3 à 5 unités de long, avec 3 ou 4 échardes qui
dépassent. C'est un accent pâle sur un objet sombre : c'est lui qu'on voit en
premier, et c'est lui qui disparaît quand le nœud s'épuise (§5). L'autre
extrémité porte une cicatrice de bourgeon — un petit bourrelet, deux
triangles — qui dit dans quel sens l'objet va.

---

## 4. `miellat`

Le miellat est le seul des trois qui n'existe pas tout seul : c'est une
**sécrétion de pucerons**. Le montrer sans eux, c'est perdre gratuitement à
la fois la crédibilité et un accroche-gameplay futur.

| | Valeur |
|---|---|
| Goutte | **3,4 unités** de diamètre (± 0,8) |
| Nombre par nœud | 4 à 9, en chapelet le long de 8 à 14 unités |
| Altitude des gouttes | **34 à 46** |
| Tige porteuse | herbacée, `h = 44 à 56`, penchée de **35 à 50°** |
| Pucerons | 2 ou 3 ovoïdes de **4,5 unités**, `#6E7A4C`, sur la tige, sous les gouttes |
| `r` | **11 unités** |

**Une goutte n'émet pas de lumière.** `ambiance-prologue.md` §2b réserve à la
bouche du nid le statut de *seule source chaude de la carte extérieure*, et ce
signal ne vaut que s'il est unique. Une goutte de miellat se lit par **une
tache spéculaire serrée et un intérieur clair**, pas par de l'émissif :

- couleur sommet `#E3C079`, **valeur 1,42 × celle de la tige** ;
- `roughness: 0.22` (le reste du monde est à 0,95) — c'est ce seul chiffre
  qui fait la différence entre du sucre et du plastique mat ;
- la goutte est un **ellipsoïde étiré vers le bas** (rayons 1,0 / 1,35 / 1,0)
  et non une sphère : une goutte pend, elle ne flotte pas.

C'est aussi la seule ressource **en hauteur**, donc la seule qui donne à la
mécanique d'escalade déjà codée (`player/climb.js`) une raison d'être dès le
prologue. Le nœud doit être placé de sorte qu'une tige escaladable (`h ≥ 42`)
soit à moins de 10 unités.

---

## 5. Un nœud épuisé, sans un mot de texte

`api-monde-gameplay.md` §3 : un nœud épuisé **reste dans le tableau** avec
`amount: 0`. Il reste donc à l'écran, et il doit dire ce qu'il est.

### 5a. La règle : `amount` pilote un **compte**, jamais une taille

> Le nombre d'unités visibles = `ceil(amount / uniteParObjet)`, plafonné à 8.

Un nœud qui **rétrécit** se lit comme une erreur de perspective. Un nœud qui
**perd des objets** se lit comme un nœud récolté. C'est la seule règle qui
compte ici, et elle se branche directement sur `harvestNode(id, qty)` : la
quantité retirée retire des objets, pas des centimètres.

Une graine prélevée disparaît de l'épi **d'abord**, du tas au sol ensuite :
on vide le haut avant le bas, parce que c'est le haut qu'on voit de loin.

### 5b. Les trois choses qui changent à `amount === 0`

Par ordre de vitesse de lecture :

1. **Le halo miel s'éteint.** C'est le signal instantané et il ne coûte rien :
   le halo est déjà piloté par nœud. Un nœud épuisé n'est pas interactif, donc
   il ne porte pas le signal d'interactivité. Pas de croix, pas de gris, pas
   de texte.
2. **Le trait qui définissait l'espèce disparaît** — et il *disparaît*, il
   n'est pas recoloré :
   - `graine` : l'épi est **nu**. Une tige courbée qui ne porte plus rien, et
     qui se **redresse** de 40 % (elle ployait sous la charge, §2b) ;
   - `brindille` : la cassure claire `#C6A874` **n'est plus là** — il ne reste
     que le cœur sombre et grisé ; c'est du bois mort depuis longtemps ;
   - `miellat` : plus de gouttes, plus de pucerons, et la tige se redresse
     elle aussi.
3. **La valeur descend et la chroma avec.** Sur ce qui reste :
   `lerp(couleur, #6B6455, 0.55)` puis **× 0,82 de valeur**. `#6B6455` est un
   gris-brun neutre : c'est la teinte vers laquelle *tout* ce qui est mort
   dans ce jeu doit tendre, et elle est déjà celle du dépotoir.

Le redressement de la tige aux points 2a et 2c mérite d'être souligné : c'est
**la même géométrie avec un seul paramètre changé** (`lean`), donc gratuit, et
c'est un mouvement — le joueur voit l'objet réagir à ce qu'il vient de faire.
Une transition sur **0,8 s** suffit.

### 5c. Ce qu'il ne faut pas faire

- **Pas de repop clignotant, pas de compte à rebours.** `api-monde-gameplay.md`
  §3 dit « pas de repop pour l'instant ». Un nœud épuisé est une **trace de
  l'histoire du joueur sur la carte**, et à l'échelle d'une fourmi c'est une
  très bonne chose : on reconnaît le chemin qu'on a déjà fait.
- **Pas de contour.** `charte-stylisation.md` §3 : le contour est réservé au
  vivant. Une ressource n'en porte pas, épuisée ou non.

---

## 6. `seed_albedo` — la seule texture de ce document

`game/src/assets/textures/seed/seed_albedo.png`, générée par
`npm run gen:textures`. Convention et pipeline : `pipeline-textures.md`.

**64 × 64, et c'est un choix par matériau, pas un raccourci.** Une graine fait
7 unités de long et prend `worldPerTile = 6` : elle ne montre jamais plus de
trois quarts d'une tuile. À cette densité, 64² donne déjà plus de texels par
pixel écran que le sol de la pelouse n'en reçoit. `pipeline-textures.md` §2
demande que tout écart au 128² soit délibéré — celui-ci l'est.

Ce que ça coûte, les deux chiffres étant différents et souvent confondus :

| | Fichier committé | VRAM décompressée + mipmaps |
|---|---|---|
| Un albédo 128² | 16-21 Ko | ~87 Ko |
| **`seed` en 64²** | **5,3 Ko** | **~22 Ko** |

Le harnais (`verify-terrain.mjs`, ligne `texKB`) mesure la **VRAM**, et c'est
de là que vient le plafond de 427 Ko cité dans `PROGRESS.md` pour les cinq
textures branchées. Brancher `seed` le porte à **~449 Ko, soit +5 %** — un
septième matériau au quart du coût d'un sixième 128². C'était le prix
d'entrée à payer ou pas ; à 64² il se paie. (`lawn-soil` a par ailleurs perdu
5,4 Ko *de fichier* dans la passe du défaut 1, mais pas un octet de VRAM :
la résolution n'a pas bougé.)

**Isotrope, délibérément.** La peinture évidente pour une graine, ce sont des
stries longitudinales — et c'est la mauvaise ici, pour la raison donnée en §2a
(projection triplanaire). Ce que porte la texture, c'est ce qu'un tégument a
réellement de près : des **cellules de testa** en polygones peu profonds (5 en
travers d'une tuile, donc ~4 sur une graine), un **réseau de fissures** entre
elles, et des mouchetures sombres. Chaque cellule a sa lèvre claire côté
lumière et sa ligne de contact de l'autre — la grammaire à deux traits de tout
le set (`charte-stylisation.md` §5).

**Pas de `chromaKeep()`**, contrairement à `lawn-soil` : la couleur sommet
d'une graine est **une seule valeur** choisie à la pose, pas une carte
sol/mousse, donc il n'y a pas de deuxième balayage de teinte avec lequel la
texture pourrait se multiplier. La leçon du défaut 1 s'applique aux surfaces
qui ont déjà leur propre carte de teinte, pas à tout.

**Vérifié moi-même** : PNG relu agrandi ×4 (le tégument se lit comme dur et
craquelé, pas comme du bruit — le premier jet ressemblait à du liège et a été
refait), et pavage mesuré numériquement — raccord horizontal ×0,73, vertical
×0,94 de l'écart moyen entre colonnes/lignes adjacentes, soit dans la bande
0,70-1,44 déjà retenue comme « pas de raccord » pour les six textures
précédentes.

Elle sert **aussi au granier souterrain** (`nestDecor.js`, les monticules de
graines de `rooms.granary`, aujourd'hui des sphères de couleur sommet) : un
matériau, deux contextes, comme `stone`.

---

## 7. La fondation

`ambiance-prologue.md` §2 a déjà tranché le fond : le mécanisme (`founded`,
jumeau d'`outside`), les trois choses qui basculent, et la séquence
souterraine plan par plan. Ce qui suit ne le refait pas — c'est **ce qu'on
voit à la surface**, que ce document-là ne couvrait pas, et **le point de
déclenchement**, qui n'était pas fixé.

### 7a. Le point de déclenchement : la première ponte, pas le premier coup de pelle

`ambiance-prologue.md` §2a anime `founded` sur 6 s à partir de `foundingAt`.
**`foundingAt` doit être posé au plan 5 de §2c** — la première ponte, quand la
première lampe chaude s'allume —, pas au moment où `foundNest()` creuse.

C'est l'arbitrage important de cette section. Si le monde s'éclaire pendant que
la reine creuse, la récompense est l'*excavation*. S'il s'éclaire pendant
qu'elle est enfermée dans le noir avec son premier œuf, alors **le joueur
ressort dans un monde qui a changé sans qu'il le voie changer** — et il le
découvre en même temps qu'il voit, pour la première fois depuis dehors, la
lampe chaude de la bouche (`ambiance-prologue.md` §2b). Les deux révélations
tombent au même instant, sur le trajet de remontée, et c'est le seul endroit
du prologue où ça peut arriver.

Conséquence de câblage : `foundNest()` ne déclenche pas la bascule ; il ouvre
la séquence. La bascule est déclenchée par l'événement de ponte.

### 7b. Avant le premier coup : l'ellipse arrête de pulser

`ambiance-prologue.md` §3f : ellipse miel, opacité 0,25, pulsée à ~0,5 Hz sur
± 15 %, rayon 6 → 14 selon la qualité.

Ajout : à l'instant où le joueur valide (`foundNest()` renvoie `ok`),
**l'ellipse cesse de pulser, passe à un bord net et à 0,40 d'opacité pendant
0,4 s**, puis disparaît. Une chose qui pulse est une *proposition* ; une chose
immobile est une *décision*. Un uniform, deux valeurs, et le clic a un poids.

### 7c. Le creusement : trois états, pas une fondue

Comme partout ailleurs dans ce projet, trois paliers plutôt qu'un dégradé
continu (`charte-stylisation.md` §2). Toutes les **1,3 s**, un état :

| État | Le trou | Le déblai |
|---|---|---|
| 1 | dépression de 3 unités de profondeur, 10 de large | un croissant de terre côté aval, 1,5 de haut |
| 2 | 8 de profondeur, 14 de large, le fond n'est plus éclairé | anneau complet, 3 de haut |
| 3 | puits noir, 16 de large — **on ne voit plus le fond** | **monticule**, crête à **48-56 unités** |

Le passage de « on voit le fond » à « on ne voit plus le fond » est ce qui
transforme un creux en entrée. Il doit tomber à l'état 3, pas avant.

Crête à 48-56 : au-dessus du plafond de l'herbe courte (40, `herbe-brins.md`
§3) et sous les tiges hautes. Le monticule dépasse donc l'herbe **partout sur
la carte**, ce qui est la demande de #33 (« l'entrée doit être repérable
depuis la surface »), sans jamais devenir une tour.

### 7d. La couleur du déblai — le signal le plus fort de toute la scène

La terre remontée de 30 unités de fond n'est ni sèche ni pâle. Elle est
**sombre et humide** : la famille « terreau » déjà définie en
`ambiance-prologue.md` §3a, `#4A351C`, avec **`mossAmt = 0`**.

Un anneau sombre de ~18 unités de diamètre sur une pelouse pâle, visible de
n'importe où, et qui dit une chose vraie : *ça vient d'en dessous*. C'est
gratuit — c'est la même fonction de couleur sommet que le rayon piétiné de
`ambiance-prologue.md` §2b — et c'est plus lisible que n'importe quel effet.

Le déblai frais **s'éclaircit ensuite**, en même temps que `founded` monte :
`lerp(#4A351C, #6B5433, founded)` sur les 6 s. La terre sèche pendant que le
monde s'ouvre. Un `lerp` de plus dans un bloc qui en fait déjà cinq.

### 7e. La bouche, vue de dehors, à hauteur de fourmi

- **Le trou est orienté à l'opposé du soleil.** Après la bascule le soleil est
  à 51° depuis `(30, 45, 20)` (`charte-stylisation.md` §1a) : l'ouverture doit
  regarder le quadrant `−x/−z`, de sorte qu'on voie **un trou noir avec une
  lumière chaude dedans**, et pas une pente éclairée. Le contraste est le
  sujet ; l'orientation est ce qui le donne gratuitement.
- La lampe locale de la bouche est déjà spécifiée : `[1.05, 0.62, 0.24]`
  (`ambiance-prologue.md` §2b). Rien à ajouter.
- **Un couloir dégagé de 22 unités** devant l'ouverture, sans herbe — la même
  règle de rejet que la ligne de vue de sortie déjà en place dans
  `grass.js`. Une bouche derrière un mur d'herbe n'est pas un repère.

---

## 8. Ce que je demande

À **Atta** (`world/**`) :

1. Les trois nœuds aux dimensions de §2 / §3 / §4, **silhouette d'abord** :
   épi courbé, barre en diagonale, chapelet en hauteur. Si un seul détail doit
   sauter, que ce soit la texture, jamais la silhouette.
2. `amount` pilote un **compte d'objets visibles**, jamais une échelle (§5a).
   Et à `amount === 0` : le halo s'éteint, le trait d'espèce disparaît, la
   tige se redresse sur 0,8 s (§5b).
3. Brancher `seed_albedo` dans `texturing.js` — `worldPerTile = 6`,
   `colorSpace = SRGBColorSpace` comme les six autres — sur la graine **et**
   sur les monticules du granier (§6).
4. `roughness: 0.22` sur les seules gouttes de miellat (§4). Elles restent
   non-émissives.
5. `foundingAt` posé à la **première ponte**, pas à `foundNest()` (§7a). C'est
   le point de ce document qui change le plus la sensation, et c'est une ligne.
6. Le déblai en `#4A351C` / `mossAmt = 0`, crête à 48-56, séchant vers
   `#6B5433` sur les 6 s de `founded` (§7c, §7d) ; ouverture orientée
   `−x/−z` et couloir dégagé de 22 unités (§7e).

À **Cataglyphis** (`player/**`) :

7. Rayons d'interaction : `graine` **12**, `brindille` **14**, `miellat`
   **11** — tous au-dessus de la portée de préhension de la reine (9,9), pour
   qu'aucun ramassage ne demande de se placer au pixel près.
8. Le **halo miel pulsé** appartient à la charte §3 et vaut pour toute
   ressource dont `amount > 0` : `#E6B558`, opacité 0,25, ~0,5 Hz sur ± 15 %.
   Même signal que l'ellipse de site — c'est voulu, c'est un seul vocabulaire.
9. L'ellipse qui se fige à la validation (§7b).

---

## 9. Délibérément pas fait

- **Aucune texture pour la brindille ni pour le miellat.** `bark_albedo`
  existe et couvre la première ; une goutte de 3,4 unités ne montrera jamais
  un texel, sa lecture est entièrement dans la forme et la spéculaire.
- **Aucun émissif sur le miellat** — raison en §4 : le monopole de la lumière
  chaude extérieure appartient à la bouche du nid.
- **Aucune icône, aucun marqueur au-dessus des nœuds.** Tout ce document est
  la réponse à « comment on s'en passe ».
- **Pas de mode macro, pas de coupe du nid** (#34) : la fondation est vue
  depuis le sol, à hauteur de fourmi, comme le reste du prologue.
- **Aucune modification de `world/**`, `player/**`, `core/**`, `main.js`.**

---

## 10. Ce qui reste à confirmer sur capture

Rien de ce document n'a encore été vu dans le moteur : aucun nœud de ressource
n'existe dans `world/` à ce jour. `seed_albedo` a été relue comme image et
vérifiée numériquement pour le pavage, pas rendue sur une surface. À
reconfirmer dans cet ordre :

1. **La lisibilité des trois silhouettes à 40 unités, à travers l'herbe.**
   C'est le critère qui décide si ce document a raison ou non, et il ne se
   juge que sur une capture prise à hauteur de fourmi, pas de dessus.
2. La densité de `seed_albedo` à `worldPerTile = 6` : viser **4 cellules de
   testa en travers d'une graine**. Au-delà de 6, ça redevient du grain.
3. Le contraste de la cassure claire de la brindille (`#C6A874`) contre
   l'écorce, sous la lumière affaiblie du prologue et pas seulement de jour.
4. La crête du monticule à 48-56 : dépasse-t-elle vraiment l'herbe depuis
   l'autre bout de la carte, ou le brouillard (`near/far 90/420`) l'avale-t-il
   avant ?
