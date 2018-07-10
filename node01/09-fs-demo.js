let fs = require("fs");
let path = require("path");

// fs.readFile("E:\\data\\VMware虚拟机\\itheima-file1.iso",(error)=>{
//     console.log(error)
// });
//
// let arr =["a","b","c","d"];
//
// arr.forEach((value, index)=>{
//     console.log(value+"   "+index)
// })

fs.readdir("static",(err,data)=>{
   if (err){
       console.log(err);
       return;
   }
   data.forEach((file)=>{
       // let fileName = path.join("static",file);


   })
});