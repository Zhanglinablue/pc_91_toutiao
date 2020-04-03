import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '@/store'
// 创建一个新的axios实例，和原来的axios无关
const instance = axios.create({
  // 构造函数
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.token) {
    config.hearders.Authorization = `Bearer ${store.state.user.token}`
    return config
  }
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function (response) {
  try {
    return response.data.data
  } catch (error) {
    return response.data
  }
}, function (error) {
  return Promise.reject(error)
})
export default instance
