let http = require("http");
let fs = require("fs");
let path = require("path");


fs.writeFile("","aaa",(err)=>{

});
let server = http.createServer((req, resp) => {
    //初始文件夹的相对路径
    let rootPath = "static";
    //一开始设置好响应头
    resp.setHeader("content-type", "text/html;charset=utf-8");
    //避免请求图标引起问题
    if (req.url === "/favicon.ico") {
        return
    }
    //获取请求路径
    let url = req.url;
    console.log("req.url:" + url);
    if (url !== "/") {

        rootPath = path.join(rootPath, url.substr(1));

        console.log("rootPath:" + rootPath);
    }

    //读取当前想要获取文件夹的内容
    fs.readdir(rootPath, (err, files) => {
        console.log("files:" + files);
        if (err) {
            //如果有异常,直接输出异常到页面
            resp.end(err);
        }
        //创建li标签的接收者
        let lis = "";
        files.forEach((file) => {
            //判断是文件还是文件夹
            let stats = fs.statSync(rootPath);
            if (stats.isDirectory()) {
                //把来访的地址拼接到a标签中
                lis += `<li> <a href="${url.substr(1)}/${file}"> ${file}</a> </li>`;
            }else{
                //是文件则不加href
                lis += `<li>> ${file}</a> </li>`;
            }

        });

        let html = makeHtml(lis);

        resp.end(html);
    });


});

function makeHtml(content) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        a{
            background-color: #ffffff;
        }
    </style>
</head>
<body>
${content}

</body>
</html>`;
}

server.listen(8080);

