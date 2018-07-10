let router = require("express").Router();
let Todo = require("../model/todo");
router.post("/", async (req, resp) => {
    let result = await Todo.create(req.body);
    resp.send(result.toString());
});

router.delete("/", (req, resp) => {
    resp.send("delete:" + req.body);
});

router.put("/", (req, resp) => {
    let todo = req.body;
    console.log(todo);
    resp.json({msg: "拿到了"});
});

router.get("/", async (req, resp) => {
    let todos = await Todo.find();
    resp.send(JSON.stringify(todos));
});

module.exports = router;