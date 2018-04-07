const http = require('http');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
    if(req.method === "GET") {
        
        const apiURL = url.parse(req.url);
        const iso = querystring.parse(apiURL.query).iso;
        
        switch(apiURL.pathname.replace("/api/", "")) {
           case 'parsetime':
               const date = new Date(iso);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }));
                
               break;
            case 'unixtime':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    unixtime: Date.parse(iso)
                }));
                break;
            default:
                throw new Error("URL not supported");
        }
    }

    else throw new Error("method not supported");

});

server.listen(process.argv[2]);
