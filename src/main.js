import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from '@/router/index.js'
import '@/styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(VueRouter,ElementUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
