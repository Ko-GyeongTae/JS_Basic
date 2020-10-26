const express = require("express");
const server = express();

server.get("");

server.listen(3000, () => {
    if(err) return console.log(err);
    console.log("The server is listening on 3000 port!");
})