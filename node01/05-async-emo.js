let fs = require("fs");

fs.writeFile("./a.json", JSON.stringify({name: "zs", age: 13}).toString(), function (error) {
    if (error != null) {

        console.log(`出错了${error}`);
    }

    console.log("写完了");
});