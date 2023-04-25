# Projet Final NoSQL - Léo Séry B3GDPROG

Ce projet contient une **API** réaliser pour le projet Final du module **NoSQL**. Vous trouverez ci dessous tout ce dont vous avez besoin pour la faire fonctionner.

## Contents :

- **Introduction** au projet.
- **Installer** l'API.
- **Configurer** l'API.
- **Tester** l'API.

## Introduction au projet :

Ce projet contient un **API en JS**. Cette API livré avec un **modele de base de donnée** pouvant contenir des personnages. Un fichier **`ExampleOfDatabaseContent.json`** contient un objet JSON avec des personnage de l'Univers _Marvel_, vous pouvez les utilisez lors de **tests de l'API**.

Un autre fichier nommé **`api.http`** peut vous aidez à réalisez les test de l'API, il contient toutes les requetes possible pour l'API.

Cette API dispo des fonctionalités de base pour faire un **CRUD**.
Vous pouvez **réaliser les actions suivantes** :

- Ajouter un personnage
- Ajouter plusieurs personnages en une requete
- Récupérer tous les personnages de la BDD
- Récupérer un personnage de la BDD via son ID
- Update les informations d'un personnage via son ID
- Supprimer un personnage via son ID
- Supprimer tous les personnages de la BDD

Cette API comporte aussi 2 autres features afin de pouvoir trier et rechercher un personnages via une requete. Vous pouvez :

- Recherche un personnage via :
  - son Nom
  - son Prénom
  - son Alias
- Trier les personnages dans l'ordre croissant et décroissant via les critères suivants :
  - son Nom
  - son Prénom
  - son Alias

## Installer l'API :

vous trouvez l'API dans le dossier **`SÉRY_LÉO_API_NOSQL\app`** de ce .zip. Vous pouvez aussi la télécharger sur [mon repo GitHub](https://github.com/LeoSery/API_NoSQL--JS).

Ou la clonner via les liens suivants :

```
git@github.com:LeoSery/API_NoSQL--JS.git
```

ou

```
https://github.com/LeoSery/API_NoSQL--JS.git
```

## Configurer l'API :

Une fois l'API récupérer, vous aller pouvoir la **configurer avant de l'utiliser**. Dans un terminal i**nstaller les node_modules** via la commande : **`npm install`**.

Ensuite **créer une base de donnée MongoDB** via **la ligne de commande** ou en utilisant l'application **`mongoDBCompass`**. Créer une connection vers cette base de donnée et **garder l'URL** et le **port d'accès** pour pouvoir les rentrer par la suite.

Dans le fichier **`.env`** du projet, dans le champ **`MONGO_URL`** renseigner **l'URL de votre base de donnée** suivit **du port** que vous avez enregistrer ci dessus et enfin le **nom de votre BDD**.

Comme ceci : **`MONGO_URL=mongodb://{YourDatabaseIP}:{YourDatabasePort}/{YourDatabaseName}`**

Toujours dans le fichier **`.env`**, dans le champ **`PORT`** renseigner le champs sur lequel l'API devra tourner.

## Tester l'API :

Pour **tester l'API**, vous pouvez utiliser le fichier **`api.http`** qui contient toutes les requetes necessaires pour tester l'API si vous avez l'extension nommé **`REST Client`** [disponible sur le store](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) de Visual Studio Code.

Sinon vous pouvez **tester l'API manuellement** en suivant les indications ci dessous :

**URL pour accéder a l'API** : `http://localhost:{YourDatabasePort}`.

### Ajouter un personnage :

Type de requete : **POST**
Route : _`/characters`_
Content :

```
{
    "id": 1,
    "first_name": "NewCharacterFirstName",
    "last_name": "NewCharacterLastName",
    "alias": "NewCharacterAlias",
    "height": 100
}
```

### Ajouter plusieurs personnages :

Type de requete : **POST**
Route : _`/characters`_
Content :

```
[
  {
    "id": 1,
    "first_name": "NewCharacterFirstName",
    "last_name": "NewCharacterLastName",
    "alias": "NewCharacterAlias",
    "height": 100
  },
  {
    "id": 2,
    "first_name": "NewCharacterFirstName",
    "last_name": "NewCharacterLastName",
    "alias": "NewCharacterAlias",
    "height": 100
  }
]
```

### Récupérer tous les personnages :

Type de requete : **GET**
Route : _`/characters`_
Content : `None`

### Récupérer un personnage via son ID :

Type de requete : **POST**
Route : _`/characters/{ID}`_
Content : `None`

### Mettre a jour un personnage via son ID :

Type de requete : **PUT**
Route : _`/characters/{ID}`_

```
{
"first_name": "NewFirstName",
"last_name": "NewLastName",
"alias": "NewAlias",
"height": 100
}
```

### Supprimer un personnage via son ID :

Type de requete : **DELETE**
Route : _`/characters/{ID}`_
Content : `None`

### Supprimer tous les personnages :

Type de requete : **DELETE**
Route : _`/characters`_
Content : `None`

### Recherche un personnage via son Nom, Prénom ou Alias :

Type de requete : **GET**
Route : _`/characters/search/{SearchValue}`_
Content : `None`

### Trier les personnages suivant un critère et dans un ordre précis :

Type de requete : **GET**
Route : _`/characters/sort/{SortValue}/{SortOrder}`_
Content : `None`
