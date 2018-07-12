let mongoose = require("mongoose");
let schema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "用户名不能为空"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "密码不能为空"]
    },
    age: {
        type: Number,
        min: [12, "年龄不能小于12岁"],
        max: [120, "年龄不能大于120岁,吧?"],
    },
    role: {
        type: Number,
        default: 0
    },
    created:{
        type:Date,
        default:Date.now()
    }
});
// schema.plugin(timeZone);

let model = mongoose.model("users", schema);
module.exports = model;