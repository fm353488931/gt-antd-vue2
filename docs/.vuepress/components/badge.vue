<template>
  <div class="badge">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <p class="black-26">红点</p>
      <div class="flex align-center">
        <div class="mr-30">
          <a-badge dot> 应用 </a-badge>
        </div>
        <a-badge dot>
          <a-icon type="notification" />
        </a-badge>
      </div>
    </div>
    <div class="mt-40">
      <p class="black-26">数字</p>
      <div class="flex">
        <div class="mr-30">
          <a-badge :count="3"> </a-badge>
        </div>
        <div class="mr-30">
          <a-badge :count="26"> </a-badge>
        </div>
        <div class="mr-30">
          <a-badge :count="100"> </a-badge>
        </div>
        <div class="mr-30">
          <a-badge :count="1000" :overflow-count="999"> </a-badge>
        </div>
        <div style="width: 50px">
          <a-badge> <div slot="count" :style="{ background: '#f5222d', color: '#fff', padding: '3px 5px', borderRadius: '33px' }">hot</div> </a-badge>
        </div>
        <div>
          <a-badge> <div slot="count" :style="{ background: '#f5222d', color: '#fff', padding: '3px 5px', borderRadius: '33px' }">new</div> </a-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
