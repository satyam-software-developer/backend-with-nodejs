// // Import the 'http' module to create an HTTP server
// const http = require("http");
// // Import the 'fs' module to read files from the file system
// const fs = require("fs").promises;

// // Define the host and port for the server
// const host = "localhost";
// const port = 8000;

// // Define the request listener function which will handle incoming HTTP requests
// const requestListener = function (req, res) {
//   // Read the contents of the "index.html" file asynchronously using the 'fs' module
//   fs.readFile(__dirname + "/index.html")
//     .then((contents) => {
//       // Set the response header to specify that the content type is HTML
//       res.setHeader("Content-Type", "text/html");
//       // Write the HTTP response status code (200 for success)
//       res.writeHead(200);
//       // End the response with the contents of the "index.html" file
//       res.end(contents);
//     })
//     .catch((err) => {
//       // If there's an error reading the file, set the HTTP response status code to 500 (Internal Server Error)
//       res.writeHead(500);
//       // End the response with the error message
//       res.end(err);
//       return;
//     });
// };

// // Create an HTTP server instance using the request listener function
// const server = http.createServer(requestListener);

// // Start the HTTP server and listen for incoming connections on the specified host and port
// server.listen(port, host, () => {
//   // Log a message indicating that the server is running and listening for connections
//   console.log(`Server is running on http://${host}:${port}`);
// });




// Import the 'http' module for creating HTTP servers
const http = require("http");
// Import the 'fs' module for file system operations with promises
const fs = require("fs").promises;

// Declare a variable to store the contents of the index.html file
let indexFile;

// Define the host and port for the server
const host = 'localhost';
const port = 8000;

// Define the request listener function to handle incoming HTTP requests
const requestListener = function (req, res) {
    // Set the content type of the response to HTML
    res.setHeader("Content-Type", "text/html");
    // Set the HTTP status code to 200 (OK)
    res.writeHead(200);
    // End the response with the contents of the index.html file
    res.end(indexFile);
};

// Create an HTTP server with the defined request listener function
const server = http.createServer(requestListener);

// Read the contents of the index.html file asynchronously
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        // Store the contents of the index.html file in the indexFile variable
        indexFile = contents;
        // Start the HTTP server and listen on the specified port and host
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        // Handle errors if the index.html file cannot be read
        console.error(`Could not read index.html file: ${err}`);
        // Exit the process with a non-zero exit code
        process.exit(1);
    });
