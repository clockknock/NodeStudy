let fs=require("fs");
let util = require("util");

fs.readFile("01_variable.js",(err,data)=>{
   if (err){
       throw err;
   }
   console.log(data.toString())
});
async function asyncRead() {
    let rfp=util.promisify(fs.readFile);
    let p=await rfp("E:\\data\\VMware虚拟机\\itheima-file1.iso");



    console.log(p.toString());
}

asyncRead();