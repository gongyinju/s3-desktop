import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Index from '@/views/module/index'
import Purchase from '@/views/module/purchase'
import Check from '@/views/module/check'
import Instock from '@/views/module/instock'
import MyStock from '@/views/module/myStock'


Vue.use(VueRouter)


let loginRoutes = []
try {
  let loginConfig = config.basic.login
  loginRoutes = [
    {
      path: '/login',
      name: '',
      meta: {
        allowBack:false
      },
      component: Login
    }
  ]
}catch(e){

}

let routes = [
  {
    path: '/',
    redirect: 'Home'
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
        component: function (resolve) {require(['@/views/module/purchase'], resolve)},
        children:[
          {
            path: '/',
            component: function (resolve) {require(['@/views/module/instock'], resolve)}
          },
          {
            path: '/Instock',
            component: function (resolve) {require(['@/views/module/instock'], resolve)}
          },
          {
            path: '/MyStock',
            component: function (resolve) {require(['@/views/module/myStock'], resolve)}
          }
        ]
      },
      {
        path: '/Index',
        component: Index
      },
      {
        path: '/Check',
        component: function (resolve) {require(['@/views/module/check'], resolve)}
      }
    ]
  }
]

routes = loginRoutes.concat(routes)

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

  let backState = ''
  if(to.meta.backState){
    backState = to.meta.backState
  }else if(to.path !== '/login' && to.path !== '/home' && to.path !== '/'){
    backState = from.path
  }

  let page = {
    title: to.name,
    backState: backState,
    goHome: to.meta.goHome || false
  }
  store.commit('pageinfo', page)
   console.log(store.state)  
  // 进登录页面直接进，不用判登录
  if(config.basic.login == false || to.path == '/login'){
    next()
  }else if(!store.getters.isLogedIn ||　store.state.isFirstLogedIn) {
    next({
      path: '/login'
    })
  }else{
    next()
  }
})

router.afterEach((to, from) => {
  // 进入路由后
})

export default router
