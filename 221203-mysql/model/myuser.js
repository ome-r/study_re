const mysql = require("mysql"); //mysql을 연결 

//mysql에 관련된 것은 모델에 작성한다. 
const cnn = mysql.createConnection({ //mysql에 접근하는 코드 
    host : 'localhost',
    user: 'user',
    password : 'marin45',
    database: 'sesac'
})

//컨트롤러의 get_visitor와 매치 
exports.get_visitor = (cb) => { //cb라는 콜백함수를 인자로 넘겨받았다 
    var sql = 'SELECT * FROM myuser'; //visitor라는 테이블에서 모든 정보를 조회하겠다 

    cnn.query(sql, (err,rows)=> { //sql문을 실행시킨 결과를 뒤에있는 매개변수 rows에 반환
        if(err) throw err; //에러가 있는 경우 
        
        console.log("visitors : ", rows); //실행된 결과 (에러가 없는 경우 결괏값 rows를 콘솔 찍는다)
        cb(rows); // 콜백함수 받아온 거 여기서 실행한다 
    // == console.log(result);
    // res.render("visitor", { data: result }); 이거를 실행한다 
    })
}

exports.register_vistior = (info, cb) =>{ //req.body와 cb을 각각 인자로 넘겨받아 사용
    //info = req.body ; {name : "", comment : "" }
    var sql = `insert into myuser(id, pw, name) values('${info.id}' ,'${info.pw}', '${info.name}')` //클라이언트가 보내준 정보 values에 담기, id는 auto_increase이므로 작성하지 않아도 된다
    //('${info.name}') 이 들은 문자열로 나오므로 '' 감싼다. 

    //sql문 실행하는 부분, 콜백함수로 하고싶은 일을 넘겨준다 
    cnn.query(sql, (err,result)=> { //sql을 실행한 결과를 뒤에있는 매개변수 result에 반환 (row라고 써도 되지만 형태 예측이 안되므로 그냥 결과라 씀)
    if(err) throw err; //에러가 있는 경우 
    
    console.log("visitors : ", result); //실행된 결과, 결과값 잘 보여주게 만들어준 것
    cb(); //콜백의 인자로 insertID를 넘겨주겠다  
    })
}

exports.delete_visitor = (id ,cb) => { //id를 매개변수로 받아와야 그 아래에서 삭제할 수 있다. 
    var sql = `delete from myuser where id ='${id}'`;

    cnn.query(sql, (err, result)=>{ //sql을 실행한 다음 err랑 result를 받아올 함수 작성 
        if (err) throw err;

        console.log("delete result :", result); //잘 되는 지 콘솔에 찍기 
        cb(); //인자 보낼건 없고 응답만 보냄 
    })
}

exports.update_visitor = (data, cb) => {
    let sql = `UPDATE myuser SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    cnn.query( sql, ( err ) => {
        if ( err ) throw err;
        cb();
    })

}

exports.login = (id, pw, cb) => {
    // id를 통해서 사용자 정보를 가져온다
    var sql = `select * from myuser where id = '${id}' and pw= '${pw}' limit 1;`; //id pw가 값이 있으면 length가 생길테니 그걸로 성공여부를 판단

    cnn.query(sql, (err, result)=>{ //sql을 실행한 다음 err랑 result를 받아올 함수 작성 
        if (err) throw err;

        console.log("user info :", result); //잘 되는 지 콘솔에 찍기 
        cb(result);  
    });
}


exports.get_user = (id, cb) => {
    // id를 통해서 사용자 정보를 가져온다
    var sql = `select * from myuser where id = '${id}'`; //id pw가 값이 있으면 length가 생길테니 그걸로 성공여부를 판단

    cnn.query(sql, (err, result)=>{ //sql을 실행한 다음 err랑 result를 받아올 함수 작성 
        if (err) throw err;

        console.log("user info :", result); //잘 되는 지 콘솔에 찍기 
        cb(result[0]);  
    });
}