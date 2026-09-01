# Myrmidia — journal de progression

Fichier de reprise. À lire en premier au début d'une session, à mettre à jour
à la fin. Il répond à trois questions et rien d'autre : **où on en est**,
**ce qui est cassé/en attente**, **quoi faire ensuite**.

Les décisions de design vivent dans `design/boucle-de-jeu.md` (§0 = les
arbitrages actés, qui l'emportent sur le reste du document). La direction
artistique vit dans `design/charte-stylisation.md` et
`design/ambiance-prologue.md`. Ce fichier-ci ne les recopie pas.

---

## État au 2026-09-02

**Branche de travail :** `feature/threejs-migration` (rien n'est encore allé
sur `main`).
**Stack :** Three.js 0.169 + Vite 5, projet npm à la racine `game/`.
**Lien de test :** voir le tableau du `README.md` (build `game/dist/`, servi
par raw.githack depuis la branche).

### Ce qui tourne aujourd'hui

Le jeu s'ouvre **dehors, sur la reine fondatrice seule**, sans nid. Elle
marche sur une carte écrite à la main (relief, rivière à l'ouest, montagnes au
loin), et le sol lui répond en permanence : « Site : bon (71/100) » ou
« Site : impossible — trop près de l'eau ».

| Domaine | État |
|---|---|
| Carte de surface | Écrite à la main, 398×250 jouables, 552×322 maillés. Aucun aléatoire : chaque relief est une ligne numérotée dans `RELIEF` (terrain.js) |
| Rivière | Bord ouest, plan d'eau ondulé, berge de sable, Fresnel vers le ciel |
| Horizon | Deux rideaux de crêtes qui suivent la caméra en x/z, 768 tris |
| Nid souterrain | Galerie + 3 salles (granary / brood / midden), accessibles |
| Textures | 6 albédos procéduraux, projection triplanaire (pas d'UV) — 427 Ko en tout |
| Éclairage | Hémisphère commutée par zone, soleil non commuté, plancher ambiant 0.30 sous terre, ombre 0.107 u/texel qui suit la caméra |
| Avatar | Reine fondatrice (2.2× une ouvrière), gaster à deux segments qui respire, IK 6 pattes |
| HUD | 2 lignes de texte brut (qualité du site + invite contextuelle). Pas encore de DA |
| Perf | 145k tris, 10 programmes, pire image libre 0.73 ms sur ANGLE/D3D11 |

### Ce qui n'existe pas encore

- **Aucune boucle de jeu.** Pas de récolte, pas de ressources, pas de
  fondation : on peut juger un site, pas le choisir.
- Le nid est **construit au démarrage**, pas à l'endroit choisi par le joueur.
- Pas de mode macro (le nid en coupe, vue de côté).
- Pas de post-process (bloom, contours).
- `shadeAt()` et les nœuds de ressources n'existent pas côté monde : deux des
  cinq facteurs du score de site sont encore des approximations, marquées
  d'un « ? » dans le HUD plutôt que maquillées.

---

## Défauts connus (vus sur captures, non corrigés)

| # | Défaut | Gravité |
|---|---|---|
| 1 | La texture `lawn-soil` vire au rouille sur les zones sans mousse — plus martien que prairie | DA, à repasser |
| 2 | Les brins d'herbe sont larges et raides de près, plus « lames » que végétaux | DA + géométrie |
| 3 | Vue depuis la bouche du tunnel : la pelouse au-delà reste sous le brouillard du nid (un seul scalaire d'ambiance pour toute la scène) | Connu, structurel |
| 4 | `movement.js` clampe encore sur une boîte `LAWN_BOUNDS` au lieu d'appeler `containSurface()` — la marge ouest tombe à ~3 unités de la ligne d'eau au pire du méandre | Petit |
| 5 | Le point d'apparition (20, 110) n'a pas été rejoué depuis que le relief existe — il devrait ressembler à un lieu d'atterrissage, et surtout **pas** être le meilleur sol de la carte | Design |

---

## Prochaines étapes

Par ordre de dépendance, pas d'envie.

1. **#29 — boucle de récolte.** Premières ressources ramassables + compteur.
   C'est le préalable annoncé à la fondation : « c'est une fois qu'on aura
   collecté les premières ressources qu'on commencera la création de la
   fourmilière ».
2. **#11 / #12 — génération du nid à l'exécution**, à l'endroit choisi, avec
   une chambre de reine qui commence vide et se remplit. Conséquence directe
   de l'arbitrage §0 : le nid actuel, construit au démarrage, devient l'état
   « déjà fondé ».
3. **#33 — fonder la colonie.** L'action qui relie 1 et 2.
4. **#28 — post-process léger** (bloom sur les émissifs, contours sur les
   créatures uniquement, ombres adoucies). Cible : 60 fps sur GPU intégré.
5. **#34 — mode macro**, le nid en coupe vue de côté (fourmilière d'élevage),
   pas une carte de territoire.
6. Défauts 1, 2, 4, 5 ci-dessus, à glisser entre deux tickets.

---

## Comment on travaille

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
| 5 | Carte de surface écrite à la main, rivière, horizon ; textures branchées ; reine fondatrice jouable ; lecture de la qualité du sol | `dea42af`, `a277ef3` |
| 5 (DA) | Ambiance du prologue (crépuscule, bascule à la fondation), bark v3, chitin v2, dégradés de ciel | `b45ed22`, `28eb5f5` |
| 4 | Charte de stylisation + 6 textures procédurales ; module triplanaire ; collision avec le décor ; caméra recadrée sous terre | `7033614`, `4fec981`, `5a66a88` |
| 3 | Ligne de vue dégagée dans l'herbe, caméra libérée sous terre | `a829cdc` |
| 2 | Intérieur du nid + rig de lumières locales | `75f2ba9` |
| 1 | Migration Three.js/Vite, escalade des tiges | `06c94cd` |
