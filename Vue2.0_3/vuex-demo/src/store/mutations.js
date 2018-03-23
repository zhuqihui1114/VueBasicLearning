import * as types from './types';
import getters from './getters';

export default {
  state : {
    count: 0
  },
  mutations: {
    [types.INCREMENT] (state) {
      state.count++
    },
    [types.DECREMENT] (state){
      state.count--
    }
  },
  getters

}
