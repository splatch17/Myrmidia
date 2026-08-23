# Pipeline de textures — portage Three.js

Spec courte pour préparer le terrain texture pendant qu'Atta porte le monde (`game/src/world/`) dans le nouveau moteur Three.js/Vite. Rien ici n'attend le rendu final : c'est la convention + le pipeline couleur + deux textures d'exemple, prêts à être branchés dès que les UV existent.

Ancrage DA : palette du README racine — `#E0A752` chitine · `#8FAE5E` mousse · `#E07356` rouille · `#E6B558` miel · `#9DB0D8` soie · `#C497D9` spore. Curseur de style : point médian réalisme peint (WoW) / stylisation (Dofus), lisibilité avant réalisme photo.

## 1. Où vivent les textures, et comment elles s'appellent

**`game/src/assets/textures/<materiau>/<materiau>_<map>.png`** — pas `game/public/`.

Pourquoi `src/assets` plutôt que `public/` : les textures de ce projet sont petites, procédurales, et vont beaucoup itérer pendant qu'Atta pose les UV et que je règle la palette. `src/assets` passe par le pipeline d'assets de Vite (import ES, URL hashée à chaque changement de contenu → pas de cache navigateur périmé pendant le dev, pas de `?v=2` à la main). `public/` est pour ce qui doit avoir un chemin stable et n'a pas vocation à être retouché souvent (favicon, manifest) — pas notre cas ici. Si un jour une texture devient lourde et unique (ex. un sprite-sheet d'UI peint à la main), `public/` redevient pertinent — à réévaluer au cas par cas, pas une règle générale.

Un dossier par matériau (pas un dossier plat, pas un dossier par biome) : un matériau — écorce, terre de galerie, chitine — se réutilise à travers plusieurs salles/biomes (cf. doctrine déjà actée sur le prototype : la mousse grimpe sur les cailloux du dépotoir *et* sur les cailloux de la pelouse, même idiome, contextes différents). Ranger par matériau évite de dupliquer un fichier par endroit où il apparaît.

Suffixes de map (seul `albedo` existe à ce jour, les autres sont réservés) :

| Suffixe | Contenu | Espace couleur |
|---|---|---|
| `_albedo` | Couleur de base | sRGB |
| `_orm` | Occlusion (R) / Rugosité (G) / Métalique (B), packés — convention glTF/Three.js standard, un seul sampler pour `aoMap`/`roughnessMap`/`metalnessMap` | Linéaire |
| `_normal` | Normal map tangent-space | Linéaire |

`_orm` et `_normal` : pas encore produits, volontairement. Le rendu établi sur le prototype (`sortie-fourmiliere.html`) tient sa lisibilité par de l'ombre de creux **cuite par sommet** (low-poly à faces plates), pas par du relief en texture — le portage Three.js vise le même langage pour l'instant. Ajouter des normal maps a du sens seulement si/quand on lisse les surfaces (subdivision, PBR plus réaliste) ; tant que le style reste low-poly à faces plates, une normal map ferait un aller-retour incohérent avec la doctrine déjà actée. À revisiter si le style évolue, pas avant.

## 2. Format et budget

- **PNG 8-bit, sans alpha** pour les albedo (le contenu est opaque — pas de canal perdu pour rien).
- **Résolution : 128×128**, puissance de deux. À cette échelle de caméra (fourmi ~7 unités, distances 9-24 unités déjà notées sur le prototype), un matériau tileable répété par UV n'a pas besoin de plus ; une puissance de deux garantit un `RepeatWrapping` et des mipmaps propres sans caveat WebGL. Monter en résolution doit être un choix délibéré par matériau (ex. un gros plan scripté), pas un défaut.
- **Couleur quantifiée** (paliers de 4/255 avant export) plutôt que dégradé continu : gratuit visuellement à cette échelle stylisée (le prototype cuit déjà l'ombre de creux en paliers grossiers par sommet, pas en dégradé lisse), et ça réduit fortement le poids du PNG — le bruit continu se compresse mal (haute entropie byte-à-byte), le bruit quantifié se compresse bien (DEFLATE trouve des runs répétés). Résultat sur les deux textures d'exemple : ~144 Ko → ~20 Ko à qualité visuelle égale.
- **Procédural, généré par script, committé comme PNG.** Pas d'outil externe, pas de dépendance npm supplémentaire (`node:zlib` suffit pour encoder le PNG) — le script est la source de vérité, le PNG est un artefact reproductible. `npm run gen:textures` (depuis `game/`) régénère tout.

Budget RAM/GPU pour ordre de grandeur : un albedo 128×128 RGB non-mipmappé pèse 48 Ko en VRAM décompressée, ~64 Ko avec la chaîne de mipmaps complète. Même avec une douzaine de matériaux (souterrain + surface + chitine de créature), on reste sous le mégaoctet de VRAM textures — sans commune mesure avec un géométrie/shadow map budget. Pas de compression GPU (Basis/KTX2) à ce stade : la charge est déjà négligeable, l'ajouter maintenant serait de la complexité sans bénéfice mesurable. À reconsidérer seulement si le nombre de matériaux uniques explose (ex. peintures à la main plutôt que procédural).

## 3. Pipeline couleur Three.js — vérifié, un point d'action pour Atta

Lu dans `game/src/core/renderer.js` :

```js
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
```

**Validé** : c'est le pipeline couleur moderne correct pour Three.js (r152+) et il sert bien la direction visée. `ACESFilmicToneMapping` + `SRGBColorSpace` en sortie est la combinaison standard qui évite le rendu délavé/plat du tone mapping linéaire par défaut, sans virer vert-criard — ACES a plutôt tendance à *flatter* les tons chauds saturés (jaune/orange/rouge, exactement la famille chitine/miel/rouille de la palette) qu'à les pousser vers le vert. Les couleurs numériques déjà posées dans `main.js` (`0xe0a752` sur la capsule fourmi placeholder, lumière soleil `0xffe3a8`, hémisphère `0xfff2d0`/`0x2a2015`) sont interprétées correctement : `THREE.Color` construit depuis un littéral hexadécimal est géré en sRGB nativement par le pipeline couleur de Three.js depuis la r152, aucune conversion manuelle à faire côté code applicatif.

**Point d'action pour Atta (pas un bug, une chose à ne pas oublier au premier chargement de texture)** : `THREE.TextureLoader` ne devine pas l'espace couleur d'un fichier — une texture chargée a `colorSpace = THREE.NoColorSpace` (linéaire) par défaut. Pour un `_albedo` (couleur, pas donnée), il faut explicitement :

```js
const tex = new THREE.TextureLoader().load('.../bark_albedo.png');
tex.colorSpace = THREE.SRGBColorSpace; // requis — sinon la texture rend délavée/plate, pas d'erreur silencieuse
tex.wrapS = tex.wrapT = THREE.RepeatWrapping; // les textures de ce pipeline sont tileables par construction
tex.repeat.set(nx, ny); // à ajuster par surface selon l'échelle UV
```

Une future `_orm`/`_normal` devra rester en `THREE.NoColorSpace` (défaut) — ne pas leur appliquer `SRGBColorSpace`, ce sont des données linéaires, pas de la couleur perçue.

Non vérifié à ce jour, faute de monde texturé pour le confirmer visuellement : le rendu réel des deux textures d'exemple ci-dessous à travers ce pipeline complet (ACES + sRGB + shadow map + brouillard). Le monde d'Atta (`game/src/world/`) est vide au moment de cette session — validation faite par lecture de code + comparaison avec la doctrine déjà établie sur le prototype WebGL1, pas par observation directe dans le nouveau moteur. À reconfirmer dès qu'un premier mur ou tronc texturé tourne dans `game/`.

## 4. Textures d'exemple livrées

Générées par `game/scripts/generate-procedural-textures.mjs` (`npm run gen:textures` depuis `game/`) :

- `game/src/assets/textures/bark/bark_albedo.png` — écorce de tronc. Stries verticales (bruit anisotrope étiré en Y) pour la silhouette rainurée, taches larges chaudes/sombres, grain fin, et mousse éparse qui s'installe dans les creux sombres — même idiome que "la mousse grimpe sur les creux" déjà établi sur les cailloux du dépotoir et de la pelouse dans le prototype.
- `game/src/assets/textures/tunnel-dirt/tunnel-dirt_albedo.png` — terre de galerie souterraine (mur/sol). Bruit de cavités large (écho du langage "ombre des creux cuite par sommet" du prototype), grain de terre fin, cailloux clairs épars, mousse rare réservée aux zones "éclairées" du bruit — même principe de contraste zone froide/pôle féerique que la doctrine déjà actée (la mousse a besoin de lumière, même sous terre).

Les deux sont tileables par construction : le bruit de valeur utilisé est mathématiquement périodique (les indices de treillis sont wrappés modulo la taille de grille avant hash, donc `noise(0, v) === noise(1, v)` exactement, pas approximativement — vérifié numériquement, pas seulement à l'œil). Limite connue et acceptée pour cette passe : les mouchetures éparses (mousse, cailloux) sont testées cellule par cellule sans repli sur les cellules voisines en cas de chevauchement de bord — un risque de micro-discontinuité *si* une mouchetures tombe pile sur le bord u=0/u=1, faible vu leur rayon (< 0,35 cellule) et leur densité (5-16%). Pas observé sur les deux textures livrées ; à corriger seulement si une capture le montre.

## 5. Suite

- Brancher ces deux textures dans `game/src/world/` dès que Atta a des UV sur le tronc et les murs de galerie (voir point d'action §3).
- Étendre le même script pour la chitine (fourmi/PNJ) et pour un albedo de sol de pelouse, une fois que le monde Three.js a des surfaces qui en ont besoin — pas avant, pour éviter de produire des textures orphelines.
- `_orm`/`_normal` : en attente d'une décision délibérée de changer le style vers des surfaces lissées (cf. §1) — pas un manque à ce stade.
