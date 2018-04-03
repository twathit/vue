import * as types from './types'

export default{
	showHeader:({commit})=>{
		commit(types.SHOW_HEAD);
	},
	hideHeader:({commit})=>{
		commit(types.HIDE_HEAD);
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING);
	},
	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING);
	},
	showFooter:({commit})=>{
		commit(types.FOOTER_SHOW);
	},
	hideFooter:({commit})=>{
		commit(types.FOOTER_HIDE);
	}
}