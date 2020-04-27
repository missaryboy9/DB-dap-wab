let itemlist = require("./itemlist");
module.exports = {
  confim: {
    type: "confirm",
    message: "是否多项目打包？",
    name: "Bale",
    prefix: "分布式管理系统"
  },
  list: {
    type: "list",
    message: "请选择打包项目",
    name: "singleItem",
    choices: itemlist
  },
  checkbox: {
    type: "checkbox",
    message: "请选择多项目",
    name: "multiitem",
    choices: itemlist,
    default: ["projectA"],
    transformer: e => {}
  }
};
