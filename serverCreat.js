const http = require('http')

const port = 2000
const server = http.createServer((req,res)=>{
    res.writeHead(200)
    res.write("<b>Hi")
    res.end()
})
server.listen(port,()=>{
    console.log("This port run on",port)
})