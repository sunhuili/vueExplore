<template>
  <div class="module-dialog">
    <div class="box-mask">
      <div class = "box-container">
        <div class = "box-content">{{text}}</div>
        <div class="box-bottom">
          <img src="~static/images/loading.gif">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'loading',
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
