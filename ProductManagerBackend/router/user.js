let router = require("express").Router();
let userService = require("../service/user-service");

router.get("/", async (req, resp) => {
    console.log(req.query.username+" "+req.query.password);
     let find = await userService.find(req.query.username,req.query.password);
     resp.success(find);
});

router.post("/", async (req, resp) => {
    let regist=await userService.register(req.body);

    resp.success(regist);
});

router.delete("/:username",async (req,resp)=>{
   let del = await userService.del(req.params.username);
   resp.success(del);
});

module.exports = router;