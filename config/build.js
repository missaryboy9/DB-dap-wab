let inquirer = require("inquirer");
let parameter = process.argv[2];
let Handler = require("./project");
let returnValueSet = {};
let {
  confim: prompList,
  checkbox: singleItem,
  list: Multiitem
} = require("./projectlist.js");
inquirer
  .prompt(prompList)
  .then(answers => {
    returnValueSet = Object.assign(returnValueSet, answers);
    return !returnValueSet["Bale"];
  })
  .then(e => {
    switch (e) {
      case true:
        inquirer.prompt(Multiitem).then(e => {
          returnValueSet = Object.assign(returnValueSet, e);
          Handler(returnValueSet["singleItem"], parameter);
        });
        break;
      case false:
        inquirer.prompt(singleItem).then(e => {
          returnValueSet = Object.assign(returnValueSet, e);
          console.log("暂不支持多项目合并打包");
        });
        break;
    }
  });
