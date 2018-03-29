import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Index from '@/views/module/index'
import Purchase from '@/views/module/purchase'
import Check from '@/views/module/check'
import Instock from '@/views/module/instock'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Home',
    name:'Home',
    component: function (resolve) {require(['@/views/Home'], resolve)},
    children:[
      {
        path: '/',
        component: Index
      },
      {
        path: '/Purchase',
        component: function (resolve) {require(['@/views/module/purchase'], resolve)}
      },
      {
        path: '/Index',
        component: Index
      },
      {
        path: '/Check',
        component: function (resolve) {require(['@/views/module/check'], resolve)}
      },
      {
        path: '/Instock',
        component: function (resolve) {require(['@/views/module/instock'], resolve)}
      }
    ]
  }
]

var router = new VueRouter({
  routes
})

/**
 * 导航守卫
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 *
*/
router.beforeEach((to, from, next) => {
  // 进入路由前
  console.log('导航开始，进入组件前，导航触发')
  next()
  if (to.path === '/login') {
    next()
  } else {
    if (to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
      next({path: '/login'})
    } else {
      next()
    } //如果不需要登录验证，或者已经登录成功，则直接放行
  }
})

router.afterEach((to, from) => {
  // 进入路由后
  console.log('进入组件，守卫触发')
})

export default router
