/**划线
  传参：ctx,point1,point2,config
    ctx：ctx绘图对象
    point1：起点
    point2：终点
    config：线条样式
      color：颜色
      lineWidth：线宽
  **/
export function drawCtxLine(ctx,point1,point2,config){
  ctx.save();
  //样式配置
  if (config) {
    if (config.color) {
      ctx.strokeStyle = config.color;
    }
    if (config.lineWidth) {
      ctx.lineWidth = config.lineWidth;
    }
  }
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();
  ctx.restore();
}