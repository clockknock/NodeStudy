let mongoose = require("mongoose");

let schema = mongoose.Schema({
    content: {
        type:String,
        required:[true,"content必须填写"]
    },
    isDone: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

let model = mongoose.model("todo", schema);

module.exports = model;