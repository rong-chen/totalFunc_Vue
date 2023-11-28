
import { defineStore } from "pinia"
import { userInfo } from "../user"


export const websocket = defineStore("websocket",{
    state:()=>({
       connUrl:`127.0.0.1`,
       websocket:null
    }),
    actions:{
        connectWebSocket(){
          let user =userInfo()
          this.websocket = new WebSocket(`ws://${this.connUrl}:6661/connect?Id=${user.userInfo.Id}`)
          this.websocket.onmessage=(event)=>{
            console.log("收到消息 ==> " , event);
          }
        },
    }
})