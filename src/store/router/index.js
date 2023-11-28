import { defineStore } from 'pinia'
import {useRouter} from "vue-router"
 
export const routerInfo = defineStore('router', ()=>{
    const getRouterInfo=()=>{
        let router = useRouter()
        return router.options.routes.filter(item=>item.path=='/layout')[0]["children"]
    }
    return { getRouterInfo }
})