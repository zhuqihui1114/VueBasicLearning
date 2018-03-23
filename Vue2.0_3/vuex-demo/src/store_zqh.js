import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state){
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context){
      context.commit('decrement')
    },
    clickOdd (context){
      console.log(context);
      if (context.state.count % 2 == 0) {
        context.commit('increment');
      }
    },
    clickAsync (context){

      new Promise(function (resolve, reject) {
        var timeOut = Math.random() * 2;
        console.log('set timeout to: ' + timeOut + ' seconds.');
        setTimeout(function () {
          if (timeOut < 1) {
            console.log('call resolve()...');
            //调用then中的函数
            resolve('200 OK');
          }
          else {
            console. log('call reject()...');
            //调用catch中的函数
            reject('timeout in ' + timeOut + ' seconds.');
          }
        }, timeOut * 1000);
      }).then(function (result) {
        console.log('成功：' + result);
        context.commit('increment');
      }).then(function (result) {
        console.log('成功2222：' + result);
        context.commit('increment');
      }).catch(function (reason) {
        console.log('失败：' + reason);
        context.commit('decrement');
      });
    }
  },
  getters: {
    count(state) {
      return state.count;
    },
    getOdd(state) {
      return state.count % 2 == 0 ? '偶数' : '奇数';
    }
  }
})


export default store;
