// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

// Import the built-in 'http' module which allows creating HTTP servers and clients.
const http = require("http");

// Create an HTTP server using the 'createServer' method.
// The callback function will be invoked whenever a request is received.
const server = http.createServer((req, res) => {
  // Set the response content to "Response received at port 8080."
  res.end("Response received at port 8080.");
});

// Set the server to listen on port 8080 for incoming connections.
// The callback function is executed once the server starts listening.
server.listen(8080, () => {
  // Log a message indicating that the server is listening on port 8080.
  console.log("Server is listening on port 8080");
});

// Export the 'server' object to make it accessible from other modules.
module.exports = server;
