<template>
  <div class="module-notFound">
    <div>
      <p>喔~外星人把页面拿走了！</p>
      <p v-if="errorPath">路由："{{errorPath}}"</p>
      <div class="btn-next" 
        @click="$router.replace({path: '/'})">
        进入首页
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notFound',
    data() {
      return {
        errorPath: this.$route.query.errorPath,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~scss/_variable.scss";
  @import "~scss/_mixin.scss";
  .module-notFound {
    width: 100%;
    height: 100%;
    @include display(flex);
    align-items: center;
    justify-content: center;
    background: $gColor-main;
    color: $gColor-text-main;
  }
  .btn-next{
    margin-top: .5rem;
    background: $gColor-second;
    height: 2rem;
    line-height: 2rem;
    border-radius: .2rem;
  }
</style>
