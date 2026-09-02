# Myrmidia — journal de progression

Fichier de reprise. À lire en premier au début d'une session, à mettre à jour
à la fin. Il répond à trois questions et rien d'autre : **où on en est**,
**ce qui est cassé/en attente**, **quoi faire ensuite**.

Les décisions de design vivent dans `design/boucle-de-jeu.md` (§0 = les
arbitrages actés, qui l'emportent sur le reste du document). La direction
artistique vit dans `design/charte-stylisation.md`,
`design/ambiance-prologue.md`, `design/herbe-brins.md` et
`design/ressources-et-fondation.md`. Ce fichier-ci ne les recopie pas.

---

## État au 2026-09-03

**Branche de travail :** `feature/threejs-migration` (rien n'est encore allé
sur `main`).
**Stack :** Three.js 0.169 + Vite 5, projet npm à la racine `game/`.
**Lien de test :** voir le tableau du `README.md` (build `game/dist/`, servi
par raw.githack depuis la branche).

### Ce qui tourne aujourd'hui

**Le prologue a une boucle, plus seulement un décor.** La reine apparaît seule
sur la prairie au crépuscule. Elle récolte (maintien de E, ça prend du temps,
elle **porte** visiblement ce qu'elle a pris), rapporte, dépose — et le premier
dépôt fixe le site de la colonie. Au seuil atteint, sur un sol creusable, elle
fonde : la première chambre est creusée **à l'exécution**, à l'endroit choisi.

| Domaine | État |
|---|---|
| Carte de surface | Écrite à la main, 398×250 jouables, 552×322 maillés, zéro aléatoire |
| Rivière | Bord ouest, plan d'eau ondulé, berge de sable, Fresnel vers le ciel |
| Horizon | Deux rideaux de crêtes qui suivent la caméra en x/z |
| Herbe | 1600 brins, largeur par instance, quille de normale + vrille, pointe qui atteint zéro |
| Ressources | 3 espèces semées une fois, denses près de l'arbre et dans le creux, aucune dans l'eau |
| Récolte | Approche → maintien → portage visible → dépôt. Réserve affichée |
| Fondation | `foundNest()` creuse la 1re chambre au point choisi. L'ancien nid devient l'état « déjà fondé » |
| Qualité de site | **Les 5 facteurs lisent des données réelles** — le « ? » a disparu du HUD |
| Ciel | Deux rigs (prologue crépusculaire / colonie fondée) commutés par un scalaire `founded` |
| Textures | 6 albédos triplanaires + `seed`. `lawn-soil` corrigé, ne vire plus au rouille |
| Perf | ~153k tris, 13 draw calls, 0 erreur console |

### Ce qui n'existe pas encore

- Pas de mode macro (le nid en coupe, vue de côté).
- Pas de post-process (bloom, contours).
- Pas de repop des ressources, pas d'ouvrières, pas de ponte.
- La bascule visuelle prologue → colonie fondée est câblée mais **jamais vue**.

---

## Défauts connus (vus sur captures, non corrigés)

| # | Défaut | Gravité |
|---|---|---|
| 1 | **La fondation n'a jamais été vue.** Les captures s'arrêtent à « Réserve : 3/5 » — l'agent a été coupé avant. Le code est là, le moment ne l'est pas | **Bloquant pour la livraison** |
| 2 | Le rig du prologue livré par la DA (brouillard 40/300, expo 1.02) noyait tout le champ proche. Retouché à l'intégration (95/420, expo 1.12) — la DA doit trancher, sur une capture à hauteur de fourmi | À arbitrer |
| 3 | La reine reste sombre, presque en silhouette, sur un sol brun. Le soleil rasant du prologue la prend de dos une bonne partie du temps | DA |
| 4 | `grass.js` a `castShadow = false`. Une pelouse dont les brins ne s'ombrent ni entre eux ni sur le sol reste des décalcomanies quel que soit leur profil | Rendu, prochain grand pas |
| 5 | Les rayons de grimpe et de collision des tiges ont été divisés par ~2,1 avec l'affinement des brins. Correct en théorie, jamais jugé sur capture | À vérifier |
| 6 | Le tramage de dissolution proche caméra est très visible sur certains brins | Petit |
| 7 | Points 4 à 7 de `design/herbe-brins.md` non câblés (courbure, dégradé, pointes sèches, contre-jour, SEGS=9) | Reste à faire |

## Prochaines étapes

Par ordre de dépendance, pas d'envie.

1. **Voir la fondation.** Rejouer la boucle jusqu'au bout et capturer le moment.
   Tant qu'il n'est pas vu, il n'est pas livré.
2. **L'ombre portée de l'herbe** (défaut 4) — `customDepthMaterial` répliquant
   le déplacement de `begin_vertex`. C'est le plus gros gain de rendu restant.
3. **#28 — post-process léger** : bloom sur les émissifs, contours sur les
   créatures uniquement, ombres adoucies. Cible 60 fps sur GPU intégré.
4. **#6 — la ponte**, et la chambre qui se peuple (`populateNest()` existe déjà).
5. **#34 — mode macro**, le nid en coupe vue de côté.
6. Défauts 2, 3, 5, 6, 7 ci-dessus.

## Comment on travaille

- **Le contrat d'interface d'abord.** `design/api-monde-gameplay.md` fixe les
  noms que `world/**` exporte et que `player/**` consomme, il est écrit avant
  la distribution et aucun agent ne le modifie. Sans lui, au round 5, les deux
  moitiés d'une même feature avaient été spécifiées séparément et ne se
  parlaient pas — sans lever la moindre erreur. Au round 6 les deux agents ont
  livré sous les mêmes noms sans se consulter.
- **Trois agents, répertoires disjoints.** Atta → `world/**` + `main.js` +
  `core/**`. Cataglyphis → `player/**`. Cephalotes → `design/**` + le
  générateur de textures + `assets/textures/**`. Ils commitent en local et ne
  poussent jamais ; l'intégration et le push se font ici.
- **Rien n'est déclaré fini sans capture.** Les trois défauts corrigés dans
  `dea42af` (brouillard du nid sur la pelouse, rivière noire, absence de
  reflet) ont tous été trouvés en regardant les images, aucun en relisant le
  code.
- **Les harnais de vérification :** `game/scripts/verify-terrain.mjs` (12 vues
  + perf + mémoire), `verify-room-access.mjs` (accès aux 3 salles),
  `verify-textures.mjs`. Chromium **doit** être lancé avec
  `--use-gl=angle --use-angle=d3d11`, sinon on mesure le rasteriseur logiciel.
- **Piège récurrent :** tout albédo doit porter
  `tex.colorSpace = THREE.SRGBColorSpace`. L'oubli ne lève aucune erreur, il
  délave simplement le rendu. Les rampes toon et les cartes `_orm`/`_normal`
  restent en `NoColorSpace`.
- Deux agents ont été coupés net par la limite de session au moment d'écrire
  leur harnais de vérification, aux tours 4 et 5. Leur travail était sur le
  disque : **inventorier `git status` avant de refaire quoi que ce soit.**

---

## Historique des tours

| Tour | Livré | Commits |
|---|---|---|
| 6 | Boucle de récolte, portage, fondation à l'exécution ; ressources et ombre côté monde ; herbe affinée ; sol corrigé | `6ca9546`, `379bd0e`, `f5f9c5a`, `24a1bc3`, `9a0faec` |
| 5 | Carte de surface écrite à la main, rivière, horizon ; textures branchées ; reine fondatrice jouable ; lecture du sol | `dea42af`, `a277ef3` |
| 5 (DA) | Ambiance du prologue, bark v3, chitin v2, dégradés de ciel | `b45ed22`, `28eb5f5` |
| 4 | Charte de stylisation + 6 textures ; module triplanaire ; collision décor ; caméra sous terre | `7033614`, `4fec981`, `5a66a88` |
| 3 | Ligne de vue dégagée dans l'herbe, caméra libérée sous terre | `a829cdc` |
| 2 | Intérieur du nid + rig de lumières locales | `75f2ba9` |
| 1 | Migration Three.js/Vite, escalade des tiges | `06c94cd` |
