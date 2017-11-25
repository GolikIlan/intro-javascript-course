var server = require('websocket').server
var http = require('http');

var socket = new server({
  httpServer: http.createServer().listen(2012)
});

socket.on('request', function (request) {
  var connection = request.accept(null, request.origin);

  connection.on('message', function (message) {
    console.log(message.utf8Data);
    connection.sendUTF('hello');
    setInterval(function () {
      connection.sendUTF('ping');
    }, 1000);
  });

  connection.on('close', function (connection) {
    console.log('connection closed');
  });
}); 