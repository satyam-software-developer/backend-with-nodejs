// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log("Server running at http://localhost:${PORT}");
// });

const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));

