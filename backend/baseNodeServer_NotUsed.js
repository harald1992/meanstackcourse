// this is a node server that listens to a port. It uses no express.

const http = require("http"); // default node js package

const server = http.createServer((req, res) => {
  // res.setHeader();
  res.end("This is my first response");
});

server.listen(process.env.PORT || 3000);
