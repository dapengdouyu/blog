/*
 * @Author: zhangyapeng
 * @Date: 2020-03-01 20:45:40
 * @LastEditors: zhangyapeng
 * @LastEditTime: 2020-03-27 14:17:43
 * @Description:
 *
 */
const preName = "blog";
module.exports = [
  {
    text: "前端基础",
    items: [{ text: "js基础", link: `/${preName}/javascript/` }],
  },
  {
    text: "前端架构",
    items: [
      { text: "node", link: `/${preName}/node/` },
      { text: "vue", link: `/${preName}/vue/` },
      { text: "react", link: `/${preName}/react/` },
      { text: "webpack", link: `/${preName}/webpack/` },
      { text: "rollup", link: `/${preName}/rollup/` },
      { text: "typescript", link: `/${preName}/typescript/` },
    ],
  },
  {
    text: "生活琐事",
    link: `/${preName}/life/`,
  },
  {
    text: "工具箱",
    items: [
      {
        text: "在线编辑",
        items: [{ text: "图片压缩", link: "https://tinypng.com/" }],
      },
      {
        text: "在线服务",
        items: [
          { text: "阿里云", link: "https://www.aliyun.com/" },
          { text: "腾讯云", link: "https://cloud.tencent.com/" },
        ],
      },
      {
        text: "博客指南",
        items: [
          { text: "掘金", link: "https://juejin.im/" },
          { text: "CSDN", link: "https://blog.csdn.net/" },
        ],
      },
      {
        text: "ssr推荐网址",
        items: [
          {
            text: "软件",
            link: "https://github.com/mayunbaba2/SSTap-beta-setup",
          },
          { text: "网址", link: "https://ageneo.org/" },
        ],
      },
    ],
  },
  {
    text: "友链",
    items: [{ text: "Grace", link: "http://gracekang.site/" }],
  },
];
