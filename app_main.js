const http = require('http');
const fs = require('fs');
const element_mgr = require('./element/element_mgr');
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('test_app/main.module.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write("[Syntax Error] cannot read file: 'test_app/main.module.html'");
        } else {
            res.write(data);
        }

        res.end();
    })
})

server.listen(port, function (err) {
    if (err) {
        console.log("[Err] Unnable to listen on port" + port);
        return;
    } else {
        console.log("[Server] listen on port: " + port);
    }
});