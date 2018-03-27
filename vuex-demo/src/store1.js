import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	count:10
};

const mutations={
	increment (state){		//当触发一个类型为 increment 的 mutation 时，调用此函数。处理（状态）数据变化,increment,decrement被称为事件类型
		state.count++;
	},
	decrement (state){		//处理（状态）数据变化
		state.count--;
	}
}

const actions={			//处理你要干什么，异步请求，判断，流程控制
	increment:({commit})=>{
		commit('increment')
	},
	decrement:({commit})=>{
		commit('decrement')
	},
	clickEven:({commit,state})=>{
		if (state.count%2 === 0){
			commit('increment')
		}
	},
	clickAsync:({commit})=>{
		new Promise((resolve)=>{
			setTimeout(function(){
				commit('increment');
				resolve();
			},1000)
		})
	}
};

const getters={
	count(state){
		return state.count;
	},
	evenOrOdd(state){
		return state.count%2===0?'偶数':'奇数';
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})