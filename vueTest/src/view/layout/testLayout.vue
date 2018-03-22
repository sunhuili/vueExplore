<template>
  <div class="p-testLayout">
    <div class="g-head">测试-{{$route.meta.testName}}</div>
    <div class="g-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testLayout',
  }
</script>

<style lang="scss" scoped>
  @import "~scss/_variable.scss";
  .p-testLayout{
    height: 100%;
  }
  .g-head{
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    height: $gHeight-head;
    line-height: $gHeight-head;
    background: $gColor-main;
    color: $gColor-text-main;
  }
  .g-body{
    min-height: 100%;
    overflow: auto;
    padding-top: $gHeight-head;
  }
</style>
