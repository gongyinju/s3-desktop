<template>
	<div>
		<p >这是首页内容</p>
		<div class="block">
	    	<el-carousel class="">
	      		<el-carousel-item v-for="item in 4" :key="item">
	       			<h3>{{ item }}</h3>
	      		</el-carousel-item>
	    	</el-carousel>
  		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
		}
	}
}
</script>