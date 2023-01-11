<template>
  <div class="steps">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <p class="black-26">水平步骤条</p>
    <div class="demo-item">
      <div class="demo-item-title">基础步骤</div>
      <div class="demo-item-content">
        <a-steps :current="0">
          <a-step title="正在处理" />
          <a-step title="等待处理" />
          <a-step title="等待处理" />
        </a-steps>
      </div>
    </div>
    <div class="demo-item">
      <div class="demo-item-title">带描述步骤</div>
      <div class="demo-item-content">
        <a-steps :current="1">
          <a-step title="处理完成" description="This is a description." />
          <a-step title="正在处理" description="This is a description." />
          <a-step title="等待处理" description="This is a description." />
        </a-steps>
      </div>
    </div>
    <p class="black-26 mt-40">竖向步骤</p>
    <div>
      <p>带描述步骤</p>
      <a-steps direction="vertical" :current="1">
        <a-step title="等待处理" description="This is a description." />
        <a-step title="正在处理" description="This is a description." />
        <a-step title="处理完成" description="This is a description." />
      </a-steps>
    </div>
    <div class="mt-40">
      <p>锚点</p>
      <a-anchor>
        <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
        <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
        <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo with Target" />
        <a-anchor-link href="#API" title="API">
          <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
          <a-anchor-link href="#Link-Props" title="Link Props" />
        </a-anchor-link>
      </a-anchor>
    </div>
    <div class="mt-40">
      <p>时间线</p>
      <a-timeline>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
        <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
        <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<style lang="less" scoped>
.steps {
  .demo-item {
    display: flex;
    align-items: center;
    margin-top: 40px;
    width: 800px;
    .demo-item-title {
      font-size: 14px;
      width: 200px;
    }
    .demo-item-content {
      flex: 1;
    }
  }
  .demo-more-items {
    display: flex;
    justify-content: space-around;
  }
}
</style>
