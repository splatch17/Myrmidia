# Boucle de jeu

Premier jet étayé de la vision gameplay du README (section « Boucle de jeu »). C'est une proposition de conception, pas un design figé — chaque section signale ce qui reste à trancher. Objectif : servir de base aux tickets GitHub d'implémentation d'une beta.

## 1. Prologue — la fondation

La partie commence avec le joueur seul, incarnant **la reine**, avant toute fourmilière. Elle doit :

1. **Explorer** la pelouse pour repérer un site de fondation (abri naturel, proximité de ressources, distance aux prédateurs).
2. **Récolter** un premier stock minimal (matériaux + nourriture — réutilise `HARVESTABLES` déjà prototypés) suffisant pour fonder.
3. **Creuser sa première salle** une fois le stock atteint et le site choisi — une action déclenchée par le joueur (interaction **E** sur un point de sol valide), pas un menu.

**Continuité avec le prototype existant.** *Sortie de la Fourmilière* commence aujourd'hui *dans* une chambre de la reine déjà construite. Proposition : ce prologue *précède* cet état plutôt que de le remplacer — le creusement de la première salle se conclut par une transition (fondu, animation de creusement) qui débouche exactement sur la chambre de la reine déjà modélisée par Atta. Le prototype actuel devient ainsi la scène « juste après la fondation », pas une scène à refaire. Point ouvert : faut-il modéliser une version *vide* de cette chambre pour le tout début (avant perles lumineuses, avant couvain), qui se peuple progressivement ? À trancher avec Cephalotes/Atta.

Pendant ce prologue, la reine est **seule** — aucune ouvrière, aucun PNJ. La solitude et l'échelle du danger (tout prédateur est une menace mortelle sans garde) sont le levier d'ambiance : c'est là que le ton « sombre et flippant » évoqué pour les décors doit le plus se faire sentir, en contraste avec la chaleur qui arrivera après la fondation.

## 2. La ponte — mécanisme de fondation de la colonie

Une fois la première salle creusée, la reine peut commencer à pondre. Proposition de mécanisme concret :

- Pondre un œuf coûte des **ressources stockées** (nourriture/matériaux du grenier) plutôt que d'être gratuit ou sur minuteur pur — ça garde la récolte pertinente après la fondation.
- Chaque œuf a un **temps d'incubation** (visible dans le couvoir, cohérent avec la densité de lampes-couvain déjà posée par Atta) avant d'éclore en ouvrière.
- La **capacité de ponte simultanée** est bornée par la taille du couvoir : agrandir le nid n'est pas cosmétique, ça augmente directement le taux de croissance de la colonie.
- Les 3 PNJ ouvrières déjà prototypées par Cataglyphis devraient, dans la version intégrée, être le *résultat* de cette première ponte plutôt que préexister — à rebrancher une fois le mécanisme en place.

Point ouvert : la reine pond-elle une caste au hasard parmi celles débloquées, ou le joueur choisit-il quoi pondre (au prix d'un coût différent par caste) ? La deuxième option donne plus de décisions au joueur ; à trancher.

## 3. Progression — XP de la reine et déblocage des castes

La reine gagne de l'XP par l'exploration, le combat et la découverte (recherche/trouvaille, déjà un pilier du README). Chaque palier débloque une caste pondable, dans un ordre qui raconte quelque chose plutôt qu'une liste arbitraire — proposition, à ajuster :

| Ordre | Caste | Déclencheur thématique proposé |
|---|---|---|
| 1 (départ) | Nourricière | Toujours débloquée — sans soin, pas de colonie viable |
| 2 | Mandibulaire | Première confrontation survécue avec un prédateur |
| 3 | Éclaireuse | Première zone explorée à risque (au-delà du territoire immédiat) |
| 4 | Tisserande | Premier matériau de soie rapporté |
| 5 | Porte-Bannière | Première fois où la colonie compte plusieurs ouvrières actives simultanément |
| 6 | Mycologue | Première trouvaille d'un champignon inconnu (le **dépotoir**, déjà construit par Atta avec son registre chromatique dédié, est le candidat naturel pour cette découverte) |

Ce tableau relie chaque déblocage à un *événement de jeu* plutôt qu'à un seuil d'XP nu — plus lisible, et ça donne des objectifs de quête naturels.

## 4. Deux échelles de jeu : micro et macro

Les deux modes coexistent et sont permutables à volonté, pas seulement au moment de la fondation :

- **Mode micro** — incarner une fourmi (la reine ou, une fois débloquées, une ouvrière d'une caste donnée) en troisième personne, comme le prototype actuel. Sert à explorer, combattre, récolter, grimper.
- **Mode macro** — vue d'ensemble de la fourmilière : assigner les castes à des tâches (garde, récolte, construction), lancer l'agrandissement d'une salle, suivre les stocks de ressources et la population. Piloté depuis n'importe quel point du monde (dehors ou dans le nid), pas seulement depuis la chambre de la reine.

**Piste de réutilisation technique** : la caméra isométrique fixe existe déjà (`camMode === 'iso'`, bascule sur **C**) et est visuellement proche d'une vue macro. Plutôt que construire un système de caméra séparé, le mode macro pourrait être cette caméra isométrique + une couche d'UI de gestion par-dessus, ce qui réduirait beaucoup le travail de Cataglyphis/Atta pour le prototyper. Le mode micro resterait la caméra rapprochée existante. À valider — le mode macro demandera peut-être un recul supplémentaire par rapport à l'iso actuel pour bien lire un nid entier en coupe.

L'agrandissement du nid en mode macro s'appuie directement sur `buildBranch()` (déjà généralisé par Atta pour grenier/couvoir/dépotoir) : une nouvelle salle est une nouvelle branche générée à la demande, avec un coût en ressources et une durée de creusement plutôt qu'instantanée.

## 5. PNJ, quêtes, chasse et récolte

Extension de ce qui existe déjà (récolte + PNJ en circulation, prototypés par Cataglyphis) :

- Les PNJ ouvrières devraient à terme avoir un **rôle** (garde, récolte, nourrice) reflété dans leur comportement, pas juste un aller-retour décoratif.
- Les **quêtes** sont données par la colonie/caste (déjà noté au README) : premier jet possible en réutilisant le HUD `#objective` existant avec une file d'objectifs plutôt qu'un seul objectif fixe.
- La **chasse** est un système à part de la récolte passive (ressources posées au sol) : cible mobile, doit fuir ou se défendre — à concevoir avec le système de combat (section suivante), puisque c'est le même verbe de jeu (viser, engager, vaincre).

## 6. Combat et sorts de caste — première esquisse

Le README pose déjà l'identité de chaque caste ; proposition d'une capacité signature par caste pour une beta (un sort chacune, pas un kit complet) :

| Caste | Sort signature (proposition) | Effet |
|---|---|---|
| Mandibulaire | Provocation | Phéromone d'alarme en zone : force les ennemis proches à la cibler quelques secondes |
| Tisserande | Trame | Projectile de soie à distance qui immobilise brièvement la cible |
| Éclaireuse | Morsure neurotoxique | Brûlure de dégâts dans le temps + courte fenêtre de camouflage après le coup |
| Nourricière | Trophallaxie | Soin canalisé sur une alliée proche |
| Mycologue | Invocation zombifiée | Contamine un ennemi affaibli, qui combat brièvement à ses côtés avant de s'effondrer |
| Porte-Bannière | Étendard | Pose un totem phéromonal : aura de buff (dégâts ou résistance) pour les alliées dans son rayon |

Le combat général reste visée libre + esquive à i-frames (déjà posé au README) ; ce tableau ne couvre que la capacité spéciale par-dessus cette base commune. À faire ensemble en brainstorm : cooldowns, coût (endurance ? phéromone dédiée ?), et si la reine elle-même a une capacité de combat ou reste vulnérable par design pendant le prologue.

## 7. Ce qui reste ouvert

- Où vit exactement la limite entre `HARVESTABLES` (récolte libre) et la chasse (cible mobile, combat) ?
- Le joueur choisit-il la caste pondue, ou est-ce automatique par palier d'XP ?
- Le mode macro a-t-il une caméra dédiée ou hérite-t-il de l'iso existante (piste recommandée ci-dessus) ?
- Faut-il une version « vide » de la chambre de la reine pour le tout début du prologue ?

Ces points sont volontairement laissés ouverts ici — à trancher au fil des tickets, pas avant de commencer.
