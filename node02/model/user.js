let mongoose = require("mongoose");
let schema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    fav: [String]
});

let model = mongoose.model("users", schema);

module.exports = model;
