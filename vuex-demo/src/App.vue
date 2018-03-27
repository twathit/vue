<template>
	<div id="app">
	    <button @click="increment">增加</button>
		<button @click="decrement">减少</button>
		<button @click="clickEven">偶数才能点击+</button>
		<button @click="clickAsync">点击异步</button>
	    <div>
	    	现在数字为：{{count}},它现在是{{evenOrOdd}}
	    </div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		
	  	name: 'app',
	  	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    	}
	  	},
	  	methods: mapActions([
	  			'increment','decrement','clickEven','clickAsync'
	  		]),
	  	computed:mapGetters([
	  		'count','evenOrOdd'
	  		])

	}
</script>

<style>

</style>
