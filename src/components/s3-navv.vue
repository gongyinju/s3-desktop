<template>
	<el-menu defalut-active="0" class="el-menu-demo" mode = "horizontal" @select="handleSelect">
		<el-menu-item v-for="(item,$i) in list" :index="''+$i">{{item.navName}}</el-menu-item>
	</el-menu>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{
					url:'/Home',
					navName:'标题1'
				},
				{
					url:'/Home',
					navName:'标题2'
				}
			]
		}
	},
	mounted () {
		
	},
	methods: {
		handleSelect: function(index){
			console.log(index)
			let item = this.list[index]
			var urlReg = /(http)(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/)?([a-zA-Z0-9\-\,\?\,\'\/\\\+&amp;%\$#_]*)?/
			if(urlReg.test(item.url)){
				window.location.href = item.url
			}else{
				this.$router.push(item.url)
			}
		}
	}
}
</script>