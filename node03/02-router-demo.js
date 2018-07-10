let express = require("express");
let userRouter = require("./router/user");
let orderRouter = require("./router/order");
let app = express();

//中间件-可作为过滤器
app.use((request, response, next) => {
    if(request.url.startsWith("/order")){
        response.send("order被拦截了");
    }
    next();
});

app.get("/", (req, resp) => {
    console.log(req.url);
    resp.send("root dir");
});

app.use("/user", userRouter);
app.use("/order", orderRouter);

//中间件--异常处理
app.use((err,req,resp,next)=>{
   if (err){
       resp.send(err.toString());
   }
});

app.listen(7000);