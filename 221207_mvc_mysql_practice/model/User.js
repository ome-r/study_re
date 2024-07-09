const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "myuser",
    {
      id: {
        type: DataTypes.STRING(10),
        allowNull: false, //not null
        primaryKey: true, //pk이므로 언급
      },
      pw: {
        //name varchar(10) not null
        type: DataTypes.STRING(10), //str 10글자 == varchar
        allowNull: false,
        // primarykey: 이 둘은 기본값이 false이므로 작성하지 않아도 된다
        // autoIncrement
      },
      name: {
        //comment mediumtext
        type: DataTypes.STRING(10), //str 10글자 == varchar
        allowNull: false,
      },
    },
    {
      tableName: "myuser", // select * from vistor을 >  select * from vistors로 만들어버린다.
      freezeTableName: true, //시퀄라이즈는 기본으로 테이블을 복수형으로 만들려고 한다는 특징이 있다. 이걸 방지하겠다는 의미
      timestamps: false,
    }
  );
};

module.exports = User;
