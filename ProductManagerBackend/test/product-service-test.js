require("../db");

let productService = require("../service/product-service");

async function testAdd() {
    let products=
        {
            name:"小米8",
            price: "33.0",
            stock: 1000,
            description: "小米手机",
            category: "5b473f8adf2f101d64d69119",
        }
    ;
    let c=await productService.addProduct(products);
    console.log(c);
}

async function testFindAll() {
    let c=await productService.findByPage(2);
    console.log(c);
}

async function testUpdate() {
    let update = await productService.update("5b4742cb1adc682ec8b00582",{description:"这是一个红米5啊红米5"});
    console.log(update);
    await testFindById();
}

async function testRemove() {
    let remove = await productService.remove("5b473fc86b869326d4371f63");
    console.log(remove);
}

async function testFindById() {
    let find = await productService.findById("5b4742cb1adc682ec8b00582");
    console.log(find);
}


// testAdd();
// testFindAll();
//  testUpdate();
// testFindById();
// testRemove();