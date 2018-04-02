<template>
	<div>
		<s3-breadcrumb :title="breadcrumb"></s3-breadcrumb>
		<s3-leftMenu :leftNav="leftNav"></s3-leftMenu>
		<router-view class="view"></router-view>
	</div>
</template>

<script>


import s3LeftMenu from '@/components/s3-leftMenu'
import s3Breadcrumb from '@/components/s3-breadcrumb'

export default{
	components:{
		s3LeftMenu,
		s3Breadcrumb
	},
	data(){
		return {
			breadcrumb:"采购订单",
			leftNav:'leftNav'
		}
	}
}


</script>

<style scoped>
	
</style>