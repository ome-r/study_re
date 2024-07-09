//브라우저는 js파일만 읽을 수 있음 .. 따라서 ts파일을 js로 바꿔야한다
let 회원들: string[] = ['kim', 'park']; //array는 타입을 지정해야한다.
let 값없음: null = null; //null, undefined도 가능하다.
//변수명 오른쪽에 오는 것들은 전부 타입지정 문법
let 오브젝트: { mem1: string; mem2: string } = { mem1: 'kim', mem2: 'park' }; //object 타입지정
let 회원 = 'park'; // 보통 알아서 타입을 지정해주기 때문에 생략가능! 마우스를 올려보면 나온다

//Q1.
let 이름: string = '마린';
let age: number = 25;
let 출생지: string = 'seoul';

//Q2.
let favourite: { pinktape: string } = { pinktape: 'fx' };

//Q3.
let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

//union 타입
let 회원둘: (number | string)[] = [1, '2', 3];
let 오브젝투: { a: string | number } = { a: '123' };
//any 타입 ..> 일반 js변수 >> 나중에 버그나도 잡아주지 않음!
let 이름2: any; //아무거나 >> 모든 자료형 허용 ..> 타입실드 해제 문법!
let 변수2: string = 이름2;
//unknown 타입
let 이름3: unknown; //any와 용도는 같음 BUT 조금 더 안전함
이름3 = 13;
// let 변수3: string = 이름3; // any와 달리, 못들어오게 막아줌

//Q4
let user: string = 'kim';
let age2: undefined | number = undefined;
let married: boolean = false;
// let 철수: unknown = [user, age, married];
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

//Q5.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'phil',
  friend: 'john',
};
학교.score[4] = false;
학교.friend = ['lee', 학교.teacher];
