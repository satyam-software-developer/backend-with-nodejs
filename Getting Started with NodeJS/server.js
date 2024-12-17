// create a server using NodeJS.

// 1. Import http library/module

// 1. Import the built-in 'http' module which allows creating HTTP servers and clients.
const http = require("http");

// 2. Create an HTTP server using the 'createServer' method.
// The callback function will be invoked whenever a request is received.
const server = http.createServer((req, res) => {
  // Log the URL requested by the client.
  console.log(req.url);

  // Write a response to the client.
  res.write('Welcome to my application');

  // Check the URL requested by the client and send appropriate responses.
  if (req.url == "/product") {
    // If the requested URL is "/product", send the response "This is Product page" and end the response.
    return res.end("This is Product page");
  } else if (req.url == "/user") {
    // If the requested URL is "/user", log "This is User page".
    console.log("This is User page");
  }

  // Modify the response and end it with "Welcome to NodeJS Ninja Server".
  res.end("Welcome to NodeJS Ninja Server");
});

// 3. Specify a port to listen for client's requests.
server.listen(3100, () => {
  // Log a message indicating that the server is listening on port 3100.
  console.log("Server is listening on port 3100.");
});

//console.log("Server is listening on port 3100");
