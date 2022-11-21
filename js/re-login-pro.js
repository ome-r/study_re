
//3초 기다려
// 그다음에 사용자 입장 찍어
//그다음에 id callback 함수 실행해.

function login(id) {
    new Promise(() => {
        setTimeout(function() {
            console.log("사용자 입장");
        }, 3000); 
    }).then(getVideo(id))
}

// 2초기다려
// id의 비디오리스트 찍어
// getdetail해 

function getVideo(id) {
    new Promise(()=> {
        setTimeout(function() {
            console.log( id + "의 비디오 리스트");
            //cb(['아바타','라라랜드']);
        }, 2000);
    }).then(getDetail(['아바타','라라랜드']))
}
// 1초기다려
// 비디오제목 찍어
// then 써서 콘솔로그 찍어
function getDetail(videos) {
    new Promise(()=> {
        setTimeout(function() {
           return videos[0];
        }, 1000);
    }).then((abata)=>{
       console.log("비디오 제목 :" + abata);
    }) 
}


login('kim');


//안돼서 다시 


// 3초 기다려
// 그다음에 사용자 입장 찍어
// 그다음에 id callback 함수 실행해.

function login(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    })
}

// 2초기다려
// id의 비디오리스트 찍어
// getdetail해 

function getVideo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(id + "의 비디오 리스트");
            resolve(['아바타', '라라랜드']);
        }, 2000);
    })
}

// 1초기다려
// 비디오제목 찍어
// then 써서 콘솔로그 찍어
function getDetail(videos) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(videos[0]);
        }, 1000);
    })
}


login('kim')
    .then((id) => {
        getVideo(id)
        .then((videos) => {
            getDetail(videos)
            .then((video) => { console.log("비디오 최종 : " + video) }
            )
        }
    )
});

