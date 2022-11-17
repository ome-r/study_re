// console.log("test");

//객체 안에서 변수의 역할 = property (속성)
//객체 안에 정의되어 있는 함수는 메소드

const a = 'a변수';
const b = 'b변수';
//만든 변수를 모듈로 사용하려면? 내보내는 exports를 사용한다.

//여기서는 함수를 만들어서 모듈로 사용한다.
function test() {
    console.log('test');
}

//모듈로서 a,b를 내보내겠다 == 밖에서 사용할 수 있도록 세팅
module.exports = {
    a,
    b,
    test
}

//모듈 불러올 때 require사용
const result = require('./01module.js');  // require을 변수 module에 넣음

console.log( result.a ); //변수값을 가져오기 위해 .을 쓴다
console.log( result.b );
result.test(); //함수를 불러올 때에는 ()괄호를 사용하여 불러온다.

//모듈끼리도 불러올 수 있다.


let obj = {
    a : true,
    b : 'two',
    e : 1,
    f : '2'
  };

  let array = [1, 2, 3, 4, 5];

  let {b, ...rest} = obj;


  // let b = obj.b;
  // let rest = 나머지
//   console.log(b);
//   console.log(rest);

  console.log(obj.a);

//   타입 
//   1. 배열
//   2. 문자열
//   3. 정수
//   4. boolean 
//   5. 객체


function func1(value, call){
    console.log( value );
    call();
}
//a는 value안에, 익명함수 형태로 call에 들어감
func1('a', function(){
    console.log("1");
})

func2(function(){
    console.log("2");
})

func1(func2);
로그인 실습




//로그인 시도
console.log( "Start");
function login(id, cb) {
    setTimeout(() => {
        console.log('x');
        return id;
    }, 2000);
}
// 로그인 성공 시
const id = login('kim', null);
console.log( id + "님 환영!");
console.log( "finish!" );
// 특정함수가 끝났을 때, 사용하기 위해
// 즉 비동기인 함수들을 순서롤 부여해 사용하기 위해 콜백함수 사용

console.log( "Start");
function login(id, cb) {
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id);
    }, 2000);
}
// 로그인 성공 시
login('kim', function(id){
    console.log( id + "님 환영해요!");
});
console.log( "finish!" );