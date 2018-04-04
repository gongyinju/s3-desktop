<template>
	<el-dropdown trigger="click" v-if="user" @command="clickHander">
		<span class="el-dropdown-link">
			<i class="iconfont icon-yonghuming"></i>{{user.UserEntityuserName}}
			<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item command="userinfo"><i style="left:-5px" class="iconfont icon-yonghuming"></i>用户信息</el-dropdown-item>
			<el-dropdown-item command="changePwd"><i style="left:-5px;top:2px;" class="iconfont icon-xiugaimima2"></i>修改密码</el-dropdown-item>
			<el-dropdown-item command="logout"><i style="left:-5px;top:1px;" class="iconfont icon-tuichu"></i>退出</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>
<script>
export default {
	data () {
		return {
		}
	},
	computed: {
		user () {
			return this.$store.state.currentUser
		}
	},
  	methods: {
  		clickHander (cmd) {
  			switch(cmd){
  				case 'logout': 
  					this.$store.commit('userLogout')
  					break
  				case 'changePwd':
  					console.log('changePwd')
  					break
  				default:
  					console.log('userinfo')
  			}
  		}
 	 }
}
</script>
