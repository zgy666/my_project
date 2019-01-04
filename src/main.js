// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'


axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method == 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
