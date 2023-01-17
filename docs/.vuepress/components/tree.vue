<template>
  <div class="tree">
    <h1 class="black-36-600 mb-40">组件类型</h1>
    <div class="">
      <div class="black-26">多选树</div>
      <a-tree-select
        v-model="multipleValue"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        :filterTreeNode="filterTreeNode"
        tree-checkable
        placeholder="请选择"
        tree-default-expand-all
      >
        <div slot="title" slot-scope="{ name, key, value, type }">
          <img v-if="type === 'company'" src="../assets/company.png" style="width: 16px" alt="" />
          <img v-if="type === 'department'" src="../assets/department.png" style="width: 16px" alt="" />
          <img v-if="type === 'person'" src="../assets/person.png" style="width: 16px" alt="" />
          <span>{{ name }}</span>
        </div>
      </a-tree-select>
    </div>
    <div class="mt-40">
      <div class="black-26">单选树</div>
      <a-tree-select
        v-model="singleValue"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        placeholder="请选择"
        tree-default-expand-all
      >
        <div slot="title" slot-scope="{ name, key, value, type }">
          <img v-if="type === 'company'" src="../assets/company.png" style="width: 16px" alt="" />
          <img v-if="type === 'department'" src="../assets/department.png" style="width: 16px" alt="" />
          <img v-if="type === 'person'" src="../assets/person.png" style="width: 16px" alt="" />
          <span>{{ name }}</span>
        </div>
      </a-tree-select>
    </div>
    <div class="mt-40">
      <div class="black-26">带搜索的单选树</div>
      <a-tree-select
        v-model="singleValue"
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="treeData"
        :showSearch="true"
        :filterTreeNode="filterTreeNode"
        placeholder="请选择"
        tree-default-expand-all
      >
        <div slot="title" slot-scope="{ name, key, value, type }">
          <img v-if="type === 'company'" src="../assets/company.png" style="width: 16px" alt="" />
          <img v-if="type === 'department'" src="../assets/department.png" style="width: 16px" alt="" />
          <img v-if="type === 'person'" src="../assets/person.png" style="width: 16px" alt="" />
          <span>{{ name }}</span>
        </div>
      </a-tree-select>
    </div>
  </div>
</template>
<script>
const treeData = [
  {
    // title: '绿城科技',
    name: '绿城科技',
    value: '0',
    key: '0',
    type: 'company',
    scopedSlots: {
      title: 'title',
    },
    children: [
      {
        // title: '财务部',
        name: '财务部',
        value: '0-1',
        key: '0-1',
        type: 'department',
        scopedSlots: {
          title: 'title',
        },
        children: [
          {
            // title: '张三',
            name: '张三',
            value: '0-1-1',
            key: '0-1-1',
            type: 'person',
            scopedSlots: {
              title: 'title',
            },
          },
        ],
      },
      {
        // title: '研发部',
        name: '研发部',
        value: '0-2',
        key: '0-2',
        type: 'department',
        scopedSlots: {
          title: 'title',
        },
        children: [
          {
            // title: '李四',
            name: '李四',
            value: '0-2-1',
            key: '0-2-1',
            type: 'person',
            scopedSlots: {
              title: 'title',
            },
          },
        ],
      },
    ],
  },
]
export default {
  data() {
    return {
      singleValue: undefined,
      multipleValue: undefined,
      multipleValue2: undefined,
      treeData,
    }
  },
  methods: {
    filterTreeNode(inputValue, treeNode) {
      return treeNode.data.props.name.includes(inputValue)
    },
  },
}
</script>
<style lang="less" scoped></style>
