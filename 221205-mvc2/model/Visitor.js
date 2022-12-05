const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user: 'user',
    password : 'marin45',
    database: 'sesac'
})

exports.get_visitor = (cb) => { //cb라는 함수를 인자로 넘겨받았다 
    var sql = 'SELECT * FROM visitor';

    cnn.query(sql, (err,rows)=> { //결과를 뒤에있는 매개변수 rows에 반환
        if(err) throw err; //에러가 있는 경우 
        console.log("visitors : ", rows); //실행된 결과 (에러가 없는 경우 결괏값 rows를 콘솔 찍는다)

        cb(rows); // 콜백함수 받아온 거 여기서 실행한다 
    // == console.log(result);
    // res.render("visitor", { data: result }); 이거를 실행한다 
    })
}
exports.register_vistior = (info, cb) =>{ //req.body와 cb을 각각 인자로 넘겨받아 사용
    //info = req.body ; {name : "", comment : "" }
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')` //클라이언트가 보내준 정보 values에 담기, id는 auto_increase이므로 작성하지 않아도 된다
    //('${info.name}') 이 들은 문자열로 나오므로 '' 감싼다. 
    cnn.query(sql, (err,result)=> { //결과를 뒤에있는 매개변수 rows에 반환
    if(err) throw err; //에러가 있는 경우 
    
    console.log("visitors : ", result); //실행된 결과, 결과값 잘 보여주게 만들어준 것
    cb(result.insertId); //insertId를 넘겨주겠다  
    })
}

//delete파트 

exports.delete_visitor = (id ,cb) => { //id를 매개변수로 받아와야 그 아래에서 삭제할 수 있다. 
    var sql = `delete from visitor where id = ${id}`;

    cnn.query(sql, (err, result)=>{ //sql을 실행한 다음 err랑 result를 받아올 함수 작성 
        if (err) throw err;

        console.log("delete result :", result); //잘 되는 지 콘솔에 찍기 
        cb(); //인자 보낼건 없고 응답만 보냄 
    })
}