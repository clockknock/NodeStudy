'use strict';
let builder = (req, res, next) => {
    /**
     * 返回成功信息
     * @param data
     */
    res.success = (data) => {
        res.send({
            code: 0,
            data,
            msg: "操作成功"
        })
    };
    /**
     * 返回失败信息
     * @param msg
     */
    res.fail = (msg) => {
        res.send({
            code: -1,
            msg
        });
    };
    next();
};
module.exports = builder;