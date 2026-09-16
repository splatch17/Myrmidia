# Comment on travaille

Une page. L'état du jeu est dans [`PROGRESS.md`](PROGRESS.md), les objectifs et
les arbitrages du porteur dans [`REPRISE.md`](REPRISE.md), les décisions de
design dans [`design/`](design/). Ce fichier-ci ne dit que **comment un ticket
devient une version jouable**.

## Qui prend quoi

| Agent | Répertoires (strictement disjoints) | Label | Modèle |
|---|---|---|---|
| **Atta** — rendu | `game/src/world/**`, `game/src/core/**`, `game/src/main.js` | `atta-rendu` | Opus |
| **Cataglyphis** — gameplay | `game/src/player/**` | `cataglyphis-gameplay` | Sonnet |
| **Cephalotes** — DA | `design/**`, générateur et `assets/textures/**` | `cephalotes-da` | Sonnet |
| **Agent léger** | un ticket S bien délimité, n'importe où | `agent-leger` | Haiku (override au lancement) |

- Le **contrat d'interface** [`design/api-monde-gameplay.md`](design/api-monde-gameplay.md)
  est étendu par l'intégrateur **avant** de distribuer une fonctionnalité qui
  traverse `world/` et `player/`. Aucun agent ne le modifie.
- Les agents commitent en local et **ne poussent jamais**. L'intégration, le
  push et la publication se font dans la session principale.
- Un agent coupé laisse son travail sur le disque : `git status` avant de relancer quoi que ce soit.

## Labels

| Famille | Labels |
|---|---|
| Agent | `atta-rendu` · `cataglyphis-gameplay` · `cephalotes-da` · `agent-leger` |
| Type | `feature` · `bug` · `design` (discussion ou arbitrage, sans code) |
| Priorité | `P1-prochain-round` · `P2` · `P3` |
| Jalon | `beta-vision` |

Tout ticket ouvert porte **un label d'agent et un label de priorité**.

## Cycle d'un ticket

1. **Ouvrir** avec un gabarit (Fonctionnalité ou Défaut). Le critère
   d'acceptation doit se vérifier sur une capture ou dans un harnais.
2. **Planifier le round** : 3 à 5 tickets `P1-prochain-round` au plus, tirés
   dans l'ordre arbitré de `REPRISE.md` §7. Un ticket `L` est découpé avant.
3. **Travailler** sur `feature/threejs-migration` (ou une branche `round-NN`
   si deux rounds se chevauchent).
4. **Prouver** : `cd game && npx vite build`, puis le harnais concerné. Les
   harnais servent `dist/` : **recompiler avant chaque passe**. Un seul harnais
   à la fois. **Regarder les PNG.**
5. **Commit** : une phrase au présent qui dit ce que ça change pour le joueur,
   suivie de `(#NN)`. Exemple : `Walk into the first gallery and back out (#40)`.
6. **Publier** : `git push origin HEAD:preview` → la CI met en ligne
   https://splatch17.github.io/Myrmidia/.
7. **Fermer** le ticket avec le sha du commit. En fin de round : une ligne dans
   l'historique de `PROGRESS.md`, et une PR vers `main` avec le gabarit.

## Règles qui ont déjà sauvé des rounds

- Rien n'est fini sans capture.
- Un test de couloir vise **le mur**, pas la ligne centrale.
- Quand une constante décrit une taille, vérifier contre quel corps elle a été écrite.
- Les autres pièges sont listés dans `PROGRESS.md` — les lire avant de toucher au rendu.
