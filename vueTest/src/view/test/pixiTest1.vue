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
        //别名
        let Application = PIXI.Application,
            Container = PIXI.Container,
            loader = PIXI.loader,
            resources = PIXI.loader.resources,
            TextureCache = PIXI.utils.TextureCache,
            Sprite = PIXI.Sprite,
            Rectangle = PIXI.Rectangle;
        //1、创建画布-并添加到dom上
        let app = new Application({
          width: window.innerWidth,
          height: window.innerHeight,
        })
        this.$refs.pixiArea.appendChild(app.view);
        let renderer = app.renderer,
            stage = app.stage;
        renderer.view.style.position = "absolute";
        renderer.view.style.display = "block";
        renderer.autoResize = true;
        //别名
        //2、加载图片
        try{
          loader
            .add('static/images/gif/lyf1.gif')
            .add('static/images/game/sprites.png')
            .load(() => {
            setup();
          });
        }
        catch(e){
          setup();
        }
        function setup() {
          //2.1、创建精灵
          // createSprite();
          function createSprite() {
            let lyf1 = new PIXI.Sprite(
              PIXI.loader.resources['static/images/gif/lyf1.gif'].texture
            );
            stage.addChild(lyf1);
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
            renderer.render(stage);
          }
          //2.2、雪碧图
          createSprites();
          function createSprites() {
            //创建精灵 方式1-TextureCache
            function getImg(hor, ver) {
              let texture = TextureCache['static/images/game/sprites.png'];
              let rectangle = new Rectangle(32*hor, 32*ver, 32, 32);
              texture.frame = rectangle;
              let img = new Sprite(texture);
              img.x = 32*hor;
              img.y = 32*ver;
              return img;
            }
            stage.addChild(getImg(3, 2));
            renderer.render(stage);
          }
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