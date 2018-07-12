require("../db");
let userService = require("../service/user-service");

async function testCreate() {
    let user = {
        username: "a4",
        password: "123",
        age: 18
    };
    let create = await userService.register(user);
    console.log(create);
}

async function testLogin() {
    let user = await userService.login({username: "gg", password: "123"});
    console.log(user);
}

async function testDelete() {
    let del = await userService.del("aa");
    console.log(del);

}

async function testFind() {
    let del = await userService.find("a4","123");
    console.log(del);

}

// testFind();
// testDelete();
// testFindOne();
// testCreate();
testFind();