// 3초 기다려
// 그다음에 사용자 입장 찍어
// 그다음에 id callback 함수 실행해.
function sleep(ms){
    return new Promise(function (resolve, reject) { //resolve == 성공시 하는 함수
        setTimeout(resolve, ms);
   });
}
//     // 수정 전
// function login(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log("사용자 입장");
//             resolve(id);
//         }, 3000);
//     })
// }

// const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

// function wait(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     })
// }

    // 수정 후
async function login(id) {
    await sleep(3000);
    console.log("사용자 입장");
    return id;
}



// 2초기다려
// id의 비디오리스트 찍어
// getdetail해 

// // 수정 전
// function getVideo(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log(id + "의 비디오 리스트");
//             resolve(['아바타', '라라랜드']);
//         }, 2000);
//     })
// }

    // 수정 후

async function getVideo(id) {
    await sleep(2000);
    console.log(id + "의 비디오 리스트");
    return (['아바타', '라라랜드']);
}


// 1초기다려
// 비디오제목 찍어
// then 써서 콘솔로그 찍어

// // 수정 전
// function getDetail(videos) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(videos[0]);
//         }, 1000);
//     })
// }

// 수정 후
async function getDetail(videos) {
    await sleep(1000);
    return videos[0];
    // console.log("비디오 최종 : " + video);
}



// // 수정 전
// login('kim')
//     .then((id) => {
//         getVideo(id)
//         .then((videos) => {
//             getDetail(videos)
//             .then((video) => { console.log("비디오 최종 : " + video) }
//             )
//         }
//     )
// });

// 수정 후
async function amuguna(){ // await은 async안에서만 쓸 수 있다.
    const id =  await login('kim');// 이거 끝나기 전까지 다음으로 넘어가지마.
    const videos = await getVideo(id);
    const video = await getDetail(videos);
    console.log("비디오 최종 : " + video);
}

amuguna();