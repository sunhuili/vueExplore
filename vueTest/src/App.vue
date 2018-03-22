<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import './scss/_reset.scss';
  @import '~scss/_variable.scss';
  html, body {
    height: 100%;
    box-sizing: border-box;
  }
  *,*:before,*:after{
    box-sizing: inherit;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $gColor-text;
    height: 100%;
    font-size: .8rem;
  }
</style>
