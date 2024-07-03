const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8080;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    } else if (req.url === "/about") {
      fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    } else if (req.url === "/contact-me") {
      fs.readFile(path.join(__dirname, "contact-me.html"), (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    } else {
      fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    }
  })
  .listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
