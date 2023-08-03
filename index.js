const express = require("express");
const server = express();

server.get('/',(req,res)=>{
    res.send("노드서버엔트리포인트입니다")
})

server.listen(8080, ()=>{
    console.log("localhost:8080 서버구동 완료")
})