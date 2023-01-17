<template>
  <div class="tag">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <p class="black-26">标签</p>
      <div class="flex">
        <div class="width-120">基础</div>
        <div>
          <a-tag> 标签二 </a-tag>
          <a-tag color="blue"> 标签三 </a-tag>
          <a-tag color="green"> 标签四 </a-tag>
          <a-tag color="orange"> 标签五 </a-tag>
          <a-tag color="red"> 标签六 </a-tag>
        </div>
      </div>
      <div class="flex mt-40">
        <div class="width-120">编辑标签</div>
        <div>
          <a-tag> 标签二 <a-icon type="minus-circle" /></a-tag>
          <a-tag color="blue"> 标签三 <a-icon type="minus-circle" /></a-tag>
          <a-tag color="green"> 标签四 <a-icon type="minus-circle" /></a-tag>
          <a-tag color="orange"> 标签五 <a-icon type="minus-circle" /></a-tag>
          <a-tag color="red"> 标签六 <a-icon type="minus-circle" /></a-tag>
        </div>
      </div>
      <div class="flex mt-40">
        <div class="width-120">不同主题</div>
        <div>
          <div>
            <a-tag style="background-color: transparent"> 标签二 </a-tag>
            <a-tag style="background-color: transparent" color="blue"> 标签三 </a-tag>
            <a-tag style="background-color: transparent" color="green"> 标签四 </a-tag>
            <a-tag style="background-color: transparent" color="orange"> 标签五 </a-tag>
            <a-tag style="background-color: transparent" color="red"> 标签六 </a-tag>
          </div>
          <div>
            <a-tag color="#cbcfd6"> 标签二 </a-tag>
            <a-tag color="#2c8df4"> 标签三 </a-tag>
            <a-tag color="#23c172"> 标签四 </a-tag>
            <a-tag color="#faad14"> 标签五 </a-tag>
            <a-tag color="#fa5f5f"> 标签六 </a-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tag {
  .width-120 {
    width: 120px;
    flex: 0 0 120px;
  }
}
</style>
