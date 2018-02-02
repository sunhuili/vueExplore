<template>
  <div class="module-notFound">
  	<div>
  		喔~找不到页面了！
  	</div>
  </div>
</template>

<script>
	export default {
		name: 'notFound',
	}
</script>

<style lang="scss" scoped>
	@import "~scss/_variable.scss";
	@import "~scss/_mixin.scss";
	.module-notFound {
		width: 100%;
	  height: 100%;
		background: $theme-color-gray;
		color: #fff;
		@include display(flex);
		align-items: center;
		justify-content: center;
	}
</style>
