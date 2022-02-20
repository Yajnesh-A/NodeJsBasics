const http = require('http');

http.createServer((req, res) => {
    res.write("Node JS Basics");
    res.end();
}).listen(8080, (err) => {
    if (err) throw err;
    console.log("Server up");
})