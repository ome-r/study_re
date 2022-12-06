const User = require("../model/myuser"); //modle의 visitor라는 js 연결, Visitor라는 객체를 만들어 사용한다.

//함수 vistior 와 register를 만듦

//라우터에 접속 후 하고싶은 일을 함수형태로 걸기 
// exports.visitor = (req,res) => { //가장 기본 라우터에 대한 함수 정의, visitor에 들어오면 이 일을 하겠다. 
//     Visitor.get_visitor(function(result){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
//         console.log(result);
//         res.render("user", { data: result }); // 할일이 다끝나면 응답을 한다 user라는 ejs를 렌더. function에 있는 매개변수 result를 data로 
//     });//data라는 이름으로 result를 보낸다 이 값은 다시 모델에 가서 확인하면 rows임을 알 수 있다. 최종적으로 vistior에서 렌데할때 result를 받아서 렌더
// }

// 회원페이지 렌더 
exports.user = (req,res) => { //가장 기본 라우터에 대한 함수 정의, visitor에 들어오면 이 일을 하겠다. 
    res.render("user"); 
}
//회원가입이 되면 true보내기 
exports.register = (req, res) => { // req.body는 사용자가 보내주는 값을 통째로 넘기기 위해 사용한다 
    User.register_vistior(req.body, function(){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
            console.log('등록됐음');    
            res.send(true); // 할일이 다끝나면 응답을 한다, 이때 result는 쿼리를 날려서 나온 결과값이다. 이때 id 하나만 넘겨준다(model에서 그렇게 정의했으므로)
        }); //숫자를 보내기 때문에 string을 넣는다 send에는 숫자만 들어갈 수 없기 대문 
    //insert 데이터 : req.body안의 것들을 받아와야 한다 
    // 
}
//로그인 페이지 렌더 
exports.login = (req, res) => {
    res.render("login"); // 로그인 페이지를 렌더한다 
    // Visitor.login_user(req.query, function(result){
    //     res.render("login"); // 로그인 페이지를 렌더한다 
    // })
}

//삭제된다면 보낼 것 
exports.delete = (req,res)=>{
    //1. mysql에서 req.body.id에 해당하는 데이터를 delete를 할 것이다.(모델에서 할 것) 2. delete한 것을 서버에 응답 즉 res.send해야한다. 
       User.delete_visitor(req.body.id, function(){
           res.send(true); //삭제만 잘 되면 응답만 보내면 되므로 true만 보낸다. 클라이언트가 끝난걸 알게 만들기 위해, res.send는 반드시 있어야한다. 안에 res.send("성공");이렇게 해도 된다
       });
   }
   
   exports.profileEdit = (req,res)=>{
       //1. mysql에서 req.body.id에 해당하는 데이터를 delete를 할 것이다.(모델에서 할 것) 2. delete한 것을 서버에 응답 즉 res.send해야한다. 
        User.update_visitor(req.body.id, function(){
              res.send(true); //삭제만 잘 되면 응답만 보내면 되므로 true만 보낸다. 클라이언트가 끝난걸 알게 만들기 위해, res.send는 반드시 있어야한다. 안에 res.send("성공");이렇게 해도 된다
          });
      }
      
   
   //사용자 정보 가져오기 위한 아이 
   exports.profile = (req,res) => {
       console.log(req.body.id);
       User.login(req.body.id, req.body.pw, function(result){ //login 이라는 함수 실행 
           if ( result.length > 0 ) res.send(true); //model에서 id, pw가 존재하는지 여부 판단만!
           else res.send(false);
       });
   }
   
   exports.profileView = (req,res) => {
       console.log(req.body.id);
       User.get_user(req.body.id, function(result){ //get_visitor_by_id_model 이라는 함수 실행 
           res.render("profile", {data: result})
       });
   }

   