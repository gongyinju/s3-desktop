<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default{
		props: ['title']
	}
</script>

<style scoped>
	.el-breadcrumb{width:1250px;margin:0 auto;line-height:50px;margin-top:10px;}
</style>