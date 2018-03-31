import Vue from 'vue'
import App from './App.vue'


require('./assets/css/base.css'); //引入全局的base文件
require('./assets/css/index.css'); //引入全局的base文件

new Vue({
  el: '#app',
  render: h => h(App)
})
