<template>
  <div class="navigation">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div>
      <p class="black-26 mb-20">分页符</p>
      <div class="design_Navigation">
        <p>默认</p>
        <a-pagination v-model="current" v-bind="pagination1" />
        <p class="mt-40">带统计分页</p>
        <a-pagination v-model="current" v-bind="pagination2" />
        <p class="mt-40">精简分页器</p>
        <a-pagination v-model="current" v-bind="pagination3" />
        <p class="mt-40">大于10页</p>
        <a-pagination v-model="current" v-bind="pagination4" />
        <p class="mt-40">无边框分页器</p>
        <a-pagination v-model="current" v-bind="pagination5" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      pagination1: {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 10,
        current: 1,
        total: 100,
      },
      pagination2: {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 10,
        current: 1,
        total: 100,
        showTotal: (total) => `总条数：${total}`,
      },
      pagination3: {
        simple: true,
        current: 1,
        total: 100,
      },
      pagination4: {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 10,
        current: 1,
        total: 100,
      },
      pagination5: {
        size: "small",
        current: 1,
        total: 100,
      },
    }
  },
}
</script>
