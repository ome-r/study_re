//브라우저는 js파일만 읽을 수 있음 .. 따라서 ts파일을 js로 바꿔야한다
var 회원들 = ['kim', 'park']; //array는 타입을 지정해야한다.
var 값없음 = null; //null, undefined도 가능하다.
//변수명 오른쪽에 오는 것들은 전부 타입지정 문법
var 오브젝트 = { mem1: 'kim', mem2: 'park' }; //object 타입지정
var 회원 = 'park'; // 보통 알아서 타입을 지정해주기 때문에 생략가능! 마우스를 올려보면 나온다
//Q1.
var 이름 = '마린';
var age = 25;
var 출생지 = 'seoul';
//Q2.
var favourite = { pinktape: 'fx' };
//Q3.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
//union 타입
var 회원둘 = [1, '2', 3];
var 오브젝투 = { a: '123' };
//any 타입 ..> 일반 js변수 >> 나중에 버그나도 잡아주지 않음!
var 이름2; //아무거나 >> 모든 자료형 허용 ..> 타입실드 해제 문법!
var 변수2 = 이름2;
//unknown 타입
var 이름3; //any와 용도는 같음 BUT 조금 더 안전함
이름3 = 13;
// let 변수3: string = 이름3; // any와 달리, 못들어오게 막아줌
//Q4
var user = 'kim';
var age2 = undefined;
var married = false;
// let 철수: unknown = [user, age, married];
var 철수 = [user, age, married];
//Q5.
var 학교 = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john',
};
학교.score[4] = false;
학교.friend = ['lee', 학교.teacher];
