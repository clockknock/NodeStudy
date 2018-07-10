let cheerio = require("cheerio");
let fs = require("fs");
// let http = require("http");
// let fsExtra = require("fs-extra");

fs.readFile("cheerio-example.html", (err, data) => {
    if (err) {
        throw err;
    }
    let html = data.toString();
    let $=cheerio.load(html);


    // let pearText = $(".pear").text();
    // console.log(pearText);

    let lis = $("#fruits li").toArray();
    lis.forEach(li => {
        let fruitName = $(li).text();
        console.log(fruitName)
    })

});


/*const url = "http://jandan.net/ooxx";


http.get(url, res => {
    let content=[];
   res.on("data",chunk => {
       content+=chunk;
   });
    res.on("end",()=>{
        let htmlContent = content.toString();
        let $=cheerio.load(htmlContent);
        console.log($.text());
    })
});*/
