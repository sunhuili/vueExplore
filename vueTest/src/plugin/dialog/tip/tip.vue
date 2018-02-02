<template>
  <div class="module-dialog">
    <div class="box-mask" @click="$emit('close')">
      <div class = "box-container" @click.stop>
        <div class = "box-content">{{text}}</div>
        <div class = "box-bottom">{{time}} 秒后自动关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'tip',
    props:{
      text: {
        type: String,
        required: true,
      },
      time: {
        type: Number,
        required: true,
      }
    },
    mounted() {
      setTimeout(()=>{
        this.$emit('close');
      }, this.time*1000);
    },
    methods:{}
  }
</script>

<style lang="scss" scoped>
  @import '../dialog.scss';
</style>
