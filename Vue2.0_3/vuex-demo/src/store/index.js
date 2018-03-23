import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
  actions,
  modules:{
    mutations
  }
});

export default store
