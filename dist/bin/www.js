#!/usr/bin/env node
"use strict";
/* eslint-disable no-console */
/**
 * Module dependencies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const http_1 = tslib_1.__importDefault(require("http"));
const app_1 = tslib_1.__importDefault(require("../app"));
const models_1 = tslib_1.__importDefault(require("../models"));
const debug = (0, debug_1.default)('ts/www:server');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3001');
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
// Run sequelize before listen
models_1.default.sync({ force: true }).then(() => {
    app_1.default.listen(port, () => {
        console.log(`App listening on PORT ${port}`);
    });
});
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const portNum = parseInt(val, 10);
    if (Number.isNaN(portNum)) {
        // named pipe
        return val;
    }
    if (portNum >= 0) {
        // port number
        return portNum;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
// eslint-disable-next-line no-undef
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
//# sourceMappingURL=www.js.map