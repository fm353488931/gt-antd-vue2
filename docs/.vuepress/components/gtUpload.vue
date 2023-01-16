<template>
  <div class="gtUpload">
    <h1 class="black-36-600">组件类型</h1>
    <div class="mt-40">
      <p class="black-26">通用上传（支持图片、文件）</p>
      <upload-file :maxSize="1" accept="*" v-model="files" />
    </div>
    <div class="mt-40">
      <p class="black-26">单独图片上传</p>
      <upload-img-file :maxSize="1" accept=".png,.jpg,.jpeg,.gif" v-model="imgs" />
    </div>
    <div class="mt-40">
      <p class="black-26">单独视频上传</p>
      <upload-video-file :maxSize="100" accept=".mp4" v-model="videos" />
    </div>
    <div class="mt-40">
      <p class="black-26">拖拽到区域上传：表格上传</p>
      <UploadFileDragger :maxSize="100" accept=".xls,.xlsx" v-model="files2" />
    </div>
    <div class="mt-20">
      <a-button @click="handleOutPut">输出</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      files: [],
      imgs: [],
      videos: [],
      files2: [],
    }
  },
  methods: {
    handleGiveValue() {
      this.files = [{ id: 1, name: "xxxxxxx.png", url: "wwww.baidu.com/po.png" }]
    },
    handleOutPut() {
      console.log(this.files)
      console.log(this.imgs)
      console.log(this.videos)
      console.log(this.files2)
    },
  },
}
</script>
<style lang="less" scoped>
.gtUpload {
}
</style>
