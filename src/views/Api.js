import axios from 'axios'
const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let token = await localStorage.getItem('token') 
    if(!navigator.onLine){
        alert("Hello! Seems you're offline");
        
        return {
          headers: {},
          method: config.method,
          url: ""
        };
      };
    if (token == null) {
    //   return JSON.parse(token)[0].access_token;
    }
  // token = token ? JSON.parse(token)?.access : null;
  token =  JSON.parse(token)?.access
  token ? config.headers.Authorization = `Bearer ${token}` : null;
  config.headers['Access-Key'] = 'vwznw2mw.O7U8tx23y0vyC5eUClLNyYqaIAJ08P40';
  return config;
});
const baseUrl = 'https://api.mytransporter.io/api'
// before a request is made start the nprogress
axios_instance.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
axios_instance.interceptors.response.use(response => {
  NProgress.done()
  return response
},
function (error) {  
  NProgress.done()
  return Promise.reject(error);  
})
export default {
  axios_instance,
  baseUrl,
}               