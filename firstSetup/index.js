const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write("hello World");
        res.end();
    }
    else{
        res.write("you are not on home page");
        res.end();
    }
});

server.listen('3000');