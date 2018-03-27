/**
 * 路由配置
 *
 */
module.exports = {
  url: 'http://localhost:8080/components/', 
  project: 's3Core',
  routes: [
    {
      path: '/lvjinchengtese',
      name: '异步组件',
      component: 'lvjinchengtese',
      dir: 'src/views/Home.vue'
    }
  ]
}