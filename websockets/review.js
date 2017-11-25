
    var content = document.getElementById('content');
    var socket = new WebSocket('ws://localhost:2012');
    socket.onopen = function () {
        socket.send('hello from the client');
    };

    socket.onmessage = function (message) {
        content.innerHTML += message.data +'<br />';
    };

    socket.onerror = function (error) {
        console.log('WebSocket error: ' + error);
    };
