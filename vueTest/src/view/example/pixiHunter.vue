<template>
  <div class="g-page" ref="pixiArea">
  </div>
</template>

<script>
  import * as PIXI from 'static/js/pixi.js'
  export default {
    name: 'pixiHunter',
    data() {
      return {
        glAPP: null,
      }
    },
    mounted() {
      this.drawPIXI();
    },
    methods: {
      drawPIXI() {
        //别名
        let Application = PIXI.Application,
            Container = PIXI.Container,
            loader = PIXI.loader,
            resources = PIXI.loader.resources,
            Graphics = PIXI.Graphics,
            TextureCache = PIXI.utils.TextureCache,
            Sprite = PIXI.Sprite,
            Text = PIXI.Text,
            TextStyle = PIXI.TextStyle;
        //创建画布对象
        let S_WIDTH = window.innerWidth;
        let app = new Application({
          width: 512,
          height: 512,
          antialiasing: true,
          transparent: false,
          resolution: 1
        });
        //添加画布对象到dom上
        this.$refs.pixiArea.appendChild(app.view);
        //加载图片
        try{
          loader
            .add('static/images/hunter/dungeon.png')
            .add('static/images/hunter/door.png')
            .add('static/images/hunter/treasure.png')
            .add('static/images/hunter/explorer.png')
            .add('static/images/hunter/blob.png')
            .load(() => {
            setup();
          });
        }catch(e){
          setup()
        }
        let gameScene, dungeon, door, treasure, explorer, blobs, state,
          chimes, exit, player, healthBar, message, gameOverScene, enemies;
        //游戏主入口
        function setup() {
          // 1、创建游戏场景（分组Container，可以像对待精灵图一样对待分组）
          // 并加添加到stage（也是一个Container，是所有Pixi精灵的根容器）中
          gameScene = new Container();
          app.stage.addChild(gameScene);
          //精灵图定义
          dungeon = new PIXI.Sprite(//地牢
            PIXI.loader.resources['static/images/hunter/dungeon.png'].texture
          );
          door = new PIXI.Sprite(//门
            PIXI.loader.resources['static/images/hunter/door.png'].texture
          );
          treasure = new PIXI.Sprite(//宝藏
            PIXI.loader.resources['static/images/hunter/treasure.png'].texture
          );
          explorer = new PIXI.Sprite(//探险家
            PIXI.loader.resources['static/images/hunter/explorer.png'].texture
          );
          //加载精灵到gameScene中
          gameScene.addChild(dungeon);
          gameScene.addChild(door);
          door.position.set(32, 0);
          gameScene.addChild(treasure);
          treasure.x = gameScene.width - treasure.width - 48;
          treasure.y = gameScene.height / 2 - treasure.height / 2;
          gameScene.addChild(explorer);
          explorer.x = 68;
          explorer.y = gameScene.height / 2 - explorer.height / 2;
          explorer.vx = 0;
          explorer.vy = 0;
          //制作随机位置怪物
          let numberOfBlobs = 6,
              spacing = 48,
              xOffset = 150,
              speed = 2,
              direction = 1;
          blobs = [];
          for (let i = 0; i < numberOfBlobs; i++) {
            let blob = new PIXI.Sprite(//怪物
              PIXI.loader.resources['static/images/hunter/blob.png'].texture
            );
            blob.x = spacing * i + xOffset;
            blob.y = randomInt(0, app.stage.height - blob.height);//随机y坐标
            function randomInt(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            blob.vy = speed * direction;//移速，正向下 负向上
            direction *= -1;//反向
            blobs.push(blob);
            gameScene.addChild(blob);
          }

          //2、创建血条场景
          //并添加到stage中
          healthBar = new Container();
          healthBar.position.set(app.stage.width - 170, 4)
          gameScene.addChild(healthBar);
          //创建黑底矩形
          let innerBar = new Graphics();
          innerBar.beginFill(0x000000);
          innerBar.drawRect(0, 0, 128, 8);
          innerBar.endFill();
          healthBar.addChild(innerBar);
          //创建红色血条
          let outerBar = new Graphics();
          outerBar.beginFill(0xFF3300);
          outerBar.drawRect(0, 0, 128, 8);
          outerBar.endFill();
          healthBar.addChild(outerBar);

          healthBar.outer = outerBar;

          //3、创建gameOver场景
          //并添加到stage中
          gameOverScene = new Container();
          app.stage.addChild(gameOverScene);
          gameOverScene.visible = false;
          //创建文字精灵，并添加到gameOver场景中
          let style = new TextStyle({
            fontFamily: "Futura",
            fontSize: 64,
            fill: "white"
          });
          message = new Text("The End!", style);
          message.x = 120;
          message.y = app.stage.height / 2 - 32;
          gameOverScene.addChild(message);

          //捕获键盘事件，并设定相应操作
          let left = keyboard(37),
              up = keyboard(38),
              right = keyboard(39),
              down = keyboard(40);
          function keyboard(keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            //The `downHandler`
            key.downHandler = function(event) {
              if (event.keyCode === key.code) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
              }
              event.preventDefault();
            };

            //The `upHandler`
            key.upHandler = function(event) {
              if (event.keyCode === key.code) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
              }
              event.preventDefault();
            };

            //Attach event listeners
            window.addEventListener(
              "keydown", key.downHandler.bind(key), false
            );
            window.addEventListener(
              "keyup", key.upHandler.bind(key), false
            );
            return key;
          }
          left.press = function() {
            explorer.vx = -5;
            explorer.vy = 0;
          };
          left.release = function() {
            if (!right.isDown && explorer.vy === 0) {
              explorer.vx = 0;
            }
          };
          up.press = function() {
            explorer.vy = -5;
            explorer.vx = 0;
          };
          up.release = function() {
            if (!down.isDown && explorer.vx === 0) {
              explorer.vy = 0;
            }
          };
          right.press = function() {
            explorer.vx = 5;
            explorer.vy = 0;
          };
          right.release = function() {
            if (!left.isDown && explorer.vy === 0) {
              explorer.vx = 0;
            }
          };
          down.press = function() {
            explorer.vy = 5;
            explorer.vx = 0;
          };
          down.release = function() {
            if (!up.isDown && explorer.vx === 0) {
              explorer.vy = 0;
            }
          };

          state = play;
          //游戏开始
          function play(delta) {
            //use the explorer's velocity to make it move
            explorer.x += explorer.vx;
            explorer.y += explorer.vy;

            //Contain the explorer inside the area of the dungeon
            contain(explorer, {x: 28, y: 10, width: 488, height: 480});
            //contain(explorer, stage);

            //Set `explorerHit` to `false` before checking for a collision
            let explorerHit = false;

            //Loop through all the sprites in the `enemies` array
            blobs.forEach(function(blob) {

              //Move the blob
              blob.y += blob.vy;

              //Check the blob's screen boundaries
              let blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});

              //If the blob hits the top or bottom of the stage, reverse
              //its direction
              if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                blob.vy *= -1;
              }

              //Test for a collision. If any of the enemies are touching
              //the explorer, set `explorerHit` to `true`
              if(hitTestRectangle(explorer, blob)) {
                explorerHit = true;
              }
            });

            //If the explorer is hit...
            if(explorerHit) {

              //Make the explorer semi-transparent
              explorer.alpha = 0.5;

              //Reduce the width of the health bar's inner rectangle by 1 pixel
              healthBar.outer.width -= 1;

            } else {

              //Make the explorer fully opaque (non-transparent) if it hasn't been hit
              explorer.alpha = 1;
            }

            //Check for a collision between the explorer and the treasure
            if (hitTestRectangle(explorer, treasure)) {

              //If the treasure is touching the explorer, center it over the explorer
              treasure.x = explorer.x + 8;
              treasure.y = explorer.y + 8;
            }

            //Does the explorer have enough health? If the width of the `innerBar`
            //is less than zero, end the game and display "You lost!"
            if (healthBar.outer.width < 0) {
              state = end;
              message.text = "You lost!";
            }

            //If the explorer has brought the treasure to the exit,
            //end the game and display "You won!"
            if (hitTestRectangle(treasure, door)) {
              state = end;
              message.text = "You won!";
            }
          }
          function contain(sprite, container) {
            let collision = undefined;
            //Left
            if (sprite.x < container.x) {
              sprite.x = container.x;
              collision = "left";
            }
            //Top
            if (sprite.y < container.y) {
              sprite.y = container.y;
              collision = "top";
            }
            //Right
            if (sprite.x + sprite.width > container.width) {
              sprite.x = container.width - sprite.width;
              collision = "right";
            }
            //Bottom
            if (sprite.y + sprite.height > container.height) {
              sprite.y = container.height - sprite.height;
              collision = "bottom";
            }
            //Return the `collision` value
            return collision;
          }
          //碰撞检测
          function hitTestRectangle(r1, r2) {
            //Define the variables we'll need to calculate
            let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

            //hit will determine whether there's a collision
            hit = false;

            //Find the center points of each sprite
            r1.centerX = r1.x + r1.width / 2;
            r1.centerY = r1.y + r1.height / 2;
            r2.centerX = r2.x + r2.width / 2;
            r2.centerY = r2.y + r2.height / 2;

            //Find the half-widths and half-heights of each sprite
            r1.halfWidth = r1.width / 2;
            r1.halfHeight = r1.height / 2;
            r2.halfWidth = r2.width / 2;
            r2.halfHeight = r2.height / 2;

            //Calculate the distance vector between the sprites
            vx = r1.centerX - r2.centerX;
            vy = r1.centerY - r2.centerY;

            //Figure out the combined half-widths and half-heights
            combinedHalfWidths = r1.halfWidth + r2.halfWidth;
            combinedHalfHeights = r1.halfHeight + r2.halfHeight;

            //Check for a collision on the x axis
            if (Math.abs(vx) < combinedHalfWidths) {

              //A collision might be occuring. Check for a collision on the y axis
              if (Math.abs(vy) < combinedHalfHeights) {

                //There's definitely a collision happening
                hit = true;
              } else {

                //There's no collision on the y axis
                hit = false;
              }
            } else {

              //There's no collision on the x axis
              hit = false;
            }

            //`hit` will be either `true` or `false`
            return hit;
          };
          //游戏结束
          function end() {
            gameScene.visible = false;
            gameOverScene.visible = true;
          }
          app.ticker.add(delta => gameLoop(delta));
          function gameLoop(delta){
            //Update the current game state:
            state(delta);
          }

          function createSprite() {
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
            app.renderer.render(app.stage);
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped="">
  @import '~scss/_variable.scss';
</style>