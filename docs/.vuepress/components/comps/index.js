import Breadcrumb from "./Breadcrumb.vue"

const components = [Breadcrumb]

export default {
  install: (app) => {
    components.forEach((component) => app.component(component.name, component))
  },
}
