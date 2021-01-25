// require.context;
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const parentPath = path.join(__dirname, "../blog");
const dirs = fs.readdirSync(parentPath, "utf-8");

const config = dirs.reduce((memo, next) => {
  const files = glob
    .sync(path.join(parentPath, next, "**/*.md"))
    .map((item) => {
      let value = path.relative(path.join(parentPath, next), item);
      value = value.replace(/README/g, "");
      return value.replace(/\\/g, "/").slice(0, -3);
    })
    .filter((item) => item !== "");
  files.sort((a, b) => parseInt(a) - parseInt(b)).unshift("");
  memo[`/blog/${next}/`] = files;
  return memo;
}, {});

module.exports = config;
