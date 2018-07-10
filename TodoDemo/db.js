let mongoose = require("mongoose");
let config = require("./config");

let options = {
    dbName: config.DB,
    poolSize: 10,
    useNewUrlParser: true
};
mongoose.connect(config.DB_URL, options);

let db = mongoose.connection;

db.on("err", err => {
    console.log("连接出错了:" + err.toString());
});

db.once("open", () => {
    console.log("连接成功");
});