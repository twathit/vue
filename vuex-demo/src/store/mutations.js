import {INCREMENT,DECREMENT} from './types'


const mutations={
	[INCREMENT] (state){		//处理（状态）数据变化
		state.count++;
	},
	[DECREMENT] (state){		//处理（状态）数据变化
		state.count--;
	}
};

export default mutations
