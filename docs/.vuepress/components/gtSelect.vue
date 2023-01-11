<template>
  <div class="gtSelect">
    <h1 class="black-36-600">组件类型</h1>
    <div>
      <p class="black-26">单选</p>
      <a-select default-value="lucy" style="width: 200px" allowClear>
        <a-select-option value="jack"> Jack </a-select-option>
        <a-select-option value="lucy"> Lucy </a-select-option>
        <a-select-option value="disabled" disabled> Disabled </a-select-option>
        <a-select-option value="Yiminghe"> yiminghe </a-select-option>
      </a-select>
    </div>
    <div class="mt-40">
      <p class="black-26">复选</p>
      <a-select mode="tags" placeholder="Please select" :default-value="['a1', 'b2']" style="width: 200px">
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </a-select>
    </div>
    <div class="mt-40">
      <p class="black-26">级联选择</p>
      <a-cascader :options="options" placeholder="Please select" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
