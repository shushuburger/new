const express = require("express"); // 다운받은 패키지를 불러오는 작업
const conn = require("./core/database");
const app = express();

console.log(conn);
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (request, response) { // post, get처럼 get 방식으로 받는 걸 의미
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/note", function(request, response) {
    response.sendFile(__dirname + "/public/view/note.html");
});

app.get("/content", function(request, response) {
    response.sendFile(__dirname + "/public/view/content.html");
});

app.post("/create", function(request, response) {
    console.log(request.body);
    conn.query("INSERT INTO list (title, description, content, createdAt) VALUES (?,?,?,now())", [request.body.title, request.body.description, request.body.content], function(err, result) {
        if(err) {
            console.log(err);
            response.status(500);
        }
        console.log(result);
    });
})

app.listen(3000, function () {
    console.log("3000번 포트에서 서버가 실행중입니다.");
});