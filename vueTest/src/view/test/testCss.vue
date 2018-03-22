<template>
  <div>
    <div class="m-css m-css-1">
      <div class="m-title">水平居中</div>
      <div class="m-body">
        <!-- inline/inline-block/inline-table/inlin/flex -->
        <div class="u-item u-item-1">类行内元素</div>
        <!-- 元素设好宽度 -->
        <div class="u-item u-item-2">
          <div>块级元素</div>
        </div>
        <!-- display:inline-block变为行内元素 -->
        <div class="u-item u-item-3">
          <div>多</div>
          <div>个</div>
          <div>块级元素</div>
        </div>
      </div>
    </div>
    <div class="m-css m-css-2">
      <div class="m-title">垂直居中</div>
      <div class="m-body">
        <!-- 行内元素 -->
        <div class="u-item u-item-1">类行内元素</div>
        <div class="u-item u-item-2">
          <p>
            多行元素
            多行元素
            多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素多行元素
          </p>
        </div>
        <div class="u-item u-item-3">
          <div>块级元素</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testCss',
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
  @import '~scss/_mixin.scss';
  .m-css{
    text-align: left;
    .m-title{
      background: $gColor-main-dark;
      color: $gColor-text-main;
      font-weight: bold;
      padding: $gSpace-content;
    }
    .m-body{
      .u-item{
        border-bottom: 1px solid $gColor-main-light;
      }
    }
  }
  //水平居中
  .m-css-1{
    .u-item-1{
      background: $gColor-second-light;
      text-align: center;
    }
    .u-item-2{
      div{
        background: $gColor-second-light;
        width: 30%;
        margin: 0 auto;
      }
    }
    .u-item-3{
      width: 30%;
      margin: 0 auto;
      background: $gColor-second-light;
      div{
        display: inline-block;
        background: $gColor-second;
      }
    }
  }
  //垂直居中
  .m-css-2{
    .u-item-1{
      //方式1、padding
      padding-top: .5rem;
      padding-bottom: .5rem;
      //方式2、line-height
      // height: 2rem;
      // line-height: 2rem;
      background: $gColor-second-light;
    }
    .u-item-2{
      //方式1、不定高padding
      // padding-top: .5rem;
      // padding-bottom: .5rem;
      //方式2、定高table-cell
      // height: 8rem;
      // display: table-cell;
      // vertical-align: middle;
      //方式3、定高flexbox
      height: 8rem;
      @include display(flex);
      align-items: center;
      //方式4、伪元素
      // position: relative;
      // &:before,&:after{
      //   content: '';
      //   display: inline-block;
      //   height: 100%;
      //   width: 1%;
      // }
      // p{
      //   display: inline-block;
      //   vertical-align: middle;
      // }
      background: $gColor-second-light;
    }
    .u-item-3{
      height: 4rem;
      //方式1、已知高度margin
      // position: relative;
      // div{
      //   position: absolute;
      //   top: 50%;
      //   height: 2rem;
      //   margin-top: -1rem;
      //   background: $gColor-second;
      // }
      //方式2、未知高度transform
      // position: relative;
      // div{
      //   position: absolute;
      //   top: 50%;
      //   transform: translateY(-50%);
      //   background: $gColor-second;
      // }
      //方式3、未知高度flexbox
      // @include display(flex);
      // align-items: center;
      // div{
      //   background: $gColor-second;
      // }
      //方式4、纯absolute
      position: relative;
      div{
        width: 50%;
        height: 50%;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: $gColor-second;
      }
      background: $gColor-second-light;
    }
  }
  //居中方式总结：1、主要是flexbox、transform、margin、absolute
</style>