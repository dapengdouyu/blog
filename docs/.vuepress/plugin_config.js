/*
 * @Author: zhangyapeng
 * @Date: 2020-03-28 14:16:57
 * @LastEditors: zhangyapeng
 * @LastEditTime: 2020-03-29 11:53:57
 * @Description:
 */

const copy = require("./plugin/vuepress-plugin-copy/index");
const live2d = require("./plugin/vuepress-plugin-helper-live2d/index");
const audioConfig = require("./audioConfig");
module.exports = [
  "@vuepress/back-to-top",
  copy,
  live2d,
  ["@vuepress-reco/vuepress-plugin-bgm-player", audioConfig],
];
