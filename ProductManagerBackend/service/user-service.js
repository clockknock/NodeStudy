let User = require("../model/user");
require('mongoose');
let crypto = require("lxj-crypto");
let config = require("../config");

/**
 * 登录
 * @param user
 * @returns {Promise<void>}
 */
async function login(user) {
    user.password = crypto.sha256Hmac(user.password, user.username);
    console.log(user.password);
    let find = await  User.findOne({username: user.username, password: user.password});

    if (!find) {
        throw Error("用户名或密码错误");
    }
    let tokenData = {
        username: user.username,
        expire: Date.now() + config.TOKEN_EXPIRE
    };
    return crypto.aesEncrypt(JSON.stringify(tokenData), config.TOKEN_KEY);
}

async function checkExist(username) {
    let find = await User.findOne({username: username});
    if (!find) {
        throw Error("该用户不存在!");
    }
}

/**
 * 注册
 * @param user
 * @returns {Promise<string>}
 */
async function register(user) {
    let find = await User.findOne({username: user.username});
    if (find) {
        throw Error("该用户名已被使用!");
    }

    user.password = crypto.sha256Hmac(user.password, user.username);
    user.role = 0;
    user.created = Date.now() + 3600 * 8;

    let create = await User.create(user);
    if (create){
        return "注册成功";
    } else{
        return "注册失败";
    }
}

/**
 * 删除
 * @param username
 * @returns {Promise<string>}
 */
async function del(username) {
    await checkExist(username);
    let del = await User.deleteOne({username: username});
    if (del.n < 1) {
        throw Error("删除失败");
    }
    return "删除成功";
}

async function find(username, password) {
    let user = {username:username};
    user.password = crypto.sha256Hmac(password, username);
    let findOne = await User.findOne(user).select("-password");
    if (!findOne) {
        throw Error("用户名或密码错误");
    }
    return findOne;

}

module.exports = {
    login, register, del, find
};