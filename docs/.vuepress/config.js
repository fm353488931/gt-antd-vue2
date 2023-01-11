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
      {
        title: "Button按钮",
        path: "/articles/gtButton",
      },
      {
        title: "Layout布局",
        path: "/articles/layout",
      },
      {
        title: "Navigation导航",
        path: "/articles/navigation",
      },
      {
        title: "Pagination分页",
        path: "/articles/pagination",
      },
      {
        title: "Steps步骤条",
        path: "/articles/steps",
      },
      {
        title: "Tabs标签页",
        path: "/articles/tabs",
      },
      {
        title: "Radio&Checkbox单选框&多选框",
        path: "/articles/gtRadio",
      },
      {
        title: "Switch&Slider开关&滑块",
        path: "/articles/gtSwitch",
      },
      {
        title: "Input输入框",
        path: "/articles/gtInput",
      },
      {
        title: "DatePicker日期选择器",
        path: "/articles/datePicker",
      },
      {
        title: "TimePicker时间选择器",
        path: "/articles/timePicker",
      },
      {
        title: "Selctor选择器",
        path: "/articles/gtSelect",
      },
    ],
  },
  less: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
}
