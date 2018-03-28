<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  import {drawCtxLine} from '@/js/utils/canvasBasis.js';
  export default {
    name: 'testCanvasBasis',
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
        let point1 = {x: 0, y: 0},
          point2 = {x: this.width/2, y: this.width/2},
          config = {
            color: `rgba(0, 234, 178, .8)`,
            lineWidth: 4,
          };
        drawCtxLine(this.ctx, point1, point2, config);
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>