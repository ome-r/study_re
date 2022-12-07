// const express = require("express");
// const user = require("../controller/Cuser");
// const router = express.Router();

// router.get("/", user.index);

// router.get("/signup", user.signup);
// router.post("/signup", user.post_signup);

// router.get("/signin", user.signin);
// router.post("/signin", user.post_signin);

// router.post("/profile", user.profile);
// router.patch("/profile/edit", user.profile_edit);
// router.delete("/profile/delete", user.profile_delete);

// module.exports = router;

var express = require("express"); // express 모듈 불러오기 -- router을 쓸라고 부른것
var controller = require("../controller/Cvisitor"); //상대주소 controller안에 있는 Cmain을 리콰이어하겠다. 
const router = express.Router(); // 이 express안에 router를 쓰기 위해 첫줄이 필요

router.get("/", controller.visitor); //localhost:8000/visitor 로 접속해야 한다. 
router.post("/register", controller.register); // 버튼 연결
//여기서는 localhost:8000/visitor/register 로 접속해야 한다. 
// 컨트롤러에 함수를 만들지 않으면 새로운 라우터를 만들면 오류생김 router.post("/register", controller.register); // 버튼 연결
router.delete("/delete",controller.delete);
//여기서는 localhost:8000/visitor/delete

module.exports = router; //index.js를 어디선가 불러왔을 때 router를 내보낸다.