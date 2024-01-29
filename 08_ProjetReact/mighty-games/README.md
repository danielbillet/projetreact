# Mon premier projet react.

Ceci est mon premier projet react.il représente un site de vente de jeux vidéos en ligne.
Je l'ai crée avec npx create-app-react.Pour afficher le site, ouvrir le terminal dans le dossier "mighty-games" et entrez: "npm start".

## Description
Mon site est composé d'une page principale appelée "HomePage".elle contient un header,un main et un footer tous 3 dans des composants distincts.J'ai un composant(GamesData) qui regroupe tous les jeux qui seront affichés dans la HomePage.
Le composant GamesPresentationBox représente la boîte où un jeu et ses propriétés(nom,image,prix..) sont affichés ainsi qu'un bouton ajouter au panier et une fonction de maise à jour du stock disponible.
La fonction "ajouter au panier" utilise un .find sur le tableau "panier" afin de faire une recherche par le nom du jeu.Si celui-ci est trouvé on ajoute une quantité en plus sinon on affiche le "jeu" avec une quantité de 1.Les propriétés de "jeu" que l'on veut affichées seront définies dans le composant "Panier" grâce à un .map du panier.

Les boîtes sont générées via un gamesData.map dans le composant"Main".
Le composant Panier sert à l'affichage des objets ajoutés ainsi que le calcul du prix total des objets séléctionnés.

## Mes difficultés
Ma première difficulté est de réussir à mettre en place les boîtes au niveau du css.J'avais d'abord affiché les boîtes en les appelant directement dans le "Main" via GamesPresentationBox mais je me suis dit que c'était mieux de mettre les jeux et leurs propriétés dans un même document à part afin que le tout soit plus lisible.J'ai du ,de fait, recommencer tout le css et le fait que les boîtes soient sont "appelées" via un .map m'ont redu la tâche plus difficile.
J'ai également eu beaucoup de mal avec les différentes fonctions et j'ai beaucoup dû retourner sur les cours pour le système de props. Lorsque je revenais sur mon projet le lendemain, je ne savais plus quelle variable correspondait à quoi et c'était un peu casse-tête.
Je voulais faire que le Panier soit une page à part en plus d'apparaître sur le côté dans la HomePage mais celle-ci me renvoie un erreur à cause du .map.J'ai songé à l'enlever ainsi que le routing qui ne sert pour l'instant à rien mais j'essayerai de corriger cela.
