module.exports = {
  title: "绿城Web组件库",
  description: "绿城Web组件库",
  base: "/",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [{ text: "首页", link: "/articles/color" }],
    sidebar: [
      {
        title: "Color 色彩-亮色模式",
        path: "/articles/color",
      },
      {
        title: "Typography 文字",
        path: "/articles/typography",
      },
      {
        title: "容器",
        path: "/articles/container",
      },
      {
        title: "投影样式",
        path: "/articles/shadowStyle",
      },
    ],
  },
  less: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
}
