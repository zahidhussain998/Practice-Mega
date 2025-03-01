"use strict";
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5500", // Allow your frontend
        methods: ["GET", "POST"],
    }
});
app.use(cors());
const DIST_DIR = join(__dirname, 'dist');
const INDEX_FILE = join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.get('/', (_req, res) => {
    res.sendFile(INDEX_FILE);
    console.log(res);
});
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chatMessage', (msg) => {
        console.log('Message received:', msg);
        io.emit('chatMessage', msg); // Broadcast to all clients
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
