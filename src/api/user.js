
import service from "../utils/request"; 

export const getUserInfo=()=>{
    return service({
        method:"get",
        url:"/getUserInfo",
    })
}