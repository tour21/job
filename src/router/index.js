import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import member from '@/components/member'
import shopcar from '@/components/shopcar'
import search from '@/components/search'

Vue.use(Router)

export default new Router({ 
  routes: [
     {path: '/home', component: home},
     {path: '/member', component: member},
     {path: '/shopcar', component: shopcar},
     {path: '/search', component: search}
  ],
  linkActiveClass: 'mui-active'
  
})
