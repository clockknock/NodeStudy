let EventEmitter = require("events");
class MyEventEmitter extends EventEmitter{}

const myEmitter= new MyEventEmitter();

//设置监听
myEmitter.on("eventTrigger",(msg)=>{
    console.log(msg);
});

//弄一个定时任务假装延时任务触发一下监听
setTimeout(()=>{
    let msg={code:200,info:"响应成功了"};
    myEmitter.emit("eventTrigger",msg);
},2000);