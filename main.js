const express = require("express"); // 다운받은 패키지를 불러오는 작업

const app = express();

app.get("/", function (request, response) { // post, get처럼 get 방식으로 받는 걸 의미
    response.send("서버 생성");
});

app.listen(3000, function () {
    console.log("3000번 포트에서 서버가 실행중입니다.");
});