<template>
  <div>
    <canvas ref="canvas"></canvas>
    <img ref="output" src="" alt="">
  </div>
</template>

<script>
  import {parseCtxPoint, drawCtxLine, drawCtxText} from '@/js/utils/ctxBasis.js'
  import 'static/js/gif.js'
  export default {
    name: 'ctxGif',
    data() {
      return {
        ctxCanvas: null,
        width: 187.5,
        scale: 2,
        num: 3,
        gap: 0.3,
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

      this.renderGif();
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
        //共this.num个点，两两相连
        for(var i = 0; i < this.num; i++){
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
        let text = parseInt(this.num);
        let point = {x: 0, y: 0};
        let config = {
          color: '#000',
          font: '24px Avenir',
          pointPlace: {
            x: 'center',
            y: 'center',
          },
        };
        drawCtxText(ctx, text, point, config);
        setTimeout(this.drawCanvas, 20);
      },
      renderGif() {
        let gif = new GIF({
          workers: 2,
          quality: 10,
          workerScript: 'static/js/gif.worker.js',
        });
        for(let i = 0; i < 50; i++){
          gif.addFrame(this.$refs.canvas, {
            delay: 10,
          });
        }
        gif.on('finished', blob => {
          this.$refs.output.src = URL.createObjectURL(blob);
        });
        gif.render();
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>