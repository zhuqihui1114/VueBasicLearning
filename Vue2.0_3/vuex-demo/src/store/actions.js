import {INCREMENT,DECREMENT} from './types';

export default {
  increment (context) {
    context.commit(INCREMENT)
  },
  decrement (context){
    context.commit(DECREMENT)
  },
  clickOdd (context){
    console.log(context);
    console.log(context.state.mutations.count);
    if (context.state.mutations.count % 2 == 0) {
      context.commit(INCREMENT);
    }else{
      console.log('这是奇数');
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
      context.commit(INCREMENT);
    }).then(function (result) {
      console.log('成功2222：' + result);
      context.commit(INCREMENT);
    }).catch(function (reason) {
      console.log('失败：' + reason);
      context.commit(DECREMENT);
    });
  }
}
