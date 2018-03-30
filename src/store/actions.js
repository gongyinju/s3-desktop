import router from '.././router'

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
                    context.commit('setRoles',user.UserEntityroles)
 					let role = user.UserEntityroles[0]
 					context.commit('setCurrentRole',role)
 				}
                router.push('/')
			}
    	}).catch(error => {
            console.log(error)
    		context.commit('userLogout')
    	})
    },
    getBranchCompany (context,appid) {

    },
    getCurrentDealer (context,cutomerId){
    	
    }
}
