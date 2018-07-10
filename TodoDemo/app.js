require("./db");
require("express-async-errors");
let express = require("express");
let parser = require("body-parser");
let config = require("./config");
let todoRouter = require("./router/todoRouter");

let app = express();

app.use(parser.json());

app.use("/",express.static("./static"));
app.use("/todo",todoRouter);

app.listen(config.PORT);
