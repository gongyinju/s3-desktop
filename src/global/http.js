import store from './../store'
var submitUrl,baseURL='http://109.6.29.153:3000/api';
s3.ajax = function(id,paramStr,appid,method,timeout){
  paramStr = paramStr || "";
  appid = appid || getContextPath() ;
  method = method || "post";
  var submitUrl = getURL(),
    headers = {},axios_config ={};
  try{
    headers.Token = token;
  }catch(e){
    headers = {};
  }
  if(!submitUrl)
    submitUrl = baseURL;
  var url = submitUrl+'/'+appid+id;
  timeout ? axios_config = {params:paramStr,timeout:timeout} : axios_config = {params:paramStr};
  if(method == 'post'){
    var P_post = new Promise(function(resolve, reject){
      axios.post(url,axios_config)
        .then(function (res){
          var retData =  res;
          if(retData["ESPRESSO_RETURN_VERSION"]){
            if(retData.status === "001"||retData.status === "002"||retData.status === "003"){
              retData.retCode = '400';
              //加入stroe
              store.commit('userLogout');
              store.commit('setCurrentUser',null);
              store.commit('setCurrentDealer',null);
              store.commit('setCurrentCompany',null);
              store.commit('setCurrentRole',null);
              reject({
                status:"400",
                retCode:"400",
                retMsg:'用户登陆已超时，请重新登陆'
              });
            }else
              retData = retData.data;
          }
          resolve(retData);
        }).catch(function (error) {
        reject({
          status:"400",
          retCode:"400",
          retMsg:error
        });
        throw new Error(error);
      });
    });
    return P_post;

  }else if (method == 'get'){
    var P_get = new Promise(function(resolve, reject){
      axios.get(url,axios_config)
        .then(function(res){
          var retData =  res;
          if(retData["ESPRESSO_RETURN_VERSION"]){
            if(retData.status === "001"||retData.status === "002"||retData.status === "003"){
              retData.retCode = '400';
              //加入stroe
              store.commit('userLogout');
              store.commit('setCurrentUser',null);
              store.commit('setCurrentDealer',null);
              store.commit('setCurrentCompany',null);
              store.commit('setCurrentRole',null);
              reject({
                status:"400",
                retCode:"400",
                retMsg:'用户登陆已超时，请重新登陆'
              });
            }else
              retData = retData.data;
          }
          resolve(retData);
        }).catch(function(error){
        console.log(error);
        reject({
          status:"400",
          retCode:"400",
          retMsg:error
        });
        throw new Error(error);
      });
    });
    return P_get;
  }
};
s3.setURL = function(url){
  return submitUrl = url;
};
var getURL = function(){
  console.log(submitUrl);
  if(submitUrl){
    return submitUrl;
  }else if(typeof getSubmitURL === 'function'){
    return getSubmitURL();
  }else {
    throw new Error("Undefined");
  }
};

const HttpProtptype = function () {}

HttpProtptype.install = function (Vue, options) {
  // 全局挂载 $http
  Vue.prototype.$http = s3.ajax
}

export default HttpProtptype
