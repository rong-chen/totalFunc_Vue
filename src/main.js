import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from "./route/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import "./tabler/tabler.css"
import "./style/element.scss"
import componentList from "./components/index"

const app=createApp(App)
app.use(createPinia())


// start 开始注册全局组件
componentList.component.map(item=>{
  app.component(item.name,item)
})
// end

// element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(route)
app.mount('#app')
