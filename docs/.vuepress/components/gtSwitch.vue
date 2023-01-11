<template>
  <div class="switch">
    <h1 class="black-36-600">组件类型</h1>
    <div class="mt-40">
      <p class="black-26">开关</p>
      <a-space>
        <a-switch />
        <a-switch checked-children="开" un-checked-children="关" default-checked />
        <a-switch disabled />
        <a-switch checked-children="开" un-checked-children="关" default-checked disabled />
      </a-space>
    </div>
    <div class="mt-60">
      <p class="black-26">滑块</p>
      <p>默认</p>
      <a-slider :default-value="28" />
      <p>禁用</p>
      <a-slider disabled :default-value="28" />
      <p>范围选择</p>
      <a-slider range :marks="marks" :default-value="[26, 37]" />
      <p>竖向选择</p>
      <div style="display: inline-block; height: 300px; marginleft: 70px">
        <a-slider vertical :default-value="30" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marks: {
        0: "0°C",
        26: "26°C",
        37: "37°C",
        100: {
          style: {
            color: "#f50",
          },
        },
      },
    }
  },
  methods: {},
}
</script>

<style scoped lang="less"></style>
