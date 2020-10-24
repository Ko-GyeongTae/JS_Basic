var http = require('http');
var options = {
    host: "122.34.166.121",
    port: null,
    path: "/"
};

var req = http.request(options, (res) => {
    var data = "";
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
});
req.end();