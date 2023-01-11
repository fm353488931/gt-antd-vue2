<template>
  <div class="gtButton">
    <div>
      <h1 class="black-26-600 mb-20">1、基础按钮</h1>
      <div class="mb-10">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-radio-button value="large"> 大 </a-radio-button>
          <a-radio-button value="default"> 中 </a-radio-button>
          <a-radio-button value="small"> 小 </a-radio-button>
        </a-radio-group>
      </div>
      <a-space class="flex-wrap">
        <a-button type="primary" :size="size"> 主按钮 </a-button>
        <a-button :size="size"> 次按钮 </a-button>
        <a-button type="danger" :size="size"> 告警按钮 </a-button>
        <a-button type="danger" ghost :size="size"> 告警按钮 </a-button>
        <a-button type="link" :size="size"> 文字按钮 </a-button>
        <a-button disabled :size="size"> 禁用按钮 </a-button>
      </a-space>
    </div>
    <div class="mt-50">
      <h1 class="black-26-600 mb-20">2、图标按钮</h1>
      <a-space class="flex-wrap">
        <a-button type="primary" icon="download">主要按钮</a-button>
        <a-button icon="download">次要按钮</a-button>
        <a-button type="danger" icon="delete">告警按钮</a-button>
        <a-button type="danger" icon="delete" ghost>告警按钮</a-button>
        <a-button type="link" icon="plus">文字按钮</a-button>
        <a-button shape="circle" icon="star" />
        <a-button disabled icon="delete">禁用</a-button>
        <a-button disabled shape="circle" icon="star" />
      </a-space>
    </div>
    <div class="mt-50">
      <h1 class="black-26-600 mb-20">3、菜单按钮</h1>
      <a-space class="flex-wrap">
        <a-button type="primary"> 主要按钮<a-icon type="down" /> </a-button>
        <a-button> 次要按钮<a-icon type="down" /> </a-button>
        <a-button type="link"> 文字按钮<a-icon type="down" /> </a-button>
        <a-button disabled> 禁用<a-icon type="down" /> </a-button>
      </a-space>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "default",
    }
  },
  methods: {
    handleSizeChange(e) {
      this.size = e.target.value
    },
  },
}
</script>

<style scoped lang="less"></style>
