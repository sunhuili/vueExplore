<template>
  <div>
    <canvas ref="ctxGif"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'testCtxGif',
    data() {
      return {
        gifCtx: null,
        gifImg: null,
      }
    },
    mounted() {
      let width = 375;
      let scale = 2;
      var canvas = this.$refs.ctxGif;
      canvas.setAttribute('width', width*scale);
      canvas.setAttribute('height', width*scale);
      canvas.style.width = width + 'px';
      canvas.style.height = width + 'px';
      this.gifCtx = canvas.getContext('2d');
      this.gifCtx.scale(scale, scale);
      this.gifImg = new Image();
      this.gifImg.src = 'static/images/gif/lyf1.gif';
      this.drawImg();
    },
    methods: {
      drawImg() {
        let ctx = this.gifCtx;
        let img = this.gifImg;
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        img.onload = ()=>{
          ctx.drawImage(img,0,0);
        }
        // requestAnimationFrame(this.drawImg);
      },
      loadImage(src) {
        return new Promise((resolve,reject)=>{
          let img = new Image();
          img.onload = function() {
            resolve(img);
          }
          //数据源是base64
          if (src.indexOf('data:image') === 0) {
            img.src = src;
          }
          else{
            //非dataUrl，且不带参
            if (src.indexOf('data:image') !== 0 && src.indexOf('?') === -1) {
              img.src = src + '?' + new Date().getTime();
            }
            //其他情况（dataUrl正常使用，带参的没办法处理）
            else{
              img.src = src;
            }
            img.crossOrigin = '';
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>