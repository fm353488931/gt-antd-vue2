<template>
  <div class="gtProgress">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <div class="black-26">线性进度条</div>
      <div>
        <a-progress :percent="30" strokeColor="#2c8df4" />
        <a-progress :percent="30" strokeColor="#2c8df4" :show-info="false" />
      </div>
      <div class="mt-30">
        <a-progress :percent="70" strokeColor="#FA5F5F" status="exception" />
        <a-progress :percent="70" strokeColor="#FA5F5F" status="exception" :show-info="false" />
      </div>
      <div class="mt-30">
        <a-progress :percent="70" strokeColor="#FAAD14">
          <template #format>
            <a-icon type="exclamation-circle" theme="filled" style="color: #faad14" />
          </template>
        </a-progress>
        <a-progress :percent="70" strokeColor="#FAAD14" status="success" :show-info="false" />
      </div>
      <div class="mt-30">
        <a-progress :percent="70" strokeColor="#23C172" status="success" />
        <a-progress :percent="70" strokeColor="#23C172" status="success" :show-info="false" />
      </div>
    </div>
    <div class="mt-40">
      <div class="black-26">环形进度条</div>
      <div class="justify-between">
        <div class="mt-30">
          <a-progress type="circle" :percent="50" />
        </div>
        <div class="mt-30">
          <a-progress type="circle" strokeColor="#FA5F5F" :percent="50">
            <template #format>
              <a-icon type="close-circle" theme="filled" style="color: #fa5f5f" />
            </template>
          </a-progress>
        </div>
        <div class="mt-30">
          <a-progress type="circle" strokeColor="#FAAD14" :percent="50">
            <template #format>
              <a-icon type="exclamation-circle" theme="filled" style="color: #faad14" />
            </template>
          </a-progress>
        </div>
        <div class="mt-30">
          <a-progress type="circle" strokeColor="#23C172" :percent="50">
            <template #format>
              <a-icon type="check-circle" theme="filled" style="color: #23c172" />
            </template>
          </a-progress>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.gtProgress {
  .demo-item {
    margin-top: 48px;
    width: 500px;
  }
}
</style>
