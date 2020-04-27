/**
 * 通过crypto-js实现 加解密工具
 * AES、HASH(MD5、SHA256)、base64
 *
 */
import CryptoJS from "crypto-js";
import { JSEncrypt } from "jsencrypt";
const KP = {
  key: "https://www.pactera.com/", // 秘钥 16:
  iv: "1234567812345678", // 偏移量
  publicKey: `-----BEGIN PUBLIC KEY-----
               MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2cj17qO+3UX6DiJOJnmBS1tw5
               88UOoXmQmVVYW/HJ7uD2sUAjqGKfFD+yFaJ2wX5wr4QZiSy/6acTH/+Y0PtvGgfR
               6x1pdlEyfED89KdhVVli336UEKNOxXXmPmTKNrXE4Zpc3QJQptAip4NPBauy0v8q
               p14CF5qEvwC9+7D1uQIDAQAB
               -----END PUBLIC KEY-----`
};
function getAesString(data, key, iv) {
  // 加密
  key = CryptoJS.enc.Utf8.parse(key);
  // alert(key）;
  iv = CryptoJS.enc.Utf8.parse(iv);
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(); // 返回的是base64格式的密文
}
function getDAesString(encrypted, key, iv) {
  // 解密
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8); //
}
// AES 对称秘钥加密
const aes = {
  en: data => getAesString(data, KP.key, KP.iv),
  de: data => getDAesString(data, KP.key, KP.iv),
  enKey: (data, key) => getAesString(data, getKey(key, 16), KP.iv),
  deKey: (data, key) => getDAesString(data, getKey(key, 16), KP.iv)
};
// 获取字符key
const getKey = (key, num) => {
  let keyStr = key.toString();
  if (keyStr.length > num) {
    return key.substr(0, num);
  }
  while (keyStr.length < num) {
    keyStr += "0";
  }
  console.log("keyStr", keyStr);
  return keyStr;
};
// BASE64
const base64 = {
  en: data => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data)),
  de: data => CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
};
// SHA256
const sha256 = data => {
  return CryptoJS.SHA256(data).toString();
};
// MD5
const md5 = data => {
  return CryptoJS.MD5(data).toString();
};

// base64混淆
const base64En = data => {
  // 格式：第一位脚本长度，第二位是替换的字符个数，第三位替换脚本 ，后面是替换后的base64；
  const base = base64.en(data);
  // 随机数，脚本位置1~base长度，999999999
  let randomIndex = Math.ceil(Math.random() * (base.length - 1));
  // 脚标不超过8位
  if (randomIndex.toString().length > 8) {
    randomIndex = randomIndex % 10000000;
  }
  // 随机数，添加0-5字符数
  const randomCharNum = Math.ceil(Math.random() * 5);
  // 生成随机字符串
  const random = randomCharNum.toString() + randomIndex.toString();
  const chars = new Date()
    .getTime()
    .toString(16)
    .substr(-randomCharNum, randomCharNum);
  return (
    randomIndex.toString().length +
    random +
    base.substr(0, randomIndex) +
    chars +
    base.substr(randomIndex)
  );
};

/**
 * 签名
 * @param token 身份令牌
 * @param timestamp 签名时间戳
 * @param data 签名数据
 */
const sign = (token, timestamp, data) => {
  // 签名格式： timestamp + token + data(字典升序)
  const ret = [];
  if (typeof data === "string") {
    ret.push(data);
  } else {
    for (const it in data) {
      let val = data[it];
      if (
        typeof val === "object" && //
        (!(val instanceof Array) ||
          (val.length > 0 && typeof val[0] === "object"))
      ) {
        val = JSON.stringify(val);
      }
      ret.push(it + val);
    }
    // 字典升序
    ret.sort();
  }
  const signsrc = timestamp + token + ret.join("");
  return md5(signsrc);
};

// RSA 加密
const rsaEn = data => {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(KP.publicKey);
  const result = encrypt.encrypt(data);
  return result;
};

const randomString = (len = 16) => {
  // 默认去掉了容易混淆的字符oOLl,gq,Vv,Uu,I1
  const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz234567890";
  // $chars.length
  const maxPos = 48;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};
export { aes, md5, sha256, base64, sign, base64En, rsaEn, randomString };
