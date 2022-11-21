const fs2 = require("fs").promises; //js 옛날버전 es2015 import를 이렇게 썼다

function call(){
    let = 100;
    return let;
}

let variable = call();




fs2.writeFile("./sesac.txt",'반갑습니다')   // 이게 새로운 프라미스임. 프라미스는 알다시피 비동기로 처리되는걸 순차진행으로 바꿔서 쓰는거임.
.then(function() { // ./sesac.txt 에다가 '반갑습니다' 써 준 후에 .then()에 있는 함수 처리함.
   return fs2.readFile('./sesac.txt'); // 그래서 그 함수 안에서 readFile(------)함수를 호출함. 그 호출한 함수의 "결과값"을 [return]함 이 리턴의 결과는 밑에 있는 .then(function(data)) 에 data속으로 들어감.
}) //then은 특수함수라 결과값이 다음 then의 인자값으로 넘어간다.
.then(function(data) { // 위 return에서 받은 readfile 함수의 결과값을 data가 받아서 그걸 콘솔로그로 뿌려주어라.
    console.log( data.toString()); //파일을 다 만들면 콘솔로그를 찍는다. 
})   // 자 그리고 콘솔로그 찍는 처리가 끝날때까지 다음으로 넘어가면 안대
.then(function() {  // 자 위 처리가 다 끝났으면 아래를 실행해라. 
    
        /////////// copyFile /////////////

    /////////여기서부터 promise 안에 있는 promise임. 이렇게 해야하는 이유는 위의 writeFile 함수가 끝나야 copyFile할 수 있기 때문임
    fs2.copyFile("./sesac.txt", "./sesac2.txt")  // 새로운 promise 생성. sesac.txt를 sesac2에다 복사해라.
    .then(function () {                         // 그다음에 sesac2.txt 파일 읽은 값을 다음 .then(function(data))의 data에다가 return해줄거야.
        return fs2.readFile("./sesac2.txt");
    })
    .then(function(data) {                  // 받은 data는 sesac2.txt 안에 있는 값. 
        console.log(data, '<< sesac2.txt의 내용')

        ///////////  rename /////////////

        ///////////// 여기서부터 fileWrite promise 안의 copyFile promise 안에 있는 새로운 promise임 그것은 rename promise
        fs2.rename("./sesac2.txt", "new.txt")       // sesac2.txt를 new.txt로 이름 바꿀거야. 
            .then(function () {                     //  파일 이름 바꾼거 끝마치면 아래 함수 실행해.
                return fs2.readFile("./new.txt");   // new.txt 파일 읽어들인값을 그 다음 then(function(---)) 의 인자값에 return해라. (현재 그다음 then이 없기 때문에 꼭 return해줄 필요 없음 ) ( 하지만 다음 .then()을 만들거면 return 필요함)
        }) //return은 다음 then을 위한 것이므로 끝에는 필요하지 않다. 
    })
})



// const fs2 = require("fs").promises;

// fs2.writeFile("./sesac.txt", "반갑습니다")
// .then(function () {
//     return fs2.readFile("./sesac.txt")
//     .then(function (data) {
//         console.log(data.toString());
//         fs2.copyFile("./sesac.txt", "./sesac2.txt")
//         .then(() => {});
//         fs2.rename("./sesac2.txt", "new.txt") //then안에 있는 함수는 비동기가 되려고 한다. reject 되어서 즉 에러가 난다. 
//         .then(() => {});  // sesac2.txt 복사가 완료되지 않았는데, 이름 바꿀려고 해서 오류난거다.
//     });
// });

//async와 await 쓰기
const fs2 = require("fs").promises;

async function fileWrite(){ // 야 나 이거 앞으로 쓸거야. (정의)
    await fs2.writeFile("./sesac.txt", "반갑습니다");
    let data = await fs2.readFile("./sesac.txt"); // 함수 앞에 .then 쓴것처럼 await을 쓴다. 함수는 갔다가 돌아오므로 이렇게 사용한다.
    console.log(data.toString()); //await이 마지막에 없는이유? await을 다 해야만 다음줄로 넘어오므로, await이 있는 두줄이 다끝나고 오기 때문이다. 
}

fileWrite();

////

const fs2 = require("fs").promises;

async function fileWrite(){ // 야 나 이거 앞으로 쓸거야. (정의)
    await fs2.writeFile("./sesac.txt", "반갑습니다");
    
     //await이 마지막에 없는이유? await을 다 해야만 다음줄로 넘어오므로, await이 있는 두줄이 다끝나고 오기 때문이다. 
}

async function fileCopy(){
    await fs2.copyFile("./sesac.txt", "./sesac2.txt");
    console.log("선장님 카피 완료했습니다.");
}

async function namere(){
    await fs2.rename("./sesac2.txt", "new.txt");
    console.log("이름 바꾸기 완");
}
async function start(){
    await fileWrite();
    await fileCopy();
    await namere();
}

start();