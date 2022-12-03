const express = require("express");
const app = express();

const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname +"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//router를 불러왔다. (정의는 routes에서) 라우터를 미들웨어로 걸어놓았음 
const router = require("./routes"); // require은 모듈을 불러오겠다는 의미. "./routes"는 상대 경로, 파일만 작성했지만 이때 이 파일로 들어가져서 알아서 index로 연결이 되니 생략이 가능
//localhost:8000/user 로 접속해야 한다. 
app.use('/user', router);

// 에러 렌더 정의는 가장 마지막에 !! 이때 * 은 모든 라우터 (어떤 글자라도 상관 없다)
app.get('*', (req, res) => {
    res.send("주소가 존재하지 않습니다. 다시 입력해주시겠어요?");
})

app.listen(port, ()=>{
    console.log("server open : " , port);
});