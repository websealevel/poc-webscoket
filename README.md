# poc-webscoket

Un exemple d'application PHP en temps réel grâce au protocole [Websocket](https://fr.wikipedia.org/wiki/WebSocket). Le projet se compose d'une application web et d'une application "serveur WebScoket".

>Le projet utilise le paquet [ratchet](https://packagist.org/packages/cboden/ratchet)

# Principe

Côté serveur WebScoket, on lance un script qui va écouter des évènements. En général le script est lancé par un gestionnaire de tâches de l'OS (CRON). On lui fera implémenter l'interface `MessageComponentInterface`. Le script va écouter 4 évènements via 4 fonctions (méthodes):
- `onOpen` : appelée quand un nouveau client se connecte
- `onMessage` : appelée quand une connection (client connecté) envoie un message
- `onClose` : appelée quand une connection est fermée
- `onError`: appelée quand une erreur avec la connection se produit

L'interface `ConnectionInterface` est implémentée par une `Connection`, et représente un client HTTP connecté (en général un navigateur).

# Installation via composer

Installer les dépendances du projet

~~~
composer install
~~~

# Lancer le projet

Lancer le *serveur WebSocket*

~~~
php -S localhost:5000 -t server-websocket
~~~

Lancer le serveur d'application

~~~
php -S localhost:5001 -t server-app
~~~

>Utiliser n'importe quel port libre. En local, pour résoudre les 2 domaines on utilise deux ports différents.

# Ressources

>If you've been working with PHP for any length of time you're probably used to writing short lived scripts. Each web page loaded on the client's side will, on the server side, launch a new PHP script, loads resources (such as a database connection), execute your code, close the resources and send the output (HTML) back to the client, and close the connection. This is the tried and true nature of the HTTP protocol over the past several decades. (J'aime bien cette formulation, joli résumé du fonctionnement de PHP complètement soudé au protocole HTTP)

- [How to Create a WebSocket Server in PHP with Ratchet for Real-Time Applications](https://www.twilio.com/blog/create-php-websocket-server-build-real-time-even-driven-application)
- [Ratchet, WebSockets for PHP](http://socketo.me/)
- [Creating Your First Application](http://socketo.me/docs/hello-world)