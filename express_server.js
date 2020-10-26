const express = require("express");
const { createServer } = require("http");
const server = express();

server.get("/", (req, res) => {
    res.send("<h1>Hello from nodejs</h1>")
});

server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on 3000 port!");
});