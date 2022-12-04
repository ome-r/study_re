//controller의 Cmain.js에서 작성
//기존 index.js의 내용이 여기로 들어온것이다. 

const Test = require("../model/Test");


// login을 보여주는 부분은 get으로, 요청을 받는 페이지는 post로 보낸다. 
exports.loginView = (req,res) => {
    res.render("login");
}

exports.login = (req,res) => {
    if (req.body.id == 111 && req.body.pw == "0000"){
        res.send("<p style='color:blue'>로그인 성공</p>"); 
    }
    else {
        res.send("<p style='color:red'>로그인 실패</p>");
    };
};