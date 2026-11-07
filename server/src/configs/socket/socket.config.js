import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const serverSocketIo = new Server(server, {
  cors: {
    origin: [process.env.ORIGIN],
  },
});

export { server, app, serverSocketIo };
