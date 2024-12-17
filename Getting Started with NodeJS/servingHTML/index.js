// Import the 'http' module for creating HTTP servers
const http = require("http");
// Import the 'fs' module for file system operations
const fs = require("fs");

// Create an HTTP server using the createServer method
const server = http.createServer((req, res) => {
  // Read the content of the file "index.html" synchronously and convert it to a string
  const data = fs.readFileSync("index.html").toString();
  // Send the contents of the file as the response body
  res.end(data);
});

// Set the server to listen on port 3100 for incoming requests
server.listen(3100);

// Log a message to the console indicating that the server is listening on port 3100
console.log("Server is listening on 3100");
