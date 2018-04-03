import {
	SHOW_HEAD,
	HIDE_HEAD,
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW
} from './types'

const state={
	headShow:true,
	footerShow:true,
	loading:false
};

const mutations={
	[SHOW_HEAD] (state){
		state.headShow=true;
	},
	[HIDE_HEAD] (state){
		state.headShow=false;
	},
	[HIDE_LOADING] (state){
		state.loading=false;
	},
	[SHOW_LOADING] (state){
		state.loading=true;
	},
	[FOOTER_SHOW] (state){
		state.footerShow=true;
	},
	[FOOTER_HIDE] (state){
		state.footerShow=false;
	}
};

const getters={
	headShow(state){
		return state.headShow
	},
	loading(state){
		return state.loading
	},
	footerShow(state){
		return state.footerShow
	}
};

export default {
	state,
	mutations,
	getters
}