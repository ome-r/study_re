//세션용으로 만듦
const express = require("express");
const session = require("express-session"); // 세션사용하기 
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//세션등록
app.use(session({ //세션 미들웨어 등록하기 
    secret: '453534', //무조건 사용하기! 임의의 문자열을 가지고 세션 암호화  
    resave: false, // 변경사항이 없어도 다시 저장할지 여부 / true : 모든 요청마다 session에 변화가 없어도 session을 다시 저장
    saveUninitialized: true, //초기화 되지 않은 세션을 저장하는가 마는가 여부 / true: 웹페이지에 접속하는 순간에 세션 id를 발급할 수 있게 저장
    // cookie: { //서버가 발급해준 세션 id를 클라이언트가 쿠키로 가지고 있는데, 이에 대한 설정 (옵션) //cookie-parser 필요
    //     httpOnly: true,
    // },
    // secure: //true : https 보안서버에서만 작동
}))


// 로그인을 세션을 통해서 검증하기 
const user = {id: "aaa", pw :"1234" }; //일때 

app.get("/", (req,res)=>{
    // if(req.session.user)가 있으면 로그인 성공한 사람이므로 프로필창을 보여주고 하는 방식으로 작동
    if(req.session.user) res.render("success", {islogin:true})
    else res.render("main", {islogin: false})
    // res.send("세션 수업"); 
})

// 메인 페이지 렌더 -- 로그인 버튼을 위한 용도
app.get("/main", (req,res)=>{
    res.render("main"); 
})

// 로그인 페이지 렌더 
app.get("/login", (req,res)=>{
    res.render("login"); 
})

// //s_index 해설용 
// app.get("/", (req,res)=>{
//     // 로그인이 되어있는 사람인지 아닌지 검증 req.session.user에 있는가
//     console.log(req.session.user);
//     if(req.session.user) res.render("s_index", {islogin : true, id: req.session.user});
//     else res.render("s_index", {islogin : false});
// })

// //get 요청에 렌더 
// app.get("/s_login", (req,res)=>{
//     res.render("s_login")
// })

// // id, pw 비교하기, 성공 실패값도 보내주기 
// app.post("/s_login", (req,res)=>{
//     if(req.body.id == user.id && req.body.pw == user.pw) {
//         // 클라이언트마다 있는 session이라는 공간안에다가 id가 저장되어 있다. 
//         req.session.user = req.body.id;
//         res.send(true);
//     } else {
//         res.send(false); 
//     }
//  })

//  // logout 
//  app.get("/s_logout", (req,res)=>{
//     req.session.destroy(function(err){
//         if(err) throw err;

//         res.redirect("/"); 
//     })
//  })

// 등록 페이지 true값 보내주기 
app.post("/user/register", (req,res)=>{
    res.send(true); 
})

app.get("/user/login", (req,res)=>{
    res.render("login");
})


// 로그인 페이지로 넘어간 다음 성공여부
app.post("/login", (req,res)=>{ //세션에 로그인 여부를 저장 
    if(req.body.id == user.id && req.body.pw == user.pw) { //롤그인이 성공하면 세션에 계속 정보를 가지고 있을 것이다 
        req.session.user = "aaa"; //따라서 세션 저장 --> 이때 로그인 성공했을때만 저장하기!!!! 
        res.send("로그인성공");
    }
    else {
        res.send("로그인실패") ; 
    }
    // req.session.user = "id"; //세션 저장 // 이때 id라는 키값은 이미 있으므로 사용하지 않기 
    // res.send("세션 생성 성공"); 
})

// app.destroy("/logout", (req,res)=>{ //로그아웃하고 나서 삭제하기 만들기 
//     req.session.destroy(function(err){ // session안에 이미 존재하는 destroy함수 사용해서 삭제 
//         if(err) throw err;
//         res.send("로그아웃 성공"); 
//     })
// })



app.get("/setSession",(req,res)=>{
    // cookies = { 객체 형태 }
    // req.session = { } 이 형태안에 무엇을 넣어줄지 고르자 
    // 클라이언트마다 고유의 세션 id를 가지고 있으므로 서버는 이를 가지고 클라이언트를 구분, 그러므로 req로 접근해서 고유의 방(session)에 접근
    req.session.user = req.query.id; //세션 저장 // 내 공간에다가 id를 저장한 코드 
    res.send("세션 생성 성공"); 
})


app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인하시겠어요?");
});

app.listen(port, ()=>{
    console.log("server open :" , port); 
})