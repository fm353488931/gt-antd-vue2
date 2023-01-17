<template>
  <div class="scrollbar">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <p class="black-26">滚动条</p>
    <div class="flex">
      <div>
        <p class="black-20-500">竖向滚动条示例</p>
        <div class="vertical"></div>
      </div>
      <div class="ml-50">
        <p class="black-20-500">横向滚动条示例</p>
        <div class="landscape"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
@import '../styles/variables.less';
.scrollbar {
  .vertical {
    width: 6px;
    height: 160px;
    opacity: 0.1;
    background: #000;
    border-radius: 4px;
  }
  .landscape {
    width: 160px;
    height: 6px;
    opacity: 0.1;
    background: #000;
    border-radius: 4px;
  }
}
</style>
