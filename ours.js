var http = require('http')
// var Statusque=200;
var server = http.createServer((req,res)=>{
    // res.writeHead(Statusque)
    res.write("<h1>This is Local host of Macintosh but soory to say it every</h1>")
    res.end()
})
var port = 2000;
server.listen(port)