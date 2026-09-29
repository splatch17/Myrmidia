# La fourmilière à bâtir — direction de jeu (round 22)

> Tranché avec le porteur le 2026-09-29. Ce document commande les tickets
> #77, #81 → #89. Il ne se rouvre pas sans lui ; il se *précise*.

## 0. La phrase du porteur

« Nous avons développé l'arrivée dans le monde des fourmis. Il faut
maintenant mettre l'accent sur le **gameplay**, trouver des mécaniques qui
donnent envie de jouer. Vite créer le **mode macro** qui montre la
fourmilière en 3D dans son ensemble, et trouver de quoi **améliorer la
fourmilière petit à petit** : ce doit être un objectif pour le joueur. Du
**confort** et des **défenses**. Puis une **armée**, des **pièces spéciales à
débloquer** (former certaines fourmis, stocker plus…), puis des **combats**.
Retravailler la construction : aujourd'hui une taille standard, demain
**plus libre, pour que chaque joueur façonne une fourmilière unique**. »

## 1. La boucle, en une ligne

**Récolter → creuser → désigner → produire → défendre → grandir**, et la
fourmilière elle-même est la fiche de personnage du joueur : c'est elle
qu'on améliore, qu'on montre, qu'on protège.

## 2. Décisions actées

### 2.1 La reine (#77)
| Question | Décision |
|---|---|
| Ce qui presse avant l'installation | **Réserves** de la reine, une jauge qui fond dehors comme en creusant ; à zéro elle perd des PV. **Prédateur** plus tard, avec le combat (#9) |
| Ce que rapporte creuser loin | **Sécurité** (chambre profonde = moins d'attaques) + **bonus de nid** (ponte plus rapide, climat stable) + **meilleur site** (stats de site déjà affichées) |
| Bascule | À l'installation on passe **dans la première ouvrière**, puis on change librement de fourmi (Tab / clic). Menu de la reine accessible à distance |
| Mort de la reine | **Fin de partie**. Méta-progression « MMORPG » à définir plus tard — les premières idées (lignée, ruines, vol commun) n'ont **pas** convaincu : ne pas les implémenter |

### 2.2 Le mode macro (#34, livré en première tranche)
**3D orbitale, terre transparente**, comme une maquette. M bascule. C'est
l'atelier de construction : les plans se dessinent là.

### 2.3 Creuser
- **Plans en macro + creuser soi-même.** En vue macro on **peint un volume**
  (salle ou tunnel, forme libre) qui apparaît en fantôme : c'est un
  **chantier**, où les fouisseuses vont seules en respectant l'effectif
  minimum (#76, recalculé sur le volume). En jouant une fouisseuse on peut
  aussi **creuser à la main**, partout, y compris hors plan.
- **Le premier tunnel** (l'entrée, jusqu'à la chambre de la reine) reste
  creusé directement par la reine : c'est le début de toute fourmilière.
  Ensuite on ne creuse **qu'à partir du moment où on a des fouisseuses**.
- **Pourquoi creuser à la main** (les quatre, retenus) : **trouvailles
  souterraines** (racines, poches d'eau, graines, cailloux, vestiges — surtout
  hors plan), **vitesse** (×3 à ×4 une fouisseuse IA), **forme fine** (le
  pinceau à la main sculpte niches et piliers, le plan reste grossier),
  **urgence** (colmater, s'échapper).
- **Coût d'un chantier** : **nourriture** (creuser fatigue) **+ déblais** à
  porter dehors ; le **dôme de déblais** grandit autour de l'entrée — la
  fourmilière grossit visiblement de l'extérieur. Plus le chantier est loin,
  plus le trajet est long.
- **Limite** : **coût croissant** par salle **+ paliers** de colonie
  (population, XP #7) qui plafonnent le nombre de salles spéciales.

### 2.4 Salles et fonctions
- On creuse librement, puis on **désigne** la salle (ou on choisit le type au
  moment du plan — les deux restent ouverts, à trancher sur prototype).
- **Placement libre** pour l'instant : pas d'humidité ni de chaleur. On verra
  plus tard si l'emplacement doit compter.
- L'efficacité dépend de la **taille** de la salle.

## 3. Proposition de catalogue (à valider, #86)
| Salle | Effet | Palier |
|---|---|---|
| Chambre royale | PV et défense de la reine ; unique, la première | 0 |
| Couvain | Vitesse de ponte / d'éclosion ∝ taille | 1 |
| Grenier | Plafond de réserve de nourriture ∝ taille | 1 |
| Champignonnière | Nourriture passive (les champignons lumineux de #80 y poussent) | 2 |
| Caserne | Former des soldates ; plafond d'armée ∝ taille | 2 |
| Salle des éclaireuses | Débloque la caste éclaireuse, révèle la carte | 3 |
| Dépotoir | Évite la maladie quand la colonie grossit | 3 |

**Confort** : salles plus grandes = colonie plus efficace ; **défenses** :
bouchon d'entrée (la tête-bouclier des Cephalotes), poste de garde dans un
goulet, pièges d'éboulement. La défense vient de la **forme** du nid : le
chemin que l'ennemi doit parcourir jusqu'à la reine.

## 4. Ce qui rend l'expérience bonne — principes pour tous les tickets
1. **Chaque action se voit dans le monde** : un chantier est un fantôme, un
   déblai est un tas qui grandit, une salle désignée change d'éclairage et de
   décor. Pas de progression qui ne vit que dans un panneau.
2. **Objectif toujours affiché** : le prochain palier, ce qu'il débloque, ce
   qui manque (comme « il faut N fouisseuses, il y en a M »).
3. **Micro rapporte plus que macro** : la fourmi que le joueur contrôle
   creuse, porte et se bat mieux que l'IA. Le macro planifie, le micro
   accélère et découvre.
4. **Des surprises dans la terre** : creuser n'est jamais neutre.
5. **Une menace qui monte** (réserves, puis prédateurs, puis raids) pour que
   la forme du nid ait un enjeu.
6. **Lisibilité avant richesse** : un seul nouveau concept par round côté
   joueur.

## 5. Ordre de développement
1. **#81** Nid en volume libre (fondation technique, Atta).
2. **#36** Contrôler n'importe quelle fourmi (Cataglyphis) — requis par la
   bascule de #77 et par le creusement à la main.
3. **#82** Plans de creusement en macro · **#83** creuser à la main.
4. **#84** Réserves et installation de la reine (#77 jouable).
5. **#85** Coût : nourriture + déblais, dôme qui grandit.
6. **#86** Salles désignées + paliers (avec #7) · **#87** trouvailles.
7. **#88** Défenses et confort · **#9** armée et combats.
8. **#89** Finitions du macro.
