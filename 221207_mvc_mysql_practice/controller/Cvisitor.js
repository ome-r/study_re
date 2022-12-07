const { Visitor } = require("../model"); //객체구조분해 할당. visitor만 필요, index.js는 생략가능 

exports.visitor = async (req, res) => { //sequelize는 프라미스이므로 then 사용하기 >> async await도 사용가능! 
    let result = await Visitor.findAll(); //시퀄라이즈 모듈은 순서대로 실행하기 위해 프라미스를 사용했다. 가독성이 좋게 하기 위해 async await 사용 
    // 기다렸다가  Visitor.findAll(); 이거 실행해서 result에 담은 다음에, 그 아래로 가서 render하기 위해 사용! 
    // then으로 받아올 것을 let result에 담은 것이므로 then은 사용하지 않는다. 
    res.render("visitor", {data: result}); 
    
}
//     Visitor.findAll()  // select * from visitor; 다 가져오는 함수 사용 
//     .then((result)=>{  // 결과값은 result
//         console.log(result);
//         console.log("id :", result[0].id); 
//         res.render("visitor", {data: result});
//     })
// }
//     select * from visitor; 

//     Visitor.get_visitor(function(result){
//         console.log(result);
//         res.render("visitor", {data: result});
//     })
// }

exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data)
        console.log(result);
        res.send(String(result.id));
    }

    // insert into visitor (name,comment) values('${req.body.name}','${req.body.name}');
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })


exports.delete = async(req, res) => {
    let result = await Visitor.destroy({ 
        where : {id : req.body.id}
    })

    console.log(result);
    res.send(true);
    // delete from visitor where id = '${req.body.id}'를 하겠다는 의미 
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id =  async (req, res) => {
    let result = await Visitor.findOne({ 
        where : {id : req.query.id}
    })  
       res.send(result); 
        console.log("result", result);

    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터

    // findAll과 fineOne 둘 모두 사용가능하다 차이는 다음과 같다 
    // Visitor.findAll({ 
    //     where : {id : req.query.id},
    //     limit : 1 
    //  })
    // Visitor.findOne({     //select * from visitor where id = req.query.id; 
    //     where : {id : req.query.id}
    //  })
    //  .then((result) => {
    //     res.send(result); 
    //  })

    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    console.log(req.body.id);
    console.log(data);
    let result = await Visitor.update(data, {
        where: {id: req.body.id}
    })
    console.log(result);
    res.send(true); //나 업뎃성공했어! 
}

    // Visitor.update(data, {  //인자 2개를 받는다 1. 어떻게 업뎃할지 2. 조건 (where id = '${req.body.id}')
    //     where: {id : req.body.id}
    // }) 
    // .then((result)=>{
    //     console.log(result);
    //     res.send(true); //나 업뎃성공했어! 
    // })
    // update visitor set name='${req.body.name}', comment='${req.body.comment}' where id = '${req.body.id}'' 
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
//     Visitor.update_visitor(req.body, function(){
//         res.send(true);
//  
