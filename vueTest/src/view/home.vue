<template>
  <div>
    <div class="g-head">功能导航</div>
    <div class="g-body">
      <div class="m-route">
        <div class="u-route-box u-route-box-1"
          v-if="!routeFirst.meta || !routeFirst.meta.hidden"
          v-for="routeFirst in routes">
          <div class="u-route-item" @click="$router.push(routeFirst)">
            {{routeFirst.name}}
          </div>
          <div class="u-route-box u-route-box-2"
            v-for="routeSecond in routeFirst.children">
            <div class="u-route-item" @click="$router.push(routeSecond)">
              {{routeSecond.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router'
  export default {
    name: 'home',
    data() {
      return{
        routes: router.options.routes,
      }
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
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
  .m-route{
    text-align: left;
    color: $gColor-gray-dark;
    .u-route-item{
      box-shadow: 0 0 .2rem 0 rgba(0, 0, 0, .2) inset;
      display: block;
      height: 2rem;
      line-height: 2rem;
      padding-left: .5rem;
    }
    .u-route-box{
      background: rgba($gColor-main, .2);;
    }
  }
</style>