import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routeConfig'
import store from './store'
//import Loading from './components/Loading.vue'
import filters from './filters'

Object.keys(filters).forEach((key)=>{
	Vue.filter(key,filters[key])
});

Vue.use(VueRouter);
//Vue.use(Loading);

require('./assets/css/base.css');

const router=new VueRouter({
	mode:'history',
	scrollBehavior: ()=>({y:0}),		// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

axios.interceptors.request.use(function (config) {  //拦截器，配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.prototype.$http = axios;

new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})
