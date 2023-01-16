<template>
  <div class="uploader">
    <div class="upload-container">
      <a-upload
        :action="uploadUrl"
        :headers="uploadHeaders"
        :multiple="false"
        :file-list="fileList"
        list-type="picture-card"
        :showUploadList="showUploadList"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="handleChange"
      >
        <video v-if="!showUploadList && fileList.length" :src="fileList[0].url" alt="avatar" style="width: 80px" />
        <div v-else style="color: #2c8df4">
          <div>
            <a-icon type="video-camera" style="font-size: 20px" />
          </div>
          <span>上传视频</span>
        </div>
      </a-upload>
      <div class="tip">
        {{ `只支持 ${accept}` }} 格式，大小限制 {{ minSize >= 1 ? `${minSize}MB` : `${minSize * 1024}KB` }}~{{
          maxSize >= 1 ? `${maxSize}MB` : `${maxSize * 1024}KB`
        }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UploadVideoFile",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    accept: {
      type: String,
      default: ".mp4,.avi,.mov,.m4v,.wmv,.flv,.mkv",
    },
    // 可通过该字段控制多文件或单文件上传
    showUploadList: {
      type: Boolean,
      default: true,
    },
    minSize: {
      type: Number,
      default: 0.001, // 默认最小上传 0.001 MB 文件
    },
    maxSize: {
      type: Number,
      default: 100, // 默认最大上传 100 MB 文件
    },
  },
  data() {
    return {
      uploadUrl: "",
      uploadHeaders: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiJhZG1pbiIsInVzZXJfbmFtZSI6ImFkbWluIiwibG9naW5fdGltZSI6MTY2Nzg3MTEwMDA5MSwic2NvcGUiOlsiICBhZG1pbiAiLCIgY29tbXVuaXR5ICIsIiBhcHAgIiwiTFkiXSwiY2xpZW50IjoiY29tbXVuaXR5IiwiaWQiOjE0MTcxMDA4Nzc2OTI5ODk0NDEsImV4cCI6MTY2NzkxNDMwMCwiYXV0aG9yaXRpZXMiOlsiMTU3MDMxMDEzMTk4NjUxODAxOCIsIjE1NDg4NTkyOTk3NzY3MDg2MDkiLCIxNDE3MTAwODc3MjY1MTcwNDM0Il0sImp0aSI6ImZjNjJmNWNjLThlNjgtNDgxYy1hZGNlLTE2YmY5OWNiMGYwNiIsImNsaWVudF9pZCI6ImFkbWluIn0.GQMk04hdo38k0OgtHmw9CGlRkhHUyzC0FHr-0nswGsIeQvFQUIx36rVxmO383Qe6lGGVoh48GAOlSXL8c3vXOrBy6SZkxfBZ-LMy0hdSKzNjC6Oo0fHRLSrmyv84NMUwyvBJz35sjF488hT4HHb69wHudNXUM0HZVXZobbeidLRRnaR6-QPqkJTwfc6qHJMZeXUaw3gqhqHDscpB8lHOtOnF5t8zQ_Ij8Wh4enFn3lRdcUG-mpaxxlXTg8Bhr7Ggh5FRbSskNhgcVve0GlkiprGjWfyvUNLail_7V1V2Doy9jmYZhsXf_iurdw4BAhndlBsz0TGXkpBBp2uLO4eMmQ",
      },
      fileList: [],
    }
  },
  watch: {
    value(newVal) {
      this.fileList = newVal.map((item) => ({
        uid: item.uid || item.id,
        id: item.id,
        name: item.name,
        url: item.url,
        size: item.size,
        status: item.status || "done",
      }))
    },
  },
  methods: {
    // 上传之前判断逻辑
    beforeUpload(file) {
      return new Promise((resolve, reject) => {
        const fileType = file.name.lastIndexOf(".") > -1 ? file.name.substring(file.name.lastIndexOf(".")) : "unknown"

        if (this.fileType === "unknown") {
          this.$message.error("上传文件格式不符！")
          return reject(false)
        }
        if (this.accept !== "*" && fileType !== "unknown" && !this.accept.toLowerCase().includes(fileType.toLowerCase())) {
          this.$message.error("上传文件格式不符！")
          return reject(false)
        }
        // 限制大小
        const isThan = file.size / 1024 / 1024 >= this.minSize
        const isLt2M = file.size / 1024 / 1024 <= this.maxSize
        if (!isThan) {
          this.$message.error(`文件大小不得小于 ${this.minSize >= 1 ? this.minSize : this.minSize * 1024} ${this.minSize >= 1 ? "MB" : "KB"}！`)
          return reject(false)
        }
        if (!isLt2M) {
          this.$message.error(`文件大小不得超过 ${this.maxSize >= 1 ? this.maxSize : this.maxSize * 1024} ${this.maxSize >= 1 ? "MB" : "KB"}！`)
          return reject(false)
        }
        resolve(file)
      })
    },
    // 文件上传处理
    handleChange(info) {
      let fileList = [...info.fileList]

      fileList = fileList.map((file) => {
        if (file.response) {
          if (file.response.code === 0) {
            file.id = file.response.data.id
            file.url = file.response.data.url
          }
          if (file.response && file.response.code === 2004) {
            file.status = "error"
          }
        }
        return file
      })

      this.fileList = fileList
      this.$emit("input", this.fileList)
    },
  },
}
</script>
<style lang="less" scoped>
.upload-container {
  .tip {
    margin-top: 4px;
    font-size: 12px;
    color: #959ba3;
  }
}
</style>
