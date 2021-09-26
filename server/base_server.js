const http = require('http');
const fs = require('fs');

const serverObject = {
    port: 3030,
    machine: "127.0.0.1",
    supportMultiThreading: false
}

const server = http.createServer(function (req, res) {
    read_config_settings();
    res.end();
});/*.listen(serverObject.port, function (err) {
    if (err) {
        console.log("Cannot launch server: " + err);
    } else {
        console.log("Server is running on port: " + serverObject.port);
    }
});*/

function read_config_settings() {
    fs.readFile("./app_config.json", "utf-8", (err, json_string) => {
        if (err) {
            console.log("Cannot read file: " + err);
        } else {
            let data = JSON.parse(json_string);
            serverObject.machine = data.machine;
            serverObject.port = data.port;
            serverObject.supportMultiThreading = data.supportMultiThreading;
        }
    }) 
}

server.listen(serverObject.port, function (err) {
    if (err) {
        console.log("Cannot launch server: " + err);
    } else {
        console.log("Server is running on port: " + serverObject.port);
    }
});
