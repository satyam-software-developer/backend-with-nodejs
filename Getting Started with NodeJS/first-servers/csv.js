// Import the 'http' module to create an HTTP server
const http = require("http");

// Define the host and port for the server
const host = "localhost";
const port = 8000;

// Define the request listener function which will handle incoming HTTP requests
const requestListener = function (req, res) {
  // Set the response headers to specify that the content is a CSV file
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");

  // Write the HTTP response status code
  res.writeHead(200);

  // End the response with the CSV data to be sent to the client
  res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};

// Create an HTTP server instance using the request listener function
const server = http.createServer(requestListener);

// Start the HTTP server and listen for incoming connections on the specified host and port
server.listen(port, host, () => {
  // Log a message indicating that the server is running and listening for connections
  console.log(`Server is running on http://${host}:${port}`);
});

