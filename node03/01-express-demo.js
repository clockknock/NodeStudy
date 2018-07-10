let express = require("express");
let app = express();

app.listen(7000);

app.get("/",(req,resp)=>{
    resp.send("Hello Express");

});

//?代表:有吗?有or没有(一个字符或没有字符)
/*app.get("/ab?cd",(req,resp)=>{
    resp.send("/ab?cd:"+req.url);

});*/

//+代表:至少有一个字符
app.get("/ab+cd",(req,resp)=>{
    resp.send("/ab+cd:"+req.url);

});

//*代表:任意匹配字符
/*app.get("/ab*cd*",(req,resp)=>{
    resp.send("/ab*cd:"+req.url);

});*/
