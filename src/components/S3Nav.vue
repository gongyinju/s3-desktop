<template>
	<div>
		<div class="nav">
			<ul class="nav_list">
				<router-link to="/Index" tag="li"><span>首页</span></router-link>
				<router-link to="/Purchase" tag="li"><span>订单查询</span></router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>	
</template>

<script>

</script>



<style scoped>
	.router-link-exact-active span{display:inline-block;width:80%;height:100%;border-bottom:4px solid #70bbe7;margin:0 auto;box-sizing: border-box;color:#1c9fe1;}

	.nav{width:100%;height:50px;line-height:50px;background-color:#0a5785;color:#fff;}
	.nav_list{width:1250px;height:100%;margin:0 auto;}
	.nav_list>li{width:12%;height:100%;overflow:hidden;text-align:center;float: left;cursor: pointer;}
</style>