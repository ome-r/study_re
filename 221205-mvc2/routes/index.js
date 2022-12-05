var express = require("express"); // express 모듈 불러오기 -- router을 쓸라고 부른것
var controller = require("../controller/Cvisitor"); //controller안에 있는 Cmain을 리콰이어하겠다. 
const router = express.Router(); // 이 express안에 router를 쓰기 위해 첫줄이 필요

router.get("/", controller.visitor);
router.post("/register", controller.register); // register 버튼 연결

module.exports = router; //index.js를 어디선가 불러왔을 때 router를 내보낸다. 
// 즉 모듈로서 다른 데서 사용하고 싶다면 (호출해서 사용) 무조건 exports해줘야 한다. (이렇게 정의한 router를 내보내겠다.)