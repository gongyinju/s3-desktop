<template>
	<div>
		<p>123</p>
		<component :is="currentView"></component>
	</div>
</template>

<script>
// var passData = JSON.parse(S3.istore.get('passData'));
// import component from ''




console.log(passData);
	export default{
		props:{
			rightView:{}
		},
		data(){
			return {
				currentView:'',
				component:''
			}
		},
		components: {
			instock
		},
		created(){
			this.currentView = this.rightView
		}
	}
</script>