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
    res.setHeader("Content-Type" , "text/html");
    const readStream = fs.createReadStream(_dirname+"/index.html", "utf8");
    readStream.pipe(res);
});

server.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
});