const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname +"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//router를 불러왔다. (정의는 routes에서)
const router = require("./routes"); // require은 모듈을 불러오겠다는 의미. "./routes"는 상대 경로, 파일만 작성했지만 이때 이 파일로 들어가져서 알아서 index로 연결이 되니 생략이 가능
// const router = require("./routes/test"); 단, 이렇게 index가 아닌 다른 js를 렌더하고 싶은 경우 js 이름까지 작성한다.
//use는 미들웨어를 만드는 곳. 이때 router라는 미들웨어에 들리게 된다. 
app.use('/', router); // 이 /로 들어오는 요청에 대해서 다 router로 보내겠다 

//MVC 실습

// app.post("/", function(req,res) {
//     res.render("login");
// });

//get요청 post 요청 둘 다 필요하고 get은 클라이언트에게 보여주기 위한 페이지로 존재, post는 axios로 보내주기 위해 필요하므로 둘다 만든다. 
//이 주석처리한 부분들이 어떻게 컨트롤러와 model로 가는 지 확인하기 

// post 전송
// app.post("/form", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
//     n1 = req.body.id;
//     n2 = req.body.pw;
//     if (req.body.id == 111 && req.body.pw == "0000"){
//         return res.send("<p style='color:blue'>로그인 성공</p>"); }
//         else {
//             return res.send("<p style='color:red'>로그인 실패</p>");
//         };
// });

// 에러 렌더 정의는 가장 마지막에 !! 이때 * 은 모든 라우터 (어떤 글자라도 상관 없다)
app.get('*', (req, res) => {
    // res.render('error'); //errpr page를 렌더한다. 내가 정의한 라우터가 아닌 다른 라우터로 접속한 경우 
    res.send("주소가 존재하지 않습니다. 다시 입력해주시겠어요?");
})

app.listen(port, ()=>{
    console.log("server open : " , port);
});