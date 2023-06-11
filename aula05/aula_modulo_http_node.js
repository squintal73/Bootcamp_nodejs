import http from "http"

http.createServer((req, res) => {
    res.write("<h1> It's working !!! </h1>");
    res.statusCode = 200;
    res.end();
}).listen(8080);
