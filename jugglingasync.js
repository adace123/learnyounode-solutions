const http = require('http');
const promises = [];

process.argv.slice(2, 5).forEach((url, index) => {
    
    promises.push(new Promise((resolve, reject) => 
        http.get(url, data => {
           const res = [];
           
           data.on('data', d => d.toString().split("").forEach(line => res.push(line)));
           
           data.on('end', () => {
              resolve({index, result: res.join("")});
            
           });
        })));
});

Promise.all(promises).then(p => {
    p.sort((o1, o2) => o1.index > o2.index);
    p.forEach(url => console.log(url.result));
});
