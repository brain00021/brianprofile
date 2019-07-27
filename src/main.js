import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Row from 'element-ui/lib/row'
import Col from 'element-ui/lib/col'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Row)
Vue.use(Col)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
