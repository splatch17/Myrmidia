# Castes, creusement, et le contrôle micro/macro

Arbitrages du porteur du projet, tour 12. Comme `boucle-de-jeu.md` §0, ce
document **fait autorité** : là où un document plus ancien le contredit, c'est
celui-ci qui gagne.

---

## 1. Ce qui est décidé maintenant

### La reine choisit ce qu'elle pond

Pondre cesse d'être un geste unique. Au moment de la ponte, le joueur **choisit
la caste**. Deux au départ, parce que deux suffisent à créer une décision et
qu'une liste de six n'en crée pas plus au premier essai :

| Caste | Ce qu'elle fait |
|---|---|
| **Ouvrière** | Récolte, rapporte au dépôt (déjà implémenté, `player/colony.js`) |
| **Creuseuse** | Creuse le nid — c'est elle qui ouvre le premier tunnel |

La décision a un coût : pondre des creuseuses, c'est ne pas pondre
d'ouvrières, donc creuser plus vite et récolter moins. C'est le premier
arbitrage réel du jeu et il ne demande aucun système supplémentaire.

### Le lieu de ponte devient le premier tunnel

La chambre creusée à la fondation n'est plus un cul-de-sac. **Le lieu de ponte
est le point de départ d'un tunnel**, creusé par les creuseuses.

Le creusement est **visible et mesuré** : une jauge de progression, alimentée
par le nombre de creuseuses au travail. Quand elle est pleine, le tunnel
apparaît **d'un coup** — pas de creusement progressif de la géométrie. C'est un
choix assumé : une galerie qui se creuse mètre par mètre coûte cher à générer
et se lit mal ; une jauge qui se remplit puis un tunnel qui s'ouvre se lit
immédiatement, et c'est ce que le joueur a demandé.

**Et on peut y entrer.** C'est le critère de fin, pas un bonus. Un tunnel qu'on
regarde depuis la surface ne montre rien du futur du jeu.

---

## 2. Note pour plus tard — le mode micro

À ne pas implémenter maintenant, mais **à ne pas contredire** dans ce qu'on
écrit d'ici là. Les deux points ci-dessous ont des conséquences immédiates sur
la façon de structurer le code, listées en §3.

### On pourra contrôler n'importe quelle fourmi

En mode micro, le joueur prend le contrôle de **n'importe laquelle** des
fourmis de sa colonie — pas seulement la reine, pas seulement une caste
désignée. Une ouvrière en train de rapporter une graine est un avatar valide.

### La reine ouvre un menu de gestion

Quand le joueur prend le contrôle **de la reine**, un menu de gestion
particulier s'affiche — ce que la reine peut décider et qu'une ouvrière ne peut
pas : pondre, choisir la caste, affecter les creuseuses, agrandir le nid.

C'est ce qui donne à la reine un rôle qui n'est pas « une grosse fourmi lente »
et c'est la charnière entre le micro et le macro.

---

## 3. Conséquences immédiates sur le code

Ces contraintes viennent de la §2 et s'appliquent **dès maintenant**, parce que
les enfreindre coûterait une réécriture plus tard :

1. **Aucune fourmi ne doit être structurellement « le joueur ».** Le contrôle
   est un attribut, pas une classe. `player/colony.js` a déjà cette forme (une
   ouvrière est une entrée avec un profil et un état) ; c'est le *joueur* qui
   est encore un chemin de code à part, et c'est cette asymétrie qu'il faudra
   supprimer — voir #36 et `etat-des-lieux.md` §2c.

2. **Une caste est une donnée, pas un fichier.** `player/avatar.js` définit
   déjà `WORKER` et `FOUNDING_QUEEN` comme des entrées d'une table, avec
   `profileById()`. Une creuseuse est une entrée de plus. Si quelqu'un écrit
   `digger.js` à côté de `worker.js`, c'est le signe qu'on s'écarte.

3. **Le HUD doit pouvoir dépendre de qui est contrôlé.** Aujourd'hui il est
   écrit pour la reine seule. Il n'a pas besoin d'être générique tout de
   suite, mais rien ne doit rendre impossible un panneau qui n'apparaît que
   pour un avatar donné.

4. **L'état de la colonie reste sérialisable.** `colony.js` respecte déjà
   cette règle : des nombres et un identifiant de profil, aucune référence
   Three.js, aucune fermeture. Chaque nouveau système suit la même règle.

---

## 4. Ordre de développement arbitré

Le premier objectif nommé par le porteur : **voir le premier tunnel se creuser
et pouvoir y entrer.** Tout ce qui ne sert pas ça passe après.

| # | Étape | Pourquoi dans cet ordre |
|---|---|---|
| 1 | Choix de la caste à la ponte | Sans creuseuse, rien à creuser |
| 2 | Les creuseuses creusent, jauge visible | Le geste demandé |
| 3 | Le tunnel s'ouvre d'un coup | La récompense de la jauge |
| 4 | Y entrer et en sortir | Le critère de fin — sans ça, on regarde un trou |
| 5 | Le menu de gestion de la reine | Commence à exister dès qu'il y a deux castes à arbitrer |
| 6 | Contrôler n'importe quelle fourmi | Demande d'abord que le joueur cesse d'être un cas particulier |
