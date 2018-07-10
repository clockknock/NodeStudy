require("../db");
let userService = require("../service/user-service");

async function testCreate() {
    let user = {
        username: "ee",
        password: "123",
        age: 18,
    };
    let create = await userService.register(user);
    console.log(create);
}

async function testLogin() {
    let user = await userService.login({username: "ee", password: "123"});
    console.log(user);
}

async function testDelete() {
    let del = await userService.del("aa");
    console.log(del);

}

async function testFind() {
    let del = await userService.find({username:"aa",password:"123456"});
    console.log(del);

}

testFind();
// testDelete();
// testFindOne();
// testCreate();

