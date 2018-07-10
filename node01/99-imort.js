let crypto = require('crypto');


// md5 哈希算法
let md5 = crypto.createHash("md5");
let sha1 = crypto.createHash("sha1");
let sha256 = crypto.createHash("sha256");

// 随机数增强的hash算法
let salt = "nodeJs";
let hmac = crypto.createHmac("sha1", salt);

let data = "今晚到小树林，有事跟你商量";
hmac.update(data);
let result = hmac.digest("hex");
console.log(result);

// aes 算法
let key = "helloKitty";
let cipher = crypto.createCipheriv("aes192", key);

let encryptedResult = cipher.update(data, "utf-8", "hex");
encryptedResult += cipher.final("hex");
console.log(encryptedResult);

let encryptStr = "cff80fe48c527845075d9927f42771564f017ada8965bfb398eef451f6610e142fe3e92fceddd1cde95ccaac97b948a2";
let decipher = crypto.createDecipher("aes192", key);
let decipherResult = decipher.update(encryptStr, "hex", "utf-8");
decipherResult += decipher.final("utf-8");
console.log(decipherResult);