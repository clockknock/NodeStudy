let http = require("http");
let cheerio = require("cheerio");

const baseUrl="http://mongoosejs.com";
const url =baseUrl+ "/docs/";

http.get(url, res => {
    let content = "";
    res.on("data", chunk => {
        content += chunk.toString();
    });
    res.on("end", () => {
        let $ = cheerio.load(content);
        //#menu > div > ul > li:nth-child(4) > a
        let aTags = $("#menu div ul li a").toArray();
        let hrefArr=[];
        aTags.forEach((a)=>{
            hrefArr.push(baseUrl+$(a).attr("href"));
        });
        console.log(hrefArr);
        console.log("end");
    })
});