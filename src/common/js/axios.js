/**
 * axios.js提供request请求封装
 * 包括 get、post、delete、put、download等方式
 *
 */
import axios from "axios";
// import store from '@/vuex/store'
import { base64, sign, rsaEn, aes, randomString } from "./crypto";
import { Message } from "element-ui";
// 后续vuex处理
let store = {
  getters: {
    serviceHost: "/api"
  },
  state: {
    token: ""
  }
};
const ajax = axios.create({
  baseURL: store.getters.serviceHost, // url前缀
  timeout: 10000 // 超时毫秒数
  // withCredentials: true // 携带认证信息cookie
  // headers: { // 浏览器不加载缓存
  //   'Cache-Control': 'no-cache'
  // }
});

// 添加请求拦截器
ajax.interceptors.request.use(
  function(config) {
    // 在发送请求之前做某事
    const ticket = sessionStorage.getItem("SUM-TICKET");
    if (ticket) {
      config.headers["SUM-TICKET"] = ticket;
    }
    return config;
  },
  function(error) {
    // 请求错误时做些事
    return Promise.reject(error);
  }
);
// 返回状态判断(添加响应拦截器)
ajax.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
/**
 * get方式请求，url传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const get = (url, params, level) =>
  ajax(getConfig(url, "get", true, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));
/**
 * post方式请求 json方式传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const postJson = (url, params, level) =>
  ajax(getConfig(url, "post", true, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));
/**
 * post方式请求 表单传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const post = (url, params, level) =>
  ajax(getConfig(url, "post", false, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));
/**
 * delete方式请求 url传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const del = (url, params, level) =>
  ajax(getConfig(url, "delete", true, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));
/**
 * put方式请求 json传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const putJson = (url, params, level) =>
  ajax(getConfig(url, "put", true, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));
/**
 * put方式请求 表单传参
 * @param url 请求url
 * @param params 参数
 * @param level  0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const put = (url, params, level) =>
  ajax(getConfig(url, "put", false, params, level))
    .then(res => successback(res))
    .catch(error => errback(error));

/**
 * 下载 url传参
 * @param url 请求url
 * @param params 参数
 */
const download = (url, params) => {
  return new Promise((resolve, reject) => {
    try {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      const ps = param2String(params);
      if (url.indexOf("?") !== -1) {
        url += "&" + ps;
      } else {
        if (ps.indexOf("=") !== -1) {
          url += "?" + ps;
        }
      }
      iframe.onload = function() {
        // TODO 这下载不调用问题
        document.body.removeChild(iframe);
      };
      if (url.indexOf("http") !== 0) {
        iframe.src = store.getters.serviceHost + url;
      } else {
        iframe.src = url;
      }
      setTimeout(() => {
        resolve("ok");
      }, 1000);
      window.addEventListener("message", function(error) {
        const res = JSON.parse(error.data);
        if (
          res &&
          typeof res === "object" &&
          "code" in res &&
          res.code !== 20000
        ) {
          reject(res);
        }
      });
      document.body.appendChild(iframe);
    } catch (e) {
      reject({
        data: "error",
        code: -1
      });
    }
  });
};

// 参数转换
const param2String = data => {
  if (typeof data === "string") {
    return data;
  }
  let ret = "";
  for (const it in data) {
    let val = data[it];
    if (
      typeof val === "object" && //
      (!(val instanceof Array) ||
        (val.length > 0 && typeof val[0] === "object"))
    ) {
      val = JSON.stringify(val);
    }
    ret += it + "=" + encodeURIComponent(val) + "&";
  }
  if (ret.length > 0) {
    ret = ret.substring(0, ret.length - 1);
  }
  return ret;
};

// 错误回调函数
const errback = error => {
  if ("code" in error) {
    // 未登录
    if (error.code === 30001) {
      sessionStorage.clear();
      window.location.href = "/";
      return;
    }
    return Promise.reject(error);
  }
  // 网络异常,或链接超时
  Message({
    message: "网络异常了!",
    type: "error"
  });
  return Promise.reject({
    data: error.message
  });
};
// 成功回调函数
const successback = res => {
  if (res.status === 200 && res.data.code === 20001) {
    const urls = res.data.data.split(",");
    location.href = urls[1];
    return;
  }
  if (res.status === 200 && res.data.code !== 20000 && res.data.code) {
    const errMsg = {
      "30002": "对不起无权限",
      "30003": "验签失败"
    };
    const msg = errMsg[res.data.code];
    if (msg) {
      Message({
        message: errMsg[res.data.code],
        type: "error"
      });
    }
    return Promise.reject(res.data);
  }
  return res.data;
};

/**
 * @param url 请求url
 * @param method get,post,put,delete
 * @param isjson 是否json提交参数
 * @param params 参数
 * @param level 0:无，1：base64混淆，2: 签名（时间戳），3：签名（时间戳）加密RSA； 默认0
 */
const getConfig = (url, method, isjson, params, level = 0) => {
  const config_ = {
    url,
    method,
    // params, data,
    headers: {
      level
    }
  };
  // 0 无，1 base64混淆，2 签名， 3 签名加密
  if (level === 1) {
    // base64混淆
    // params = {encrypt: base64.en(JSON.stringify(params))};
    const data_ = randomString(6) + base64.en(JSON.stringify(params));
    params = {};
    params["cred"] = data_;
    // config_.headers['encrypt'] = base64En(JSON.stringify(params));
  } else if (level === 2) {
    // 签名
    // 时间戳
    const timestamp = new Date().getTime();
    // 获取token
    let token = store.state.token;
    if (!token) {
      token = JSON.parse(sessionStorage.getItem("user")).token;
      store.state.token = token;
    }
    // 签名串
    const signstr = sign(token, timestamp, params);
    config_.headers = {
      level,
      timestamp,
      signstr
    };
  } else if (level === 3) {
    // 签名加密
    // 1、获取时间戳
    const timestamp = new Date().getTime();
    // 2、RSA加密时间戳
    const rsaPublicKey = rsaEn(timestamp.toString());
    // 3、AES加密参数（key：时间戳）
    const encrypt = aes.enKey(JSON.stringify(params), timestamp);
    // 获取token
    let token = store.state.token;
    if (!token) {
      token = JSON.parse(sessionStorage.getItem("user")).token;
      store.state.token = token;
    }
    // 4、签名：加密时间戳 + token + 加密串
    const signstr = sign(token, rsaPublicKey, encrypt);
    // 5、加密时间戳、加密串、签名放入head
    config_.headers["encrypt"] = encrypt;
    config_.headers["timestamp"] = rsaPublicKey;
    config_.headers["signstr"] = signstr;
    params = {};
  }
  // 表单提交参数
  if (!isjson) {
    config_.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config_.responseType = "text";
    config_.transformRequest = [
      function(data) {
        return param2String(data);
      }
    ];
  }
  // 设置参数
  /**
   * @params 是添加到请求的链接中适用于get请求
   * @data 是添加到请求体中的 适用于相关请求
   */
  if (
    method in
    {
      get: true
    }
  ) {
    config_.params = params;
  } else if (
    method in
    {
      post: true,
      put: true,
      delete: true
    }
  ) {
    config_.data = params;
  }
  return config_;
};

// 统一方法输出口
export { ajax, get, download, postJson, post, del, putJson, put };
