import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/';//项目中请求处理文件的路径
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**接口拦截
  axios情况分类：
    请求
        --失败：【前端没发请求】
        --成功：【前端发出请求】
    响应
        --失败：【后端没在限定情况下接收到请求并回应】
        --成功
              --错误：【后端响应不符合接口规则】
              --正确：【后端响应正确】
  axios情况处理：
    1、请求成功：发送请求
    2、响应正确：resolve(response.data)

    1、请求失败：reject(`请求失败：${error}`)
    2、响应失败：reject(`响应失败：${error.message}`)
    3、响应错误：reject(`响应错误：接口对接失败`)
  **/
axios.interceptors.request.use(request=>{
  if(request.method == 'post'){
    for(var item in request.data){
      if(typeof (request.data[item]) === 'object'){
        request.data[item] = JSON.stringify(request.data[item]);
      }
    }
    request.data = qs.stringify(request.data);
  }
  return request;
},error=>{
  let errorMsg = `请求失败：${error}`;
  return Promise.reject(errorMsg);
});
axios.interceptors.response.use(response=>{
  if(!response.data){
    let errorMsg = '响应错误：接口对接失败';
    return Promise.reject(errorMsg);
  }else{
    try{
      response.data = JSON.parse(response.data);
    }catch(e){}
    return response.data;
  }
},error=>{
  let errorMsg = '响应失败：';
  if(error.message.indexOf('timeout') > -1){
    errorMsg += '请求超时';
  }else{
    switch(error.message){
      case 'Network Error':
        errorMsg += '网络无法连接';
        break;
      default:
        errorMsg += error.message;
        break;
    }
  }
  return Promise.reject(errorMsg);
})

export default axios;