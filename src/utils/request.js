import axios from 'axios'
import {userInfo} from "../store/user/index"


let baseURL ="api"
// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 5000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    let user =userInfo()
    if (user.token) {
      config.headers['H-Token'] = user.token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject('error')
    } else {
        if(res?.data?.token){
          localStorage.setItem("token", res.data.token);
        }
        return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

