/**绘制线段
  传参：ctx,point1,point2,config
    ctx：ctx绘图对象
    point1：起点
    point2：终点
    config：线条样式
      color：颜色
      lineWidth：线宽
  **/
export function drawCtxLine(ctx, point1, point2, config) {
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

/**绘制文本
  传参：ctx,text,point,config
    ctx：ctx绘图对象
    text：文本
    point：定位点
    config：文本样式
      color：颜色
      font：字体
      pointPlace：定位点位置
        x：水平位置——'start'左边（默认）；'center'中间；'end'右边
        y：垂直位置——'start'上边（默认）；'center'中间；'end'下边
  **/
export function drawCtxText(ctx, text, point, config) {
  ctx.save();
  let pointPlace = {};
  if (config) {
    if (config.color) {
      ctx.fillStyle = config.color;
    }
    if (config.font) {
      ctx.font = config.font;
    }
    if (config.pointPlace) {
      pointPlace = config.pointPlace;
    }
  }
  let fontSize = 10;//默认字体大小10
  let fontItems = ctx.font.split(' ');
  for(let i = 0; i < fontItems.length; i++) {
    let pxIndex = fontItems[i].indexOf('px');
    if (pxIndex !== -1) {
      fontSize = Number(fontItems[i].slice(0, pxIndex));
      break;
    }
  }
  let newPoint = {};
  switch(pointPlace.x) {
    case 'start':
      newPoint.x = point.x;
      break;
    case 'end':
      newPoint.x = point.x - ctx.measureText(text).width;
      break;
    case 'center':
      newPoint.x = point.x - ctx.measureText(text).width/2;
      break;
    default:
      newPoint.x = point.x;
      break;
  }
  switch(pointPlace.y) {
    case 'start':
      newPoint.y = point.y + fontSize*5/6;
      break;
    case 'end':
      newPoint.y = point.y -fontSize*1/6;
      break;
    case 'center':
      newPoint.y = point.y + fontSize/3;
      break;
    default:
      newPoint.y = point.y + fontSize*5/6;
      break;
  }
  ctx.fillText(text, newPoint.x, newPoint.y);
  ctx.restore();
}

/**绘制圆弧(线条)
  传参：ctx,origin,radius,angle1,angle2,config
    ctx：ctx绘图对象
    origin：圆心位置
    radius：圆半径
    angle1：起点角度（x周正半轴为起点，顺时针角度）
    angle2：中点角度
    config：圆弧样式
      color：颜色
      anticlockwise: 是否逆时针
  **/
export function drawCtxCicle(ctx, origin, radius, angle1, angle2, config) {
  ctx.save();
  ctx.beginPath();
  let anticlockwise = false;
  if (config) {
    if (config.color) {
      ctx.strokeStyle = config.color;
    }
    if (config.anticlockwise) {
      anticlockwise = config.anticlockwise;
    }
  }
  ctx.arc(origin.x, origin.y, radius, angle1, angle2, anticlockwise);
  ctx.stroke();
  ctx.restore();
}

/**绘制图片(初版)
  传参：ctx,src,point,config
    ctx：ctx绘图对象
    src：图片源
    point：定位点
    config：图片样式
  **/
export function drawCtxImage(ctx, src, point, config) {
  ctx.save();
  return new Promise((resolve, reject) => {
    loadImage(src).then(img => {
      ctx.drawImage(img, point.x, point.y);
      resolve();
    })
  })
  ctx.restore();
}
//加载图片，兼容base64、dataUrl、图片链接（禁止跨域的跨域图片不能用）
function loadImage(src) {
  return new Promise((resolve,reject) => {
    if (typeof(src) === 'object') {
      src.onload = () => {
        resolve(src);
      }
    }
    else{
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
    }
  })
}