let Product = require("../model/product");
let Config = require("../config");
let categoryService = require("./category-service");

/**
 *
 * @returns {Promise<void>}
 * @param product
 */
async function addProduct(product) {
    await categoryService.checkExist(product.category);

    return await Product.create(product);
}

async function findByPage(page = 1) {
    return await Product.find().skip((page - 1) * Config.PAGE_SIZE).limit(Config.PAGE_SIZE).select("-__v")
}

async function checkExist(id) {
    let findOne = await Product.findOne({_id: id});
    if (!findOne) {
        throw Error(`id为:${id}的商品不存在`);
    }
}

async function update(id, product) {
    await   checkExist(id);
    let update = await Product.updateOne({_id: id}, product);
    if (update.n < 1) {
        throw Error("更新失败");
    }
    return update;
}

async function findById(id) {
    return await Product.findById(id);

}

async function remove(id) {
    await checkExist(id);
    let remove = await Product.remove({_id: id});
    if (remove.n < 1) {
        throw Error("删除失败");
    }
    return remove;
}

module.exports = {
    addProduct, remove, update, findByPage,findById
};