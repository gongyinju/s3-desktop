<template>
  <el-select style="width:100px;margin-right:10px;" size="mini" v-model="currentRole" placeholder="请选择">
    <el-option v-for="role in roles" :key="role.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
export default {
	props；{
		roles: {
			type: Array,
			required: true
		}
	},
	computed: {
		currentRole () {
			return roles[0]
		}
	},
	methods: {
		changeRole () {
			this.$store.commit("setCurrentRole",this.currentRole)
		}
	}

}
</script>