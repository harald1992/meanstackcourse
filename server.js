const http = require("http"); // default node js package

const server = http.createServer((req, res) => {
  // res.setHeader();
  res.end("This is my first response");
});

server.listen(process.env.PORT || 3000);
