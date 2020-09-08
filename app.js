//Reading files
const http = require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    //Reading a html file
    //const readStream = fs.createReadStream("./static/index.html");
    //const readStream = fs.createReadStream("./static/example.json");
    const readStream = fs.createReadStream("./static/example.png");
    //Header for the responde, it lets the client know what kind of data is expected
    //HTTP statu quote 200 its working with the request
    //res.writeHead(200,{"Content-type":"text/html"});
    //res.writeHead(200,{"Content-type":"application/json"});
    res.writeHead(200,{"Content-type":"image/png"});

    //Send to the user
    readStream.pipe(res);
 
}).listen(3000);