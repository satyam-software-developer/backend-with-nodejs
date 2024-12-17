// Import the 'http' module for creating HTTP servers
const http = require("http");

// Define the host and port for the server
const host = 'localhost';
const port = 8000;

// Define the request listener function to handle incoming HTTP requests
const requestListener = function (req, res) {
    // Set the content type of the response to JSON
    res.setHeader("Content-Type", "application/json");
    // Set the HTTP status code to 200 (OK)
    res.writeHead(200);
    // End the response with a JSON string containing a message
    res.end(`{"message": "This is a JSON response"}`);
};

// Create a new HTTP server with the defined request listener function
const server = http.createServer(requestListener);

// Start the HTTP server and listen on the specified port and host
server.listen(port, host, () => {
    // Log a message to the console indicating that the server is running
    console.log(`Server is running on http://${host}:${port}`);
});

