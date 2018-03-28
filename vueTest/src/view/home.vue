<template>
  <div>
    <div class="m-route m-route-1">
      <div class="u-route u-route-1"
        v-if="!routeFirst.meta || !routeFirst.meta.hidden"
        v-for="routeFirst in routes">
        <div class="item" @click="$router.push(routeFirst)">
          {{routeFirst.name}}
        </div>
        <div class="u-route u-route-2"
          v-for="routeSecond in routeFirst.children">
          <div class="item" @click="$router.push(routeSecond)">
            {{routeSecond.name}}
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
  .m-route{
    background: $gColor-main;
    color: $gColor-text-main;
    text-align: left;
    padding: $gSpace-content;
    .u-route{
      .item{
        display: block;
        height: 2rem;
        line-height: 2rem;
      }
    }
    .u-route-1{
      border-bottom: 1px solid $gColor-main-dark;
      &:last-child{
        border-bottom: none;
      }
    }
    .u-route-2{
      padding-left: .5rem;
      background: $gColor-main-dark;
    }
  }
</style>