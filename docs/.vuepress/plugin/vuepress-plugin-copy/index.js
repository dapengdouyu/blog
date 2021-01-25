const { path } = require("@vuepress/shared-utils");
module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-copy",
    define() {
      return {
        selector: options.selector || 'div[class*="language-"] pre',
        copyText: options.copyText || "复制代码",
        change: options.change
      };
    },
    clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
  };
};
