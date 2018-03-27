import LoadingComponent from './loading.vue'

const Loading={
	install:function(Vue) {
		Vue.component('loading',LoadingComponent)
	}
};

export default Loading