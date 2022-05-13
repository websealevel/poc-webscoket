# poc-webscoket

Un exemple d'application php répondant au protocole websocket utilisant le paquet ratchet.

# Principe

Côté serveur on lance un script qui va écouter des évènements. On lui fera implémenter l'interface `MessageComponentInterface`. Le script va écouter 4 évènements via 4 fonctions (méthodes):
- `onOpen` : appelée quand un nouveau client se connecte
- `onMessage` : appelée quand une connection (client connecté) envoie un message
- `onClose` : appelée quand une connection est fermée
- `onError`: appelée quand une erreur avec la connection se produit

L'interface `ConnectionInterface` est implémentée par une `Connection`, et représente un client connecté.

# Pré-requis

Installer le paquet [ratchet](https://packagist.org/packages/cboden/ratchet)

~~~
composer require cboden/ratchet
~~~

# Lancer le projet

~~~
php -S localhost:5001
~~~

# Ressources

- [How to Create a WebSocket Server in PHP with Ratchet for Real-Time Applications](https://www.twilio.com/blog/create-php-websocket-server-build-real-time-even-driven-application)
- [Ratchet, WebSockets for PHP](http://socketo.me/)
- [Creating Your First Application](http://socketo.me/docs/hello-world)