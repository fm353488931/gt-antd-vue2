<template>
  <div class="datePicker">
    <h1 class="black-36-600">组件类型</h1>
    <div class="mt-40">
      <p class="black-26">年份选择器</p>
      <a-date-picker mode="year" />
    </div>
    <div class="mt-40">
      <p class="black-26">月份选择器</p>
      <a-month-picker placeholder="请选择月份" />
    </div>
    <div class="mt-40">
      <p class="black-26">日期选择器</p>
      <a-date-picker />
    </div>
    <div class="mt-40">
      <p class="black-26">选择日期区间</p>
      <a-range-picker />
    </div>
    <div class="mt-40">
      <p class="black-26">开放日期选择器</p>
      <a-date-picker />&nbsp;&nbsp;至&nbsp;&nbsp;<a-date-picker />
    </div>
  </div>
</template>

<style lang="less" scoped>
.datePicker {
}
</style>
