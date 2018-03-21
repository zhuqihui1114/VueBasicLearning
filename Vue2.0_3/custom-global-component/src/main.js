import Vue from 'vue'
import App from './App.vue'

import load,{love} from './components/loadings/'

Vue.use(love);
Vue.use(load);

new Vue({
  el: '#app',
  render: h => h(App)
})
