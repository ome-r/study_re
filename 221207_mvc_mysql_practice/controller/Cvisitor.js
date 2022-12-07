const Visitor = require("../model/Visitor"); //visitor라는 모델 연결

exports.visitor = (req,res) => { //가장 기본 라우터에 대한 함수 정의, visitor에 들어오면 이 일을 하겠다. 
    Visitor.get_visitor(function(result){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
        console.log(result);
        res.render("visitor", { data: result }); // 할일이 다끝나면 응답을 한다 visitor라는 ejs를 렌더. function에 있는 매개변수 result를 data로 
    });
}
 
exports.register = (req, res) => { // req.body는 사용자가 보내주는 값을 통째로 넘기기 위해 사용한다 
    Visitor.register_vistior( req.body, function(id){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
            console.log(id);    
            res.send(String(id)); // 할일이 다끝나면 응답을 한다, 이때 result는 쿼리를 날려서 나온 결과값이다. 이때 id 하나만 넘겨준다(model에서 그렇게 정의했으므로)
        }); //숫자를 보내기 때문에 string을 넣는다 send에는 숫자만 들어갈 수 없기 대문 
    //insert 데이터 : req.body안의 것들을 받아와야 한다 
    // 
}

//새로 만든 delete 
exports.delete = (req,res)=>{
    //1. mysql에서 req.body.id에 해당하는 데이터를 delete를 할 것이다.(모델에서 할 것) 2. delete한 것을 서버에 응답 즉 res.send해야한다. 
       Visitor.delete_visitor(req.body.id, function(){
           res.send(true); //삭제만 잘 되면 응답만 보내면 되므로 true만 보낸다. 클라이언트가 끝난걸 알게 만들기 위해, res.send는 반드시 있어야한다. 안에 res.send("성공");이렇게 해도 된다
       })
   }