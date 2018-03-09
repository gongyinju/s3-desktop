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
import S3Footer from './components/S3Footer'

export default {
  name: 'app',
  components: {
    Login,
    Home
  }
}
</script>

<style>
	#app{padding-bottom:80px;}

</style>
