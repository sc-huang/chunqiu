import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Index from '@/pages/index.vue'
import Hot from '@/pages/hot.vue'
import Recentnews from '@/pages/recentnews.vue'
import Marketing from '@/pages/marketing.vue'
import Investment from '@/pages/investment.vue'
import Information from '@/pages/information.vue'
import Register from '@/pages/register.vue'

// 3.use
Vue.use(VueRouter)
//4创建路由对象
const router = new VueRouter({
    routes: [
      { 
        name:'Index',  
        path: '/', 
      component: Index },
      { 
        name:'Recentnews',  
        path: '/recentnews', 
      component: Recentnews },
      { 
        name:'Hot',  
        path: '/hot', 
      component: Hot },
      { 
        name:'Marketing',  
        path: '/marketing', 
      component: Marketing },
      { 
        name:'Investment',  
        path: '/investment', 
      component: Investment },
      { 
        name:'Information',  
        path: '/information', 
      component: Information },
      { 
        name:'Register',  
        path: '/register', 
      component: Register },
    ]
  })
  // .导出
export default router