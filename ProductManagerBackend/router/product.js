let router = require("express").Router();
let productService = require("../service/product-service");

router.get("/", async (req, resp) => {
    let all = await productService.findByPage(req.query.page);
    resp.success(all);
});
router.post("/", async (req, resp) => {
    let add = await productService.addProduct(req.body);
    resp.success(add);
});

router.put("/:id", async (req, resp) => {
    await productService.update(req.params.id, req.body);
    resp.success("更新成功");
});

router.delete("/:id", async (req, resp) => {
    await productService.remove(req.params.id);
    resp.success("删除成功");
});

module.exports = router;

