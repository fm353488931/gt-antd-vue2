<template>
  <div class="gtInput">
    <h1 class="black-36-600">组件类型</h1>
    <div class="mt-40">
      <p class="black-26">输入框</p>
      <div class="flex mb-36">
        <div class="width-120">基础</div>
        <a-space>
          <a-input class="width-224" placeholder="请输入" />
          <a-input class="width-224" placeholder="请输入" disabled />
        </a-space>
      </div>
      <div class="flex mb-36">
        <div class="width-120">密码框</div>
        <a-input-password class="width-224" placeholder="请输入密码" />
      </div>
      <div class="flex mb-36">
        <div class="width-120">文本域</div>
        <a-textarea placeholder="请输入内容" :rows="4" />
      </div>
      <div class="flex mb-36">
        <div class="width-120">复合型输入框</div>
        <div>
          <a-input class="mb-30" addon-before="Http://" addon-after=".com" default-value="mysite" />
          <a-input-group compact>
            <a-select style="width: 30%" default-value="Home">
              <a-select-option value="Home"> Home </a-select-option>
              <a-select-option value="Company"> Company </a-select-option>
            </a-select>
            <a-cascader style="width: 70%" :options="options" placeholder="Select Address" />
          </a-input-group>
        </div>
      </div>
    </div>
    <div class="mt-40">
      <p class="black-26">搜索框</p>
      <div class="flex mb-36">
        <div class="width-120">带按钮搜索框</div>
        <a-input-search class="width-368" placeholder="input search text" enter-button="搜索" />
      </div>
    </div>
    <div class="mt-40">
      <p class="black-26">数字输入框</p>
      <a-input-number v-model="number" />
      <a-input-number disabled v-model="number" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 3,
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
  methods: {},
}
</script>

<style scoped lang="less">
.gtInput {
  .width-120 {
    width: 120px;
    flex: 0 0 120px;
  }
  .width-224 {
    width: 224px;
    flex: 0 0 224px;
  }
  .width-368 {
    width: 368px;
    flex: 0 0 368px;
  }
}
</style>
