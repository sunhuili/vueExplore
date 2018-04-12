<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  import {drawCtxLine,drawCtxText,drawCtxCicle,drawCtxImage} from '@/js/utils/ctxBasis.js';
  export default {
    name: 'ctxBasis',
    data() {
      return {
        ctx: null,
        width: 375,
        scale: 2,
      }
    },
    mounted() {
      let canvas = this.$refs.canvas;
      canvas.setAttribute('width', this.width* this.scale);
      canvas.setAttribute('height', this.width* this.scale);
      canvas.style.width = this.width + 'px';
      canvas.style.height = this.width + 'px';
      this.ctx = canvas.getContext('2d');
      this.ctx.scale(this.scale, this.scale);

      this.drawCanvas();
    },
    methods: {
      drawCanvas() {
        this.testLine();
        this.testText();
        this.testCicle();
        this.testImage();
      },
      testLine() {
        let point1 = {x: 0, y: 0},
          point2 = {x: this.width, y: this.width},
          config = {
            color: `rgba(0, 234, 178, 1)`,
            lineWidth: 1,
          };
        drawCtxLine(this.ctx, point1, point2, config);
      },
      testText() {
        let text = '画文本',
          point = {x: 0, y: 0},
          config = {
            color: `rgba(123, 55, 7, .5)`,
            font: '12px Calibri',
            pointPlace: {
              x: 'start',
              y: 'start',
            }
          };
        drawCtxText(this.ctx, text, point, config);
      },
      testCicle() {
        let origin = {x: 30, y: 30},
          radius = 30,
          angle1 = 0,
          angle2 = Math.PI/2,
          config = {
            color: `rgba(43,209,12,1)`,
            anticlockwise: true,
          };
        drawCtxCicle(this.ctx, origin, radius, angle1, angle2, config);
      },
      testImage() {
        let src = 'static/images/loading.gif',
          point = {x: 30, y: 30},
          config = {};
        drawCtxImage(this.ctx, src, point, config);
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>