let mongoose = require("mongoose");
let config = require("./config");

mongoose.connect(config.DB_URL, config.DB_CONFIG);

let db = mongoose.connection;

db.on("err", err => {
    console.log("连接出错了:" + err.toString());
});

db.once("open", () => {
    console.log("连接成功");
});