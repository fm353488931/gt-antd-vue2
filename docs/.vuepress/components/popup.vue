<template>
  <div class="popup">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <p class="black-26">小弹框 宽度为420px</p>
      <a-button @click="info"> Info </a-button>
      <a-button @click="success"> Success </a-button>
      <a-button @click="error"> Error </a-button>
      <a-button @click="warning"> Warning </a-button>
    </div>
    <div class="mt-40">
      <p class="black-26">中弹框 宽度为600px</p>
      <a-button @click="info"> Info </a-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      this.$info({
        title: '这是一条提示信息',
        content: '请选择任务！文案不要超过3行',
      })
    },

    success() {
      this.$success({
        title: '这是一条提示信息',
        content: '请选择任务！文案不要超过3行',
      })
    },

    error() {
      this.$error({
        title: '这是一条提示信息',
        content: '请选择任务！文案不要超过3行',
      })
    },

    warning() {
      this.$warning({
        title: '这是一条提示信息',
        content: '请选择任务！文案不要超过3行',
      })
    },
  },
}
</script>
<style scoped lang="less">
@import '../styles/variables.less';
.popup {
}
</style>
