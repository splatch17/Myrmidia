# État des lieux — où en est Myrmidia, et dans quel ordre continuer

Écrit au tour 11, après dix tours de développement, à la demande du porteur du
projet : prendre du recul sur la structure, la manière d'implémenter et l'ordre
des priorités, avant de repartir sur des features.

Ce document n'est pas un plan figé. C'est un constat, une critique de la façon
dont on a travaillé jusqu'ici, et une proposition de réordonnancement. Les
arbitrages de `boucle-de-jeu.md` §0 restent au-dessus de lui.

---

## 1. L'écart entre ce qui est écrit et ce qui existe

Le `README.md` décrit **Unreal Engine 5, Nanite, Lumen, un serveur ECS,
six castes jouables, du combat, de la météo comme menace, une colonie qui
tourne hors ligne**. Le dépôt contient un prototype Three.js solo, un avatar,
et un prologue qui se termine à la première couvée.

Ce n'est pas un échec : le passage à Three.js a été arbitré explicitement, et
c'était le bon choix — on a un jeu qui tourne dans un navigateur en dix tours,
là où Unreal aurait consommé ce temps en mise en place. **Mais le README décrit
aujourd'hui un autre projet que celui qu'on développe**, et c'est un vrai
problème d'orientation : quelqu'un qui arrive lit « Unreal » et ouvre du
Three.js. À réconcilier — soit le README dit « cible long terme »
explicitement, soit il décrit le projet réel.

L'ambition MMORPG, elle, reste intacte. Ce qui suit sert à l'atteindre.

---

## 2. Ce que la structure a de bon, et ce qu'elle a de creux

### a) Ce qui tient

**La séparation monde / joueur.** `world/**` ne connaît pas `player/**` ; la
dépendance ne va que dans un sens. C'est ce qui permet de tester le monde sans
contrôleur, et ça n'a jamais été enfreint en dix tours.

**Le contrat d'interface** (`api-monde-gameplay.md`) écrit avant de distribuer
le travail. Il existe parce qu'un tour l'a coûté — deux moitiés d'une même
feature spécifiées séparément, chacune correcte, incapables de se parler, sans
lever la moindre erreur. Depuis, deux tours de suite, des agents ont livré sous
les mêmes noms sans se consulter. **C'est le meilleur investissement de méthode
du projet.**

**Le profil d'avatar** (`player/avatar.js`). Tout ce qui était « la taille, la
vitesse, la portée de l'ouvrière » y est centralisé, lu sur `ant.profile`. Un
second corps est une entrée de plus, pas un second contrôleur. C'est exactement
la bonne forme pour ce qui vient.

**La vérification par capture.** Aucun défaut sérieux n'a été trouvé en
relisant du code : la rivière noire, le brouillard du nid sur la pelouse,
l'herbe plus large que la reine, l'alésage du nid, l'empreinte manquante de
`waterDepthAt` — tous trouvés en regardant des images ou en mesurant des
pixels. La règle « rien n'est fini sans capture » a payé à chaque tour.

### b) Le trou n° 1 — aucun index spatial

**Toute requête de proximité est un balayage linéaire de la carte entière, à
chaque image.**

| Appel | Parcourt | Fréquence |
|---|---|---|
| `nearestClimbable()` | tous les brins d'herbe | **chaque image** |
| `harvest.target()` | tous les nœuds de ressources | **chaque image** |
| `resolveDecorCollision()` | champignons, cailloux, tiges | **chaque image** |
| `probeShade()` / `probeFood()` | tous les brins | 4 ×/s |

À 3400 brins et 60 images/s, `nearestClimbable` seul faisait 204 000 calculs de
distance par seconde pour trouver un objet à moins de 10 unités. C'est la
consommation CPU que le joueur ressent, et elle a doublé quand la carte a
grandi au tour 9.

**C'est aussi ce qui cassera en premier quand les PNJ arriveront** : chaque
fourmi ajoutée refait tous ces balayages pour elle-même. Vingt ouvrières, c'est
vingt fois le coût, quadratique dès qu'elles s'évitent entre elles.

### c) Le trou n° 2 — aucune couche d'entités

Le code ne connaît que deux choses : **le joueur**, et **le monde**. Il
n'existe aucune notion de *fourmi qui n'est pas le joueur*. La prochaine
feature — les ouvrières — n'a littéralement pas d'endroit où vivre.

C'est aussi ce qui bloque le switch micro/macro annoncé depuis le début :
prendre le contrôle d'une ouvrière suppose qu'elle existe quand on ne la
contrôle pas.

### d) Le trou n° 3 — aucune persistance

L'état de la colonie vit dans des fermetures de module. Rien n'est
sérialisable. Le README promet une colonie qui continue hors ligne ; on ne peut
même pas recharger la page sans repartir de zéro. Ce n'est pas urgent
aujourd'hui, mais **chaque système écrit sans y penser rendra la conversion
plus chère** — c'est déjà le cas de `founding.js`, `harvest.js` et `laying.js`.

### e) Deux odeurs plus locales

`world/terrain.js` fait 703 lignes et porte le champ de hauteur, la rivière, la
mare, les requêtes de gameplay, le maillage, l'eau et l'horizon. C'est le
fichier que tous les agents touchent, donc le point de conflit.

La séquence de ponte est **scriptée sur 14 secondes sans contrôle**. Elle
existe parce qu'une reine ne peut pas descendre un puits vertical avec un
contrôleur qui suit le sol. Acceptable une fois ; le même manque reviendra pour
chaque espace souterrain, et le mode macro en est plein.

---

## 3. Critique de l'ordre suivi

Dix tours, honnêtement résumés : **du rendu, des correctifs, et un prologue**.
Chaque tour a été piloté par ce que le dernier essai avait révélé. C'était la
bonne méthode pour trouver les défauts — elle en a trouvé beaucoup, et des
vrais.

Mais ça n'a **pas construit vers le MMORPG**. Dix tours après, il n'y a
toujours aucun PNJ, aucune simulation, aucune persistance, aucun réseau, aucune
caste. Le prologue est fini et il n'y a rien derrière : le HUD promet une
couvée suivante et il n'y a ni ouvrière, ni croissance.

Le réflexe naturel serait d'enchaîner sur « les ouvrières ». **C'est
prématuré.** Écrire les ouvrières sur la structure actuelle, c'est ajouter
vingt balayages linéaires par image et vingt singletons non sérialisables. On
paierait cette dette à chaque feature suivante.

### La proposition

**Deux systèmes porteurs d'abord, ensuite le contenu.** Ils ne se voient pas à
l'écran, ils prennent un tour, et tout ce qui vient après en dépend :

1. **Un index spatial partagé** — une grille uniforme, reconstruite quand le
   monde change, interrogée par tout ce qui demande « qu'y a-t-il près d'ici ».
   Supprime les balayages, et c'est ce qui rend les PNJ abordables.
2. **Une couche d'entités** — une liste de fourmis avec un profil, une
   position, un état, et une mise à jour par image. Le joueur devient
   *l'entité contrôlée* plutôt qu'un cas particulier. `avatar.js` a déjà la
   bonne forme pour ça.

Ensuite seulement : les ouvrières, la croissance de la colonie, le mode macro.

---

## 4. Ordre proposé

| Priorité | Quoi | Pourquoi maintenant |
|---|---|---|
| 1 | Index spatial | Débloque tout le reste, et c'est la consommation CPU signalée |
| 2 | Couche d'entités | Les ouvrières n'ont nulle part où vivre sans elle |
| 3 | Éclosion et premières ouvrières | La première chose après la couvée, et la porte du micro/macro |
| 4 | Mode macro (nid en coupe) | Arbitré au tour 5, c'est le cœur du fantasme colonie |
| 5 | État sérialisable | Avant que la dette grossisse encore |
| 6 | Première action de caste | Ce que le porteur a demandé « pour avoir un aperçu » |
| 7 | Dette de rendu (bloom, brins, colonie abandonnée, lisibilité de la reine) | Réel, mais aucun de ces points ne bloque le jeu |

Le réseau et le vrai MMO ne sont pas dans cette liste, et volontairement : tant
qu'une seule colonie n'est pas vivante en solo, le multijoueur n'a rien à
répliquer.
