// Import the 'http' module to create an HTTP server
const http = require("http");

// Define the host and port for the server
const host = 'localhost';
const port = 8000;

// Define the request listener function which will handle incoming HTTP requests
const requestListener = function (req, res) {
    // Set the response header to specify that the content type is HTML
    res.setHeader("Content-Type", "text/html");

    // Write the HTTP response status code (200 for success)
    res.writeHead(200);

    // End the response with an HTML body containing a heading
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

// Create an HTTP server instance using the request listener function
const server = http.createServer(requestListener);

// Start the HTTP server and listen for incoming connections on the specified host and port
server.listen(port, host, () => {
    // Log a message indicating that the server is running and listening for connections
    console.log(`Server is running on http://${host}:${port}`);
});
