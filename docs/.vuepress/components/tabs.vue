<template>
  <div class="tabs">
    <h1 class="black-36-600">组件类型</h1>
    <p class="black-26">选项过多：</p>
    <div>
      <p>样式一：</p>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render> Content of Tab Pane 2 </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
      </a-tabs>
    </div>
    <div class="mt-40">
      <p>样式二：</p>
      <a-tabs type="card" default-active-key="1">
        <a-tab-pane key="1" tab="选项卡"> Content of Tab Pane 1 </a-tab-pane>
        <a-tab-pane key="2" tab="选项卡"> Content of Tab Pane 2 </a-tab-pane>
        <a-tab-pane key="3" tab="选项卡"> Content of Tab Pane 3 </a-tab-pane>
      </a-tabs>
    </div>
    <div class="mt-40">
      <p>样式三(使用 radio 代替 tabs 的使用)：</p>
      <a-radio-group v-model="size" button-style="solid">
        <a-radio-button value="small">Small</a-radio-button>
        <a-radio-button value="default">Default</a-radio-button>
        <a-radio-button value="large">Large</a-radio-button>
      </a-radio-group>
    </div>
    <div class="mt-40">
      <p class="black-26">包含自定义排序/无效项/新增：</p>
      <a-tabs type="card" default-active-key="1" :activeKey="activeKey" @tabClick="handleTabClick">
        <a-tab-pane v-for="item in tabsList" :key="item.key" :tab="item.tab">
          {{ item.content }}
        </a-tab-pane>
        <a-tab-pane key="add" tab="Add"> </a-tab-pane>
      </a-tabs>
    </div>
    <div class="mt-40">
      <p class="black-26">选项过多：</p>
      <a-tabs type="card" default-active-key="1" tab-position="top" :style="{ height: '200px' }">
        <a-tab-pane v-for="i in 10" :key="`${i}`" :tab="`Tab ${i}`"> Content of tab {{ i }} </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: "small",
      tabsList: [{ key: "1", tab: "Tab 1", content: "Tab1 Content" }],
      activeKey: "1",
    }
  },
  methods: {
    handleTabClick(key) {
      if (key === "add") {
        this.tabsList.push({
          key: `${this.tabsList.length + 1}`,
          tab: `Tab ${this.tabsList.length + 1}`,
          content: `Tab ${this.tabsList.length + 1} Content`,
        })
      } else {
        this.activeKey = key
      }
    },
  },
}
</script>
<style lang="less" scoped></style>
