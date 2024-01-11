const http = require("http");
const option = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts/1",
  method: "GET",
};
function dataFetch(){
    const req = http.request(option,(res)=>{
        let data = "";
        res.on("data",(chunk)=>{
            data+=chunk
        })
        res.on("end",()=>{
            const jsonData=JSON.parse(data)
            console.log(jsonData)
        })
    })
    req.on("error",(error)=>{
        console.log(`Request errorL${error.message}`)
    })
    req.end()
}
module.exports=dataFetch
