let role_permissions = [
    {
        role: 0, //商家用户
        permissions: [
            /.*\/product/,
            /.*\/order/,
            /.*\/category/,
        ]
    },
    {
        role: 100, //超级管理员
        permissions: [
            /.*/
        ]
    }
];


module.exports = (req, resp, next) => {
    if(req.user){
        //取出user的role，然后遍历数组，判断对应的role的权限是否包含当前请求的url
        let isLetGo = false;
        role_permissions.forEach( obj=>{
            if(req.user.role === obj.role){
                // 则遍历当前obj的permissions，看看是否能够访问req.url
                obj.permissions.forEach( p=>{
                    if(p.test(req.url)){
                        //说明能够访问req.url
                        isLetGo = true;
                    }
                });
            }
        } );

        // 当循环结束后，如果isLetGo还是false，说明没有权限
        if(!isLetGo){
            throw Error("当前用户权限不足")
        }
    }

    next();
};