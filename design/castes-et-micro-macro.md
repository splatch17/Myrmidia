# Castes et micro/macro — le choix à la ponte

Spec pour le ticket [#38](https://github.com/splatch17/MYRMIDIA/issues/38) —
« Choisir la caste à la ponte : ouvrière ou creuseuse ». Se pose au-dessus de
`charte-stylisation.md` (couleur = valeur avant teinte, silhouette avant
texture) et ne le refait pas. Ne touche ni `player/**` ni `world/**` : ce
document donne des chiffres à coller dans `avatar.js`, il ne les colle pas.

---

## 1. Ce qu'est une caste ici

Dans ce jeu, une caste n'est pas une classe de personnage au sens RPG : c'est
**un corps et un jeu de constantes de déplacement**, rien de plus — la ligne
`WORKER` ou `FOUNDING_QUEEN` d'`avatar.js`. Pas de compétence propre, pas
d'arbre de talents : ce que fait une caste est décidé ailleurs (`brood.js`
pour la naissance, `workers.js`/`forage.js` pour le comportement). La caste ne
répond qu'à une question : **à quoi ressemble et comment se déplace le corps
qu'on vient de faire naître.**

C'est ce qui rend le choix à la ponte réel plutôt que cosmétique. Le ticket le
formule exactement : « pondre des creuseuses, c'est ne pas pondre
d'ouvrières ». La réserve de couvain est finie (`EGG_COST`, capacité du
couvoir), et une couvée entière prend une seule caste (frontière déjà tracée
dans `brood.js` depuis le tour 10, cf. `PROGRESS.md`). Choisir la creuseuse,
c'est donc explicitement renoncer à de la récolte pendant que cette couvée
grandit — un arbitrage, pas un menu. C'est la première fois dans la boucle de
jeu que le joueur *renonce* à quelque chose pour obtenir autre chose ; tout ce
qui précède (récolter, fonder, pondre) n'avait qu'un chemin possible.

---

## 2. La silhouette de la creuseuse

### 2a. L'étalon : le corps de l'ouvrière

Tout ce qui suit est chiffré contre `WORKER` d'`avatar.js` (`scale: 1`),
lignes 82-101, et son `WORKER_BODY` (lignes 55-64). C'est le corps qui a
`scale: 1` par construction — la reine (`FOUNDING_QUEEN`, `scale: 2.2`) n'est
pas l'étalon ici, elle appartient à une autre classe de taille et le ticket ne
demande pas de comparer la creuseuse à elle.

Le mandible de l'ouvrière (`WORKER_BODY.mandible`) : `root: [0.52, 1.42,
3.35]`, `tip: [0.30, 1.22, 4.55]`, `gape: 0.22`, `r: 0.15` — un cylindre de
rayon 0,15 sur une portée d'environ 1,24 unité (root→tip), soit un rapport
épaisseur/longueur de **0,12** : c'est une pince fine, pensée pour saisir une
graine (`ressources-et-fondation.md` §2a : une graine fait 7 unités de long
et 4,6 de large — l'ouvrière n'a pas besoin de plus large que ça).

### 2b. La table `DIGGER`

Le critère du ticket : distinguable **à hauteur de fourmi, dans l'herbe**, à
cette distance où seules la silhouette et la valeur (clair/sombre) portent —
jamais la teinte fine (même doctrine que `ressources-et-fondation.md` §1 :
« la silhouette porte l'espèce, le halo porte l'interaction, la valeur porte
l'état »). Ici, la valeur porte la caste.

Deux leviers, un seul but : **la mandibule doit lire comme une pelle, pas
comme une pince**, et **le corps doit lire comme plus sombre**, jamais comme
une teinte différente qu'il faudrait apprendre à reconnaître.

```js
export const DIGGER = {
  id: 'digger',
  label: 'creuseuse',
  scale: 1.08,
  legs: WORKER_LEGS,
  body: {
    ...WORKER_BODY,
    mandible: { root: [0.52, 1.42, 3.35], tip: [0.34, 1.10, 4.30], gape: 0.32, r: 0.27 },
  },
  breathes: false,
  colors: { chitinA: 0x5c3b18, chitinB: 0x2c1e0e, limb: 0x472d15, mandible: 0x855f2a, eye: 0x100c06 },
  maxSpeed: 12.5,
  sprint: 1.75,
  turnRate: 6.5,
  legLen: [2.7, 2.9],
  stride: 6.0,
  climbSpeed: 20,
  bodyR: 1.5,
  cam: { dist: 36, min: 10, max: 85 },
};
```

Justification, valeur par valeur, toujours contre `WORKER` :

| Champ | `WORKER` | `DIGGER` | Pourquoi |
|---|---|---|---|
| `scale` | 1 | **1,08** | +8 % : une masse générale cohérente avec des mandibules alourdies — les grossir sur un corps de taille identique donnerait un outil disproportionné plutôt qu'un corps trapu. Reste très loin de la reine (2,2) : pas de confusion de classe de taille possible. |
| `mandible.root` | `[0.52, 1.42, 3.35]` | **identique** | Le point d'attache à la tête ne change pas — c'est la lame qui doit changer, pas sa base. |
| `mandible.tip.x` | 0.30 | **0,34** (+13 %) | Pointe plus écartée du plan médian : une pelle est plus large qu'une pince. |
| `mandible.tip.y` | 1.22 | **1,10** (−10 %) | Pointe qui plonge davantage : l'angle d'attaque d'un outil qui mord le sol, contre la pince à peu près horizontale de l'ouvrière. |
| `mandible.tip.z` | 4.55 | **4,30** (−5 %) | Portée légèrement raccourcie : compense l'épaississement pour que l'ensemble reste un outil trapu plutôt qu'une arme longue — la longueur totale ne doit pas dépasser celle du corps. |
| `mandible.gape` | 0.22 | **0,32** (+45 %) | Ouverture au repos plus large : une pelle qu'on referme rarement, contre une pince qui se ferme sur une graine. |
| `mandible.r` | 0.15 | **0,27** (+80 %) | Le chiffre qui décide, à lui seul, si la silhouette lit « outil » ou « pince » à trente unités. Rapport épaisseur/longueur : 0,12 → **0,24**, soit deux fois plus massif pour une longueur presque inchangée. |
| `colors.*` (chitinA/B, limb, mandible) | ex. chitinA `0x8b5a24` | **× 0,66 en valeur, teinte strictement identique** | Assombrissement uniforme des quatre couleurs de chitine (voir calcul ci-dessous). Même teinte que l'ouvrière, valeur plus basse : conforme à la doctrine « la valeur porte l'état, pas une nouvelle couleur à apprendre » — appliquée ici à la caste plutôt qu'à un nœud de ressource épuisé (`ressources-et-fondation.md` §5b). |
| `colors.eye` | `0x100c06` | **inchangé** | L'œil n'est pas de la chitine ; déjà quasi noir, l'assombrir davantage ne changerait rien à l'écran. |
| `maxSpeed` | 15 | **12,5** (−17 %) | Une bête faite pour creuser ne fonce pas vers une ressource : au déplacement, elle doit déjà se distinguer d'une ouvrière avant même qu'on voie ses mandibules. |
| `turnRate` | 9 | **6,5** (−28 %) | Une tête alourdie par une mandibule presque deux fois plus épaisse pivote moins vite — même principe que la reine (turnRate 4,2 contre 9 pour un corps bien plus lourd), à une échelle plus modeste ici. |
| `stride` | 7,0 | **6,0** (−14 %) | Foulée plus courte et plus appuyée : un corps qui progresse pour creuser, pas pour courir. Reste au-dessus de la moitié de celle de l'ouvrière pour ne pas paraître figée. |
| `sprint`, `legLen`, `climbSpeed`, `bodyR`, `cam` | — | **inchangés** | Aucune raison de les faire diverger : ce round ne touche que ce qui porte la lecture « caste », pas la mécanique de sprint/grimpe/caméra. Note piège #6 : `bodyR` restant à 1,5 mais `scale` passant à 1,08, `collideRadius(DIGGER)` (`bodyR × scale`) vaut **1,62** contre 1,5 pour l'ouvrière — léger et volontaire, à garder en tête si un jour un couloir est dimensionné pile contre 1,5. |

**Calcul de l'assombrissement des couleurs** (×0,66 exact, teinte
préservée) :

| | `WORKER` | `DIGGER` |
|---|---|---|
| `chitinA` | `0x8b5a24` (139,90,36) | **`0x5c3b18`** (92,59,24) |
| `chitinB` | `0x432d15` (67,45,21) | **`0x2c1e0e`** (44,30,14) |
| `limb` | `0x6b4420` (107,68,32) | **`0x472d15`** (71,45,21) |
| `mandible` | `0xc9903f` (201,144,63) | **`0x855f2a`** (133,95,42) |

Le rapport de luminance mandibule/chitinA est préservé (≈1,54 chez
l'ouvrière, ≈1,55 chez la creuseuse) : la mandibule reste, sur les deux
corps, l'accent le plus clair du corps — la grammaire « lèvre claire /
contact sombre » de `charte-stylisation.md` §5 continue de s'appliquer, elle
descend juste d'un cran de valeur avec tout le reste.

### 2c. Ce que ça change ailleurs — sans y toucher

`body` n'écrase que `mandible` (`{ ...WORKER_BODY, mandible: {...} }`) : les
ellipsoïdes de tête, thorax, gastre, antennes et pattes restent ceux de
l'ouvrière au pixel près. C'est délibéré — le ticket demande une mandibule
plus lourde et une chitine plus sombre, pas un corps redessiné, et un corps
identique excepté sa mandibule est aussi ce qui garantit qu'on continue de
lire « fourmi », pas « créature à part ».

### 2d. À juger à l'œil, jamais vérifiable ici

Aucun rendu n'a tourné pendant l'écriture de cette spec (VPS ARM sans GPU,
cf. contrainte de round). À confirmer sur capture, dans cet ordre :

1. **Le critère de fin du ticket lui-même** : les deux castes côte à côte, à
   hauteur de fourmi, dans l'herbe — se distinguent-elles au premier regard,
   avant même de s'approcher ?
2. **`mandible.r = 0.27`** est-il suffisant, ou faut-il pousser encore (le
   chiffre a été choisi par calcul de rapport épaisseur/longueur, jamais vu
   à l'écran) ?
3. **L'assombrissement ×0,66** est-il assez marqué contre le sol et l'herbe
   de `charte-stylisation.md` §1a (`C_MOSS_*`), ou la creuseuse se fond-elle
   dans l'ombre au lieu de s'en détacher ? Si la coque inversée (§3 de la
   charte) tourne déjà sur les deux castes, elle devrait suffire à détacher
   les deux corps du décor indépendamment de ce chiffre — à vérifier que
   l'un ne rend pas l'autre superflu ou, à l'inverse, insuffisant.
4. **`turnRate = 6.5`** au clavier : perçu comme « plus lourd » ou comme
   « qui répond mal » ? La reine (4,2) est déjà validée comme lisible ; la
   creuseuse doit tomber entre les deux, pas se confondre avec l'une ou
   l'autre au ressenti.
5. Le compteur HUD qui sépare les deux castes (périmètre `hud.js`, hors DA) —
   je n'ai pas de chiffres à donner dessus, seulement à confirmer qu'il ne
   réutilise pas la même couleur que le halo miel des ressources (§1 de
   `ressources-et-fondation.md` : ce halo est déjà pris).

---

## 3. Contrainte structurelle : une ligne, pas un fichier

Citée par le ticket : **« une caste est une ligne dans `player/avatar.js`, pas
un fichier »**. `WORKER` et `FOUNDING_QUEEN` sont déjà des entrées d'une même
table, lues par profil (`ant.profile`) plutôt qu'importées comme un global —
tout le reste (`legs.js`, `antMesh.js`, `movement.js`, `camera.js`,
`climb.js`, `decorCollision.js`) est déjà écrit pour recevoir une caste de
plus sans se modifier lui-même. `DIGGER` doit suivre exactement ce moule :
une entrée supplémentaire dans le même objet de correspondance
(`PROFILES_BY_ID` de `player/entities.js`), pas un second contrôleur.

**Pourquoi ça compte plus qu'un style de code.** Le mode micro (§4) doit un
jour permettre de contrôler n'importe quelle fourmi de la colonie — ouvrière,
creuseuse, un jour peut-être la reine elle-même en visite. Ça ne marche que si
« contrôler une fourmi » veut dire une seule chose : lire son `profileId`,
retrouver la ligne dans la table, et faire tourner le même
`updateEntity()` (déjà le chemin commun joueur/PNJ depuis #36). Si une caste
vit dans son propre fichier avec sa propre logique de mouvement ou de rendu,
ce jour-là il faut réécrire cette caste plutôt que de la brancher.

**Ce qui trahirait l'écart** : un `digger.js` à côté de `worker.js` — un
second builder de mesh, un second bloc de contrôle clavier, une seconde
fonction `updatePose`. Deux pièges déjà documentés dans le code lui-même à
surveiller pour toute nouvelle caste (relevés dans `PROGRESS.md`, tour 14) :
`PROFILES_BY_ID` (`player/entities.js`) doit gagner l'entrée `digger`, et le
`reduce([WORKER, FOUNDING_QUEEN])` d'`antMesh.js` (ligne 93, dimensionne les
pools d'instances partagés) doit inclure `DIGGER` — l'oublier n'est pas une
erreur qui plante, c'est un dépassement silencieux de pool le jour où une
creuseuse naît.

---

## 4. Micro/macro : ce que ça implique plus tard

**Micro** (aujourd'hui : la seule vue qui existe). Le joueur incarne un seul
corps à la fois — la reine aujourd'hui, potentiellement n'importe quelle
fourmi de la colonie une fois le mode micro généralisé. Parce qu'une caste
n'est qu'une ligne de `avatar.js` lue par profil, « prendre le contrôle d'une
creuseuse » n'est pas une fonctionnalité à écrire à part : c'est brancher un
`drive` de joueur sur une entité qui a déjà `profileId: 'digger'`, exactement
comme une ouvrière IA en a un aujourd'hui sur `'worker'` (`workers.js`). Le
choix de caste à la ponte n'est donc pas seulement une décision de ressources
— c'est aussi, plus tard, un choix de *ce qu'on pourra un jour habiter*.

**Macro** (n'existe pas encore, #34 — le nid en coupe, vue de côté). À cette
échelle, une caste cesse d'être un corps individuel qu'on regarde et devient
une **population qu'on compte** : combien de creuseuses actives, combien de
tunnels en cours. C'est exactement ce que ce ticket prépare sans l'implémenter
— l'arbitrage acté au tour 14 (« une creuseuse ne butine pas ») n'a de sens
que si le comptage par caste existe déjà quelque part (compteur HUD de ce
ticket), prêt à être agrégé plutôt que recompté depuis zéro le jour où le nid
en coupe existe. Ce document ne spécifie rien de plus sur le macro : ce n'est
pas son sujet ce round.

---

## 5. Délibérément pas fait

- **Aucun changement à la géométrie du corps** hors mandibule (§2c) — la
  lisibilité vient de la mandibule et de la valeur, pas d'un redessin.
- **Aucune modification de `player/**`, `world/**`, `core/**`.** Tout ce
  document donne des valeurs prêtes à coller ; les coller est le travail de
  Cataglyphis.
- **Aucun système de gameplay pour le creusement lui-même** — c'est l'étape
  2/4 annoncée par le ticket, pas celle-ci.
- **Aucun rendu, aucune capture** — contrainte matérielle du round (VPS ARM
  sans GPU). Voir §2d pour ce qui reste dû à l'œil.
