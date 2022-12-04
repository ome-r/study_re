var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.get("/login", controller.login);
router.post("/form", controller.form);
// router.get("/test", controller.test);

// router.post("/postform", controller.post);

module.exports = router;