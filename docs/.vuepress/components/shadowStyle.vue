<template>
  <div class="shadowStyle">
    <h1 class="black-26-600 mb-10">投影</h1>
    <div class="flex">
      <div class="item">
        <div class="item_block"></div>
        <div class="gray26-16-500">投影</div>
      </div>
      <div class="item">
        <div class="item_block"></div>
        <div class="gray26-16-500">小卡片投影</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../styles/variables.less";
.shadowStyle {
  .item {
    margin-right: 80px;
    &_block {
      margin-bottom: 17px;
      width: 80px;
      height: 80px;
      background: #ffffff;
    }
  }
  .item:nth-child(1) {
    .item_block {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .item:nth-child(2) {
    .item_block {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
