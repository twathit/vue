import Vue from 'vue'
import App from './App.vue'
import VueMarkdown from 'vue-markdown'

Vue.use(VueMarkdown);

new Vue({
  el: '#app',
  render: h => h(App)
})
