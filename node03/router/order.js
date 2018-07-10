let router = require("express").Router();

router.get("/list",(req ,resp)=>{
    resp.send("获取订单接口");
});

router.post("/create",(req ,resp)=>{
   resp.send("创建订单接口");
});

module.exports =router;