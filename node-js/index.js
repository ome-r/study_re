// express 를 통해 웹서버 여는 코드 작성
const express = require("express");
// express로 객체 만들기 (함수처럼 사용)
const app = express(); //필요한 메소드가 app 객체에 담긴다.
const port = 8080; //보통 8000, 8080, 3000 많이 사용한다.

//ejs 모듈 설치 후에 
app.set('view engine', 'ejs'); //view engine으로 ejs템플릿 쓸 것이다. view가 모여있는 기본 디렉터리 = views

//html에서 클라이언트가 접근할 수 있는 권한을 만들어주어야한다. == 미들웨어
//미들웨어 등록은 app.use를 사용한다. /public은 가상경로, 그 다음 들어오는 인자는 express.static안에 감싸서 넣어준다. 
// app.use("/가상경로", express.static("파일이름")); 
// app.use("/public", express.static("static")); //express 안에 static메소드를 사용해 static을 등록 이때 "static"은 실제 존재하는 폴더이름을 적는다.
//static이라는 실제 존재하는 폴더에 public이라는 가상경로로 접근할 수 있도록 함. 
//src="/public/img/cat1.jpeg" (즉, ststic이 아닌 가상경로 public을 이용해 접근하게 된다.)
//그 아래 하위파일들에 이제 모두 접근이 가능하다!
//이때 편하게 하려면 가상경로도 static으로 만들면 된다. 
app.use("/static", express.static("static"));
// app.use(express.static("static")); 사용 시 바로 이미지에 접근 가능하다. 
app.use(express.urlencoded({extended: true})); //x-www-urlencoded 데이터 해석
app.use(express.json()); //클라이언트가 보낸 데이터가 json형태로 받아와질 것이다. json : 딕셔너리 형태와 비슷

// get메소드에 도메인을 제외한 주소 작성, 인자는 두개를 필요로 한다. (라우터, 함수) 이때 이 함수에는 매개변수가 필요하므로 반드시 넣는다.
app.get('/', (req, res)=> { //request 요청, response인 응답의 줄임말 req는 클라이언트 to 서버, res는 서버 to 클라이언트
    res.send("hello Express!"); //메세지를 보내는 send 메소드 사용하기, 괄호 안의 메세지를 렌더링한다. (서버가 클라이언트에게 응답으로 보내는 메세지를 보낸다)
});

// localhost:8080/test 라면 '/test'
app.get('/test', (req,res) =>{
    res.sendFile( __dirname + "/views/index.html" ); //sendfile에 들어올 경로는 무조건! 절대경로가 작성되어야한다.이때 __dirname을 쓰면 알아서 이 변수가 뒤 파일의 절대 위치를 찾아준다.
}) // __dirname : C~~~~~/index.html

//localhost:8080/ejs에 접속하게 하기
app.get('/ejs', (req,res) =>{
    res.render("index"); //render라는 메소드를 통해 원하는 view를 가져올 수 있다. 이때, view engine이 설정되어 있으므로 뒤에 확장자(.ejs)를 붙이지 않아도 찾아간다. 
})
app.get('/img', (req,res)=> {
    res.render("02index", {//render한 다음 index파일을 보여주겠다라는 의미에서, (옵션)두번째 인자를 넘겨준다면 객체(딕셔너리) 형태로 넘겨주면 된다.
        title : "index 페이지입니다😎",
        data : ["/static/img/cat1.jpeg", "/static/img/cat2.jpeg", "/static/img/cat3.png"]
    }); //이제 이 모든 데이터는 index.ejs로 넘겨주었다. 가서 활용하면 된다.
})

app.listen( port, ()=> { //listen이라는 메소드를 통해 웹서버를 연다. 이때 인저는 두개 (포트번호, 함수)
    console.log("server open :", port);
}); 
