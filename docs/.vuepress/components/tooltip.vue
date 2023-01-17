<template>
  <div class="tooltip">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div id="components-a-tooltip-demo-placement">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <a-tooltip placement="topLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>上左</a-button>
        </a-tooltip>
        <a-tooltip placement="top">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>上</a-button>
        </a-tooltip>
        <a-tooltip placement="topRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>上右</a-button>
        </a-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <a-tooltip placement="leftTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>左上</a-button>
        </a-tooltip>
        <a-tooltip placement="left">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>左</a-button>
        </a-tooltip>
        <a-tooltip placement="leftBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>左底</a-button>
        </a-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
        <a-tooltip placement="rightTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>右上</a-button>
        </a-tooltip>
        <a-tooltip placement="right">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>右</a-button>
        </a-tooltip>
        <a-tooltip placement="rightBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>右底</a-button>
        </a-tooltip>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <a-tooltip placement="bottomLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>底左</a-button>
        </a-tooltip>
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>底</a-button>
        </a-tooltip>
        <a-tooltip placement="bottomRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <a-button>底右</a-button>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonWidth: 70,
    }
  },
}
</script>
<style scoped lang="less">
@import '../styles/variables.less';
.tooltip {
  #components-a-tooltip-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>
