import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import {HttpProtptype, AsyncComponent, JSLoader, CSSLoader} from './global'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(HttpProtptype)
Vue.use(AsyncComponent)
Vue.use(JSLoader)
Vue.use(CSSLoader)
Vue.use(ElementUI)
Vue.config.productionTip = false

// global
if (window.localStorage && (window.localStorage.setItem('a', 123), window.localStorage.getItem('a') === '123')) {
  window.istore = {
    getItemLocal (key) {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
      } else {
        return undefined
      }
    },
    setItemLocal (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    removeItemLocal (key) {
      localStorage.removeItem(key)
    }
  }
} else {
  let storage = {}
  window.localStorageCache = {}
  storage.setItemLocal = function (key, value) {
    window.localStorageCache[key] = value
  }
  storage.getItemLocal = function (key) {
    return window.localStorageCache[key]
  }
  storage.removeItemLocal = function (key) {
    delete window.localStorageCache[key]
  }
  window.istore = storage
}

// dynamic router
const loader = function (resolve, url) {
  if (!window.istore.getItemLocal[url]) {
    axios.get(url).then(function (res) {
      let asyncCom = new Function(`return ${res.data}`)()
      window.istore.setItemLocal(url, asyncCom)
      resolve(asyncCom)
    })
  } else {
    resolve(window.istore.getItemLocal[url])
  }
}

const dynamicRouter = function (router, outerRouter) {
  try {
    outerRouter.forEach(function (item) {
      let path = '/' + item['path']
      router.addRoutes([
        {
          path: path,
          component: function (resolve) {
            loader(resolve, item['url'])
          }
        }
      ])
    })
  } catch (e) {
    throw new Error('你的个性化路由配置似乎出错了!')
  }
}


// 向服务器请求config配置
axios.get('http://localhost:8080/mocks/router').then(function (result) {
  if(result.data.status == '000'){
    dynamicRouter(router, result.data.data)
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}, function (error) {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  });
  // 没读取到配置 404
  throw new Error(error)
});

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

