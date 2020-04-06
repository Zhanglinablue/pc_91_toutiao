import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.less'
import App from './App.vue'
import router from '@/permission'
import store from './store'
import 'amfe-flexible'
import '@/style/index.less'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
