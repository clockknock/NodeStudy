let crypto = require("crypto");

//提取摘要
const salt="hello";
let msg="这是一条需要提取摘要的信息";
let hmac = crypto.createHmac("sha256",salt);
hmac.update(msg);
let result = hmac.digest("hex");

console.log(`提取的摘要:${result}`);

//对称加密
let msgToCipher="这是一条需要加密的信息";
let key ="useThisAsKey";
let cipher = crypto.createCipher("aes192",key);
let encryptedResult = cipher.update(msgToCipher,"utf-8","hex");
//返回任何剩余的加密内容,传入outputEncoding的值
encryptedResult+=cipher.final("hex");
console.log(`加密后的信息:${encryptedResult}`);

let decipher = crypto.createDecipher("aes192",key);
let decryptedResult = decipher.update(encryptedResult,"hex","utf-8");
decryptedResult+=decipher.final("utf-8");
console.log(`解密后的信息:${decryptedResult}`);

