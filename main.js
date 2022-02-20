const http = require('http');
const fs = require('fs');
const path = require('path');

let employee = [
    {
        name: "Yaj",
        profile: "NodeJS"
    },
    {
        name: "Raj",
        profile: "ReactJS"
    }
]

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data);
        })
    }
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data);
        })
    }
    else if (req.url === '/api/employees') {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(employee));
    }
})

let PORT = process.env.PORT || 8080

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Server up");
})