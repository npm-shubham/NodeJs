var http = require('http')

var server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write('Hello Node Js Server. I am Shubham')
    res.end("Chacha")
})

server.listen(3939)