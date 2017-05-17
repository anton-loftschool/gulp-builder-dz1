"use strict";

let http = require('http');
let server = http.createServer(hello);

server.listen(3000);

function hello(req, res) {
    res.end(JSON.stringify(req.headers, null, 2));
}
