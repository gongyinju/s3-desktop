export default {
	roleId: state => state.currentRole.RoleEntityid,
	isLogedIn (state) {
		state.isLogedIn = s3.istore.get('isLogedIn')
		state.currentUser = s3.istore.get('currentUser')
		state.isFirstLogedIn = !!s3.istore.get('isFirstLogedIn')
		return state.isLogedIn && state.currentUser 
	}
}