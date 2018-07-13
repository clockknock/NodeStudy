let router = require("express").Router();
let userService = require("../service/user-service");

router.get("/", async (req, resp) => {
    console.log(req.query.username + " " + req.query.password);
    let find = await userService.login({username: req.query.username, password: req.query.password});
    resp.success(find);
});

router.post("/", async (req, resp) => {
    let register = await userService.register(req.body);
    resp.success(register);
});

router.delete("/:username", async (req, resp) => {
    let del = await userService.del(req.params.username);
    resp.success(del);
});

module.exports = router;