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

  userLogin (state) {
    s3.istore.set('isLogedIn',true)
  	state.isLogedIn = true
  },
  userLogout (state) {
    s3.istore.remove('currentUser')
    s3.istore.remove('isLogedIn')
  	state.isLogedIn = false
    state.currentUser = null
  },
  userFirstLogin (state,firstLoginFlag) {
    state.isFirstLogedIn = firstLoginFlag
  },
  pageinfo (state,page){
    state.page = page
  }
}
