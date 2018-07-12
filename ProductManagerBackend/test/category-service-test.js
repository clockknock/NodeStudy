require("../db");

let categoryService = require("../service/category-service");

async function testAdd() {
    let categories = [
        {name: "手机"}
    ];
    let c = await categoryService.addCategory(categories);
    console.log(c);
}

async function testFindAll() {

    let c = await categoryService.findByPage(2);
    console.log(c);
}

async function testUpdate() {
    let update = await categoryService.update("5b471d4c8e215c10e416dc77", {name: "电脑"});
    console.log(update);
}

async function testRemove() {
    let remove = await categoryService.remove("5b471d4c8e215c10e416dc77");
    console.log(remove);
}

async function testCheckExist() {
    let remove = await categoryService.checkExist("5b473f8adf2f101d64d69219");
    console.log(remove);
}

// testAdd();
// testFindAll();
// testUpdate();
// testRemove();
testCheckExist();