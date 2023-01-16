<template>
  <div class="uploader">
    <div class="upload-container">
      <a-upload
        :action="uploadUrl"
        :headers="uploadHeaders"
        :multiple="true"
        :file-list="fileList"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        @change="handleChange"
      >
        <a-button> <a-icon type="upload" /> 上传文件</a-button>
        <div class="tip">
          {{ accept === "*" ? "支持所有" : `只支持 ${accept}` }}格式，大小限制 {{ minSize >= 1 ? `${minSize}MB` : `${minSize * 1024}KB` }}~{{
            maxSize >= 1 ? `${maxSize}MB` : `${maxSize * 1024}KB`
          }}
        </div>
      </a-upload>
    </div>
    <div class="filelist-container">
      <div v-for="item in fileList" :key="item.uid" class="file-item">
        <div class="file-icon">
          <a-icon :type="iconMap[getFileType(item.name)] || 'file'" style="font-size: 20px" />
        </div>
        <div class="file-info">
          <div class="file-name">
            <a-popover v-if="item.name && item.name.length > 19">
              <template slot="content">
                <span>{{ item.name }}</span>
              </template>
              <span>{{ transformSimplifyName(item.name) }}</span>
            </a-popover>
            <span v-else>{{ item.name }}</span>
            <span v-if="item.size" style="color: #959ba3">({{ (item.size / 1024).toFixed(2) }}KB)</span>
          </div>
          <div class="file-status" :style="{ color: statusColorMap[item.status] }">{{ statusMap[item.status] }}</div>
        </div>
        <div class="file-action" @click="handleRemoveFile(item.uid)"><a-icon type="close" /></div>
      </div>
    </div>
  </div>
</template>
<script>
const iconMap = {
  // 图片
  ".png": "file-image",
  ".jpg": "file-image",
  ".jpeg": "file-image",
  ".gif": "file-image",
  // word doc
  ".doc": "file-word",
  ".docx": "file-word",
  // word xls
  ".xls": "file-excel",
  ".xlsx": "file-excel",
  // pdf
  ".pdf": "file-pdf",
  // ppt
  ".ppt": "file-ppt",
  ".pptx": "file-ppt",
  // 压缩包
  ".zip": "file-zip",
  ".7z": "file-zip",
  ".rar": "file-zip",
  // txt
  ".txt": "file-text",
  // unknow
  unknow: "file-unknown",
}

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
  name: "UploadFile",
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
      iconMap,
      statusMap,
      statusColorMap,
      triggerer: "outer",
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
    // 文件名称精简展示
    transformSimplifyName(fileName) {
      const prefixName = fileName.substring(0, fileName.lastIndexOf("."))
      const suffixName = fileName.substring(fileName.lastIndexOf("."))
      return (prefixName.length > 15 ? prefixName.substring(0, 7) + "..." + prefixName.substr(-7) : prefixName) + suffixName
    },
    // 获取文件类型
    getFileType(fileName) {
      return fileName.lastIndexOf(".") > -1 ? fileName.substr(fileName.lastIndexOf(".")).toLowerCase() : "unknow"
    },
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
}
.filelist-container {
  .file-item {
    display: flex;
    align-items: center;
    width: 366px;
    height: 74px;
    padding: 12px 14px;
    margin-top: 8px;
    border: 1px solid #cbcfd6;
    border-radius: 4px;
    box-sizing: border-box;
    .file-icon {
      width: 50px;
      height: 50px;
      background-color: #fe9e00;
      color: #fff;
      text-align: center;
      line-height: 50px;
    }
    .file-info {
      flex: 1;
      margin-left: 8px;
      .file-name {
        width: 250px;
        color: #262a30;
        font-size: 14px;
      }
      .file-status {
        margin-top: 4px;
        font-size: 12px;
      }
    }
    .file-action {
      cursor: pointer;
    }
  }
}
</style>
