import Post from '#models/post'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class PostSeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    const user = await User.findByOrFail('username', 'forth')

    await Post.createMany([
      {
        title: "7 Wonders : pourquoi j'y rejoue encore après dix ans",
        slug: '7-wonders',
        content: `Il y a des jeux qu'on sort une fois, qu'on trouve sympas, puis qu'on oublie au fond de l'étagère. Et il y a *7 Wonders*, que je ressors encore régulièrement dix ans après l'avoir découvert.

## Le principe en deux mots

Chaque joueur construit une civilisation antique sur trois âges, en draftant des cartes qui circulent autour de la table. Pas de temps mort : tout le monde joue en même temps, ce qui fait qu'une partie à sept joueurs ne dure jamais plus de 30 minutes.

Concrètement, on reçoit une main de sept cartes, on en choisit une, puis on fait passer le reste à son voisin. Ce mécanisme de draft simultané est la vraie signature du jeu : il a inspiré une bonne partie des jeux de cartes modernes qui ont suivi.

## Ce qui fonctionne toujours aussi bien

- **Le draft simultané** : personne n'attend son tour, l'engagement est constant. Même le joueur le plus lent de la table ne fait pas attendre les autres plus de quelques secondes.
- **La diversité des stratégies** : militaire, science, commerce, merveilles... il y a toujours plusieurs chemins vers la victoire, et on peut changer de cap en cours de partie si les cartes ne viennent pas.
- **La scalabilité** : de 3 à 7 joueurs, le jeu ne perd jamais de son intérêt. C'est rare pour un jeu qui n'a pas de mode spécifique à faible effectif.
- **La rejouabilité** : avec les extensions (Cities, Leaders, Armada...), on n'a jamais vraiment fini de le découvrir.

## Le petit bémol

Le scoring final peut décourager les nouveaux joueurs — additionner cinq types de points différents en fin de partie, ça demande un peu de rigueur, et l'incertitude sur son classement jusqu'au bout peut frustrer les joueurs qui aiment savoir où ils en sont. C'est d'ailleurs exactement pour ça que j'ai fini par coder [un petit calculateur de score](https://github.com/Forthtilliath/7wonders-assistant) : plus besoin de sortir la calculatrice à la fin d'une partie.

## Pour qui ?

Si vous ne l'avez jamais essayé : foncez. C'est une porte d'entrée en or vers le jeu de société moderne, suffisamment rapide pour une soirée entre amis et suffisamment profond pour ne jamais lasser les habitués.`,
        userId: user.id,
        thumbnail: '/posts/7-wonders.svg',
      },
      {
        title: 'Sky Team : le jeu à deux qui a changé mes soirées',
        slug: 'sky-team',
        content: `On me demande souvent quel jeu conseiller pour jouer à deux, en couple ou entre amis. Depuis quelques mois, ma réponse est toujours la même : *Sky Team*.

## Un cockpit, deux joueurs, zéro communication verbale

Vous incarnez le pilote et le copilote d'un avion de ligne qu'il faut faire atterrir en sécurité. Le twist : vous ne pouvez pas vous parler pendant que vous placez vos dés. Chacun gère ses propres cadrans (altitude, vitesse, radio, freins, volets...) sans savoir précisément ce que l'autre s'apprête à faire.

Chaque tour, on lance ses dés en cachette, puis on les place un par un sur son propre plateau — à voix haute, cette fois, pour que l'autre puisse réagir. C'est ce léger décalage entre "je sais ce que je vais faire" et "je découvre ce que fait mon copilote" qui crée toute la tension du jeu.

## Pourquoi ça marche si bien

- **La tension monte crescendo** : les premiers tours sont tranquilles, l'approche finale — entre 1000 et 0 pieds d'altitude — est électrique.
- **La coopération réelle** : il faut apprendre à anticiper son partenaire, pas juste optimiser son propre plateau. Après quelques vols, on commence à deviner les habitudes de l'autre.
- **Le format court** : une partie tient en 15-20 minutes, parfait pour enchaîner plusieurs vols dans la soirée sans jamais se lasser.
- **La modularité** : de nouveaux aéroports et de nouvelles pannes viennent progressivement complexifier l'expérience, sans jamais la dénaturer.

## Le vrai test

Le vrai indicateur de qualité d'un jeu coopératif à deux, c'est ce qui se passe *après* un crash : est-ce qu'on a envie de rejouer tout de suite, ou est-ce qu'on referme la boîte dépité ? Chez nous, la réponse a toujours été la première option, y compris après un atterrissage particulièrement raté dans les Alpes.

Un excellent choix si vous cherchez à sortir des sentiers battus du jeu à deux — et une masterclass de design pour un jeu qui tient dans une petite boîte.`,
        userId: user.id,
        thumbnail: '/posts/sky-team.svg',
      },
      {
        title: 'Azul : la sérénité du pattern-building',
        slug: 'azul',
        content: `Certains jeux vous mettent la pression, d'autres vous apaisent. *Azul* fait clairement partie de la seconde catégorie, et c'est peut-être pour ça qu'il reste un de mes jeux "cocooning" préférés.

## Le concept

Vous êtes un artisan chargé de décorer les murs du palais royal de Sintra avec de magnifiques carreaux (les fameux *azulejos* portugais). À chaque tour, vous piochez des tuiles colorées pour composer votre mur, en essayant d'optimiser vos combinaisons sans en gaspiller — car chaque tuile non placée finit par vous coûter des points.

## Ce qui me plaît

- **Le matériel** : les tuiles en résine sont un vrai plaisir à manipuler, ça compte plus qu'on ne le pense dans l'envie de rejouer.
- **La simplicité des règles** : dix minutes suffisent pour l'expliquer, même à quelqu'un qui n'a jamais joué à un jeu de société "moderne".
- **La profondeur cachée** : sous ses airs tranquilles, le jeu récompense une vraie anticipation à moyen terme — bloquer une couleur au bon moment peut ruiner le plan de l'adversaire sans qu'il le voie venir.
- **Le format court** : 30 à 45 minutes, jamais plus, quel que soit le nombre de joueurs.

## Pour qui ?

C'est le jeu que je recommande systématiquement pour une première soirée jeux avec des amis qui ne jouent jamais. Accessible, beau, et suffisamment stratégique pour ne pas lasser les habitués. Si le succès vous surprend, la série continue avec *Azul : Les Vitraux de Sintra* et *Azul : Le Pavillon d'Été*, tout aussi réussis.

Un classique moderne, tout simplement — et l'un des rares jeux que je ressors aussi bien pour initier un débutant que pour une soirée entre joueurs aguerris.`,
        userId: user.id,
        thumbnail: '/posts/azul.svg',
      },
      {
        title: 'Wingspan : quand la contemplation devient un jeu de société',
        slug: 'wingspan',
        content: `Il fallait oser : faire un jeu sur l'observation des oiseaux, et en faire un succès mondial. *Wingspan* y est parvenu, et je comprends enfin pourquoi.

## Un moteur qui se construit sous vos yeux

Vous êtes un ornithologue amateur qui attire des oiseaux dans trois habitats (forêt, prairie, zones humides). Chaque carte-oiseau posée s'ajoute à une chaîne d'actions qui se déclenchent en cascade au fil des tours suivants : pondre des œufs, piocher de la nourriture, attirer d'autres oiseaux...

C'est un jeu d'engine-building pur : plus votre tableau grandit, plus vos tours deviennent puissants. Et l'illustration soignée de chacune des 170 espèces différentes rend chaque nouvelle carte piochée excitante, presque comme ouvrir un paquet de cartes à collectionner.

## Ce qui surprend

- **Le thème apaisant** : pas de combat, pas d'élimination, juste la satisfaction de voir son écosystème se développer.
- **La qualité du matériel** : plateau à double niveau, dés en forme d'œufs, plus de 170 illustrations différentes — un des plus beaux jeux que j'ai sur mes étagères.
- **La profondeur du moteur** : ce qui semble être un jeu tranquille cache une vraie mécanique d'optimisation, où chaque carte doit être pesée contre son coût en nourriture et en œufs.

## Le bémol

Le mode solo (automa) est correct mais moins savoureux qu'à plusieurs, où observer le tableau des autres joueurs fait partie du plaisir. Et la phase de mise en place, avec son plateau de score à plusieurs niveaux, peut dérouter les premières fois.

## Pour qui ?

Un excellent choix pour un public qui n'aime pas la confrontation directe, ou pour changer de registre après une soirée de jeux plus agressifs. Il a une place à part dans ma ludothèque : celui qu'on sort quand on a envie de calme.`,
        userId: user.id,
        thumbnail: '/posts/wingspan.svg',
      },
      {
        title: 'Terraforming Mars : la mécanique avant tout',
        slug: 'terraforming-mars',
        content: `*Terraforming Mars* n'est pas un jeu qu'on termine en 45 minutes après l'apéro. C'est un jeu qu'on prévoit, presque comme un rendez-vous, et qui demande une vraie soirée. Et pourtant, j'y retourne régulièrement.

## Le concept

Vous dirigez une corporation chargée de rendre Mars habitable : faire monter la température, créer de l'océan, produire de l'oxygène. Chaque partie mélange des dizaines de cartes-projets différentes, ce qui rend chaque partie unique dans son déroulement, même si l'objectif reste le même.

## Ce qui m'accroche

- **Le sentiment de progression tangible** : voir les trois paramètres planétaires grimper petit à petit, avec de vrais jetons qu'on pose sur le plateau, procure une satisfaction rare.
- **La variété des stratégies** : énergie, plantes, science, ressources spatiales... chaque corporation de départ oriente différemment la partie.
- **L'interaction indirecte** : on ne s'attaque jamais frontalement, mais accélérer la terraformation trop vite peut couper l'herbe sous le pied d'un adversaire qui misait sur une carte à condition précise.

## Les vrais points de vigilance

- **La durée** : comptez deux bonnes heures à 3-4 joueurs, plus si c'est la découverte. Ce n'est clairement pas un jeu "de dépannage".
- **Le temps mort en fin de partie** : quand un joueur est clairement en tête, les derniers tours peuvent traîner en longueur pour les autres.
- **La courbe d'apprentissage** : la première partie se joue souvent un peu à l'aveugle, le temps de comprendre l'interaction entre toutes les cartes.

## Pour qui ?

Un jeu pour les amateurs de jeux de gestion qui aiment prendre leur temps et optimiser un moteur de production sur la durée. Pas le meilleur choix pour une première soirée jeu de société, mais un incontournable une fois qu'on a pris goût aux jeux à l'allemande.`,
        userId: user.id,
        thumbnail: '/posts/terraforming-mars.svg',
      },
      {
        title: 'Splendor : 30 minutes de pur plaisir tactique',
        slug: 'splendor',
        content: `S'il ne fallait garder qu'un seul jeu "léger" dans ma ludothèque, ce serait probablement *Splendor*. Simple à expliquer, rapide à jouer, et pourtant jamais ennuyeux.

## Le principe

Vous êtes un marchand de la Renaissance qui acquiert des mines, des routes commerciales et des moyens de transport pour devenir le plus prestigieux joyaillier de son époque. Concrètement : on récolte des jetons de couleur, on les échange contre des cartes-développement, et ces cartes permettent d'acheter des cartes de plus en plus chères, jusqu'à atteindre 15 points de prestige.

## Pourquoi ça fonctionne

- **La règle en trois minutes** : prendre des jetons, réserver une carte, ou acheter une carte. C'est tout. Aucune exception à retenir.
- **La tension de l'optimisation** : anticiper les cartes que les autres convoitent, réserver au bon moment, calculer si on peut se permettre d'attendre un tour de plus.
- **Le format éclair** : 30 minutes montre en main, ce qui en fait le jeu parfait pour ouvrir ou fermer une soirée.

## Ce qu'on peut lui reprocher

Le jeu peut sembler répétitif sur la durée si on enchaîne plusieurs parties d'affilée sans varier les plaisirs — c'est un jeu qu'on sort avec plaisir, mais pas celui qu'on joue en boucle toute une soirée. L'extension *Les Cités* ajoute heureusement un peu de variété bienvenue.

## Pour qui ?

Le jeu de passerelle par excellence : celui que je conseille à quelqu'un qui n'a jamais touché un jeu de société "moderne" mais qui commence à trouver le Monopoly un peu long. Dix minutes d'explication, et tout le monde est dedans.`,
        userId: user.id,
        thumbnail: '/posts/splendor.svg',
      },
      {
        title: "Codenames : le party game qui ne s'use jamais",
        slug: 'codenames',
        content: `J'ai testé beaucoup de party games qui font illusion une soirée et qu'on ne ressort jamais. *Codenames* n'est pas de ceux-là — c'est probablement le jeu que j'ai le plus joué de toute ma ludothèque.

## Le principe

Deux équipes s'affrontent pour retrouver les mots-clés associés à leur équipe sur une grille de 25 cartes-mots, à partir d'un seul indice donné par leur "maître espion" — un mot et un nombre. Trouver "océan" pour faire deviner "requin" et "bateau" en même temps, c'est exactement le genre de moment qui fait la magie du jeu.

## Ce qui fait sa force

- **L'accessibilité totale** : la règle tient en une minute, et n'importe qui peut jouer, de 8 à 88 ans.
- **La rejouabilité infinie** : avec 400 cartes-mots dans la boîte de base, deux parties ne se ressemblent jamais.
- **Les fous rires garantis** : les indices ratés, les déductions absurdes, les associations d'idées complètement improbables — c'est un jeu qui génère naturellement des souvenirs de soirée.
- **Le prix** : une des meilleures boîtes en rapport qualité-prix du marché.

## Le seul vrai piège

Le jeu demande un minimum de bonne foi et d'un groupe qui a envie de jouer collectif — avec des joueurs qui cherchent à "gagner à tout prix" plutôt qu'à s'amuser, l'ambiance peut vite retomber. C'est un jeu social avant d'être un jeu de logique pure.

## Pour qui ?

Absolument tout le monde. C'est le jeu que j'emmène systématiquement en soirée ou en week-end entre amis, parce qu'il fonctionne aussi bien à 4 qu'à 12, et qu'il n'a jamais raté son effet chez moi.`,
        userId: user.id,
        thumbnail: '/posts/codenames.svg',
      },
      {
        title: "Carcassonne : le classique qu'on sous-estime",
        slug: 'carcassonne',
        content: `On a tendance à ranger *Carcassonne* dans la case "jeu de passerelle un peu daté". C'est une erreur : plus de vingt ans après sa sortie, il reste l'un des jeux de pose de tuiles les plus élégants qui existent.

## Le principe

À chaque tour, on pioche une tuile représentant un fragment de paysage médiéval (route, ville, monastère, prairie) et on la pose en la raccordant au plateau existant. On peut ensuite y placer un de ses meeples pour revendiquer la zone — d'où, d'ailleurs, la popularisation du terme "meeple" dans le vocabulaire ludique.

## Pourquoi il tient encore la route

- **Le matériel évolutif** : le plateau se construit sous vos yeux, différent à chaque partie, ce qui garde un vrai effet de découverte même après des dizaines de parties.
- **La gestion de ressources fine** : avec un nombre de meeples limité, savoir quand les placer et quand les garder est un vrai dilemme stratégique.
- **Les extensions** : Auberges & Cathédrales, Marchands & Bâtisseurs, La Rivière... il existe des dizaines de modules pour renouveler l'expérience sans jamais changer de boîte de base.

## Ce qui a un peu vieilli

Le jeu de base, seul, peut sembler léger comparé aux standards actuels — c'est avec une ou deux extensions qu'il prend vraiment toute sa dimension stratégique. Et le hasard du pioche de tuiles peut parfois frustrer les joueurs qui aiment tout contrôler.

## Pour qui ?

Un jeu à toujours avoir sous la main : familial, rapide à installer, et qui plaît aussi bien aux enfants qu'aux joueurs expérimentés une fois enrichi d'extensions. Un des rares jeux de ma ludothèque que je n'envisage jamais de revendre.`,
        userId: user.id,
        thumbnail: '/posts/carcassonne.svg',
      },
      {
        title: 'Catane : le jeu qui a converti mes amis les moins joueurs',
        slug: 'catane',
        content: `*Les Colons de Catane* a un statut particulier chez moi : c'est le jeu qui a transformé des amis totalement hermétiques au jeu de société en joueurs réguliers.

## Le principe

Sur une île générée aléatoirement à chaque partie, vous développez des colonies et des routes en récoltant des ressources (bois, argile, blé, mouton, minerai) selon les résultats de dés. La particularité : pour construire, il faut souvent négocier et échanger avec les autres joueurs, ce qui transforme chaque partie en un mini-théâtre de diplomatie.

## Ce qui en fait un classique indémodable

- **La négociation au cœur du jeu** : contrairement à beaucoup de jeux, ici on est encouragé à parler, marchander, faire des alliances de circonstance — et parfois à se faire trahir juste avant la victoire.
- **Le plateau modulaire** : les tuiles hexagonales se réarrangent à chaque partie, donc pas deux parties identiques.
- **L'équilibre risque/récompense** : miser sur une ressource rare peut payer gros, ou vous laisser à sec pendant des tours entiers si les dés ne sont pas cléments.

## Les limites à connaître

- **La dépendance aux dés** : une mauvaise répartition de départ peut clairement pénaliser un joueur toute la partie, ce qui peut frustrer les joueurs qui n'aiment pas le hasard.
- **Le syndrome du "joueur éliminé psychologiquement"** : quand on est bloqué sans ressources plusieurs tours de suite, l'attente peut sembler longue.
- **La durée** : 60 à 90 minutes, parfois plus avec des joueurs qui négocient longuement chaque échange.

## Pour qui ?

LE jeu à sortir pour convertir quelqu'un qui pense que "les jeux de société c'est le Monopoly ou rien". Sa réputation n'est pas volée : c'est un pilier de l'histoire du jeu de société moderne, et il reste terriblement efficace.`,
        userId: user.id,
        thumbnail: '/posts/catane.svg',
      },
      {
        title: "Dixit : le jeu qui prouve qu'on n'a pas besoin de règles compliquées",
        slug: 'dixit',
        content: `Il y a des jeux qui impressionnent par leur profondeur stratégique, et d'autres par leur simplicité désarmante. *Dixit* appartient clairement à la seconde catégorie, et c'est peut-être le jeu le plus universellement apprécié que j'aie jamais sorti.

## Le principe

Chaque joueur possède une main de cartes magnifiquement illustrées, oniriques et volontairement ambiguës. Le "conteur" du tour choisit une carte et propose un mot, une phrase ou une référence évoquant l'image — sans être ni trop précis (tout le monde devine), ni trop vague (personne ne devine). Les autres joueurs glissent alors une de leurs propres cartes qui pourrait coller à l'indice, et il faut ensuite deviner laquelle était la vraie.

## Pourquoi ça marche à tous les coups

- **Le matériel superbe** : les illustrations, signées Marie Cardouat, sont à elles seules une raison de posséder ce jeu.
- **La règle en deux minutes** : accessible à des enfants comme à des adultes qui découvrent leur premier jeu de société.
- **La dimension créative** : contrairement à beaucoup de party games, ici la créativité et la finesse psychologique comptent plus que la logique pure.
- **Les moments de complicité** : deviner la carte d'un ami parce qu'on connaît ses références, ou se faire piéger par un indice trop malin — ce sont des instants qui marquent une soirée.

## Le seul vrai écueil

Avec un groupe qui manque d'imagination ou qui reste trop littéral dans ses indices, le jeu peut perdre de son sel. Il demande une petite dose de lâcher-prise pour vraiment briller.

## Pour qui ?

Un jeu quasi obligatoire dans toute ludothèque familiale. Il traverse les générations mieux que n'importe quel autre jeu que je possède, et reste l'un des rares que mes proches les moins "joueurs" réclament spontanément.`,
        userId: user.id,
        thumbnail: '/posts/dixit.svg',
      },
      {
        title: 'Pandemic : coopérer vraiment, pas juste jouer à côté des autres',
        slug: 'pandemic',
        content: `Beaucoup de jeux se disent "coopératifs" mais se résument en pratique à un joueur qui décide pour tout le monde. *Pandemic* est l'un des rares où la coopération est réellement au centre de chaque décision.

## Le principe

Vous incarnez une équipe de spécialistes (médecin, scientifique, logisticien...) chargée d'enrayer quatre maladies qui se propagent à travers le monde, avant qu'elles ne deviennent incontrôlables. Chaque tour, il faut arbitrer entre soigner les foyers d'infection, se déplacer vers les zones critiques, et chercher les remèdes — tout en gérant un jeu de cartes qui accélère implacablement la propagation.

## Ce qui rend le jeu si prenant

- **La vraie coopération** : les rôles ont des capacités complémentaires, ce qui pousse à une vraie discussion collective sur la meilleure stratégie, tour après tour.
- **La tension croissante** : voir les épidémies s'accélérer sur le plateau, avec le risque réel de perdre la partie collectivement, crée un vrai suspense.
- **La modularité** : les rôles et les événements changent à chaque partie, ce qui évite la sensation de rejouer toujours la même partie.

## Les limites à connaître

- **Le risque de "joueur alpha"** : dans un groupe où une personne a tendance à tout dicter, les autres joueurs peuvent se sentir spectateurs plutôt qu'acteurs. C'est le vrai piège des jeux coopératifs.
- **La difficulté variable** : certaines configurations de cartes peuvent rendre une partie quasiment injouable, ce qui peut frustrer si ça arrive plusieurs fois de suite.

## Pour qui ?

Le jeu coopératif de référence pour découvrir le genre, avant d'aller vers des expériences plus complexes comme *Pandemic Legacy*. Idéal pour les groupes qui préfèrent gagner ou perdre ensemble plutôt que de s'affronter.`,
        userId: user.id,
        thumbnail: '/posts/pandemic.svg',
      },
      {
        title: 'Root : la guerre asymétrique qui a bousculé mes habitudes',
        slug: 'root',
        content: `*Root* a un packaging trompeur : des illustrations mignonnes d'animaux de la forêt, façon dessin animé jeunesse. Ne vous fiez pas aux apparences — c'est un des jeux de conflit les plus retors et les plus asymétriques que j'ai joués.

## Le principe

Chaque faction contrôle la forêt selon des règles radicalement différentes : l'Empire du Chat construit et étend son territoire, l'Alliance des Oiseaux optimise un plan de décrets rigide, l'Alliance de la Forêt mène une insurrection en marge des autres, les Vagabonds explorent en solitaire... Personne ne joue au même jeu, et pourtant tout le monde s'affronte sur le même plateau.

## Pourquoi c'est fascinant

- **L'asymétrie totale** : chaque faction a sa propre courbe de puissance, ses propres objectifs, ses propres mécaniques. Après plusieurs parties, on n'a toujours pas fini d'explorer toutes les factions.
- **La diplomatie de circonstance** : personne ne peut gagner seul contre tous, ce qui force des alliances temporaires et des trahisons calculées.
- **La rejouabilité extrême** : avec les extensions, on trouve encore de nouvelles factions à maîtriser des dizaines de parties plus tard.

## Les vrais points d'attention

- **La courbe d'apprentissage abrupte** : expliquer les quatre factions de base en même temps peut décourager un groupe de débutants. Je recommande fortement de commencer par deux factions simples et d'en ajouter progressivement.
- **Le risque de "chef d'attaque"** : si une faction prend clairement l'avantage, les autres joueurs doivent apprendre à s'unir contre elle — ce qui ne vient pas naturellement à tout le monde.

## Pour qui ?

Un jeu pour les groupes qui aiment les jeux de conflit avec une vraie identité, et qui sont prêts à investir du temps dans l'apprentissage. Une fois maîtrisé, difficile de revenir à un jeu de guerre plus classique.`,
        userId: user.id,
        thumbnail: '/posts/root.svg',
      },
    ])
  }
}
