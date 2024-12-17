// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

// Import the built-in 'http' module which allows creating HTTP servers and clients.
const http = require("http");

// Import the built-in 'fs' module which allows interacting with the file system.
const fs = require("fs");

// Create an HTTP server using the 'createServer' method.
// The callback function will be invoked whenever a request is received.
const server = http.createServer((req, res) => {
  // Read the content of the "index.html" file synchronously and convert it to a string.
  const data = fs.readFileSync("index.html").toString();

  // Set the response content to the data read from the "index.html" file.
  res.end(data);
});

// Set the server to listen on port 8080 for incoming connections.
server.listen(8080);

// Log a message indicating that the server is listening on port 8080.
console.log("Server is listening on 8080.");

// Export the 'server' object to make it accessible from other modules.
module.exports = server;
