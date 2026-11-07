import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const serverSocketIo = new Server(server, {
  cors: {
    origin:process.env.ORIGIN || "http://localhost:5173",
    credentials:true
  },
});
// In {userId: socketId}
const onlineUsers = {};

serverSocketIo.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const { userId } = socket.handshake.query;

  if (userId) {
    onlineUsers[userId] = socket.id;
  }

  // io.emit() is used to send events to all connected clients

  serverSocketIo.emit("getOnlineUsers", Object.keys(onlineUsers));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete onlineUsers[userId]
  });
});

export { server, app, serverSocketIo };
