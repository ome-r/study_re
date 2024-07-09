// var express = require("express");
// // var controller = require("../controller/");
// const router = express.Router();

// // //서버측 응답사용 
// // app.get("/set", (req,res)=>{ //cookie사용 -- res객체를 사용해서 쿠키라는 메소드를 사용한 것 res는 서버가 클라이언트에게 보내는 응답 
// //     // res.cookie("key", "value", {옵션객체}) //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 
// //     res.cookie("test", "1", option); //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 (만료기간 등)
// //     res.send("쿠키 생성 성공!");
// // });

// // //클라이언트에서 저장된 객체 사용 
// // app.get("/get", (req,res)=>{ //서버에서 쿠키를 가져올 때는?? 
// //     console.log(req.cookies); // 클라이언트에 쿠키가 저장되어 있으므로 (브라우저에 저장) req 객체를 통해서 쿠키를 가져올 수 있다. 
// //     console.log(req.cookies.test); 
// //     res.send(req.cookies);  
// // });

// router.get("/set", (req,res)=>{ //cookie사용 -- res객체를 사용해서 쿠키라는 메소드를 사용한 것 res는 서버가 클라이언트에게 보내는 응답 
//     // res.cookie("key", "value", {옵션객체}) //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 
//     res.cookie("test", "1", option); //인자 세개를 보내야 한다. 1. 이름 2. 값 3. 옵션객체 (만료기간 등)
//     res.send("쿠키 생성 성공!");
// });

// router.get("/get", (req,res)=>{ //서버에서 쿠키를 가져올 때는?? 
//     console.log(req.cookies); // 클라이언트에 쿠키가 저장되어 있으므로 (브라우저에 저장) req 객체를 통해서 쿠키를 가져올 수 있다. 
//     console.log(req.cookies.test); 
//     res.send(req.cookies);  
// });

// module.exports = router;