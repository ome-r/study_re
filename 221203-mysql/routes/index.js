var express = require("express"); // express 모듈 불러오기 -- router을 쓸라고 부른것
var controller = require("../controller/Cuser"); //상대주소 controller안에 있는 Cmain을 리콰이어하겠다. 
const router = express.Router(); // 이 express안에 router를 쓰기 위해 첫줄이 필요

router.get("/", controller.user); //기본 라우터는 /user 

router.post("/register", controller.register); // 등록 버튼 연결
//여기서는 localhost:8000/user/register 로 접속해야 한다. 
// 컨트롤러에 함수를 만들지 않으면 새로운 라우터를 만들면 오류생김 router.post("/register", controller.register);  

router.get("/login", controller.login); // 로그인 페이지로 넘어가기, 로그인 함수 만들기 

router.delete("/delete",controller.delete); //삭제하기 
 
router.post("/profile", controller.profile);  //axios

router.post("/profileView", controller.profileView); //form 

router.patch("/profile/edit", controller.profileEdit); //Edit 

// router.delete("/profile/edit", controller.profileDelete); //delete 

// router.patch("/update", controller.update_visitor); // 컨트롤러에 있는 함수와 연결 

module.exports = router;