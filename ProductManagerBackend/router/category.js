let router = require("express").Router();
let categoryService = require("../service/category-service");

router.get("/", async (req, resp) => {
    let all = await categoryService.findAll(req.query.page);
    resp.success(all);
});
router.post("/", async (req, resp) => {
    let add = await categoryService.addCategory(req.body);
    resp.success(add);
});

router.put("/:id", async (req, resp) => {
    await categoryService.update(req.params.id, req.body);
    resp.success("更新成功");
});

router.delete("/:id", async (req, resp) => {
    await categoryService.remove(req.params.id);
    resp.success("删除成功");
});

module.exports = router;

