//Demande d'ouverture de connexion WebScoket sur le serveur websocket
const conn = new WebSocket('ws://localhost:5000');

//Callback quand la connexion est ouverte
conn.onopen = function (e) {
    console.log("Connection established!");
};

//Callback quand le client recoit une réponse
conn.onmessage = function (e) {
    console.log(e.data);
};