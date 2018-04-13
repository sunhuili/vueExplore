<template>
  <div class="g-page" ref="pixiArea">
  </div>
</template>

<script>
  import * as PIXI from 'static/js/pixi.js'
  export default {
    name: 'pixiTest1',
    data() {
      return {
        glAPP: null,
      }
    },
    mounted() {
      // this.testPIXI();
      this.drawPIXI();
    },
    methods: {
      testPIXI() {
        let type = 'WebGL';
        if (!PIXI.utils.isWebGLSupported) {
          type = 'canvas';
        }
        PIXI.utils.sayHello(type);
      },
      drawPIXI() {
        //1、创建画布-并添加到dom上
        let app = new PIXI.Application({
          width: window.innerWidth,
          height: window.innerHeight,
        })
        this.$refs.pixiArea.appendChild(app.view);
        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;
        //2、PIXI加载图片
        function loadSprite(url) {
          return new Promise((resolve,reject) => {
            if (PIXI.loader.resources[url]) {
              resolve();
            }
            else{
              PIXI.loader.add(url).load(() => {
                resolve();
              })
            }
          })
        }
        //2.1、创建精灵
        createSprite();
        function createSprite() {
          loadSprite('static/images/gif/lyf1.gif').then(()=>{
            let lyf1 = new PIXI.Sprite(
              PIXI.loader.resources['static/images/gif/lyf1.gif'].texture
            );
            app.stage.addChild(lyf1);
            //定位
            lyf1.x = 96;
            lyf1.y = 96;
            //旋转
            lyf1.rotation = Math.PI;//顺时针旋转;一周Math.PI * 2
            //锚点
            lyf1.anchor.set(0.5, 0.5);
            //缩放
            lyf1.scale.set(0.5, 0.5);
            //显隐
            lyf1.visible = true;
          })
        }
        //2.2、使用雪碧图
        // createSprites();
        function createSprites() {
          loadSprite('assets/images/game/09.png').then(()=>{
            console.log('ddd');
          })
        }
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
  .g-page{
    height: 100%;
    padding: 0;
    margin: 0;
    .canvas{
      padding: 0;
      margin: 0;
    }
  }
  *{
    padding: 0;
    margin: 0;
  }
</style>