// http 모듈 불러오기
const http = require("http");
// fs 모듈 불러오기
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req,res)=>{
    console.log("요청 발생");
    console.log(req.method);
    //응답 헤더
    //res.setHeader("Content-Type", "text/plain");
    //응답 본문
    //res.write("Hello, Node!!")
    //res.end();  //응답 종료
    //res.setHeader("Content-Type" , "text/html");
    //const readStream = fs.createReadStream(__dirname+"/index.html", "utf8");
    //readStream.pipe(res);
    res.setHeader("Content-Type" , "text/html");
    const {method, url} = req;
    if( method === "GET" && url === "/home" ) {
        res.statusCode = 200;
        res.end("Home");
    } else if( method === "GET" && url === "/abuout") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});

server.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
});