<template>
  <div class="uploader">
    <div class="upload-container">
      <a-upload-dragger
        :action="uploadUrl"
        :headers="uploadHeaders"
        :multiple="true"
        :file-list="fileList"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        @change="handleChange"
      >
        <!-- 未上传文件 -->
        <div v-if="!fileList.length">
          <a-icon type="cloud-upload" style="color: #cbcfd6; font-size: 42px" />
          <div>拖拽至此 或 <span style="color: #0073ed">点击上传</span></div>
          <div class="tip">
            （{{ accept === "*" ? "支持所有" : `只支持 ${accept}` }} 格式，大小限制 {{ minSize >= 1 ? `${minSize}MB` : `${minSize * 1024}KB` }}~{{
              maxSize >= 1 ? `${maxSize}MB` : `${maxSize * 1024}KB`
            }}）
          </div>
        </div>
        <!-- 上传失败 -->
        <div v-if="fileList.length && fileList[0].status === 'error'">
          <div class="file-icon"><img src="../../assets/file-error.png" alt="" /></div>
          <div class="file-name">
            <span>{{ fileList[0].name }}</span>
            <a-icon type="close-circle" theme="filled" style="color: #cbcfd6; margin-left: 4px" @click.stop="handleRemoveFile(fileList[0].uid)" />
          </div>
          <div style="font-size: 12px"><span style="color: #fa5f5f">上传失败，请修改后 </span><span style="color: #0073ed">重新上传</span></div>
        </div>
        <!-- 上传中 -->
        <div v-if="fileList.length && fileList[0].status === 'uploading'">
          <div class="icon-container">
            <div class="icon"><img src="../../assets/file-origin.png" alt="" /></div>
            <div class="loading-container">
              <div class="loadingThree">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="icon"><img src="../../assets/file-target.png" alt="" /></div>
          </div>
          <div>文件上传中，请稍后...</div>
        </div>
        <!-- 已上传 -->
        <div v-if="fileList.length && fileList[0].status === 'done'">
          <div class="file-icon"><img src="../../assets/file-success.png" alt="" /></div>
          <div class="file-name">{{ fileList[0].name }}</div>
          <div class="tip">如需修改可点击 <span style="color: #0073ed">重新上传</span></div>
        </div>
      </a-upload-dragger>
    </div>
  </div>
</template>
<script>
const statusMap = {
  done: "已上传",
  error: "上传失败",
  uploading: "上传中...",
}

const statusColorMap = {
  done: "#959BA3",
  error: "#FA5F5F",
  uploading: "#2C8DF4",
}
export default {
  name: "UploadFileDragger",
  props: {
    value: {
      type: Array,
      // id 和 url 仅上传成功的文件包含
      // [{ uid: -1, name: 'xxx', status: 'done|error|uploading', id: 'xxx', url: 'xxx' }]
      default: () => [],
    },
    accept: {
      type: String,
      default: "*", // 默认可上传所有文件
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
      statusMap,
      statusColorMap,
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
      const fileType = file.name.lastIndexOf(".") > -1 ? file.name.substring(file.name.lastIndexOf(".")) : "unknown"

      if (this.accept !== "*" && fileType !== "unknown" && !this.accept.toLowerCase().includes(fileType.toLowerCase())) {
        this.$message.error("上传文件格式不符！")
        return Promise.reject(false)
      }
      // 限制大小
      const isThan = file.size / 1024 / 1024 >= this.minSize
      const isLt2M = file.size / 1024 / 1024 <= this.maxSize
      if (!isThan) {
        this.$message.error(`文件大小不得小于 ${this.minSize >= 1 ? this.minSize : this.minSize * 1024} ${this.minSize >= 1 ? "MB" : "KB"}！`)
        return Promise.reject(false)
      }
      if (!isLt2M) {
        this.$message.error(`文件大小不得超过 ${this.maxSize >= 1 ? this.maxSize : this.maxSize * 1024} ${this.maxSize >= 1 ? "MB" : "KB"}！`)
        return Promise.reject(false)
      }
    },
    // 文件上传处理
    handleChange(info) {
      let fileList = [...info.fileList]
      fileList = fileList.slice(-1)
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
    handleRemoveFile(uid) {
      this.fileList = this.fileList.filter((item) => item.uid !== uid)
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
  .file-icon {
    img {
      width: 50px;
    }
  }
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      img {
        width: 70px;
      }
    }
    .loading-container {
      .loadingThree {
        width: 150px;
        height: 15px;
        margin: 0 auto;
      }
      .loadingThree span {
        display: inline-block;
        width: 15px;
        height: 100%;
        margin-right: 5px;
        border-radius: 50%;
        background: lightgreen;
        animation: load 1.04s ease infinite;
      }
      .loadingThree span:last-child {
        margin-right: 0px;
      }
      .loadingThree span:nth-child(1) {
        animation-delay: 0.13s;
      }
      .loadingThree span:nth-child(2) {
        animation-delay: 0.26s;
      }
      .loadingThree span:nth-child(3) {
        animation-delay: 0.39s;
      }
      .loadingThree span:nth-child(4) {
        animation-delay: 0.52s;
      }
      .loadingThree span:nth-child(5) {
        animation-delay: 0.65s;
      }
    }
  }
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
