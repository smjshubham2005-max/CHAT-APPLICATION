// Import required libraries
const express = require("express");
const app = express();

// Create HTTP server
const http = require("http").createServer(app);

// Initialize Socket.IO
const io = require("socket.io")(http);

// Serve frontend files from public folder
app.use(express.static("public"));

// Listen for new client connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Send a system message when a user joins
  io.emit("chat message", "A user joined the chat");

  // Listen for chat messages from clients
  socket.on("chat message", (msg) => {
    // Broadcast message to all connected users
    io.emit("chat message", msg);
  });
});

// Start the server on port 3000
http.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});