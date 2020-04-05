import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '@/store'
import router from '@/router'
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
    //   将数据结构
    return response.data.data
  } catch (error) {
    return response.data
  }
}, async function (error) {
  const toPath = {
    path: '/login',
    query: {
      redirectUrl: router.currentRoute.path
    }
  }
  // 处理token失效
  if (error.response.status === 401) {
    // 表明token已经失效
    try {

    } catch (error) {

    }
    if (store.state.user.refresh_token) {
      // 存在refresh_token
      try {
        const result = await axios({
          url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
          method: 'put',
          headers: {
            Authorization: `Bearer ${store.state.user.refresh_token}`
          }

        })
        store.commit('updateUser',
          {
            user: {
              token: result.data.data.token,
              refresh_token: store.state.user.refresh_token
            }
          })
        return instance(error.config)
      } catch (error) {
        store.commit('clearUser')
        router.push(toPath)
      }
    } else {
      store.commit('clearUser')
      router.push(toPath)
    }
  }
  return Promise.reject(error)
})
export default instance
