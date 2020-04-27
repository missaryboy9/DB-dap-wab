let projectname = require("./transferconfig");
let itemlist = require("./itemlist");
let config = {};
itemlist.forEach(element => {
  config[element.name] = {
    pages: {
      index: {
        entry: `src/project/${element.name}/main.js`,
        template: "public/index.html",
        filename: "index.html",
        chunks: [
          "runtime",
          "chunk-libs",
          "chunk-elementUI",
          "chunk-commons",
          "index"
        ]
      }
    }
  };
});
let pages = "";
if (projectname.name === "project") {
  pages = false;
} else {
  pages = config[projectname.name];
}
module.exports = pages;
