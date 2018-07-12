require("./db");

require("express-async-errors");
let config = require("./config");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let express = require("express");
let app = express();

//注册日志组件
app.use(morgan('combined'));

//注册jsonBody解析
app.use(bodyParser.json());
//给response增加success和fail方法
app.use(require("./middleware/resp_builder"));


//注册路由
app.use("/user", require("./router/user"));
app.use("/category", require("./router/category"));
app.use("/product",require("./router/product"));

app.use((err, req, resp, next) => {
    resp.fail(err.toString());
});

app.listen(config.PORT);
