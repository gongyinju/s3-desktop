import router from '.././router'

export default {
  setAppId (state,appid){
    state.appid = appid
  },
  setCurrentUser (state, user) {
    s3.istore.set('currentUser',user)
    state.currentUser = user
  },
  setCurrentDealer (state, dealer) {
  	if (dealer !== undefined) {
  	  state.currentDealer = dealer
  	}
  },
  setCurrentCompany (state, company) {
  	if (company !== undefined) {
  	  state.currentCompany = company
  	}
  },
  setCurrentRole (state, role) {
  	if (role !== undefined) {
  	  state.currentRole = role
  	}
  },
  setRoles (state,roles){
    state.roles = roles
  },
  userLogin (state) {
    s3.istore.set('isLogedIn',true)
  	state.isLogedIn = true
  },
  userLogout (state) {
    s3.istore.remove('currentUser')
    s3.istore.remove('isLogedIn')
    s3.istore.remove('isFirstLogedIn')

  	state.isLogedIn = false
    state.currentUser = null
    state.isFirstLogedIn = false
    state.currentUser = null
    state.roles = null
    state.currentRole = null
    state.currentDealer = null
    state.currentCompany = null

    router.push('/login')
  },
  userFirstLogin (state,firstLoginFlag) {
    let flag = !!firstLoginFlag
    s3.istore.set('isFirstLogedIn',flag)
    state.isFirstLogedIn = firstLoginFlag
  },
  pageinfo (state,page){
    state.page = page
  }
}
