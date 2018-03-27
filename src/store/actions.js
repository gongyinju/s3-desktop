export default {
    getUserState (context,appid) {
    	s3.ajax('/user/info',{},appid).then(result => {
			if(result.retCode == '500') {
				context.commit('userLogout')
			} else {
				let user = result.user
                context.commit('userLogin')
				context.commit('setCurrentUser',user)
 				if(user.UserEntityroles){
 					let role = user.UserEntityroles[0]
 					context.commit('setCurrentRole',role)
 				}
			}
    	}).catch(error => {
    		context.commit('userLogout')
    	})
    },
    getBranchCompany (context,appid) {

    },
    getCurrentDealer (context,cutomerId){
    	
    }
}
