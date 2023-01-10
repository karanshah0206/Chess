let socket = io();

// Room Full
socket.on("full", () => {
  socket.disconnect();
  document.getElementById("roomFull").classList.remove("hidden");
});

// Joined As Player 1
socket.on("firstJoined", () => {
  document.getElementById("waitingForOpponent").classList.remove("hidden");
});

// Joined As Player 2
socket.on("secondJoined", () => {
  document.getElementById("gameboard").classList.remove("hidden");
});

// Opponent Joined
socket.on("opponentJoined", () => {
  document.getElementById("waitingForOpponent").classList.add("hidden");
  document.getElementById("gameboard").classList.remove("hidden");
});

// Opponent Left
socket.on("opponentLeft", () => {
  socket.disconnect();
  document.getElementById("opponentLeft").classList.remove("hidden");
});
