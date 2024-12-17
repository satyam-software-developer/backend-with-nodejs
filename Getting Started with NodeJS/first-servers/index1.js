// Import the built-in 'http' module which allows creating HTTP servers and clients.
const http = require("http");

// Create an HTTP server using the 'createServer' method.
// The callback function will be invoked whenever a request is received.
const server = http.createServer((req, res) => {
  // Define the response message
  const resMessage = "I am a Ninja";

  // Use the 'res.write()' method to send the response message to the client.
  res.write(resMessage);

  // End the response. This tells the client that the response has been completed.
  res.end();
});

// Set the server to listen on port 3000 for incoming connections.
// The callback function is executed once the server starts listening.
server.listen(3000, () => {
  // Log a message indicating that the server is listening on port 3000.
  console.log("server is listening at port 3000");
});

// Export the 'server' object to make it accessible from other modules.
module.exports = server;
