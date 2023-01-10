import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入安装 import Vant
import Vant from 'vant'
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
