# Prototypes

## `sortie-fourmiliere.html` — Sortie de la Fourmilière

Premier prototype jouable. Une page HTML autonome (WebGL 1, aucune dépendance, aucun build) : ouvrir le fichier dans un navigateur.

**But de ce prototype** : valider les sensations avant de valider l'esthétique. La scène choisie est le passage de l'ombre des galeries à la lumière de la pelouse — le moment qui vend l'échelle du monde d'un seul coup d'œil.

### Commandes

| Entrée | Effet |
|---|---|
| ZQSD / WASD / flèches | Se déplacer (relatif à la caméra) |
| Glisser | Orienter la caméra |
| Molette | Zoom |
| Maj | Accélérer |
| C, ou le bouton | Basculer caméra rapprochée ↔ isométrique |

Sur mobile, glisser sur la moitié gauche fait apparaître un stick virtuel.

### Ce que le prototype met à l'épreuve

- **L'échelle.** 1 unité ≈ 1,2 mm. La fourmi fait ~7 unités, un brin d'herbe 26 à 100 — soit une forêt de tours. C'est le point qui décide si l'univers fonctionne.
- **Les deux caméras.** Rapprochée (façon MMO moderne) contre isométrique fixe (façon Dofus), commutables à chaud pour trancher en la voyant plutôt qu'en en discutant.
- **La locomotion hexapode procédurale.** Les six pattes ne jouent pas de cycle d'animation : chaque pied vise une cible au sol, et le genou est résolu par IK deux os à chaque image, avec une démarche en trépied cadencée sur la distance parcourue (pas de glissement de pied). C'est la version jouet du pilier « animation » du README principal.
- **La transition lumineuse.** Exposition adaptative, brouillard et teinte de contre-jour interpolés entre la galerie et la surface, pour que la sortie se ressente au lieu d'être simplement franchie.
- **L'occlusion caméra.** À hauteur de fourmi, l'herbe passe son temps entre le joueur et sa caméra ; le prototype rapproche la caméra en tenant compte de l'affinement des brins. C'est un vrai problème de conception que ce jeu aura, découvert en jouant.

### Ce que le prototype ne fait pas

Pas de combat, pas de grimpe, pas de PNJ, pas de réseau. Le HUD est décoratif (seule la jauge de phéromone bouge, pour donner l'idée). L'éclairage est un modèle simple écrit à la main — ce n'est pas une cible artistique, c'est un banc d'essai de gameplay.

### Aperçus

![La galerie](apercu-galerie.png)
![La pelouse](apercu-pelouse.png)
![Vue isométrique](apercu-isometrique.png)

### Phase 2

Passe artistique sur cette même scène : silhouettes d'herbe travaillées, rayons de lumière à la sortie, matière de chitine, densité de végétation, ambiance sonore. À faire une fois les sensations validées.
