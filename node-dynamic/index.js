// 파일 새로 만들면 순서 1. npm init --yes 2. npm i express ejs 3. index.js안에 기본 내용 작성하기 4. npm i -g nodemon 설치 후 버전 확인 5. nodemon index.js
const express = require("express");
const app = express(); 
const port = 8000; 


app.set('view engine', 'ejs');

app.use("/static", express.static("static"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req,res){
    res.render("index"); 
})

//get 전송
app.get("/form", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    console.log(req.query);
    // res.send("이름은 : " + req.query.name); //내가 보낸 값이 나오게
    res.send("정상가입 되었습니다😎😎" + " 성함 : " + req.query.name +
    " 성별은 : " + req.query.gender + " 생년 월일은" + req.query.birth + " 년 " + req.query.birthMonth + " 월 " + req.query.birthDay + " 일 입니다."); //내가 보낸 값이 나오게
});

// post 전송
app.post("/form", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    n1 = req.body.id;
    n2 = req.body.pw;
    if (req.body.id == 111 && req.body.pw == "0000"){
        return res.send("<p style='color:blue'>로그인 성공</p>"); }
        else {
            return res.send("<p style='color:red'>로그인 실패</p>");
        };
    // res.send("가입성공 " + req.body.id)
    // res.send("정상가입 되었습니다😎😎" + " 성함 : " + req.body.name +
    // " 성별은 : " + req.body.gender + " 생년 월일은" + req.body.birth + " 년 " + req.body.birthMonth + " 월 " + req.body.birthDay + " 일 입니다."); //내가 보낸 값이 나오게
});


//ajax 는 이렇게 
app.get("/ajax", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    console.log(req.query);
    // res.send("이름은 : " + req.query.name); //내가 보낸 값이 나오게
    res.send("정상가입 되었습니다😎😎" + " 성함 : " + req.query.name +
    " 성별은 : " + req.query.gender + " 생년 월일은" + req.query.birth + " 년 " + req.query.birthMonth + " 월 " + req.query.birthDay + " 일 입니다."); //내가 보낸 값이 나오게
});

// post 전송
app.post("/ajax", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    n1 = req.body.id;
    n2 = req.body.pw;
    if (req.body.id == 111 && req.body.pw == "0000"){
        return res.send("<p style='color:blue'>로그인 성공</p>"); }
        else {
            return res.send("<p style='color:red'>로그인 실패</p>");
        };
    // res.send("가입성공 " + req.body.id)
    // res.send("정상가입 되었습니다😎😎" + " 성함 : " + req.body.name +
    // " 성별은 : " + req.body.gender + " 생년 월일은" + req.body.birth + " 년 " + req.body.birthMonth + " 월 " + req.body.birthDay + " 일 입니다."); //내가 보낸 값이 나오게
});

//fetch 
app.get("/fetch", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    console.log(req.query);
    // res.send("이름은 : " + req.query.name); //내가 보낸 값이 나오게
    res.send({msg : "정상가입 되었습니다😎😎" + " 성함 : " + req.query.name +
    " 성별은 : " + req.query.gender + " 생년 월일은" + req.query.birth + " 년 " + req.query.birthMonth + " 월 " + req.query.birthDay + " 일 입니다."}); //내가 보낸 값이 나오게
});

// post 전송
app.post("/fetch", function(req,res){ //프론트에서 보낸 값을 서버로 받아오기
    n1 = req.body.id;
    n2 = req.body.pw;
    if (req.body.id == 111 && req.body.pw == "0000"){
        return res.send({msg : "<p style='color:blue'>로그인 성공</p>"}); } //fetch는 일일이 json처럼 {} 딕셔너리로 감싸줘야만 제대로 받아온다는 단점이 있다.
        else {
            return res.send({msg : "<p style='color:red'>로그인 실패</p>"});
        };
    // res.send("가입성공 " + req.body.id)
    // res.send("정상가입 되었습니다😎😎" + " 성함 : " + req.body.name +
    // " 성별은 : " + req.body.gender + " 생년 월일은" + req.body.birth + " 년 " + req.body.birthMonth + " 월 " + req.body.birthDay + " 일 입니다."); //내가 보낸 값이 나오게
});

app.listen( port, ()=> { 
    console.log("server open :", port);
});