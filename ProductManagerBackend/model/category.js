let mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "分类名称不能为空"]
    },
    created: {
        type: Date,
        default: Date.now() + 3600 * 8
    }
});

let model = mongoose.model("category", schema);
module.exports = model;

