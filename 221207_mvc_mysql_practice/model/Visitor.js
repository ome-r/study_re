const Visitor = ( Sequelize, DataTypes )=>{ //Visitor라는 함수 만들기, 이 함수가 실행되어야만 아레에 잘 실행을 해서 return값으로 보낼예정 
    return Sequelize.define( //sequelize안의 define함수를 실행한 것 
        // table자체를 Sequelize 문법으로 정의한다 (DB에 이미 이 테이블이 있어야 한다는 전제)
        // Sequelize.define( //인자가 세개 1. 테이블 이름 ("visitor"), 2. 컬럼 정보 3. 모델옵션 정의 
        "visitor", //create table visitor (컬럼 정의)
        { // 그냥 js문법 , 모든 RDBMS에서 사용가능 
            id : { // id int not null primary key auto_increment
                type :  DataTypes.INTEGER,       //int 
                allowNull : false,   //not null
                primaryKey: true,   //pk이므로 언급 
                autoIncrement: true
            },
            name : { //name varchar(10) not null  
                type: DataTypes.STRING(10), //str 10글자 == varchar 
                allowNull: false
                // primarykey: 이 둘은 기본값이 false이므로 작성하지 않아도 된다 
                // autoIncrement 
            },
            comment : { //comment mediumtext
                type: DataTypes.TEXT('medium') // long 텍스트는 안에 long만 바꾸면 된다. 
            }
        }, // 이제 2번째는 끝났으니 다음으로 가기 위해 콤마
        {
        tableName: "visitor", // select * from vistor을 >  select * from vistors로 만들어버린다. 
        freezeTableName: true, //시퀄라이즈는 기본으로 테이블을 복수형으로 만들려고 한다는 특징이 있다. 이걸 방지하겠다는 의미
        timestamps: false //default는 true , 만약 true라면 데이터가 생성 및 수정이 될 때마다 타임스탬프를 찍으면서 생성시간을 저장해버린다. (modifyAT createdAT 이렇게 컬럼 생성해서 저장해버림)
        // collate, charset 라는 옵션은 우리가 이미 DB에 정의해놨으므로 (인코딩 설정) 하지 않아도 된다. 
    }

)
}

module.exports = Visitor;