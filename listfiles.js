const fs = require('fs');
const path = require('path');
const listfiles = require('./listfilesmodule.js');

const dataHandler = (err, data) => {
   if(err) throw err;
   data.forEach(d => console.log(d));
};
listfiles(process.argv[2], process.argv[3], dataHandler);
