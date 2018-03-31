import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routeConfig.js'
import axios from 'axios'
import stores from './store/store'
import Loading from './components/Loading'
import filters from './filters'
Vue.filter('normalTime', filters)

require('./assets/css/base.css'); //引入全局的base文件
require('./assets/css/index.css'); //引入全局的index文件

Vue.use(VueRouter);
Vue.use(Loading);


const router=new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes //key 必须是routes
});

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});


var zqh = new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
