// Import the 'http' module for creating HTTP servers
const http = require("http");

// Define the host and port for the server
const host = "localhost";
const port = 8000;

// Sample data for books and authors
const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

// Define the request listener function to handle incoming HTTP requests
const requestListener = function (req, res) {
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");

  // Switch statement to handle different request URLs
  switch (req.url) {
    case "/books":
      // Send a successful response with the books data
      res.writeHead(200);
      res.end(books);
      break;
    case "/authors":
      // Send a successful response with the authors data
      res.writeHead(200);
      res.end(authors);
      break;
    default:
      // If the requested URL doesn't match "/books" or "/authors", send a 404 error response
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
      break; // Add a break statement to terminate the switch statement
  }
};

// Create a new HTTP server with the defined request listener function
const server = http.createServer(requestListener);

// Start the HTTP server and listen on the specified port and host
server.listen(port, host, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Server is running on http://${host}:${port}`);
});
