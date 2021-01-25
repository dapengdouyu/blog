/*
 * @Author: zhangyapeng
 * @Date: 2020-03-01 20:33:10
 * @LastEditors: zhangyapeng
 * @LastEditTime: 2020-03-29 13:45:28
 * @Description:
 */
const nav = require("./nav");
const plugins = require("./plugin_config.js");
const sidebar = require("./sidebar");

module.exports = {
  title: "大鹏逗娱",
  description: "好好学习，好好生活",
  // build 生成的目录默认在    .vuepress目录下
  dest: "./dist",
  port: "80",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  markdown: {
    //行号
    lineNumbers: true,
  },
  plugins,
  themeConfig: {
    sidebar,
    displayAllHeaders: false,
    nav,
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },
};
