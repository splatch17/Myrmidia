# Charte de stylisation — couleur, lumière, contour, matériaux

Réponse au ticket [#25](https://github.com/splatch17/MYRMIDIA/issues/25). Cible de rendu actée avec le porteur du projet : **stylisé façon World of Warcraft, à notre manière** — texture peinte à la main lisible avant réalisme, silhouettes fortes, couleur qui porte l'information.

> **Prolongée par [`design/ambiance-prologue.md`](ambiance-prologue.md)** (ticket #2, round suivant) : ambiance du prologue reine-seule, bascule à la fondation, langage du choix de site, perspective atmosphérique du lointain. Ce document-ci reste la référence pour la pelouse « colonie fondée » et pour le nid ; trois points y sont amendés — `bark` v3 et `chitin` v2 (§5a/§5b du nouveau document) remplacent les versions décrites en §5 ci-dessous, et la recommandation de pack CC0 pour l'écorce en §6 est retirée.

Ce document se pose **au-dessus** de `design/pipeline-textures.md` (convention de nommage, budget 128×128, encodeur PNG maison, pipeline couleur Three.js) et ne le refait pas. Ancrage palette : README racine — `#E0A752` chitine · `#8FAE5E` mousse · `#E07356` rouille · `#E6B558` miel · `#9DB0D8` soie · `#C497D9` spore.

---

## 0. Ce que montrent les captures (état au moment d'écrire)

Captures prises sur le build réel (serveur Vite, Chromium ANGLE/D3D11, 1280×720, ~60 fps mesuré) à six points de vue : chambre de la reine, galerie, bouche vue de l'intérieur, pelouse, pelouse large, pied de l'arbre. Ce que la charte corrige, constat par constat :

1. **Tout le jeu est peint dans la même famille de bruns.** Ce n'est pas une impression : `#5a4226` / `#332412` / `#6d5130` sont littéralement les trois mêmes constantes utilisées par `underground.js`, `nestDecor.js`, `tree.js` **et** `terrain.js`. Toutes les surfaces du jeu plafonnent autour de `#5a4226`. D'où la bouillie.
2. **Les ombres tombent sur du noir.** Le seul remplissage d'ombre est `hemi.groundColor = 0x2a2015` à intensité 0.6 : un brun quasi noir. Sur la capture au pied de l'arbre, une face de caillou à l'ombre est littéralement `#000000`. C'est le point qui fait ou défait un stylisé, et c'est aujourd'hui le défaut le plus coûteux.
3. **La pelouse n'est pas ensoleillée, elle est vaseuse.** Sol olive-brun (mélange de `#6d5130`/`#463320` et `#4c5f2f`/`#7d9c4e`), brins d'herbe tous à la même valeur sombre, brouillard beige `#d9c39a` qui poussière l'horizon. On est à l'opposé d'Elwynn : très loin en saturation, très loin en valeur.
4. **La fourmi ne se détache pas.** Brun sur brun-olive dehors, brun sur paroi brune dedans. Pour un MMORPG dont le README pose « lisibilité en combat avant réalisme photo », c'est un problème de fond, pas de finition.
5. **La bouche du tunnel n'est pas un événement.** Vue de l'intérieur, elle donne sur un mur vert plat. Sa lampe locale (`{ p: [0,5,3], c: [1.30, 0.90, 0.40] }`) est **chaude, exactement comme les huit autres** : rien ne signale que c'est la sortie plutôt qu'un champignon de plus.
6. **Les lampes fongiques sont du plastique.** Les chapeaux sont un émissif de couleur sommet uniforme sur une sphère lisse : aucune matière, aucune surbrillance, et leur flaque de lumière ne se lit presque pas sur la paroi.
7. **Zéro texture nulle part.** Le sol de la chambre de la reine, le monticule, les rochers de la pelouse sont des dégradés lisses de plusieurs milliers de pixels. Les deux albedo déjà produits (`bark`, `tunnel-dirt`) ne sont branchés sur rien.

---

## 1. Charte de couleur par zone

Deux zones, deux ambiances, commutées par le scalaire `outside` **qui existe déjà** dans la boucle de `game/src/main.js` (`clamp((camera.position.z + 24) / 40, 0, 1)`). Aujourd'hui il commute le brouillard, le fond et l'exposition ; il doit commuter aussi l'hémisphérique. Coût par frame : trois `lerp` de couleur. Rien d'autre.

### 1a. Pelouse — « Jardin de Rosée » (réf. Elwynn / Mulgore)

| Paramètre | Actuel | **Cible** | Pourquoi |
|---|---|---|---|
| Soleil — couleur | `#FFE3A8` | **`#FFD98A`** | Un or plus assumé. Un soleil quasi blanc ne teinte rien ; c'est la teinte du soleil qui donne au vert éclairé son jaune. |
| Soleil — intensité | 2.2 | **2.5** | Plus d'écart éclairé/ombré. Le contraste de valeur est ce qui fait le look, avant la texture. |
| Hémisphérique — ciel | `#FFF2D0` | **`#BFD8F5`** | **Le changement le plus important de la charte.** Le remplissage doit être *froid* pour que la clé chaude ait un complémentaire. Chaud sur chaud = boue, quelle que soit l'intensité. |
| Hémisphérique — sol (rebond) | `#2A2015` | **`#6E6A38`** | Le rebond vient d'une prairie verte, pas d'un trou. Un rebond olive clair remonte le dessous des feuilles et des cailloux. |
| Hémisphérique — intensité | 0.6 | **0.85** | Les ombres doivent être *remplies*, pas creusées. |
| Brouillard — couleur | `#D9C39A` | **`#AFC8D8`** | La perspective aérienne tire vers la couleur du ciel, jamais vers le beige. Le beige actuel poussière l'horizon et tue le bleu. |
| Brouillard — near / far | 60 / 400 | **90 / 420** | À l'échelle de la fourmi, une brume qui démarre à 60 unités aplatit déjà le plan intermédiaire. |
| Fond (ciel) | `#8FB6CF` | **`#9CC6E4`** | Un cran plus lumineux et plus saturé, pour que la fente de ciel entre les brins compte comme une valeur claire. |
| Exposition | 1.05 | **1.15** | ACES écrase le haut ; un peu plus d'exposition pousse les verts éclairés dans la zone saturée au lieu de la zone olive. |
| **Couleur d'ombre visée** | (noir) | **`#5C6488`** | Voir §1c : ce n'est pas un uniform, c'est un résultat. |

### 1b. Nid — « Fourmilière-Mère » (réf. Zangarmarsh)

| Paramètre | Actuel | **Cible** | Pourquoi |
|---|---|---|---|
| Soleil | — | **ne pas commuter** | Sous terre le soleil est déjà atténué analytiquement par `nestDaylight()` (0.12 au fond). Commuter sa *couleur* changerait aussi la pelouse quand la caméra est dans la bouche, avec les deux zones dans le cadre. On commute l'hémisphérique, le brouillard, le fond et l'exposition — pas la clé. |
| Hémisphérique — ciel | `#FFF2D0` | **`#4A5C86`** | Bleu de caverne. C'est lui qui rend les parois non éclairées bleu-violet au lieu de brun-noir. |
| Hémisphérique — sol | `#2A2015` | **`#241F33`** | Violet sombre, pas brun sombre. Même valeur, hue opposée aux lampes. |
| Hémisphérique — intensité | 0.6 | **0.55** | Le nid doit rester le pôle sombre. On change la *teinte* du noir, pas sa quantité. |
| Brouillard — couleur | `#140E07` | **`#191A2E`** | Le fond de galerie s'éloigne dans du bleu-noir pendant que les lampes proches restent ambrées. C'est exactement le contraste chaud/froid de Zangarmarsh, obtenu gratuitement par le brouillard. |
| Brouillard — near / far | 4 / 120 | **6 / 135** | 4 unités, c'est déjà sur les pattes de la fourmi. |
| Fond | `#0A0805` | **`#0C0B16`** | Un noir violet reste de l'air ; un noir chaud est un trou dans le mesh. |
| Exposition | 1.35 | **1.28** | Le remplissage froid remonte déjà la perception ; on redescend un cran pour garder le nid sombre en valeur tout en le gardant coloré. |
| **Couleur d'ombre visée** | (noir chaud) | **`#2E2A44`** | Indigo désaturé, dérivé de spore `#C497D9` × 0.22 poussé vers le bleu. |

### 1c. La couleur d'ombre n'est pas un uniform : c'est un résultat

Il n'y a pas de champ « shadow color » dans Three.js. Une ombre portée est une zone d'où la lumière directe est absente : sa couleur est **entièrement** celle du remplissage. Les deux leviers qui produisent `#5C6488` dehors et `#2E2A44` dedans sont donc :

1. la couleur et l'intensité de l'hémisphérique (§1a/§1b) — pour l'**ombre portée** (shadow map) ;
2. le plancher de la rampe toon (§2) — pour l'**ombre propre** (face détournée de la lumière).

**Ils doivent tomber au même endroit.** Une ombre portée nettement plus sombre que l'ombre propre est le bug de stylisation classique : le sol sous un caillou et le flanc du caillou racontent deux lumières différentes.

**Critère de vérification, sur capture :** échantillonner un pixel dans l'ombre portée de l'arbre et un pixel sur la face détournée d'un caillou en plein soleil. Les deux doivent tomber à **25-32 % de la valeur d'une surface éclairée voisine**, et à **moins d'une demi-valeur l'un de l'autre**. Si l'ombre portée est plus sombre, deux leviers, dans cet ordre : monter `hemi.intensity` (0.85 → 1.0) ; puis descendre le plancher de `toon_ramp-lawn` (0.30 → 0.24, régénérer). Ne pas éclaircir le soleil pour compenser, ça écrase le haut et on retombe dans le délavé.

### 1d. Lampes locales du nid — deux corrections chiffrées

Le rig de `game/src/world/lighting.js` est bon (beaucoup de petites lampes, 8 slots au plus proche). Les radiances, elles, ont un problème : **elles sont toutes chaudes**, donc rien n'alterne.

| Lampe | Actuel | **Cible** | Pourquoi |
|---|---|---|---|
| Bouche du tunnel (`underground.js`, `name: 'mouth'`) | `[1.30, 0.90, 0.40]` | **`[1.15, 1.20, 1.35]`** | **C'est le « moment de passage » demandé par le ticket, en une ligne.** La lumière qui entre par la bouche, c'est le *jour* : elle doit être froide. Une fente bleue au fond d'une galerie ambrée se lit comme une sortie à trente unités de distance. Aujourd'hui, ambrée comme tout le reste, elle se lit comme un champignon de plus. C'est une lampe locale, donc ça ne touche pas l'éclairage extérieur. |
| `SPORE_LIGHT` (`nestDecor.js`) | `[1.15, 0.50, 1.45]` | **`[0.72, 0.48, 1.75]`** | Le magenta actuel × un albedo de paroi brun-chaud donne un marron-lie-de-vin : les deux teintes se renforcent et la lampe se perd. Un bleu-violet *combat* la teinte de l'albedo et se lit immédiatement comme une autre lumière. Le pôle féerique y gagne, sans changer une seule couleur de chapeau. |
| `GLOW_LIGHT`, lampes de couvain / granier / moisissure | — | **inchangées** | Le pôle chaud de la chambre de la reine est juste. C'est le contraste avec les deux lampes froides ci-dessus qui manquait. |

Et une correction d'albedo, hors lampes : `C_ROOTLET = '#7a5f38'` → **`#5E4526`**. Sur les captures de galerie, les radicelles pendantes ressortent en tiges rose-saumon plus claires que la paroi et prennent le regard avant la fourmi. Elles doivent être du décor, pas un accent.

### 1e. Albedos extérieurs — remonter la pelouse dans le vert

Les couleurs de `terrain.js`, `grass.js` et `tree.js` sont trop sombres et trop désaturées d'environ 35 % pour la cible Elwynn. Cibles :

| Constante | Fichier | Actuel | **Cible** |
|---|---|---|---|
| `C_SOIL_A` | `terrain.js` | `#6d5130` | **`#86673B`** |
| `C_SOIL_B` | `terrain.js` | `#463320` | **`#5A4529`** |
| `C_MOSS_A` | `terrain.js` | `#4c5f2f` | **`#5F8034`** |
| `C_MOSS_B` | `terrain.js` | `#7d9c4e` | **`#9DBE58`** |
| `C_MOSS_A` (base des brins) | `grass.js` | `#4c5f2f` | **`#5A7331`** |
| `C_MOSS_B` | `grass.js` | `#7d9c4e` | **`#8FB055`** |
| `C_MOSS_TIP` | `grass.js` | `#a8c774` | **`#C6DC82`** |
| `C_LEAF_A` | `tree.js` | `#5d7a37` | **`#6C8E3C`** |
| `C_LEAF_B` | `tree.js` | `#93b25c` | **`#AECB6E`** |

**Articulation avec le branchement d'Atta (#26).** `game/src/world/texturing.js` normalise chaque albedo par sa propre moyenne linéaire, mesurée à la volée sur l'image décodée : la texture n'apporte donc que sa *variation*, et la couleur moyenne d'une surface reste exactement sa couleur sommet. C'est le bon arbitrage — toute la lisibilité du souterrain vit dans les couleurs sommet (ombre de creux cuite, palette par salle, `cavityMul` du dépotoir), et un multiply brut par un brun moyen les diviserait toutes par deux. **Conséquence pour cette charte : les valeurs claires des textures (`DIRT_LT` etc.) ne remonteront pas la valeur du monde — c'est la couleur sommet qui la porte, donc ce sont bien les cibles du tableau ci-dessus qu'il faut appliquer, texture ou pas.** Et le fait que la normalisation soit *mesurée* et non codée en dur est ce qui me laisse repeindre une texture sans casser la palette de personne : à conserver tel quel.

Enfin, **la translucidité des brins**, qui n'existe pas et qui change tout sur une pelouse ensoleillée : un brin à contre-jour doit s'allumer en jaune-vert. À injecter dans le shader de `grass.js`, coût nul :

```glsl
// contre-jour : le brin s'allume quand on regarde vers le soleil à travers lui
float back = pow(max(dot(normalize(vViewDir), -uSunDir), 0.0), 3.0);
outgoingLight += back * 0.55 * vec3(0.78, 0.92, 0.34) * vTipMask;
```

### 1f. Règle de substrat — une créature ne peut pas être à la valeur de son sol

Round 15, mesuré sur capture (nid fondé en (140, 90), rig `RIG_FOUNDED`, échantillon médian d'un disque de 9 px) : **reine L = 27,6 contre le tertre L = 31,9 sur lequel elle se tient** — rapport 0,87. Elle est *plus sombre* que son sol, teinte comprise (r/g 2,5 pour le sol, 2,35 pour elle). Le contour l'attrape, la peinture non. C'est le défaut n°4 de `PROGRESS.md`, chiffré.

L'origine n'est pas l'éclairage, elle est dans l'albedo : la carapace est peinte **sous sa propre entrée de palette**. Chitine de référence `#E0A752` = **L 173** ; `queen.chitinA` = `#b07226` = **L 122**, soit 30 % en dessous. Les valeurs sombres sont pires : `queen.chitinB` et `queen.limb` sont à **L 65**, contre un tertre de terre fraîche à **L 85** et une paroi de galerie à **L 55-70**.

**La règle.** Deux substrats de référence, en luminance d'albedo : **terre remuée L 85** (`C_SOIL_A`, tertre, sol de chambre) et **paroi de galerie L 60**. Pour chaque caste, contre le substrat sur lequel on la voit le plus souvent :

- valeur la plus claire de la carapace ≥ **1,8×** le substrat ;
- valeur la plus sombre ≥ **1,1×** — une ombre est une couleur, pas un trou (§1c), et une carapace qui descend sous son sol est un trou.

Cibles, à câbler dans `player/avatar.js` (`colors: {...}`). La hiérarchie de caste passe de « la creuseuse est sombre » à « la creuseuse est **terne** » : elle reste la moins claire des trois (124 < 146 < 169) mais elle cesse d'être sous la terre qu'elle creuse.

| | Actuel | L | **Cible** | **L** |
|---|---|---|---|---|
| `queen.chitinA` | `0xb07226` | 122 | **`0xdda254`** | **169** |
| `queen.chitinB` | `0x5e3d16` | 65 | **`0x8f5a25`** | **97** |
| `queen.limb` | `0x5e3d16` | 65 | **`0x94612a`** | **104** |
| `queen.mandible` | `0xb07226` | 122 | **`0xe8c078`** | **195** |
| `worker.chitinA` | `0x8b5a24` | 97 | **`0xc98a3c`** | **146** |
| `worker.chitinB` | `0x432d15` | 48 | **`0x855828`** | **94** |
| `worker.limb` | `0x6b4420` | 74 | **`0x8a5b28`** | **97** |
| `digger.chitinA` | `0x6d4520` | 75 | **`0xa8763a`** | **124** |
| `digger.chitinB` | `0x2f2010` | 34 | **`0x805426`** | **90** |
| `digger.limb` | `0x4a2f16` | 51 | **`0x7a5227`** | **87** |
| `worker.mandible`, `digger.mandible`, tous les `eye` | — | — | **inchangés** | — |

Le rapport clair/sombre par caste reste entre 1,4 et 1,75, donc le corps continue de se modeler : on remonte le plancher, on n'aplatit pas.

**Critère de vérification :** échantillonner un pixel du thorax et un pixel du sol à un corps de distance, dans la même image. La fourmi doit être **au moins 1,6× le sol**. En dessous, c'est l'albedo qu'on corrige, jamais la lumière — éclaircir la scène remonte les deux ensemble et ne change rien au rapport.

### 1g. Valeurs de l'entrée du nid, vue de la pelouse

Mesuré au-dessus du nid fondé, `RIG_FOUNDED` : pelouse **L 135**, tertre **L 34** (0,25× la pelouse) — ce contraste-là est **juste et ne doit pas bouger** : 4:1 en valeur plus un saut de teinte jaune-vert → orange, lisible à 90 unités.

Ce qui manque est la bouche. Cible : **la bouche est l'objet le plus sombre de la carte de surface**, L ≤ 12 — soit ≥ 3:1 contre le tertre et ≥ 11:1 contre la pelouse. L'ombre portée d'un brin plafonne autour de L 25 : un trou à L 12 est alors le seul vrai noir du plein air, et le noir sur une pelouse claire se lit comme de la profondeur sans une ligne d'interface.

Deux conséquences :

1. **`WARM_MOUTH_LIGHT` (`world/founding.js`) descend au lieu de monter.** Aujourd'hui `[1.05, 0.62, 0.24]` posée à `mouthY + 1.0`, c'est-à-dire *au-dessus* de la lèvre : elle éclaire le bord même qui doit rester noir. Cible : **`[0.85, 0.48, 0.17]` à `mouthY - 2.5`**. Son rôle n'est pas d'éclairer l'entrée, c'est d'être une lueur *au fond* d'un trou noir — « habité » plutôt que « fosse ouverte ». Quelques dizaines de pixels de braise ne cassent pas la règle L ≤ 12 sur l'ouverture.
2. **La silhouette doit être une encoche, pas un anneau.** `RIM_H = 1.6` contre une reine de rayon 3,3 : la lèvre fait la moitié d'un rayon de reine, donc à hauteur d'œil de fourmi elle n'occulte rien et le cratère se lit comme une plaque posée à plat (capture `A2`), tandis que vue de dessus c'est un beignet (capture `C1`). Un trou dans une surface plate est invisible depuis un point de vue plat ; **une encoche sombre dans un bord surélevé ne l'est pas**. Donc : `RIM_H` **1,6 → 4,0** (1,2 rayon de reine, assez pour masquer ses pattes depuis l'extérieur), et la rampe de #40 perce cette lèvre **d'un seul côté**, en une entaille de 8 à 10 unités de large orientée sur la pente horizontale déjà calculée par `buildShell` (`az`). Le cratère devient un **C**, pas un **O**.
3. Les parois de l'entaille sont la terre la plus sombre du tertre : **L ≈ 20 en haut de la coupe, tombant vers L ≤ 12 à l'entrée de la gorge**. C'est ce dégradé qui fait lire la rampe comme *descendant*, plutôt que comme une bande peinte sur le tertre.

Enfin, le bord du tertre se termine aujourd'hui sur un cercle géométrique net (capture `C1`) : sur le quart extérieur de `MOUND_R`, faire tendre la couleur du tertre vers le sol de la pelouse et descendre le mélange vers `C_CHITIN` de **0,12 → 0,04**. Un déblai s'amincit, il n'est pas estampillé.

### 1h. La première galerie — trois lampes, pas une

Mesuré dans la galerie de #39, caméra à 10 unités de la chambre, regard vers le fond : plafond **L 1,4**, paroi opposée à la lampe **L 3,8**, paroi côté lampe **L 22**, sol au loin **L 44**, et un **disque de ciel à L ≈ 200** au bout du tunnel. La galerie n'est pas « sombre », elle est **bicolore** : 60 % de l'image sous L 8, et un trou de jour de 5,5 unités de large en face. Un tunnel où l'on n'y voit rien n'est pas une récompense — mais l'exposition n'est pas le levier, la répartition l'est.

Cible : **aucune surface que le joueur doit lire ne descend sous L 18**, les parois tiennent **L 25-90**, les flaques de lampe montent à **L 120-150**. Cinq pour un à l'intérieur du tunnel : encore franchement sombre à côté d'une pelouse à L 135, mais lisible.

Dans l'ordre d'effet :

1. **Boucher le fond de `buildGallery` (`world/founding.js`).** Les anneaux sont cousus entre eux et le dernier n'a pas d'éventail de capuchon — le tube est donc **ouvert sur le ciel**, rayon `GALLERY_R × 0,55` = 2,75. Aucun réglage de lumière ne vaut tant que la valeur la plus haute de l'image est un morceau de ciel au bout d'une galerie. Ce n'est pas un chiffre de DA, c'est un capuchon de triangles.
2. **`AMBIENT_FLOOR` (`world/lighting.js`) 0,30 → 0,55.** C'est le seul terme qui touche le plafond et la paroi détournée, qu'aucune lampe ne regarde. Mesuré : ces surfaces sont du `indirectDiffuse × 0,30` pur, donc elles montent au prorata — paroi détournée 3,8 → ~7, plafond 1,4 → ~2,6. **Ça ne suffit pas et ça ne peut pas suffire** : le remplissage souterrain vaut `hemiSky × 0,85 × plancher`, avec un hémisphérique réglé pour une pelouse. Au-delà de ~0,6 le nid cesse de se lire comme souterrain ; 0,55 est le plafond de ce levier. Le reste doit venir des lampes, ce qui est la doctrine déjà actée (§1d, beaucoup de petites lampes locales).
3. **Trois lampes le long de la galerie, à la place de l'unique lampe de fond.** L'atténuation est `1/(1 + 0,017 d²)` : à 23 unités elle vaut **0,10**, à 46 unités **0,027**. Une seule lampe posée au bout d'un tunnel de 46 unités livre donc 10 % de sa radiance au milieu et 2,7 % à l'entrée — c'est *tout* le noir mesuré, et aucune couleur ne le rattrapera. Aux abscisses **t = 0,18 / 0,55 / 0,92** de `GALLERY_LEN`, à `c.y + GALLERY_R × 0,55 + 1,5` (juste sous l'axe du plafond : la flaque tombe au sol, le rebond prend le plafond) :

| t | Radiance | Rôle |
|---|---|---|
| 0,18 | **`[0.95, 0.56, 0.22]`** | le seuil, côté chambre |
| 0,55 | **`[0.72, 0.42, 0.16]`** | le creux — volontairement la plus faible : c'est le noir *entre* les flaques qui fait le lieu |
| 0,92 | **`[1.15, 0.66, 0.24]`** | le front de taille, point le plus chaud de la galerie |

Au pire point (11 unités d'une lampe) l'atténuation vaut 0,33, soit **3,3× le milieu de tunnel actuel**. Coût : trois entrées de plus dans un pool qui n'en téléverse jamais que `LIGHT_SLOTS = 8`, les plus proches — zéro coût par image, pas de nouvelle passe.

**Et le dégradé raconte quelque chose, à l'envers du puits.** Le puits fait descendre le jour froid de la bouche vers la chambre (`nestDaylight`). La galerie, elle, part *à plat* de la chambre : le jour n'y entre jamais, donc son dégradé est entièrement fabriqué par les lampes, et il doit aller du **neutre-froid côté chambre vers le chaud du front de taille**. Entrer dans la galerie, c'est marcher vers la chaleur et vers le travail en cours — le même principe d'îlot chaud dans un couloir froid que la chambre de la reine, un cran plus bas.

Détail de propreté : la lampe du fond réutilise `WARM_MOUTH_LIGHT`, qui est spécifiée comme « le seul point chaud de la carte extérieure ». Lui donner sa constante, **`DIG_FACE_LIGHT = [1.15, 0.66, 0.24]`**, pour que le repère extérieur puisse bouger sans déplacer le tunnel.

---

## 2. Rampe de lumière (toon ramp)

**Livrée comme texture**, pas comme GLSL : `game/src/assets/textures/toon/toon_ramp-lawn.png` et `toon_ramp-nest.png`. C'est exactement ce que `THREE.MeshToonMaterial` consomme comme `gradientMap` — il échantillonne à `(dotNL * 0.5 + 0.5, 0)`, soit une coordonnée **half-lambert**, qui est déjà la bonne base : le terminateur n'atteint jamais zéro, donc les ombres sont *remplies* au lieu d'être écrasées. Autre bénéfice : la courbe appartient à la DA et s'itère sans toucher un shader.

### Spec de la courbe

| | Plancher (ombre) | Genou 1 | Plateau médian | Genou 2 | Haut (lumière) |
|---|---|---|---|---|---|
| **`ramp-lawn`** | **0.30** sur x ≤ 0.44 | 0.44 → 0.56 | **0.62** sur 0.56 ≤ x ≤ 0.70 | 0.70 → 0.80 | **1.00** |
| **`ramp-nest`** | **0.18** sur x ≤ 0.40 | 0.40 → 0.54 | **0.55** sur 0.54 ≤ x ≤ 0.66 | 0.66 → 0.82 | **1.00** |

(x = `dotNL * 0.5 + 0.5`. Genoux en `smoothstep`.)

**Trois paliers, pas deux.** Deux paliers, c'est du cel-shading japonais — explicitement hors cible. Ni quatre, ni un dégradé continu : ça redevient du lambert ordinaire. Ombre / médian / lumière, c'est la façon dont une texture peinte à la main est construite ; on construit la lumière de la même façon, et les deux se renforcent au lieu de produire une quatrième valeur que personne n'a choisie. **Les textures livrées ce round sont peintes sur cette même grammaire à trois valeurs** (fonction `tri()` du générateur) — c'est intentionnel et c'est la moitié de l'effet.

**Genoux à 0.10-0.14, pas 0.02.** En espace half-lambert, 0.12 correspond à environ 14-18° de normale. À 0.02, le terminateur est un trait d'encre dur (re-cel). À 0.12, il se lit comme une transition peinte, et surtout il **survit au facettage low-poly** : sur des faces plates, un genou dur transforme chaque arête de facette en bande visible.

**Deux rampes, une seule à adopter d'abord.** Commencer par `ramp-lawn` partout. Le nid a besoin d'un plancher plus bas (0.18 : moins de remplissage pour le remonter) mais d'un **plateau médian plus large**, pour que la lumière d'un champignon arrive en flaque large et douce plutôt qu'en point chaud serré — c'est la doctrine « beaucoup de petites lampes, chacune fait sa flaque » déjà actée, exprimée dans la rampe au lieu de l'atténuation. Passer à `ramp-nest` seulement si les flaques se lisent trop serrées sur une capture.

### Branchement (demande à Atta, §7)

`MeshToonMaterial` conserve ce dont le rig dépend : `vertexColors`, `flatShading`, `side`, `fog`, shadow maps, et les mêmes points d'injection `#include <lights_fragment_end>` / `#include <emissivemap_fragment>` que `applyNestShading()` et le matériau émissif utilisent déjà. Il perd `roughness`/`metalness` — sans objet, toutes les surfaces sont mates (`roughness: 0.95, metalness: 0`).

Paramètres de texture (la rampe est une **donnée**, pas une couleur) :

```js
ramp.colorSpace = THREE.NoColorSpace;   // défaut — surtout PAS SRGBColorSpace
ramp.minFilter = ramp.magFilter = THREE.LinearFilter; // genoux doux : on veut l'interpolation
ramp.generateMipmaps = false;           // une chaîne de mip lisserait les paliers à distance
ramp.wrapS = ramp.wrapT = THREE.ClampToEdgeWrapping;
```

La boucle de lampes locales de `lighting.js` utilise un `max(dot(normal, L), 0.0)` — un lambert dur. Pour que les lampes du nid suivent la même grammaire que le soleil, elle doit échantillonner la même rampe :

```glsl
float nl = dot(normal, Ld / max(d, 0.001));
float ramp = texture2D(uToonRamp, vec2(nl * 0.5 + 0.5, 0.5)).r;
nestSum += uLightCol[i] * ramp * att;
```

---

## 3. Langage de contour

**Tranché : aucun contour sur le décor. Contour uniquement sur ce qui est vivant.**

WoW n'a quasiment pas de contours et compense par la texture peinte — c'est précisément notre cible. Un contour uniforme partout tire vers le cel-shading japonais, hors cible, et coûte une passe plein écran (depth + normal) qu'on ne veut pas payer sur GPU intégrée. **Mais** notre problème de lisibilité est réel et documenté (§0.4) : à l'échelle de la fourmi, la caméra est très près du sol, le décor remplit tout le cadre, et l'avatar est brun sur brun. Le README pose la lisibilité en combat avant le réalisme. Donc :

| Objet | Traitement | Pourquoi |
|---|---|---|
| Fourmi joueuse, reine, futurs PNJ / créatures | **Coque inversée** (inverted hull) | Un dessin par créature, pas une passe plein écran. Détache l'avatar sans toucher au décor. |
| Objets interactifs (ressource ramassable, PNJ à qui parler) | **Rim pulsé miel `#E6B558`**, pas de coque | Le langage reste univoque : contour = vivant, halo doré pulsé = interactif. Deux signaux, deux formes. |
| Terrain, parois, herbe, rochers, champignons, arbre | **Rien** | C'est la texture et le contraste de valeur qui portent le décor (§4). Et l'herbe seule est plusieurs milliers d'instances : une coque inversée doublerait le draw le plus lourd du jeu pour rien. |

**Coque inversée — chiffres.** Matériau `side: THREE.BackSide`, extrusion du sommet le long de sa normale de

```
w = clamp(0.0017 * distance(caméra, objet), 0.06, 0.16)   // unités monde
```

Le terme proportionnel à la distance donne une épaisseur **constante à l'écran** d'environ **1,3 px en 1280×720 à 50° de FOV**, de la distance caméra minimale (10) au zoom maximal (85). Un contour en unités monde fixes disparaît en dézoomant, ce qui est pire que pas de contour du tout : il clignote. Les bornes évitent les deux dégénérescences (invisible en gros plan, gras comme un feutre à distance).

**Couleur du contour — jamais noir.**

| Zone | Couleur | Obtention |
|---|---|---|
| Pelouse | **`#393741`** | `mix(albedo × 0.20, #5C6488, 0.45)` — ardoise chaude |
| Nid | **`#241D22`** | `mix(albedo × 0.20, #2E2A44, 0.45)` |

Interpolées par le même scalaire `outside` que le reste. Le contour prend la couleur d'ombre de sa zone : une créature contournée de noir est un autocollant posé sur l'image ; contournée de la couleur d'ombre du lieu, elle y appartient.

**Rim de silhouette — le nid uniquement.** Sous terre, un contour sombre sur une paroi sombre est invisible : c'est le rim qui sépare, pas la ligne. (Le prototype WebGL1 avait déjà un rim en shader ; on le reprend, ciblé.)

```glsl
float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.6);
outgoingLight += rim * 0.55 * vec3(0.616, 0.690, 0.847) * (1.0 - uOutside); // soie #9DB0D8
```

Éteint dehors (`× (1 - outside)`) : en plein jour un rim se lit comme un bug de shader, pas comme une intention.

**Post-process autorisé par le ticket — ce qu'on en prend, ce qu'on refuse.**

- **Bloom doux sur les émissifs : oui.** `UnrealBloomPass`, seuil **0.85**, force **0.35**, rayon **0.5**, **en demi-résolution**. Cible : les chapeaux fongiques et les perles de la chambre de la reine, rien d'autre — le seuil à 0.85 y suffit puisque aucune surface éclairée du nid n'y monte. **Réduire la force à 0.12 dehors** (interpoler par `outside`) : un bloom sur pelouse ensoleillée produit exactement le voile laiteux qu'on est en train de retirer de l'horizon.
- **Passe de contour plein écran : non.** Voir ci-dessus.
- **SSAO : non.** L'occlusion de creux est déjà cuite par sommet, c'est la doctrine du projet. Une SSAO ferait doublon, coûterait une passe depth+normal, et ramènerait un gris photographique dans les creux — pile la dérive réaliste à éviter.
- **Ombres adoucies :** on garde `PCFSoftShadowMap` / 2048. Attention, `LightShadow.radius` **est ignoré par `PCFSoftShadowMap`** : ce n'est pas le levier. Le vrai levier de douceur perçue, c'est la couleur d'ombre (§1c) — une ombre qui est une *couleur* se lit douce même avec un bord net.

---

## 4. Matériaux — liste priorisée

Classée par « ce qui change le plus le rendu en premier », c'est-à-dire à peu près par surface couverte à l'écran × fréquence à l'écran.

| # | Matériau | Où | Source | État |
|---|---|---|---|---|
| 1 | `lawn-soil` | quad de sol extérieur, 380×250 unités — la moitié de chaque image dehors | **Procédural** | **livré ce round** |
| 2 | `tunnel-dirt` | parois + sol de galerie et des trois salles | **Procédural** | **régénéré ce round** |
| 3 | `stone` | rochers de pelouse + cailloux souterrains (un seul matériau, deux contextes) | **Procédural** | **livré ce round** |
| 4 | `chitin` | fourmi joueuse, reine, tous les futurs PNJ — 100 % du temps à l'écran | **Procédural** | **livré ce round** |
| 5 | `mushroom-cap` | jardins fongiques = la seule vraie lumière de la galerie et tout le pôle féerique | **Procédural** | **livré ce round** |
| 6 | `bark` | tronc + branches de l'arbre | **Procédural** (alternative CC0 §6) | **régénéré ce round** |
| 7 | `grass-blade` | brins d'herbe instanciés | Procédural | **pas fait**, voir §8 |
| 8 | `leaf` | feuillage de l'arbre | À décider | **pas fait** — demande un alpha cutout, donc une décision de rendu, pas de texture |

**Restent en couleur sommet, délibérément :** œufs de couvain, perles lumineuses, fils de soie, résine, racines et radicelles, monticule de terre. Ce sont de petits objets à silhouette forte, dont la lecture vient de la forme et de la valeur ; les texturer coûterait des UV et un sampler pour un gain nul à l'échelle où on les voit.

---

## 5. Textures livrées ce round

Générées par `game/scripts/generate-procedural-textures.mjs` (`npm run gen:textures` depuis `game/`), 128×128, ~14-21 Ko chacune, budget total inchangé et négligeable (cf. `pipeline-textures.md` §2). Les rampes font 64×4 et 0,1 Ko.

### De bruit à forme — ce qui change par rapport au round précédent

Le premier jet (`bark`, `tunnel-dirt` v1) produisait du **bruit** : du grain sans formes dedans. Contre la cible « peint main » maintenant actée, c'est la mauvaise grammaire. Une texture peinte à la main se lit parce qu'elle est construite en **formes dont la lumière est déjà peinte dedans** : une motte, un caillou, une côte d'écorce, chacune plus claire du côté lumière et portant une **ligne de contact sombre** de l'autre. C'est cette ligne sous la forme qui tient la lisibilité quand la fourmi est à trente unités et que la densité de texels s'effondre — un champ de bruit, lui, se moyenne en boue plate à cette distance.

Trois outils ajoutés au générateur pour ça :

- **`cellular(cellX, cellY, seed)`** — champ de Worley tileable et anisotrope, renvoyant F1 *et* `edge = F2 - F1`. `edge` est ce qui dessine un **réseau de fissures** ; seuiller F1 seul ne dessine jamais que des cercles séparés (le premier essai de ce round l'a fait, et ça ressemblait à des petits pois sur de la boue). L'anisotropie sert aux fissures d'écorce : `cellular(2, 7)` donne des cellules larges et basses, donc des cassures majoritairement horizontales — un champ isotrope coupe les côtes dans tous les sens et le tronc ressort en vannerie.
- **`warped(field, amp, seed)`** — déformation du domaine par un bruit tileable de faible amplitude avant évaluation de la forme. Sans ça, toute forme cellulaire sort ronde. Le pavage survit parce que le champ de décalage est lui-même périodique de période 1.
- **`facetLight(dx, dy)`** — lumière clé cuite dans la forme, fixée **en haut à gauche** de la texture, convention canonique du peint main. Aucun système du moteur n'a besoin d'être d'accord avec cette direction : la lumière peinte donne la *forme*, la lumière runtime donne le *lieu*. Ce qui compte, c'est que toutes les textures du set soient d'accord entre elles.

Et **`tri(dk, md, lt, t)`** : trois valeurs par matériau, la même grammaire que les trois paliers de la rampe (§2).

### Pavage — vérifié numériquement

Les PNG produits ont été redécodés et l'écart moyen entre les colonnes/lignes de bord (la paire qui se rejoint au raccord) comparé à l'écart moyen entre deux colonnes/lignes adjacentes quelconques. Une texture qui pave correctement donne un raccord statistiquement indiscernable d'une paire ordinaire.

Résultat : rapport raccord/moyenne entre **0,70 et 1,44** sur les deux axes pour cinq des six textures — pas de raccord. Le seul chiffre haut est le raccord vertical de `chitin` à **×2,38** ; vérification ciblée : les huit frontières de rangées de plaques *à l'intérieur* de la texture donnent 42-44, et le raccord donne 37 — **le raccord est plus doux que les frontières internes du motif**. Ce n'est pas un défaut de pavage, c'est le motif lui-même.

Limite connue et reportée du round précédent, inchangée : `fleckMask` (mouchetures de mousse, grains) ne fait pas de recherche sur les cellules voisines, donc une moucheture tombant pile sur u=0 ou u=1 peut se couper. Rayons < 0,42 cellule et densités 6-45 % ; non observé sur les six textures. À corriger seulement si une capture le montre.

**Round 15 — le raccord n'était pas le problème, la répétition l'était.** Sur la première capture d'un nid fondé (`C1`, tertre de 34 unités vu de dessus), `tunnel-dirt` se lit comme un **motif imprimé** : à `DIRT_TILE = 5,0` la tuile se répète près de sept fois en travers du tertre, et l'œil trouve le motif avant de trouver la surface. Le pavage est correct au sens du §5 ci-dessus — c'est la *reconnaissabilité* de la tuile qui est en cause, et deux traits la portaient :

- les grains étaient peints sur la rampe `STONE` (gris froid) : dans une tuile de terre chaude, ils étaient à la fois l'élément **le plus clair et le plus désaturé**, donc le repère parfait pour repérer une copie. Corrigé : rampe **`GRIT`** dédiée (`#493626` / `#8A755A` / `#BFA57E`), sur l'axe chaud, et couverture **0,88 → 0,66**. Le rapport grain/paroi passe de **1,9× à ~1,35×**.
- le bruit `broad` en 3×3 donnait à chaque tuile une **tache de valeur d'environ 1,7 unité**, identique tous les 5 unités. Corrigé : **0,24 → 0,10**, la part rendue au grain fin (0,22 → 0,26). La variation de valeur à grande échelle sur une paroi est le travail de la *géométrie* (couleurs sommet, ombre de creux cuite) — la texture s'arrête à la motte.

Coût VRAM : **nul**. Même 128×128, même format ; seul le contenu change.

**Ce qui reste, et qui n'est pas de mon ressort.** La *période* de répétition, elle, est `DIRT_TILE` dans `world/texturing.js`. À 5,0, un tertre en montre sept copies. Deux issues possibles, à trancher par Atta sur capture : monter `DIRT_TILE` à ~8 pour les grandes surfaces horizontales (le tertre) tout en gardant 5,0 sur les parois, ou décaler l'échantillonnage triplanaire par un hash de cellule monde. La texture, elle, a fait ce qu'elle pouvait faire seule.

---

## 6. Packs CC0 repérés (rien téléchargé)

Le ticket demande « packs peints à la main pour les rares éléments qui y gagnent vraiment ». Après repérage, ma recommandation est **plus étroite que ce qui était prévu** — argumentée ci-dessous.

| Source | Licence | Contenu utile | Poids | Verdict |
|---|---|---|---|---|
| [OpenGameArt — *2K Handpainted Style Textures*, rubberduck](https://opengameart.org/content/2k-handpainted-style-textures) | **CC0 1.0**, explicite sur la page | 4 textures sol/roche/herbe/terre craquelée, peintes à la main, + height/normal/roughness/specular | `handpainted-style-textures-3.zip`, **32,7 Mo**, 2048² | **Recommandé n°1.** Vraiment peint main, licence limpide, et la famille (sol/roche) est exactement là où on a le plus de surface. |
| [OpenGameArt — *Handpainted rock textures*, rubberduck](https://opengameart.org/content/handpainted-rock-textures) | **CC0**, explicite | 4 roches, « 2 entièrement peintes, 2 photos surpeintes » | `hptex_pack_4_1k.zip` **16,6 Mo** (1K) / `..._2k.zip` **64,8 Mo** | **Recommandé n°2**, pour `stone` si le procédural ne suffit pas de près. Prendre la version 1K. |
| [FreeStylized](https://freestylized.com/all-textures/) | **Ambigu** — le site annonce CC0, mais les fiches matériau disent « Royalty Free License: Free to use for all Commercial and Non-Commercial purposes », ce qui n'est pas le texte CC0 | Bark ×12, Rock ×23, Ground ×93, Grass ×9, style Substance Designer très proche de notre cible | 1K / 2K / 4K, poids non affiché | **À ne pas utiliser tant que la licence n'est pas clarifiée.** Meilleur *look* du lot, pire clarté juridique. Pour un projet qui peut sortir commercialement, ce n'est pas un arbitrage à faire à la légère. |
| [ambientCG](https://ambientcg.com/) | **CC0 1.0**, documentée | Bark001/Bark004 etc., PBR complet | ~5 Mo (1K JPG) à ~10 Mo (1K PNG) par matériau | **Utilisable, mais photoréaliste.** Pas en l'état : ce serait exactement la dérive vers le réalisme pur que je dois signaler. À la rigueur comme base de valeur à repeindre. |

**Ce que je recommande de télécharger : rien pour l'instant, sauf un.** Le seul matériau où un pack peint main gagnerait franchement contre notre procédural est **l'écorce** — une écorce a des accidents non répétitifs (nœuds, blessures, plaques qui se décollent) qu'un champ cellulaire ne fabrique pas de façon convaincante. Pour `stone`, `lawn-soil` et `tunnel-dirt`, le procédural livré ce round tient la cible et coûte 16-21 Ko au lieu de plusieurs mégaoctets, avec re-teintage instantané quand la charte bouge — un pack figé perdrait ça.

**Pour `chitin` et `mushroom-cap` : aucune source CC0 crédible n'existe.** Une chitine de fourmi stylisée et un chapeau fongique luminescent violet ne sont pas des matériaux génériques ; c'est de l'identité visuelle propre au jeu. Ils restent procéduraux ou deviendront un jour une peinture à la main faite par nous.

---

## 7. Demandes de branchement (hors périmètre DA de ce round)

À **Atta** — `game/src/world/**`, `game/src/main.js`, `game/src/core/**` :

1. **Commuter l'hémisphérique** avec le scalaire `outside` déjà présent dans la boucle de `main.js`, aux valeurs de §1a/§1b (`hemi.color`, `hemi.groundColor`, `hemi.intensity`), en même temps que le brouillard/fond/exposition. **Ne pas commuter le soleil** (raison en §1b). Trois `lerp` par frame.
2. **Appliquer les nouvelles valeurs numériques** de §1a/§1b (soleil, brouillard, fond, exposition) et de §1e (albedos extérieurs).
3. **Lampe de la bouche du tunnel en lumière froide** (§1d) — le meilleur rapport effet/effort de tout ce document.
4. **`SPORE_LIGHT` en bleu-violet** et **`C_ROOTLET` assombri** (§1d).
5. **Étendre le branchement de `texturing.js` (#26) aux quatre nouveaux matériaux**, par ordre de §4 : `lawn-soil` (sol extérieur), `stone` (rochers + cailloux), `chitin` (fourmi/reine), `mushroom-cap` (chapeaux). Le sampler triplanaire et la normalisation par la moyenne déjà en place s'y appliquent tels quels ; il n'y a qu'une densité (`worldPerTile`) à régler par matériau. Densités visées côté DA, dérivées de la taille que doit avoir **un motif** à l'écran (la fourmi fait ~6-7 unités de long, c'est l'étalon) :

| Matériau | Motif dans la texture | Taille visée du motif | **`worldPerTile`** |
|---|---|---|---|
| `tunnel-dirt` | 4 mottes de large | ~1,2 unité (un cinquième de fourmi) | **5.0** (actuellement 3.5 — un cran trop serré, les mottes passent sous le seuil de lecture) |
| `lawn-soil` | 5 touffes de large | 7-9 unités (~1 fourmi) | **45** |
| `stone` | 4 plaques de large | ~3 unités (un quart d'un gros caillou) | **12** |
| `bark` | 9 côtes de large | ~1,8 unité | **16** (inchangé, juste) |
| `chitin` | 5 plaques × 8 rangées | ~0,8 unité par plaque | **4** |
| `mushroom-cap` | 6 verrues de large | ~0,4 unité (≈ 6 verrues sur un chapeau) | **2.5** |

`bark` et `tunnel-dirt` ont été **régénérés** ce round — rien à changer côté branchement, la normalisation par la moyenne mesurée absorbe le changement, mais ça vaut une capture de contrôle.
6. **Passer les matériaux de surface en `MeshToonMaterial` + `gradientMap`** (§2), avec les paramètres de texture donnés. Garder `MeshStandardMaterial`/`MeshBasicMaterial` pour les sources lumineuses (chapeaux, perles) : ce sont des émetteurs, pas des récepteurs, ils sont déjà exclus du rig.
7. **Échantillonner la rampe dans la boucle de lampes locales** de `lighting.js` (extrait GLSL en §2).
8. **Faire moduler l'émission des chapeaux par `mushroom-cap_albedo`** : `totalEmissiveRadiance += vColor * texelColor.rgb * 1.6;` au lieu de `vColor * 0.8`. C'est ce qui fait que les verrues pâles brillent plus que le chapeau autour, donc qu'une boule lisse devient une lampe vivante.
9. **Translucidité des brins d'herbe** (§1e), et **coque inversée** sur la fourmi/la reine (§3).
10. **Bloom demi-résolution** aux paramètres de §3, force interpolée par `outside`.

À **Cataglyphis** — `game/src/player/**` :

11. Le **fondu tramé de l'herbe** est très visible : sur la capture large de pelouse, le stipple couvre la majorité de l'image. C'était une bonne solution en WebGL1 face à des chapeaux qui collaient à l'œil, mais sur une pelouse ensoleillée peinte à la main, un screen-door sur la moitié du cadre se lit comme un artefact de rendu. Demande : **resserrer la fenêtre de fondu** pour qu'elle ne s'active que sur ce qui est vraiment collé à la caméra (ordre de grandeur : ce qui est à moins d'une largeur de fourmi de l'œil), pas sur le plan intermédiaire. À arbitrer sur capture — c'est ta fenêtre, je signale l'effet visuel, pas la valeur.
12. À l'occasion, une position de caméra un peu plus haute par défaut aiderait la lisibilité : à la hauteur actuelle, l'herbe forme un mur opaque et le joueur ne voit pas où il va. Hors périmètre DA, à ton jugement.

---

## 8. Délibérément pas fait

- **`grass-blade_albedo`** : un brin est un objet *orienté* (pointe claire, base sombre, nervure centrale), donc la seule texture de ce set qui ne peut pas passer par le sampler triplanaire de `texturing.js` — il lui faudrait un vrai dépliage, et une texture de brin posée dans le mauvais sens est pire que pas de texture. Le vrai gain sur l'herbe est de toute façon le shader (translucidité de contre-jour, §1e) et la palette (§1e) — les deux gratuits et sans UV. À produire quand un dépliage de brin existe.
- **`leaf`** : demande un alpha cutout sur du feuillage instancié, donc une décision de rendu (tri, overdraw, LOD) qui appartient à Atta, pas une décision de texture.
- **`_orm` / `_normal`** : inchangé depuis `pipeline-textures.md` §1. Le style tient sa lisibilité par de l'ombre de creux cuite par sommet et par la lumière peinte dans la texture ; une normal map ferait doublon incohérent. La charte de ce round *renforce* cet arbitrage plutôt qu'elle ne le remet en cause.
- **Contour plein écran, SSAO, compression GPU (Basis/KTX2)** : raisons en §3 et dans `pipeline-textures.md` §2.
- **Biome féerique extérieur (spore/violet, Marécage Fongique) et pôle sombre extérieur** : hors périmètre, comme déjà acté sur #1. Le pôle sombre le plus extrême du jeu doit rester le prologue reine-seule (souterrain, #2), pour que l'écart avec la première salle fondée reste le plus grand du jeu.
- **Aucune modification de `game/src/world/**`, `game/src/player/**`, `game/src/main.js`, `game/src/core/**`** — Atta et Cataglyphis y travaillent en parallèle sur ce même round. Tout ce qui les concerne est en §7, en valeurs numériques prêtes à coller.

## 9. Ce qui reste à confirmer sur capture

Aucune de ces textures ni aucune de ces valeurs n'a encore été vue **dans le moteur** : rien dans `game/src/world/` ne porte d'UV à ce jour, et la commutation d'hémisphérique n'est pas branchée. Les textures ont été relues visuellement en tant qu'images et vérifiées numériquement pour le pavage ; la charte a été calculée contre les constantes réelles lues dans le code et contre six captures du build réel. À reconfirmer, dans cet ordre, dès qu'une surface texturée tourne :

1. le critère d'accord ombre portée / ombre propre (§1c) ;
2. la largeur des genoux de rampe sur les facettes low-poly (bandes visibles ou non) ;
3. l'épaisseur perçue de la coque inversée aux deux extrêmes de zoom ;
4. la densité de répétition UV de `lawn-soil` — une touffe de mousse doit faire environ une à deux longueurs de fourmi, sinon la pelouse repart en motif.
