const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let body = "";
    if(req.method === "POST") {
        req.on('data', chunk => body += chunk.toString().toUpperCase());
        
        req.on('end', () => {
            res.write(body);
            server.close();
        });
    } else throw new Error("method not supported");
});

server.listen(process.argv[2]);
