<template>
  <div class="navigation">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <p class="black-26 mb-20">1、页头</p>
      <div>通栏页头</div>
      <Breadcrumb title="页面标题" class="mb-60" />
      <div>页头带操作</div>
      <Breadcrumb title="页面标题" class="mb-60">
        <template #right>
          <a-space>
            <a-button>次按钮</a-button>
            <a-button type="primary">主按钮</a-button>
          </a-space>
        </template>
      </Breadcrumb>
      <div>页头带返回</div>
      <Breadcrumb title="页面标题" back class="mb-60" />
    </div>
    <div>
      <p class="black-26 mb-20">2、导航菜单</p>
      <p class="black-24 mb-20">侧边导航</p>
      <div class="flex">
        <a-menu style="width: 180px; margin-right: 40px" :default-selected-keys="['1']" :open-keys.sync="openKeys" mode="inline" @click="handleClick">
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title"><a-icon type="mail" /><span>一级菜单</span></span>
            <a-menu-item key="1"> 二级菜单 </a-menu-item>
            <a-menu-item key="2"> 二级菜单 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2" @titleClick="titleClick">
            <span slot="title"><a-icon type="appstore" /><span>一级菜单</span></span>
            <a-menu-item key="5"> 二级菜单 </a-menu-item>
            <a-menu-item key="6"> 二级菜单 </a-menu-item>
            <a-sub-menu key="sub3" title="二级菜单">
              <a-menu-item key="7"> 三级菜单 </a-menu-item>
              <a-menu-item key="8"> 三级菜单 </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="setting" /><span>一级菜单</span></span>
            <a-menu-item key="9"> 二级菜单 </a-menu-item>
            <a-menu-item key="10"> 二级菜单 </a-menu-item>
            <a-menu-item key="11"> 二级菜单 </a-menu-item>
          </a-sub-menu>
        </a-menu>
        <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" :inline-collapsed="true">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="5"> Option 5 </a-menu-item>
            <a-menu-item key="6"> Option 6 </a-menu-item>
            <a-menu-item key="7"> Option 7 </a-menu-item>
            <a-menu-item key="8"> Option 8 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
            <a-menu-item key="9"> Option 9 </a-menu-item>
            <a-menu-item key="10"> Option 10 </a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11"> Option 11 </a-menu-item>
              <a-menu-item key="12"> Option 12 </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    }
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val)
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e)
    },
    titleClick(e) {
      console.log("titleClick", e)
    },
  },
}
</script>

<style scoped lang="less">
@import "../styles/variables.less";
</style>
