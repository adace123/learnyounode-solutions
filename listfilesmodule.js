const fs = require('fs');
const path = require('path');

module.exports = (dirname, ext, callback) => {
    fs.readdir(dirname, (err, data) => {
        if(err) return callback(err);
        return callback(null, data.filter(d => path.extname(d).match(ext)));
    });
};