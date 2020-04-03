import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放公共数据
  state: {
    user: auth.getUser()
  },
  // 修改数据，同步操作
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user
      auth.setUser(payload.user)
    },
    clearUser (state) {
      state.user = {}
      auth.delUser()
    }
  },
  // 执行异步操作
  actions: {
  },
  modules: {
  }
})
