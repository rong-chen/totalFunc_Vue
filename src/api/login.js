
import service from "../utils/request"
// 登陆
export const login = (data)=>{
    return service({
        url:"/login",
        method:"post",
        data
    })
}