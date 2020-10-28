const express = require("express");
const { createServer } = require("http");
const expressHandlebars = require('express-handlebars');

const server = express();

server.engine("hbs", expressHandlebars({
        extname:"hbs",
        defaultLayout:"layout.hbs",
        partialsDir:"partials", 
    })
);
server.set("view engine", "hbs");
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res)=>{
    res.render("home");
});
/*
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

server.use((req, res)=>{
    res.sendFile(__dirname + "/404.html");
});
*/
server.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on 3000 port!");
});