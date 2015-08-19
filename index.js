#!/usr/bin/env node

var ws = require('ws');
var wsstream = require('websocket-stream')

module.exports = function (args) {
  if (args.listen) {
    var port = args.listen;
    if (typeof(port) !== 'number') {
      port = 11222;
    }
    startServer(port);
  } else if (args.connect) {
    var address = args.connect;
    if (typeof(address) !== 'string') {
      address = "ws://localhost:11222";
    }
    startClient(address);
  } else {
    console.log("Usage: wsscat [-l port] [-c address]");
  }
}

function startServer(port) {
  var Server = ws.Server;
  var server = new Server({port: port})

  server.on("connection", function(ws) {
    process.stdin
    .pipe(wsstream(ws))
    .pipe(process.stdout)
  })
}

function startClient(address) {
  var wss = wsstream(address)

  process.stdin
    .pipe(wss)
    .pipe(process.stdout)
}
