let router = require("express").Router();

router.post("/login",(req,resp)=>{
   let a = b.c;
   resp.send("这是login接口");
});

router.post("/register",(req,resp)=>{
   resp.send("这是register的接口")
});

module.exports=router;