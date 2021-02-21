#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from './app';
const debug = require('debug')('server-node:server');
import http from 'http';

import os from "os";
console.log(os.networkInterfaces())
// require("./mysql");

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

// const server = http.createServer(app);
const server = app;

/**
 * Listen on provided port, on all network interfaces.
 */

server.on('error', onError);
// server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

// function onListening() {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//   debug('Listening on ' + bind);
// }

server.listen(port,'0.0.0.0',()=>{
  console.log(`listen http://localhost:${port}`)
  console.log(`listen http://192.168.101.101:${port}`)
});

// setTimeout(()=>{
//   console.log('http://localhost:3000')
//   console.log(server)
// })