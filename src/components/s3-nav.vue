<template>
	<div>
		<div class="nav">
			<ul class="nav_list">
				<li>
					<router-link to="/Index"><span>首页</span></router-link>
				</li>
				<li v-for="(item,index) in nav">
					<router-link :to="item.menuUrl"><span>{{item.menuName}}</span></router-link>
				</li>
			</ul>
		</div>
		<router-view class="main"></router-view>
	</div>	
</template>

<script>

export default{
	props:["nav"]
}


</script>



<style scoped>
	.router-link-exact-active span{display:inline-block;width:80%;height:100%;border-bottom:4px solid #70bbe7;margin:0 auto;box-sizing: border-box;color:#1c9fe1;}

	.nav{width:100%;height:50px;line-height:50px;background-color:#0a5785;color:#fff;}
	.nav_list{width:1250px;height:100%;margin:0 auto;}
	.nav_list>li{width:12%;height:100%;overflow:hidden;text-align:center;float: left;cursor: pointer;}
	.nav_list a{color:#fff;}
	.nav_list span{display:block;height:100%;}
	.main{width:1250px;margin:0 auto;}
</style>