const http = require('http');
const { runInNewContext } = require('vm');

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url == "/"){
        res.write("<h1>Hello from node js</h1>");
        res.end();
    }
    else{
        res.write(`<h1>You have entered this url : ${req.url}</h1>`);
    }
});

server.listen(5500, () => {
    console.log("The Server is listening on port 5500");
});