# Template de projet Web

https://docs.google.com/presentation/d/1eZJPbVyhOE1Q53xzfddRRNkseXhswwvMFGMg1Hocvhk/edit
_(demande d'accès au document si besoin)_

## Dépendances

### VueJs

https://fr.vuejs.org/index.html

### Vue CLI

Pour lancer l'interface utilisateur du projet : **npm vue ui**

### Vuetify

https://vuetifyjs.com/fr-FR/getting-started/quick-start/

### VueX

https://vuex.vuejs.org/fr/

### VueX ORM

https://github.com/vuex-orm/vuex-orm

### VueX ORM Axios

https://github.com/vuex-orm/plugin-axios

### VueX Persist/PersistedState

https://www.npmjs.com/package/vuex-persist
https://github.com/robinvdvleuten/vuex-persistedstate

### Vue Router

https://router.vuejs.org/fr/

### Axios

https://github.com/axios/axios

### Lodash

https://lodash.com/

## Fonctionnement

### Général

Application SPA, les classes métiers doivent être déclarées sous la forme Code first (équivalence avec le back) avec les règles définies par VuexORM (voir doc).

-   Tous les scrips des components doivent être écrit en typeScript
-   Les règles Prettier/Eslint doivent être respectées afin d'uniformiser la lecture du code dans toutes les applications utilisant ce template (une multitude de warning non corrigé entraîne un ralentissement lors de la compilation)
-   Les notifications/log doivent être utisé via le fichier common, tous les logs doivent être (common.log.devLog('monLog')), sauf cas particulier de log en PROD

### MixinDb

Les entités pourront (non obligatoire en fonction des requêtes) ensuite être ajouté en tant que computed du Mixin "mixinDb", elles seront ainsi accessibles pour tout component en héritant.

Les appels au store "classique" devront être définis dans ce mixin également pour des raisons de simplicité d'accès et de lecture du code.

### Activer l'authentification

passer la variable du store global : activeAuth à true

### Gestion du LocalStorage

L'espace alloué au localstorage n'est pas infini, il est nécessaire de choisir judicieusement les éléments à stocker et ceux à récupérer à chaque appel.
De plus il est nécessaire de mettre en place des mécaniques de "clean" pour ajuster la taille actuelle allouée au localstorage.

Le bouton 'Gomme' en haut à droite de l'application permet de consulter l'état du store et de le clear rapidement (store + localStorage), ce bouton n'est présent qu'en DEV

Pour consulter dans la console, copier/coller :

var \_lsTotal=0,\_xLen,\_x;for(\_x in localStorage){ if(!localStorage.hasOwnProperty(\_x)){continue;} \_xLen= ((localStorage[_x].length + \_x.length)\* 2);\_lsTotal+=\_xLen; console.log(\_x.substr(0,50)+" = "+ (\_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (\_lsTotal / 1024).toFixed(2) + " KB");

Le choix des éléments stocké dans le localStorage peut être affiné :
src/store/index.js -> paths: ['entities']

**Les éléments du store non stocké dans le localStorage seront réinitialisé en cas de hard reload du navigateur.**


## Prettier

Les règles Prettier défini nécéssite l'installation de l'extension prettier et vetur.
Les règles Prettier dans les options VSCode de Vetur doivent toutes être défini sur Prettier
https://www.nova-technology.fr/2019/09/27/editorconfig-prettier-et-eslint-sur-vs-code/

## Exemple de code

Le component Exemple.vue présente l'affichage d'une liste de livres en utilisant vuexORM

## Librairie de code

Est présent dans ce template une librairie de composant prêt à l'emploi d'un simple clic sur le bouton "copier"
Cette liste est sujette à modification/ajout, il est donc intéréssant de la maintenir à jour (via le projet template)

les dossiers Template et VuexORM pourront être supprimés par la suite.


## Idées

Si des modifications de fonctionnement, intégration de plugin ou optimisation sont appliquées pour un projet spécifique, il est conseillé d'en discuter pour modifier le template et le rendre meilleur.


# Aide à l'optimisation de l'écriture de code

La mise en place de snippet de code fait gagner un temps précieux sur l'écriture de code répétitif
File/Preferences/UserSnippet/Create

Cependant de nombreuses extensions VSCode propose un large choix de snippet, les connaître est utile pour éviter d'en écrire certains qui existe déja.

L'installation d'extension permet d'améliorer grandement l'expérience utilisateur sur VSCode et donc sur le template.

Les listes d'extension peuvent être partagé :
https://gist.github.com/Heraman/d25f2f9e1be7f396b214ecc6203cd472