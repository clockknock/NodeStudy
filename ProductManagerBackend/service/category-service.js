let Category = require("../model/category");
let Config = require("../config");

/**
 *
 * @param category 例如{name:"商品名"}
 * @returns {Promise<void>}
 */
async function addCategory(category) {
    return await Category.create(category);
}

async function findByPage(page = 1) {
    return await Category.find().skip((page - 1) * Config.PAGE_SIZE).limit(Config.PAGE_SIZE).select("-__v")
}

async function checkExist(id) {
    console.log(id);
    let findOne =await Category.findOne({_id: id});
    if (!findOne) {
        throw Error(`id为:${id}的目录不存在`);
    }
}

async function update(id, category) {
    await   checkExist(id);
    let update = await Category.updateOne({_id: id}, category);
    if (update.n < 1) {
        throw Error("更新失败");
    }
    return update;
}

async function remove(id) {
    await checkExist(id);
    let remove = await Category.remove({_id: id});
    if (remove.n < 1) {
        throw Error("删除失败");
    }
    return remove;
}

module.exports = {
    addCategory, remove, update, findByPage , checkExist
};