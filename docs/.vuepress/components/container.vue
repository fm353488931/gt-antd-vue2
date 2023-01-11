<template>
  <div class="container">
    <div class="container_first">
      <h1 class="black-26-600 mb-10">容器</h1>
      <div class="flex">
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">次按钮</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">disabled</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">hover</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">告警</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">带虚线</div>
        </div>
      </div>
    </div>

    <div class="container_second mt-50">
      <h1 class="black-26-600 mb-10">标签容器</h1>
      <div class="flex">
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">常规</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">蓝色</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">绿色</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">黄色</div>
        </div>
        <div class="item">
          <div class="item_block"></div>
          <div class="gray26-16-500">红色</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../styles/variables.less";
.container {
  .item {
    margin-right: 30px;
    &_block {
      margin-bottom: 17px;
      width: 80px;
      height: 80px;
    }
  }
  &_first {
    .item:nth-child(1) {
      .item_block {
        background: #ffffff;
        border: 1px solid #cbcfd6;
      }
    }
    .item:nth-child(2) {
      .item_block {
        background: #f7f8f9;
        border: 1px solid #cbcfd6;
      }
    }
    .item:nth-child(3) {
      .item_block {
        background: #ffffff;
        border: 1px solid #2c8df4;
      }
    }
    .item:nth-child(4) {
      .item_block {
        background: #ffffff;
        border: 1px solid #fa5f5f;
      }
    }
    .item:nth-child(5) {
      .item_block {
        background: #f7f8f9;
        border: 1px solid #e9ecf0;
      }
    }
  }
  &_second {
    .item:nth-child(1) {
      .item_block {
        background: #f7f8f9;
        border: 1px solid rgba(151, 151, 151, 0.15);
      }
    }
    .item:nth-child(2) {
      .item_block {
        background: rgba(44, 141, 244, 0.1);
        border: 1px solid rgba(44, 141, 244, 0.15);
      }
    }
    .item:nth-child(3) {
      .item_block {
        background: rgba(35, 193, 114, 0.1);
        border: 1px solid rgba(35, 193, 114, 0.15);
      }
    }
    .item:nth-child(4) {
      .item_block {
        background: rgba(250, 173, 20, 0.1);
        border: 1px solid rgba(250, 173, 20, 0.15);
      }
    }
    .item:nth-child(5) {
      .item_block {
        background: rgba(250, 95, 95, 0.1);
        border: 1px solid rgba(250, 95, 95, 0.15);
      }
    }
  }
}
</style>
