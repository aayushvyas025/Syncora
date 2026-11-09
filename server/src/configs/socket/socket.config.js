import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const serverSocketIo = new Server(server, {
  cors: {
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
  },
});
// In {userId: socketId}
const onlineUsers = {};

function emitOnlineUsers() {
  serverSocketIo.emit("getOnlineUsers", Object.keys(onlineUsers));
}

export function getReceiverSocketId(userId) {
  return onlineUsers[userId];
}

serverSocketIo.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const { userId } = socket.handshake.query;

  if (userId) {
    onlineUsers[userId] = socket.id;
  }

  // io.emit() is used to send events to all connected clients

  emitOnlineUsers();

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    if (onlineUsers[userId] === socket.id) {
      delete onlineUsers[userId];
    }

    emitOnlineUsers();
  });
});

export { server, app, serverSocketIo };
