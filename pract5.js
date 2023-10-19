const fs = require("fs");
const http = require("http");


let read = fs.readFileSync("mohit.txt","utf-8");

const server = http.createServer((req,res)=>{
    res.writeHead(300,{"content-type":"text/html"}

})

server.listen(80,"127.0.0.1",()=>{
    console.log("listening at the port 80");
})