const express = require("express"); // 다운받은 패키지를 불러오는 작업

const app = express();

console.log(__dirname);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) { // post, get처럼 get 방식으로 받는 걸 의미
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/note", function(request, response) {
    response.sendFile(__dirname + "/public/view/note.html");
});

app.get("/content", function(request, response) {
    response.sendFile(__dirname + "/public/view/content.html");
});

app.listen(3000, function () {
    console.log("3000번 포트에서 서버가 실행중입니다.");
});