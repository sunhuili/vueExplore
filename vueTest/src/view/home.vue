<template>
	<div>
		<div>首页</div>
		<button @click="$router.push('ceshi')">进入测试页</button>
	</div>
</template>

<script>
	export default {
		name: 'home',
	}
</script>

<style lang="scss" scoped="">
	@import '../scss/_variable.scss';
</style>