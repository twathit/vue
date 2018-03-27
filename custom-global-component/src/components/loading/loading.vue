<template>
	<div class="loading-box">
		{{msg}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'loading...'
			}
		}
	}
</script>

<style>
	.loading-box {
		color: red;
		font-size: 40px;
		font-family: '微软雅黑';
		text-shadow: 2px 2px 1px #000;
	}
</style>