<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  import {parseCtxPoint, drawCtxLine} from '@/js/utils/canvasBasis.js'
  export default {
    name: 'testCtxGif',
    data() {
      return {
        ctxCanvas: null,
        width: 375,
        scale: 2,
        num: 3,
        gap: 0.03,
      }
    },
    mounted() {
      var canvas = this.$refs.canvas;
      canvas.setAttribute('width', this.width*this.scale);
      canvas.setAttribute('height', this.width*this.scale);
      canvas.style.width = this.width + 'px';
      canvas.style.height = this.width + 'px';
      this.ctxCanvas = canvas.getContext('2d');
      this.ctxCanvas.scale(this.scale, this.scale);
      this.ctxCanvas.translate(this.width/2, this.width/2);
      this.drawCanvas();
    },
    methods: {
      drawCanvas() {
        let ctx = this.ctxCanvas;
        var center = this.width/2;
        if(this.num > 20 || this.num < 3){
          this.gap -= this.gap*2;
        }
        this.num += this.gap;
        ctx.clearRect(-center, -center, center*2, center*2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(-center, -center, center*2, center*2);
        ctx.fillStyle = '#000';
        ctx.font = '24px Avenir';
        ctx.fillText(parseInt(this.num), 100, 100);
        for(var i = 0; i < this.num; i++){//共this.num个点，两两相连
          for(var j = 0; j < this.num; j++){
            if(i != j){
              let point1 = parseCtxPoint({
                radius: center,
                angle: Math.PI*2 * (i/this.num),
              });
              let point2 = parseCtxPoint({
                radius: center,
                angle: Math.PI*2 * (j/this.num),
              });
              let config = {color: '#856725'};
              drawCtxLine(ctx, point1, point2, config);
            }
          }
        }
        setTimeout(this.drawCanvas, 20);
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>