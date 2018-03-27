import Vue from 'vue'
import App from './App.vue'

import store from './store/'
//import store from './store1'


new Vue({
	store,
  	el: '#app',
  	render: h => h(App)
})
