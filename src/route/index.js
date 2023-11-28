import home from "../view/home/home.vue"
import login from "../view/login/index.vue"
import { createRouter,createWebHashHistory } from 'vue-router'
import layout from "../view/container/index.vue"

// fullPath必填，该值为路径的全称
const routes = [
  { path: '/',label:"登陆",name:"", component: login },
  {
    path:'/layout', 
    label:"",
    component: layout ,
    children:[ 
      { path: 'index',fullPath:"/layout/index",label:"首页",name:"index", component: home },
      { path: 'unityStorage',label:"统一存储",name:"unityStorage", children:[
        { path: 'virtualDisk',fullPath:"/layout/unityStorage/virtualDisk",name:"virtualDisk",label:"虚拟磁盘", component: ()=>import("../view/unityStorage/virtualDisk/index.vue")},
        { path: 'virtualStorageGroup',fullPath:"/layout/unityStorage/virtualStorageGroup",name:"virtualStorageGroup",label:"虚拟存储组", component: ()=>import("../view/unityStorage/virtualStorageGroup/index.vue")},
      ]},
      
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default  router
