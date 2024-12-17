const express = require("express");

//server
const server = express();

server.get("/", (req, res) => {
  return res.send("Welcome to express");
});

// my static files are in public folder  which can be accessed directly
server.use(express.static("public"));

server.listen(3300);
console.log("Server is listening on 3300");


