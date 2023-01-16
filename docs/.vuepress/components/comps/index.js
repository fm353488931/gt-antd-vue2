import Breadcrumb from "./Breadcrumb.vue"
import UploadFile from "./UploadFile.vue"
import UploadImgFile from "./UploadImgFile.vue"
import UploadVideoFile from "./UploadVideoFile.vue"
import UploadFileDragger from "./UploadFileDragger.vue"

const components = [Breadcrumb, UploadFile, UploadImgFile, UploadVideoFile, UploadFileDragger]

export default {
  install: (app) => {
    components.forEach((component) => app.component(component.name, component))
  },
}
