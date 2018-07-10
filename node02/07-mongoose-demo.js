let mongoose = require("mongoose");
let User = require("./model/user");

// let promise = mongoose.connect("mongodb://localhost/test");
let options = {
    user: "root",
    pass: "123456",
    // dbName: "test"
    dbName: "product-manager-backend"
};
let promise = mongoose.connect("mongodb://127.0.0.1", options);

console.log(promise);

let conn = mongoose.connection;
conn.on("error", err => {
    console.log("error"+err);
});

conn.on("open", async () => {
    console.log("mongodb connect successfully!");

    // let users = await testQueryByName("赵六");

    // let result = await testUpdate({_id:"5b40724bae754b08444e9857"},{address:"深圳南山"});
    // console.log(result);

    let users = await testQueryBy({});
    console.log(users);
});

async function testInsert() {
    let arr = [
        {
            name: "张三",
            age: 23,
            address: "上海"
        },
        {
            name: "李四",
            age: 34,
            address: "北京"
        },
        {
            name: "王五",
            age: 45,
            address: "广州"
        },
        {
            name: "赵六",
            age: 56,
            address: "深圳"
        },
        {
            name: "小何",
            age: 11,
            address: "南京"
        }
    ];

    let result = User.create(arr);
    console.log(result);
}


async function testQuery() {
    let find = await User.find();
    console.log(find);
}

async function testQueryBy(query) {
    return await User.find(query);
}


async function testQueryByAddress() {
    let result = await User.find({age: {$gt: 40, $lt: 50}});
    console.log(result);
}

async function testQueryByName(name) {
    return await User.find({name: name});

}

async function testUpdate(query, update) {
    //update更新找到的第一个,updateMany更新所有
    return await User.update(query, update);
}