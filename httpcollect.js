const http = require('http');
const res = [];
http.get(process.argv[2], response => {
    response.on('data', data => {
        data.toString().split("").forEach(d => res.push(d));
    });
    
    response.on('end', end => {
       console.log(res.length);
       console.log(res.join(""));
    });
});