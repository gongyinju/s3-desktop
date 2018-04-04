<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
body,div,p,span,ul,li,h1,h2,h3{margin:0 0;padding:0 0;}
ul,li{list-style: none;}
a{text-decoration: none;}

.mar_l20{margin-left:20px;}
.mar_l10{margin-left:20px;}
.app{min-width:1250px;overflow: hidden;}
.skin-color{
  color:#409EFF;
}
.text-black{
  color:#303133;
}
</style>
