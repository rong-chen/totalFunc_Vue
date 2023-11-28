import {defineStore} from "pinia"
import { getUserInfo } from "../../api/user"
import { useRoute } from "vue-router"
import { websocket }from "../websocket/index"




export const userInfo = defineStore("useInfo",{
    state:()=>({
        userInfo:{},
        token:localStorage.getItem("token") ?? "",
        connSock : websocket()
    }),
    actions:{
        getUserInfo(){
            let route = useRoute()
             getUserInfo().then(res=>{
                if(res.code == 200){
                    this.userInfo=res.data
                    this.connSock.connectWebSocket();
                }else{
                    route.push("/")
                }
             })
        }
    }
})