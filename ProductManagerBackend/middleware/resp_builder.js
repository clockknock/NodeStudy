module.exports=(req, resp, next) => {
    resp.success = (data) => {
        resp.send({
            code: 0,
            data:data,
            msg: "操作成功"
        })
    };
    resp.fail=(msg)=>{
        resp.send({
            code:-1,
            msg
        });
    };
    next();
}