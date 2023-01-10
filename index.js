const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 80;

app.use(express.static("public"));
server.listen(port, () => {});

/* GAME LOGIC STARTS HERE */
let peerCount = 0;

io.on("connection", (socket) => {
  peerCount++;
  if (peerCount > 2) socket.emit("full");
  else if (peerCount == 1) socket.emit("firstJoined");
  else {
    socket.emit("secondJoined");
    socket.broadcast.emit("opponentJoined");
  }

  socket.on("disconnect", () => {
    peerCount--;
    if (peerCount == 1) socket.broadcast.emit("opponentLeft");
  });
});
