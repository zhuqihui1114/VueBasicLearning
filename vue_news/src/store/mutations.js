import {
	HEAD_SHOW,
	HEAD_HIDE,
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW
} from './type'

const state={
	headShow:true,
	loading:false,
	footerShow:true
};

const mutations={
	/*头部*/
	[HEAD_SHOW](state){
		state.headShow=true;
	},
	[HEAD_HIDE](state){
		state.headShow=false;
		//console.log(state.headShow);
	},
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*footer*/
	[FOOTER_HIDE](state){
		state.footerShow=false;
	},
	[FOOTER_SHOW](state){
		state.footerShow=true;
	}
};

const getters={
	headShow(state){
		return state.headShow;
	},
	loading(state){
		return state.loading;
	},
	footerShow(state){
		return state.footerShow;
	}
};

export default{
	state,
	mutations,
	getters
}
