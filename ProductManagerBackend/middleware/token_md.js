let crypto = require("lxj-crypto");
let config = require("../config");
let userService = require("../service/user-service");

function isExcluded(req) {
    let exclude = [
        /.*\/user/
    ];

    // 遍历数组，看当前的url是否在其中
    let isExclude = false;
    exclude.forEach(matcher => {
        if (matcher.test(req.url)) {
            //如果匹配到了,则是不需要token的
            isExclude = true;
        }
    });
    if (req.method === "DELETE") {
        console.log("method:" + req.method);
        isExclude = false;
    }
    return isExclude;
}

module.exports = async (req, resp, next) => {
    let token;
    //1.判断url是否需要token,如果需要token(如果不需要排除,则检验token)
    if (isExcluded(req)) {
        console.log("不需要token");
        //排除的url,不需要token
        next();
    } else {
        console.log("需要token");
        token = req.get("token");
        //2.获取token,如果token不存在则报错
        if (!token) {
            throw Error("请登录!");
        }

        console.log("有token了");
        //3.还原token,对比时间戳
        let decrypt;
        try {
            decrypt = crypto.aesDecrypt(token, config.TOKEN_KEY);
        } catch (e) {
            throw Error("token有误,无法解析,请重新登录");
        }

        let userToken = JSON.parse(decrypt);
        //4.根据时间戳是否超时来报错,过期时间大于当前时间说明过期
        if (userToken.expire > Date.now()) {
            throw Error("登录已过期,请重新登录");
        }

        //5.根据用户名获取用户信息给后续中间件使用
        let user = await userService.findByUsername(userToken.username);
        req.user = user;

        next();
    }

};