const http = require("http");
const { default: connectToMongoDB } = require("./src/config/mongodb");

const server = http.createServer((req, res) => {
  res.write("This is coming from NodeJS server.");
  console.log(req.url);
  if (req.url === "/first") {
    res.end("This is first response");
  } else {
    res.end("This is default response");
  }
});

server.listen(3200, () => {
  console.log("Server is listening at 3200");
  connectToMongoDB();
});

