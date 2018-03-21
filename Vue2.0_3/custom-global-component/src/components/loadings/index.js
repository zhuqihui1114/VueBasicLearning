import LoadingComponent from './Loading.vue'
import Loading1Component from  './Loading1.vue'

const love = {
	install: function(Vue) {
		Vue.component('LoadingTag', LoadingComponent)
	}
};

const load = {
  install: function(Vue) {
    Vue.component('MyLoadingTag', Loading1Component)
  }
};

export {love};
export default load;

