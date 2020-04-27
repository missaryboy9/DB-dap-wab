module.exports = (e, f) => {
  let fs = require("fs");

  fs.writeFileSync("./config/transferconfig.js", `exports.name = '${e}'`);

  let exec = require("child_process").execSync;
  exec(`npm run ${f}`, { stdio: "inherit" });
};
