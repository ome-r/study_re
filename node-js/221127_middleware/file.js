const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8000;

app.use("/uploads", express.static("uploads"));

app.set("view engine", "ejs"); //읽어오는 리소스 파일을 ejs로 적용을 시켜야만 웹에서 인식한다. 웹 브라우저에다가 인식 : 이 화면 엔진 자체가 ejs로 인식되고 있어요 라는 의미. 브라우저는 그 set에 맞게 모양을 불러오게 된다.
app.use(express.urlencoded({extended: true})); //url을 암호화하는 부분이다. 복호화는 엔진에서 자동으로 처리해줄 것인데, url 형태는 암호화해서 받아온다.
app.use(express.json()); //app이라고 하는 애한테 알아먹게 하기 위해 json형식으로 적용해주겠다. express가 알아먹을 수 있는 형태로 인식 (서버에다가 알려주는 것)
// const upload = multer({
//     dest: "uploads/"
// });
const upload = multer({ //멀터에 대한 정의를 하겠다. 
    storage: multer.diskStorage({ // 저장소를 생성하겠다. 
        destination(req,file,done){ // 경로는 요청단자에 파일을 담아서 (아까 보내준 userfile이라고 하는 파일) 생성할 것입니다
            done( null, 'uploads/'); // 업로드스에 
        },
        filename(req,file,done){ // 이때 파일 이름은 이렇게 지정하겠습니다 
            console.log( "filename : ",  req.body ); // 우선 파일이름을 콘솔에 찍습니다 
            const ext = path.extname(file.originalname); // 경로에 대한 이름 = 오리지널이름을 가져오겠다 
            // const filename = req.body.name + ext; // req.body에 있는 이름 + 파일 속성(확장자)를 추가해서 생성하겠다. 
            const filename = req.body.id + ext; //id로 파일이름 저장 
            done( null, filename );  
        }
    })
});


// 35.실습
// form을 렌더링 해서 회원가입 폼을 띄워준다. 
app.get("/form", (req,res) => {
    res.render("form");
});

app.post("/upload-form", upload.single("userfile"), (req,res) => {
    // console.log( req.file ); //req.file : 파일업로드 성공 결과 (파일정보)
    // console.log( "body : ", req.body ); //req.body : title 데이터 정보 확인 가능 
    // res.send( req.body.id + req.file.filename);
    res.render("formre", { path: req.file.path } ); // 클라이언트에서 보낸 file이 여기 일단 담겼고 , {path 이 안에 경로가 또 담기고}, 그 다음 formre로 이 path를 넘겨준다 
}); //formre에서 이미지를 띄워주고 있다!

// 36. 동적 폼 실습
app.get("/form2", (req,res) => {
    res.render("form2");
});
app.post("/form2", upload.single("userfile"), (req,res) => {
    res.send( { path: req.file.path}); //path를 여기서 프론트로 다시 넘길 것이다. 이때 path는 위에서처럼 이미지 경로를 의미한다.
})

//
app.get("/file", (req,res) => {
    res.render("file");
});
app.post("/upload-single", upload.single("userfile"), (req,res) => { //upload라는 미들웨어를 탄다. 이때 multer single방식이다 (동일한 파일을 공유하겠다는 의미)
    console.log( req.file ); // file 자체를 가져온다.
    console.log( req.body ); // ejs의 내용을 배열로 name, name2 가져온다. 
    res.send( "Upload Complete" );
});
app.post("/upload-array", upload.array("userfile"), (req,res) => {
    console.log( req.files ); //array이므로 리스트식으로 담겨져 오기때문에 files 
    console.log( req.body );
    res.send( "Upload Complete" );
});
app.post("/upload-fields", upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});

// 미들웨어 처리를 안 한 거 (next () 처리방식만 보라고)
// 순서대로 사용하고 싶다면, next()는 무조건 넣어야 한다. 
app.get("/", test, test2, (req,res) => {
    console.log( "req.name : ", req.name);
    console.log("Hello");
    res.send("Hello");
});
function test(req, res, next) {
    req.name = "12345";
    console.log( req.query );
    console.log("test 함수입니다.");
    next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}
function test2(req,res,next) {
    console.log("test2 함수입니다.");
    next();
}
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});