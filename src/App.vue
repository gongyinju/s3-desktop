<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'


export default {
  name: 'app',
  components: {
    Login,
    Home
  }
}
</script>

<style scoped>
  .app{min-width:1250px;overflow: hidden;}
  .skin-color{
    color:#409EFF;
  }
  .text-black{
    color:#303133;
  }
</style>
