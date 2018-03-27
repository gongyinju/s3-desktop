export default {
	roleId: state => state.currentRole.RoleEntityid,
	isLogedIn (state) {
		if(!state.isLogedIn){
			state.isLogedIn = s3.istore.get('isLogedIn')
			state.user = s3.istore.get('currentUser')
		}
		return state.isLogedIn
	}
}