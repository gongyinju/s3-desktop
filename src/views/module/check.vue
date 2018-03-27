<template>
	<div>
		<s3-breadcrumb :title="breadcrumb"></s3-breadcrumb>
		<p>审批列表</p>
	</div>
</template>

<script>
	import s3Breadcrumb from '@/components/s3-breadcrumb'

	export default{
		components:{
			s3Breadcrumb
		},
		data(){
			return {
				breadcrumb:"审核"
			}
		}
	}
</script>