const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  // join user to a room chat
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      callback({ error: "error" });
    }

    if (user) {
      socket.emit("message", {
        user: "admin",
        text: `Hi ${user.name}, welcome to the ${user.room} chat room`,
      });

      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name} has joined!` });

      socket.join(user.room);

      callback();
    }
  });

  // user sends messages
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  // disconnects a user from a room chat
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
