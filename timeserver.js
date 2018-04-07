const net = require('net');
const server = net.createServer(socket => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateString = date.getFullYear() + "-" + (month < 10 ? '0'+month : month)+ "-" + (day < 10 ? '0' + day : day) 
    + " " + (hours < 10 ? '0' + hours : hours) + ":" + (minutes < 10 ? '0' + minutes: minutes)
    + "\n";
    socket.end(dateString);
});
server.listen(process.argv[2]);