import store from './../store'


var defaultOptions = {
  method: 'post',
  timeout: 3000,
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' //x-www-form-urlencoded
  },
  baseUrl: 'http://localhost:8080/mocks'
}

s3.setBaseURL = function(url){
  defaultOptions.baseUrl = url
}

s3.ajax = function(url,param,appid,options){
  var urlReg = /(http)(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/)?([a-zA-Z0-9\-\,\?\,\'\/\\\+&amp%\$#_]*)?/

  options = options || {}
  param = param || {}
  appid = appid || 's3Core'
  var option = s3.extend(defaultOptions,options)

  if(urlReg.test(url)){
    option.url = url
  }else{
    option.url = option.baseUrl + '/'+ appid + url
  }
  option.data = JSON.stringify(param)

  if(!urlReg.test(option.baseUrl) && !urlReg.test(url)){
    throw new Error("未定义的ajax提交地址 请先调用S3.setBaseUrl来定义ajax的提交地址.")
  }

  return new Promise(function(resolve, reject){
    axios(option).then(function (res){
      var retData =  res.data
      if(option.url.indexOf('unicorn.sdc.cs.icbc')>-1){
        retData = JSON.parse(retData.result).data
      }
      if(retData["ESPRESSO_RETURN_VERSION"]){
        if(retData.status === "001"||retData.status === "002"||retData.status === "003"){
          retData.retCode = '400'
          retData.retMsg = '系统错误，调用失败'
        }else{
          retData = retData.data
        }
      }
      
      if(retData["status"] && retData.status === "004"){
        store.commit('userLogout')
        store.commit('setCurrentUser',null)
        store.commit('setCurrentDealer',null)
        store.commit('setCurrentCompany',null)
        store.commit('setCurrentRole',null)
        reject({
          status:"400",
          retCode:"400",
          retMsg:'用户登陆已超时，请重新登陆'
        })
      }else{
        resolve(retData)
      }
    }).catch(function (error) {
        reject({
            status:"400",
            retCode:"400",
            retMsg:error
        })
        throw new Error(error)
    })
  })
}

const HttpProtptype = function () {}

HttpProtptype.install = function (Vue, options) {
  // 全局挂载 $http
  Vue.prototype.$http = s3.ajax
}

export default HttpProtptype
