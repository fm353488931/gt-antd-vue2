<template>
  <div class="gtRadio">
    <h1 class="black-36-600 mb-20">组件类型</h1>
    <div class="mt-40">
      <p class="black-26">单选</p>
      <a-radio-group v-model="value" @change="change">
        <a-radio :value="1"> A </a-radio>
        <a-radio :value="2"> B </a-radio>
        <a-radio :value="3"> C </a-radio>
        <a-radio :value="4"> D </a-radio>
      </a-radio-group>
    </div>
    <div class="mt-40">
      <p class="black-26">复选</p>
      <div>
        <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange"> 全选 </a-checkbox>
        <a-divider />
        <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      checkedList: [],
      indeterminate: false,
      checkAll: false,
      plainOptions: ["Apple", "Pear", "Orange"],
    }
  },
  methods: {
    change(e) {
      console.log("radio checked", e.target.value)
    },
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length
      this.checkAll = checkedList.length === this.plainOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      })
    },
  },
}
</script>

<style scoped lang="less"></style>
