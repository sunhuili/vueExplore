<template>
  <div class="module-dialog">
    <div class="box-mask">
      <div class = "box-container">
        <div class = "box-content">{{text}}</div>
        <div class="box-bottom">
          <div class="bottom-item"
          	@click="$emit('clickBtn','cancel')">
          	取消
          </div>
          <div class="bottom-item"
          	@click="$emit('clickBtn','ok')">
          	确认
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'alert',
    props:{
      text: {
        type: String,
        required: true,
      },
    },
    methods:{}
  }
</script>

<style lang="scss" scoped>
	@import '../dialog.scss';
</style>
