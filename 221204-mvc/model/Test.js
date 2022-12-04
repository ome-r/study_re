const Test = require("./Test"); //test에 있는 값들을 불러와서 사용할 예정이다 
// const user = require("../model/Test");

exports.main = (req,res) => {
    let hi = Test.hello();  //"Hello"라는 문자열이 hi라는 변수에 담기게 될 것이다.
    res.send(hi); //잘 보내지는지 확인하기  
    // res.render("index"); //view의 index.ejs를 렌더 즉 그동안 js에서 사용하던 함수를 여기다 정의하는 것
}

exports.test = (req,res) => {
    res.send("test");
}

exports.post = (req,res) => {
    res.send("post");
}

// login을 보여주는 부분은 get으로, 요청을 받는 페이지는 post로 보낸다. 
exports.loginView = (req,res) => {
    res.render("login"); //만든 login.ejs를 렌더하겠다. 
}
// post는 axios 요청을   
exports.login = (req,res) => {

    if (req.body.id == 111 && req.body.pw == "0000"){
        res.send("<p style='color:blue'>로그인 성공</p>"); 
    }
    else {
        res.send("<p style='color:red'>로그인 실패</p>");
    };
};