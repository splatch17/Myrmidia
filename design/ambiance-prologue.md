# Ambiance — prologue reine-seule, fondation, lecture du site, lointain

Réponse au ticket [#2](https://github.com/splatch17/MYRMIDIA/issues/2), lu à la lumière de `design/boucle-de-jeu.md` §0 (direction tranchée : **la partie commence reine seule à la surface, sans fourmilière**).

Ce document **prolonge** `design/charte-stylisation.md` et ne le refait pas. La charte connaît deux zones (pelouse, nid) ; le prologue introduit un troisième registre qui n'est **pas une zone de plus** : c'est la *même* carte, à un autre moment du jeu. Toutes les valeurs ci-dessous sont donc données comme **déplacements de la pelouse de la charte §1a**, pas comme une palette neuve.

Ancrage palette inchangé : `#E0A752` chitine · `#8FAE5E` mousse · `#E07356` rouille · `#E6B558` miel · `#9DB0D8` soie · `#C497D9` spore.

---

## 0. À quel état du build ces constats se réfèrent

Captures prises sur le build réel de `feature/threejs-migration` au commit **247f326** (« Record the arbitrated game direction »), serveur Vite, Chromium `--use-gl=angle --use-angle=d3d11`, 1280×720, sept points de vue extérieurs. **Aucune valeur de la charte §1 n'était encore branchée** à ce moment (le rig lu en direct dans la scène renvoyait toujours `hemi #fff2d0 / #2a2015 @0.6`, `sun #ffe3a8 @2.2`, `fog #d9c39a 60/400`, `bg #8fb6cf`, exposition 1.05) et le terrain de #31 n'était pas commencé. Atta refait le terrain et branche les textures en parallèle sur ce round : les cinq constats ci-dessous décrivent donc l'état d'avant son travail, pas un jugement sur ce qu'il livre.

Constats, mesurés au pixel (moyenne 3×3) :

1. **Le ciel est une couleur unie, littéralement.** Au zénith : `#8FB6CF`. Un pixel au-dessus de la ligne de sol, à 250 unités : `#8FB6CF`. Exactement le même. Il n'y a pas d'air dans ce monde.
2. **Le bord de carte est une coupure franche de 111 valeurs.** Sol juste avant le bord, luminance **65** ; ciel juste au-dessus, luminance **176**. Sur une rangée de pixels. C'est ça, le « bac à sable » — plus que l'absence de montagnes.
3. **Le brouillard ne travaille pas.** Réglé 60/400 sur une carte de 250 unités de profondeur : le sol au loin ressort à luminance **65** quand le sol au premier plan est à **39**. La distance *éclaircit* au lieu d'estomper, parce que le seul effet visible est l'angle d'incidence, pas la brume.
4. **La fourmi est plus sombre que tout ce qu'elle touche.** Thorax luminance **38**, sol éclairé sous elle **81 à 94**. La charte l'avait signalé (§0.4) ; c'est confirmé au chiffre.
5. **La pelouse est plate au sens propre.** Aucun repère : à hauteur de fourmi, chaque point de la carte donne la même image (un mur de brins), et rien ne distingue « ici » de « là ». C'est le vrai problème du choix de site (§3), avant toute question de HUD.

Ces cinq constats sont la raison pour laquelle **le lointain (§4) et la lecture du sol (§3) comptent autant que l'ambiance du prologue (§1)** : sans eux, un prologue « sombre » sera juste une pelouse plus sombre.

---

## 1. Le prologue — fin de crépuscule, pas nuit, pas heure dorée

### 1a. L'arbitrage, et pourquoi

Le prologue doit être **le point le plus sombre et le plus exposé du jeu** (#2, #1). Trois pistes étaient possibles ; je tranche pour la troisième :

- **Nuit.** Refusée : la carte est le terrain de jeu principal (#31), et une carte qu'on ne lit pas est une carte qu'on n'explore pas. On perdrait la carte pour gagner une ambiance.
- **Heure dorée.** Refusée, et c'est l'arbitrage important : l'or est **réservé à la colonie**. Un prologue en lumière dorée serait le plus beau moment du jeu, ce qui viderait la fondation de sa récompense. Le même raisonnement que pour le violet spore réservé au pôle féerique (`charte-stylisation.md` §8) : un signal ne vaut que s'il est univoque.
- **Fin de crépuscule** — retenue. Soleil très bas et **faible**, ciel froid, la lueur chaude déjà presque partie. C'est lonely et exposé sans être aveugle, et surtout ça pose le contraste dans le bon sens : **froid + faible + rasant → chaud + fort + haut**.

Justification de fiction, qui n'est pas de la décoration : une reine fondatrice atterrit après le vol nuptial, perd ses ailes, et n'a que quelques heures pour être sous terre. L'urgence est dans la lumière, pas dans un compteur.

**Pas de cycle jour/nuit.** Deux états écrits, pas une horloge. Une horloge ferait arriver le moment le plus sombre du jeu à un instant aléatoire et se battrait contre toute la construction ci-dessous.

### 1b. Le rig, en valeurs

Colonne « fondé » = la pelouse de `charte-stylisation.md` §1a, inchangée (c'est l'état cible qu'Atta implémente déjà). Colonne « prologue » = ce que je demande en plus.

| Paramètre | **Prologue** | Fondé (charte §1a) | Pourquoi |
|---|---|---|---|
| Soleil — position | **`(-300, 120, 195)`** → élévation **18,5°** | `(30, 45, 20)` → 51° | **Le levier principal, et il est gratuit.** Un soleil rasant fait deux choses qu'aucune couleur ne fait : il éclaire les brins par le côté (donc l'herbe cesse d'être un mur d'une seule valeur) et il étale de longues ombres qui donnent enfin un relief lisible à un terrain plat. Azimut choisi depuis le quadrant −x/+z : l'ombre de l'arbre `(-85, 95)` balaie la carte vers le joueur. |
| Soleil — couleur | **`#E8B98C`** | `#FFD98A` | Or pâli, pas orange. Un orange franc ramènerait l'heure dorée par la fenêtre. |
| Soleil — intensité | **1.9** | 2.5 | Le monde est **dim**, pas juste teinté. C'est la moitié de la sensation. |
| Hémisphérique — ciel | **`#6E7FA8`** | `#BFD8F5` | Même bleu, désaturé et descendu : le remplissage vient d'un ciel qui s'éteint. |
| Hémisphérique — sol | **`#4A4530`** | `#6E6A38` | Le rebond d'une prairie qui n'est plus éclairée. |
| Hémisphérique — intensité | **0.62** | 0.85 | Moins de remplissage = ombres plus creuses. Voir la dérogation §1c. |
| Brouillard — couleur | **`#8B8399`** | `#AFC8D8` | Violet-gris très désaturé — spore `#C497D9` ramené à ~10 % de chroma. Le moment le plus seul du jeu reste **dans la palette du projet** au lieu de partir sur un coucher de soleil générique. |
| Brouillard — near / far | **40 / 300** | 90 / 420 | À 300 de portée, le bord de carte (250 unités) est à ~78 % de brume : il **se dissout** au lieu de se couper net (constat 2). Le monde fondé, lui, voit plus loin — « ça s'ouvre » est une vraie sensation, obtenue avec deux nombres. |
| Fond (ciel) | **`sky_gradient-prologue`** | **`sky_gradient-lawn`** | Livrées ce round, §5. |
| Exposition | **1.02** | 1.15 | Léger. La baisse est portée par l'intensité et le remplissage, pas par l'exposition — sinon on écrase tout uniformément et on perd le contraste. |
| Rampe toon extérieure | **`toon_ramp-nest`** | `toon_ramp-lawn` | Réutilisation, pas nouvelle courbe : plancher 0.18 au lieu de 0.30. **La pelouse du prologue est éclairée avec la rampe du nid ; la fondation lui rend la sienne.** Un seul `material.gradientMap = …; material.needsUpdate = true` au moment de la bascule. |
| **Couleur d'ombre visée** | **`#3E4260`** | `#5C6488` | Résultat, pas un uniform (charte §1c). |

### 1c. Dérogation assumée au critère d'ombre de la charte §1c

La charte impose que les ombres tombent à **25-32 %** de la valeur d'une surface éclairée voisine. **Pour le prologue uniquement, la cible est 15-20 %.** L'ombre du prologue est une menace, pas un remplissage : c'est là que se cache ce qui peut tuer une reine sans garde.

**Plancher dur : jamais en dessous de 12 %.** En dessous on est revenu au bug que la charte a corrigé (ombres sur du noir, `#000000` mesuré sur les captures du round précédent), et un noir n'est pas plus effrayant qu'un indigo profond — il est juste illisible.

### 1d. Critères vérifiables sur capture

- La luminance moyenne d'une vue de pelouse standard doit **chuter d'au moins 35 %** entre l'état fondé et le prologue, au même point de vue. Si l'écart est plus faible, la bascule ne se sentira pas.
- Dans le prologue, un brin d'herbe côté soleil et le même brin côté ombre doivent différer d'au moins **45 valeurs** (aujourd'hui : 58 vs 41, soit 17 — l'herbe est un mur d'une seule valeur, constat 5).
- Aucun pixel du prologue ne doit descendre sous **luminance 14** hors silhouettes de prédateur.

### 1e. Arbitrage du rig intégré (défaut n°5) — **validé, un seul nombre change**

Le rig a été retouché quatre fois à l'intégration et la DA n'avait jamais tranché. Tranché ici, sur mesure et non au jugé : même image, mêmes 600×360 pixels d'un carré de pelouse dégagée (pas d'arbre, pas de tertre, pas d'eau), les deux rigs commutés par `setFoundedMix`, percentiles lus dans le tampon de rendu.

| | moyenne | p05 | p50 | p98 | % sous L 14 |
|---|---|---|---|---|---|
| **Prologue (tel qu'intégré)** | **44,0** | 22,3 | 41,2 | 75,9 | 0,8 % |
| Fondé | 105,4 | 77,6 | 107,8 | 135,5 | 0 % |

**Les trois critères du §1d sont tenus.** Chute de moyenne **−58 %** (le seuil est 35 %) ; 0,8 % de pixels sous L 14, et ce sont des cœurs de brins, pas des surfaces qu'on lit. Rapport ombre/lumière **p05/p98 = 0,294** contre **0,573** pour le rig fondé : le prologue porte déjà **la moitié du remplissage** du jour fondé, ce qui est très exactement la dérogation §1c. Et sur capture, les longues barres d'ombre rasantes se lisent — c'est ce que le soleil à 18,5° existait pour produire.

Donc : **les trois passes d'intégration avaient raison, et les nombres de la spec avaient tort.** Ils étaient écrits à l'échelle d'un paysage (brume à 40, exposition 1,02) et appliqués à l'échelle d'une fourmi — c'est le piège n°6 de `PROGRESS.md`, mot pour mot. `fogNear/fogFar 95/420`, `exposure 1.30`, `hemiIntensity 1.15`, `fog #7d7488` : **conservés, explicitement**.

**Le seul changement : `sunIntensity` 5.4 → 6.1.** Pas un goût, une dérivation. Un sol plat reçoit `sin(élévation)` de la radiance : `sin(51°)/sin(18,5°) = 0,777/0,317 = 2,45`. Le prologue doit donc valoir **2,45×** l'intensité du rig fondé pour que le sol y soit lu, soit `2,5 × 2,45 = 6,13`. 5,4 valait 2,16×, 12 % trop bas. Effet mesuré, tout le reste inchangé : moyenne 44 → 47, p98 76 → 81, pixels sous L 14 0,8 % → 0,7 %. Le nombre cesse d'être rejouable parce qu'il a maintenant une raison.

**Ce qu'il ne faut pas faire, et pourquoi je l'ai mesuré avant de le dire.** Balayage de `hemiIntensity` à soleil constant : 1,15 → 1,45 → 1,75 donne p05 22,3 → 25,8 → 28,9 et le rapport ombre/lumière 0,294 → 0,321 → 0,342. Monter le remplissage **aplatit** la seule chose que le soleil rasant apporte. Il reste à 1,15.

**Et la seule vraie faute mesurée n'est pas dans le rig.** Dans la poche d'ombre au pied du tertre — là où la joueuse se tient le plus souvent — la reine tombe à **L 5,0** et le tertre à **L 7,7**, tous deux sous le plancher dur de 14 du §1d. Le soleil n'y entre pas par définition, et le balayage ci-dessus montre qu'aucun réglage d'hémisphérique ne remonte une poche à 5 jusqu'à 14. Ça se répare **ailleurs** : à l'albedo de la carapace (`charte-stylisation.md` §1f) et à la densité d'ombres de brins (défaut n°8). Pas ici.

Reste ouvert, et c'est du câblage, pas une valeur : `sky: 0x9a93a8` est encore marqué PLACEHOLDER alors que `sky_gradient-prologue.png` existe depuis le round 5.

---

## 2. La bascule — ce qui change à la fondation, et par quel moyen

### 2a. Le mécanisme : un deuxième scalaire, jumeau d'`outside`

`main.js` a déjà `outside = clamp((camera.position.z + 24) / 40, 0, 1)` qui commute brouillard / fond / exposition entre nid et pelouse. Le mécanisme demandé est **le même, une dimension plus loin** :

```js
// 0 = prologue (reine seule), 1 = colonie fondée. Animé une seule fois,
// au moment de la fondation, sur ~6 s (voir la séquence en 2c).
let founded = 0;
const FOUND_FADE = 6.0;
// ... dans frame(), avant le bloc `outside` existant :
if (foundingAt !== null) founded = clamp((t - foundingAt) / FOUND_FADE, 0, 1);
```

**Point d'intégration : `founded` ne déplace que les extrémités *extérieures* du lerp existant.** Les extrémités « nid » (`FOG_IN`, `SKY_IN`, exposition 1.35, hémisphérique du nid) ne bougent pas d'un pouce — le nid change en s'allumant (§2c), pas en changeant de rig. Donc :

```js
const FOG_OUT = new THREE.Color().copy(FOG_PROLOGUE).lerp(FOG_FOUNDED, founded);
const SKY_OUT = /* idem */;
const expOut  = lerp(1.02, 1.15, founded);
// puis le bloc `outside` existant, inchangé
```

Le soleil et l'hémisphérique se commutent en plus, mais **par `founded` seulement, jamais par `outside`** — la raison est déjà écrite dans la charte §1b : commuter la clé par `outside` changerait aussi la pelouse quand la caméra est dans la bouche avec les deux zones dans le cadre.

Coût par frame : cinq `lerp` de couleur, un `lerp` scalaire, et un `sun.position.lerpVectors()`. Rien d'autre. **Aucune couleur sommet n'est recuite à la fondation** — c'est la contrainte que je me suis donnée, et elle tient : toute la bascule vit dans huit nombres du rig.

### 2b. Les trois choses qui basculent, par ordre d'importance

1. **La lumière** (§1b) : soleil qui monte de 18,5° à 51°, se réchauffe et se renforce ; remplissage qui remonte ; brume qui recule ; rampe extérieure qui passe de `ramp-nest` à `ramp-lawn`. Le monde s'ouvre et s'éclaire, littéralement.
2. **Le monticule et sa bouche** — la seule chose *neuve* à l'écran. C'est le repère demandé par #33 (« l'entrée du nid doit être visible et repérable depuis la surface »). Direction : **la bouche du nid est la seule lumière chaude de la carte extérieure.** Lampe locale à la bouche, `[1.05, 0.62, 0.24]`, posée avec `addLocalLight()` — le rig existe déjà et ne coûte rien de plus (8 slots, le nid en utilise moins dehors). Vu de loin, à travers l'herbe, c'est un point ambré dans un monde froid : c'est ça, « chez soi », et ça n'a demandé aucun système.
   Le monticule lui-même : sol réchauffé vers chitine, `lerp(soil, #E0A752, 0.12)`, sur un rayon de ~18 unités.
3. **Les traces de vie** : un rayon **piétiné** de 40 unités autour de la bouche — mousse retirée (`mossAmt → 0` en dégradé sur les 40 unités), sol assombri de 12 %. Une colonie use le sol autour d'elle. C'est une fonction de plus dans le calcul de couleur sommet du terrain, et c'est ce qui fait qu'un nid a l'air *habité* plutôt que posé.

### 2c. La séquence de fondation, plan par plan

Le ticket demande que le basculement se sente comme une **récompense** et non comme un changement de décor. La séquence répond aussi au point ouvert de `boucle-de-jeu.md` §1/§7 (« faut-il une chambre vide ? ») : **oui, et voici comment elle se peuple.**

| # | Plan | Lumière | Durée |
|---|---|---|---|
| 1 | La reine creuse. Fondu au noir depuis la pelouse crépusculaire. | — | ~1,5 s |
| 2 | **La chambre vide.** Une seule lampe : le puits de jour qui descend par l'entrée, **froide** — `[0.55, 0.62, 0.82]`, soie. Parois nues : `wallPoint`/`buildBranch` sans aucun bloc de props (spec déjà posée en #1). Aucune perle, aucun couvain, aucun champignon. | 1 lampe froide | ~4 s jouables |
| 3 | La reine scelle l'entrée. **Le puits froid descend à zéro sur 3 s.** | 0 lampe | ~2 s |
| 4 | **Le point le plus sombre du jeu.** Rien à l'écran que le rim de silhouette sur la reine (soie `#9DB0D8`, déjà spécifié charte §3, et actif seulement sous terre). | 0 lampe | ~2 s |
| 5 | **Première ponte → première lampe de couvain s'allume**, chaude : `[0.85, 0.55, 0.22]`, rayon court. Elle est la **seule** source. Une flaque chaude au milieu du noir. | 1 lampe chaude | — |
| 6 | Chaque ponte ajoute sa lampe. À la 4ᵉ, la **première perle lumineuse** descend sur son fil (`GLOW_LIGHT [1.95, 1.20, 0.52]`, déjà en place). | n lampes chaudes | — |
| 7 | Le **jardin fongique** (violet froid, `SPORE_LIGHT [0.72, 0.48, 1.75]`) arrive en dernier, avec le déblocage Mycologue (`boucle-de-jeu.md` §3). | chaud + violet | — |

**Ce que cet ordre raconte, et pourquoi c'est cet ordre-là.** Le froid ouvre (le jour qu'on quitte), le noir sépare, le chaud naît d'une ponte, et le féerique n'arrive qu'une fois la colonie viable. La lumière suit exactement l'arc de la colonie ; on ne peut pas voir la salle éclairée avant de l'avoir méritée. Et le pôle féerique (violet) reste **tardif**, donc rare, donc il garde sa valeur — même discipline que l'or réservé à la colonie en §1a.

Critère vérifiable sur le plan 4 : **luminance médiane de l'image entre 18 et 28** (0-255), et aucun pixel au-dessus de 90 hors rim de la reine. Si la médiane monte au-dessus de 35, ce n'est plus le point le plus sombre du jeu et le dépotoir le dépasse encore.

---

## 3. Le langage visuel du choix de site

Cataglyphis code la fonction de qualité (#32) et n'affiche qu'un texte brut ; à terme, le joueur doit **sentir** la valeur d'un endroit avant de la lire. Ce qui suit est la spec de ce que le monde doit montrer.

### 3a. La règle unique : le chaud est creusable, le froid est interdit

Quatre familles de sol, et **une seule règle à apprendre** — c'est la chroma qui porte la mécanique, pas seulement la valeur :

| Famille | Verdict | Couleur A | Couleur B | Mousse | Lecture |
|---|---|---|---|---|---|
| **Terreau** | creusable, excellent | `#6B4E2C` | `#4A351C` | 0.45-0.75, en plaques | **chaud et sombre** = riche |
| **Terre ordinaire** | creusable, moyen | `#86673B` (charte §1e) | `#5A4529` (charte §1e) | 0.25-0.50 | la référence |
| **Sable sec** | creusable, mauvais | `#B4A078` | `#8E7A55` | 0.00-0.08 | **chaud et pâle** = sec, pauvre |
| **Roche** | **interdit** | `#8C8A80` | `#5A5850` | 0 | **froid et neutre** |
| **Berge humide** | **interdit** | `#4B4436` | `#332F27` | 0.10, froide | **froid et sombre** |

Les deux interdits sont froids, les deux autorisés sont chauds. Un joueur apprend ça en une minute et ne le réapprend jamais. La roche garde la texture `stone` déjà livrée, avec une couleur sommet plus pâle et plus froide que les cailloux props (une dalle affleurante est lessivée, pas fraîchement cassée).

**Corollaire non négociable : un interdit doit casser la silhouette, pas seulement la couleur.** Un affleurement rocheux doit dépasser du sol assez pour se voir à hauteur de fourmi de loin. Une couleur d'interdiction qu'on ne découvre qu'en marchant dessus est une punition, pas une information.

### 3b. L'ombre est dessinée par le soleil, pas par une surcouche

L'ombre est une entrée de la qualité de site (`boucle-de-jeu.md` §0). Avec le soleil rasant du prologue (§1b), **l'ombre est déjà partout à l'écran, longue et lisible** : chercher un site abrité, c'est chercher un endroit dans l'ombre d'un caillou ou d'une racine. La variable de gameplay est peinte gratuitement par le rig. C'est le meilleur argument pour le soleil bas, et ça ne demande aucune UI.

### 3c. L'eau se lit par un dégradé qu'on traverse à pied

- de 60 à 12 unités de la berge : `mossAmt += 0.35 × (1 - d/60)` → l'herbe devient franchement plus verte et plus saturée. **Vert riche = eau proche = bon.**
- de 12 à 0 unités : bascule vers la famille « berge humide » et refroidissement, `lerp(sol, #6E8496, 0.25)`. **Sombre et froid = trop près = interdit.**

Le joueur lit la distance à l'eau en marchant, sans jamais voir un chiffre.

### 3d. Les ressources se lisent par grappes, pas par icônes

Les `HARVESTABLES` doivent pousser en **grappes de 3 à 6 dans un rayon de 12 unités**, avec une silhouette commune qui dépasse la ligne d'herbe. Règle d'écriture de carte : **depuis un bon site, on doit voir au moins deux grappes** sans se déplacer. Une ressource isolée dans l'herbe est invisible à hauteur de fourmi et ne participe à aucune décision.

### 3e. Règle d'écriture de carte : tout bon site est adossé à quelque chose

C'est ce qui sépare une carte faite à la main d'un bac à sable, et c'est le remède direct au constat 5. **Chaque site voulu comme bon doit avoir un point d'accroche de silhouette à moins de 20 unités** — un caillou plat, une racine qui sort, le pied de l'arbre, un creux. Il faut que le joueur puisse *nommer* l'endroit (« sous la pierre plate ») ; on ne choisit pas un site qu'on ne peut pas nommer, on tire au sort.

### 3f. La seule affordance d'interface que je demande

Quand la reine se tient sur un point creusable, le sol sous elle porte une **ellipse chaude et douce** : miel `#E6B558`, opacité 0.25, aucun bord dur, pulsée à ~0.5 Hz sur ±15 % d'opacité. C'est exactement le langage « objet interactif = halo doré pulsé » déjà fixé en charte §3 — pas un signal de plus à apprendre.

- Sur roche et sur berge, **elle n'apparaît pas du tout.** L'absence est le signal : moins cher qu'une croix rouge, et impossible à confondre.
- **La qualité est encodée dans le rayon, pas dans la couleur** : 6 unités (médiocre) → 14 unités (excellent). Une taille se lit instantanément et n'ajoute aucune couleur au vocabulaire. Ajouter du vert/orange/rouge ici casserait la règle §3a, qui vient d'apprendre au joueur que la couleur veut dire le type de sol.

---

## 4. Le lointain — perspective atmosphérique (valeurs pour #31)

C'est le sujet qui fait passer le monde de « bac à sable » à « lieu », et c'est un réglage de DA. Trois choses, dans cet ordre d'impact.

### 4a. D'abord boucher la couture, ensuite poser des montagnes

Constat 2 : le sol s'arrête net contre le ciel, 111 valeurs d'écart sur une rangée de pixels. **Des montagnes posées derrière cette couture ne la répareront pas.** Le correctif est une **jupe de sol** : prolonger le terrain au-delà de `LAWN_BOUNDS` par un anneau plat, non éclairé, jusqu'à **420 unités du centre de la pelouse (0, 125)**.

Pourquoi 420 : avec le brouillard linéaire fondé (90/420), 92 % de brume est atteint à 394 unités ; avec le brouillard du prologue (40/300), à 279. Un anneau de rayon 420 couvre les deux états. Sa couleur importe peu (il est à ≥ 92 % de brume) — la prendre égale à la teinte mousse/sol moyenne pour que les derniers 8 % soient justes. Coût : quelques dizaines de triangles.

**Critère de sortie :** à l'horizon visuel, l'écart de luminance entre le dernier sol et le ciel juste au-dessus doit tomber sous **25** (aujourd'hui : 111).

### 4b. Les montagnes : trois plans, une seule règle

Une montagne lointaine n'a pas d'éclairage propre — c'est de l'air empilé. Donc : **géométrie très basse résolution, valeur plate par plan, aucune lumière reçue** (`MeshBasicMaterial`). WoW fait exactement ça.

La règle unique : chaque plan est **un seul lerp de la couleur de roche vers la couleur d'atmosphère de l'état courant**. Pas d'étape de désaturation séparée — le lerp vers une couleur peu chromatique désature déjà, et c'est ce qui se passe physiquement.

| Plan | Distance indicative | Poids du lerp | **Fondé** (vers `#AFC8D8`) | **Prologue** (vers `#5C5568`) |
|---|---|---|---|---|
| Proche | ~700 unités | **0.55** | `#97A1A3` (lum 159) | `#696266` (lum 100) |
| Moyen | ~1400 | **0.75** | `#A2B3BB` (lum 176) | `#645C67` (lum 94) |
| Lointain | ~2200 | **0.88** | `#A9BECA` (lum 186) | `#605967` (lum 91) |

Base de roche : `#7A7263` (`STONE_MD`, déjà dans le générateur).

**Point de teinte d'atmosphère, à retenir :** de jour, on désature **vers la couleur du ciel à l'horizon** (`#AFC8D8`) — les montagnes s'éclaircissent en s'éloignant et finissent plus claires que le premier plan. Au crépuscule, on désature vers un **horizon assombri** (`#5C5568`, = la couleur de brume `#8B8399` × 0.68) — les montagnes deviennent des **silhouettes plus sombres que le ciel**. C'est l'inversion qui rend un crépuscule crédible, et c'est une seule constante par état.

Garde-fou de jour : aucun plan ne doit descendre sous **60 % de la luminance du ciel à l'horizon** (196 → plancher 118). Une montagne diurne plus sombre que le premier plan se lit comme un trou dans le décor, pas comme une distance.

### 4c. Deux détails techniques qui vont mordre

1. **`camera.far` vaut 500.** Des montagnes à 1400-2200 unités seront purement et simplement clippées. Recommandation : passer la caméra de `(0.1, 500)` à **`(0.5, 2600)`**. Le rapport far/near *s'améliore* au passage (5000 → 5200), donc la précision du z-buffer n'est pas dégradée — à l'échelle de la fourmi, un near de 0.1 unité ne sert à rien, rien ne s'approche autant de l'œil.
2. **Le fond n'est pas brouillardé.** `scene.background` ignore le fog, donc si les montagnes sont de la géométrie elles seront fogguées et si c'est un fond peint elles ne le seront pas. Les valeurs de 4b font le travail **à la main** dans les deux cas : c'est fait exprès, elles ne dépendent pas du fog. Ne pas cumuler les deux (fog + lerp), ça donnerait un lointain lavé.

### 4d. La boîte d'ombre, avec un soleil à 18,5°

À 18,5°, l'ombre de l'arbre (`h = 340`) fait **1016 unités**. La boîte actuelle (±150, 2048²) ne la contient pas, et l'élargir pour la contenir donnerait 1 unité par texel — inutilisable à l'échelle d'une fourmi de 7 unités.

Recommandation : **arrêter de couvrir la carte et suivre le joueur.** Boîte de ±110 recentrée chaque frame sur la fourmi, snappée sur un incrément de texel (sinon l'ombre scintille quand on marche). À 2048², ça donne **0,107 unité/texel**, soit ~65 texels sur la longueur de la fourmi — nettement mieux qu'aujourd'hui (0,146 avec la boîte fixe ±150). Au-delà de ±110, il n'y a plus d'ombre portée, mais c'est déjà à 15 longueurs de fourmi et sous le brouillard.

Et deux réglages qui deviennent nécessaires à incidence rasante : `sun.shadow.normalBias ≈ 0.6` (c'est le bon bouton en rasant ; `bias` seul décolle les ombres du pied des objets), `sun.shadow.camera.far` à couvrir la nouvelle distance de la lampe.

**Ne pas descendre sous 15° d'élévation.** En dessous, le sol est vu si rasant qu'il vire au noir quel que soit le remplissage, et l'acné d'ombre revient quoi qu'on fasse sur le biais.

---

## 5. Textures livrées ce round

Toutes régénérées par `npm run gen:textures` depuis `game/` (`game/scripts/generate-procedural-textures.mjs`). Conventions, budget et pipeline couleur inchangés (`design/pipeline-textures.md`).

### 5a. `bark_albedo` — v3, des plaques au lieu de côtes

Le retour de revue était juste : v2 lisait comme du carton ondulé. La cause est identifiée et n'est pas une affaire de goût :

- la structure était une **grille stricte** de `RIDGES = 9` côtes en sinus — donc parfaitement périodique, une seule échelle ;
- et le bruit de fibre était `tileableNoise(20, 90, 3)` avec le commentaire « grain runs along the trunk ». **Les axes étaient inversés** : 20 cellules en u et 90 en v produisent des motifs larges et courts, c'est-à-dire des **stries horizontales**. Une côte verticale régulière croisée par des bandes horizontales : c'est littéralement du carton ondulé, et c'est exactement ce qui a été vu.

v3 abandonne la grille et reprend la grammaire de `tunnel-dirt` (la texture du lot validée en revue) — des plaques avec la lumière peinte dedans — mais avec les cellules **étirées le long du tronc**, et à **trois échelles** :

| Échelle | Champ | Profondeur de fissure | Rôle |
|---|---|---|---|
| Plaques majeures | `cellular(6, 2)`, warp 0.085 | pleine | ~0,167 × 0,5 en uv, soit un rapport 3:1 vertical. Les grandes plaques. |
| Sous-plaques | `cellular(11, 5)`, warp 0.055 | 0.60 | chaque plaque majeure est elle-même cassée |
| Craquelure | `cellular(21, 11)`, warp 0.035 | 0.30 | le faïençage de surface |

Chaque plaque porte `facetLight()` (lèvre claire du côté lumière de son bord, contact sombre de l'autre) — les deux mêmes coups de pinceau que les cailloux de `tunnel-dirt`. La fibre est maintenant **haute et étroite** (`tileableNoise(46, 6)`) et **déphasée par plaque** (`fibre(u + P.id × 0.37, v)`), donc elle s'arrête à chaque fissure au lieu de courir sur toute la hauteur de la tuile : c'est l'autre moitié de ce qui donnait l'aspect extrudé.

**Pas de nœuds, volontairement.** Un nœud est un accident unique et cette texture se répète : il reviendrait sur un réseau régulier partout sur le tronc, ce qui est bien pire que pas de nœud. Un nœud appartient à la géométrie ou à un décalque.

Note d'amplitude de warp, pour la prochaine fois : le premier essai de v3 était à `warp 0.30` en unités uv, soit **1,5 cellule** en u sur un champ à 5 cellules — l'anisotropie était entièrement détruite et le résultat sortait en galets ronds, indiscernable de `stone`. L'amplitude de warp doit rester une **fraction** de la taille de cellule, pas de la tuile.

**Recommandation CC0 révisée :** avec cette version, je ne recommande plus de télécharger de pack d'écorce. La charte §6 réservait l'écorce comme le seul cas où un pack peint main gagnerait franchement ; l'argument était l'irrégularité multi-échelle, et c'est précisément ce que v3 apporte. À rouvrir seulement si une capture de tronc en jeu la contredit. Le verdict sur FreeStylized (licence ambiguë, à ne pas utiliser) reste inchangé.

### 5b. `chitin_albedo` — v2, la finition plutôt que les plaques

Même défaut que `bark`, sur la surface la plus regardée du jeu : v1 posait une grille de 5 × 8 ovales identiques. À `worldPerTile 4` sur une fourmi de ~7 unités, ça fait ~9 colonnes et ~14 rangées de plaques sur le corps — ce n'est pas un insecte, c'est du papier bulle. Et ça se bat avec le mesh : la fourmi est faite de lobes lisses low-poly, donc un motif de plaques dessiné dans la texture ne coïncide jamais avec la silhouette et se lit comme un tissu imprimé tendu sur le corps.

**Arbitrage : la segmentation appartient au corps, pas au vernis.** v2 renonce à dessiner les plaques et porte la *finition*, qui est ce qui fait qu'une chitine se lit comme de la chitine : ponctuation dense et irrégulière à lèvre claire (~0,16 unité monde à `worldPerTile 4`), sockets de soies plus rares et plus sombres, et deux bandes de lustre basse fréquence en diagonale pour qu'aucun lobe ne soit jamais d'une seule valeur.

**Demande à Atta qui va avec** (une ligne, `world/queen.js` / `player/antMesh.js`) : faire porter les **tergites** par la couleur sommet du gastre — une bande plus sombre par anneau, 4 ou 5 sur le gastre. C'est ça qui rendra la fourmi segmentée, pas la texture.

Bénéfice secondaire : sans motif répétitif, il n'y a plus rien à faire coïncider au raccord, donc la densité `worldPerTile 4` devient beaucoup moins critique qu'elle ne l'était.

### 5c. `sky_gradient-lawn` / `sky_gradient-prologue` — nouvelles

8 × 128, 0,5 Ko chacune, `v = 0` au zénith et `v = 1` à l'horizon. Livrées comme textures pour la même raison que les rampes toon : la courbe appartient à la DA et doit s'itérer sans toucher un shader.

**Le dernier palier de chaque dégradé est exactement la couleur de brouillard de son état** (`#AFC8D8` fondé, `#8B8399` prologue) : le sol qui se noie dans la brume et le ciel qui touche l'horizon arrivent donc à la même valeur, et la couture disparaît (§4a).

Ce sont de la **couleur**, pas de la donnée — contrairement aux rampes toon :

```js
sky.colorSpace = THREE.SRGBColorSpace;   // <- l'inverse des toon ramps
sky.minFilter = sky.magFilter = THREE.LinearFilter;
sky.generateMipmaps = false;
sky.wrapS = sky.wrapT = THREE.ClampToEdgeWrapping;
```

Branchement suggéré : un dôme (ou un quad plein écran en fond) dont le shader échantillonne **les deux** dégradés et les mélange par `uFounded`. Un `scene.background` texturé ne permettrait pas le fondu de la bascule.

### 5d. Pavage — revérifié numériquement

Même métrique que le round précédent (écart moyen au raccord ÷ écart moyen entre deux colonnes/lignes adjacentes ; 1.0 = raccord indiscernable) :

| Texture | raccord u | raccord v |
|---|---|---|
| `bark` v3 | **1.13** | **1.19** |
| `chitin` v2 | **1.13** | **1.08** |
| `tunnel-dirt` (référence, inchangée) | 1.18 | 1.33 |

`chitin` v2 mesurait d'abord **1.69** en u : le balayage de lustre était écrit `sheen(0.5·u + 0.5·v, v)`, or `tileableNoise` est périodique de période 1 en chacun de ses arguments — seul un **coefficient entier sur u** garde la diagonale continue au raccord. Corrigé en `sheen(u + v, v)`, ce qui ramène à 1.13. Le raccord vertical de `chitin` passe aussi de 2.38 (v1) à 1.08.

Limite connue, reportée et inchangée : `fleckMask` ne fait pas de recherche sur les cellules voisines, donc une moucheture tombant pile sur u = 0 ou u = 1 peut se couper. Non observé.

---

## 6. Demandes de branchement (hors périmètre DA de ce round)

À **Atta** — `game/src/world/**`, `game/src/main.js`, `game/src/core/**` :

1. **Scalaire `founded`** dans la boucle de `main.js`, jumeau d'`outside`, ne déplaçant que les extrémités *extérieures* du lerp existant (§2a, code fourni). Animé une fois sur ~6 s.
2. **Les valeurs du rig de prologue** (§1b) : soleil position/couleur/intensité, hémisphérique, brouillard, exposition. Le soleil et l'hémisphérique se commutent par `founded` **seulement**, jamais par `outside`.
3. **Jupe de sol jusqu'à 420 unités** du centre de la pelouse (§4a) — le correctif au plus fort effet de tout ce document, et quelques dizaines de triangles.
4. **`camera.far` 500 → 2600, `camera.near` 0.1 → 0.5** (§4c).
5. **Montagnes en trois plans plats non éclairés**, valeurs de §4b, avec la couleur d'atmosphère commutée par `founded`.
6. **Dôme de ciel** échantillonnant les deux `sky_gradient-*` mélangés par `founded` (§5c), en remplacement de `scene.background` uni.
7. **Boîte d'ombre suivant le joueur**, ±110 snappée au texel, `normalBias ≈ 0.6` (§4d).
8. **Rampe toon extérieure commutée** : `ramp-nest` pendant le prologue, `ramp-lawn` une fois fondé (§1b).
9. **Familles de sol** de §3a dans le calcul de couleur sommet du terrain (#31), et les deux dégradés d'eau de §3c.
10. **Monticule, lampe chaude de bouche `[1.05, 0.62, 0.24]`, rayon piétiné de 40 unités** à la fondation (§2b).
11. **Tergites en couleur sommet** sur le gastre de la fourmi et de la reine (§5b) — la texture ne les dessine plus.
12. **Chambre vide + ordre d'allumage** du tableau §2c (#12) : puits froid `[0.55, 0.62, 0.82]`, puis noir, puis lampe de couvain `[0.85, 0.55, 0.22]`, puis perles, puis champignons.

À **Cataglyphis** — `game/src/player/**` :

13. **Halo de site** sous la reine (§3f) : ellipse miel `#E6B558`, opacité 0.25 pulsée à 0.5 Hz, **rayon 6 → 14 unités selon la qualité**, et **absente** sur roche et berge. C'est la forme visuelle que devrait prendre à terme le retour texte de #32 — la fonction de qualité peut rester exactement celle que tu écris, seul l'affichage change.
14. Rappel du round précédent, toujours visible sur les captures de ce round : le **fondu tramé de l'herbe** couvre encore une bonne partie du cadre. Avec un soleil rasant il deviendra plus voyant, pas moins.

---

## 7. Délibérément pas fait

- **Aucune modification de `game/src/world/**`, `game/src/player/**`, `game/src/main.js`, `game/src/core/**`** — Atta refait le terrain et Cataglyphis la reine sur ce même round. Tout ce qui les concerne est en §6, en valeurs prêtes à coller.
- **Pas de cycle jour/nuit** (§1a). Deux états écrits.
- **Pas de biome féerique extérieur** (spore/violet, Marécage Fongique) : inchangé depuis #1 et la charte §8. Le violet reste tardif et souterrain, sinon le plan 7 de §2c ne vaut plus rien.
- **Pas de météo, pas de pluie, pas de vent visible autre que celui déjà en place.** Une pluie de prologue serait un deuxième signal de « c'est dur » qui affaiblirait le premier au lieu de l'appuyer.
- **Pas de `_orm` / `_normal`, pas de contour plein écran, pas de SSAO, pas de Basis/KTX2** — raisons inchangées, `charte-stylisation.md` §3 et §8.
- **Pas de texture de brin d'herbe ni de feuille** : bloqué sur les mêmes prérequis qu'au round précédent (dépliage de brin ; décision de rendu sur l'alpha cutout).

## 8. Ce qui reste à confirmer sur capture

Rien de ce document n'a été vu dans le moteur — le rig du prologue n'est pas branché, les montagnes n'existent pas, et aucune surface ne porte encore `bark` v3 ni `chitin` v2. Les textures ont été relues comme images et vérifiées numériquement au pavage ; les valeurs sont calculées contre les constantes réelles du build 247f326 et contre sept captures mesurées au pixel. À reconfirmer dans cet ordre :

1. l'écart de luminance sol/ciel à l'horizon après la jupe de sol (cible < 25, mesuré 111) ;
2. la chute de luminance moyenne prologue → fondé au même point de vue (cible ≥ 35 %) ;
3. l'écart côté soleil / côté ombre sur un brin, sous le soleil rasant (cible ≥ 45, mesuré 17) ;
4. la luminance médiane du plan 4 de la séquence de fondation (cible 18-28) ;
5. `bark` v3 sur le tronc à distance de grimpe : les plaques doivent encore se distinguer les unes des autres à ~30 unités ;
6. `chitin` v2 sur la fourmi en gros plan : la ponctuation doit se voir sans que la fourmi ne devienne granuleuse.
