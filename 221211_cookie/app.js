const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use(cookieParser()); //미들웨어로 쿠키파서를 사용하겠다 
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const option = { //3번 옵션객체를 여기다 변수로 지정해서 계속 사용해도 된다. 
    httpOnly : true, // 이를 true로 하면 클라이언트가 document.cookies라는 js로 접근하는 것을 막아준다. /쿠키는 브라우저에 저장, js상으로 접근도 가능하다 document.cookies 이렇게 
    maxAge: 30, //만료시간 _ 만들어진 순간부터 적어둔 초만큼 뒤에 만료 (ms단위) ex. 30000 -> 30초 뒤에 만료 (60*60*24*1000 ==24시간)
    // expires : "2022-12-08T09:00:00", //만료일 _ GMT 시간 - 2022-12-08T09:00:00 이런식으로 사용 
    // path: "/a", // localhost:8000 에는 쿠키가 없음, 대신 localhost:8000/a/~~~ /a뒤의 모든 경로에는 쿠키가 있음 // default값이 그냥 "/", 이 경우 생략
    // secure: true, // true 인 경우 https라는 보안서버에만 적용된다. ex 개인정보가 들어가는 사이트 // 상품화하지 않을 프로젝트에선 false를 하거나 생략 
    // signed: // 쿠키의 암호화 default는 false 이므로 생략 가능 
}

app.get("/", (req,res)=>{ //ejs를 안깔면 render가 안된다. 따라서 간단한 문자열만 보내서 확인하기 
    // req.cookies.popup의 값 비교하기 // req.cookies.popup이 1이 아니라면 오늘하루 열지않음을 클릭하지 않은 것이므로, 팝업을 보여줘야 한다. 
      
    //팝업 다 보내려도 되고 검사해도 된다. 
    if(req.cookies.popup =="1") res.render("popup",{ popup: "none" });  //안 보여주는 거 
    else {res.render("popup", {popup:"block"})};  // 보여주는 거
    // res.render("index");
})

//실습 쿠키 생성하기 
app.post("/setpopup", (req,res) => { //res.cookie는 헤더변경이다. 
    //1. 쿠키 만들기 --오늘 하루 열지 않음 클릭했음을 구분하는 쿠키를 생성-- != 서버에 응답은 아니고 쿠키만 만듦 ex. {popup:1}
    res.cookie("popup", "1", option);
    //2. 서버 응답하기 --- 응답은 res.send같은 실질적인 서버응답이 있어야 한다. 
    res.send(true);
})

// const router = require("./routes");
// app.use('/', router);
// localhost:8000/~~~~

//서버측 응답사용 
app.get("/set", (req,res)=>{ //cookie사용 -- res객체를 사용해서 쿠키라는 메소드를 사용한 것 res는 서버가 클라이언트에게 보내는 응답 
    // res.cookie("key", "value", {옵션객체}) //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 
    res.cookie("SESAC_POP", "1", option); //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 (만료기간 등)
    res.send("쿠키 생성 성공!");
});

//클라이언트에서 저장된 객체 사용 
app.get("/get", (req,res)=>{ //서버에서 쿠키를 가져올 때는?? 
    console.log(req.cookies); // 클라이언트에 쿠키가 저장되어 있으므로 (브라우저에 저장) req 객체를 통해서 쿠키를 가져올 수 있다. 
    console.log(req.cookies.test); 
    res.send(req.cookies);  
});

app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인하시겠어요?");
});

app.listen(port, ()=>{
    console.log("server open :" , port); 
})