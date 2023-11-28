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
      { path: 'friends',label:"好友",name:"friends", children:[
        { path: 'friendManage',fullPath:"/layout/friends/friendManage",name:"friendManage",label:"好友列表", component: ()=>import("../view/friend/friendManage/index.vue")},
        { path: 'addFriends',fullPath:"/layout/friends/addFriends",name:"addFriends",label:"添加好友", component: ()=>import("../view/friend/addFriends/index.vue")},
      ]},
      
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default  router
