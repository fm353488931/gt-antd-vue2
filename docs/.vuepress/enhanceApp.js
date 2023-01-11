import Antd from "ant-design-vue"
import "./styles/index.less"
import "./styles/antd.min.css"
// import "ant-design-vue/dist/antd.css"
import comps from "./components/comps"

export default ({ Vue }) => {
  Vue.use(Antd)
  Vue.use(comps)
}
