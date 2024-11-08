let cloudImage;
let birdMask;
let cloudMoveSpeed = 0.5; // 控制云的移动速度
let cloudMoveDirection = 1; // 控制云的移动方向
let stars = []; // 存储星星对象

function preload() {
  cloudImage = loadImage('./assets/clouds.jpg'); // 加载云图片
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 创建图形对象绘制鸽子形状
  birdMask = createGraphics(500, 400); // 固定大小的画布绘制鸽子形状

  drawDove(birdMask); // 在遮罩上绘制鸽子形状
  cloudImage.mask(birdMask); // 将鸽子形状应用为云图片的遮罩

  // 初始化星星
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0, 100, 200); // 设置背景颜色

  // 添加渐变效果
  drawGradientBackground();

  // 使用基于时间的动画，在固定间隔更新云的位置
  let xMove = sin(frameCount * cloudMoveSpeed * 0.8) * 30 * cloudMoveDirection; // 水平漂移范围
  let yMove = cos(frameCount * cloudMoveSpeed * 0.6) * 15 * cloudMoveDirection; // 垂直漂移范围

  // 根据鼠标垂直位置动态调整云的透明度
  let cloudOpacity = map(mouseY, 0, height, 100, 255);
  tint(255, cloudOpacity); // 设置云图片透明度

  // 计算缩放因子，确保鸽子保持比例并适应屏幕
  let scaleFactor = min(width / 500, height / 400);

  // 居中并缩放鸽子图案
  let imgWidth = 500 * scaleFactor;
  let imgHeight = 400 * scaleFactor;
  image(cloudImage, width / 2 - imgWidth / 2 + xMove, height / 2 - imgHeight / 2 + yMove, imgWidth, imgHeight);

  // 绘制星星
  for (let star of stars) {
    star.update();
    star.show();
  }
}

function drawDove(pg) {
  pg.fill(255); // 填充遮罩为白色
  pg.noStroke();

  // 使用贝塞尔曲线绘制鸽子形状
  pg.beginShape();
  pg.vertex(200, 150);
  pg.bezierVertex(172, 141, 160, 74, 73, 3); // 顶部翅膀
  pg.bezierVertex(155, 188, 109, 98, 82, 152); // 头部曲线
  pg.bezierVertex(137, 126, 105, 144, 70, 149); // 喙的曲线
  pg.bezierVertex(135, 166, 98, 196, 166, 244); // 脖子曲线
  pg.bezierVertex(169, 246, 238, 282, 198, 260); // 身体曲线
  pg.bezierVertex(332, 396, 392, 292, 249, 250); // 尾部曲线
  pg.bezierVertex(231, 200, 305, 260, 343, 160); // 尾部曲线
  pg.bezierVertex(241, 274, 339, 195, 391, 89); // 翅膀曲线
  pg.bezierVertex(322, 96, 487, 89, 291, 74); // 翅膀曲线
  pg.bezierVertex(212, 57, 164, 165, 197, 155); // 翅膀回到头部
  pg.endShape(CLOSE);

  // 鸽子的尾部部分
  pg.beginShape();
  pg.vertex(239, 296);
  pg.vertex(294, 268);
  pg.vertex(357, 307);
  pg.vertex(284, 345);
  pg.endShape(CLOSE);
}

// 动态渐变背景
function drawGradientBackground() {
  let baseColor1 = color(0, 100 + sin(frameCount * 0.01) * 30, 200 + sin(frameCount * 0.01) * 20);
  let baseColor2 = color(255, 150 + cos(frameCount * 0.01) * 50, 50 + cos(frameCount * 0.01) * 30);

  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(baseColor1, baseColor2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

// 星星类
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.speed = random(0.5, 1.5); // 星星闪烁速度
    this.color = color(255, random(100, 255), random(200, 255), 150); // 随机颜色
  }

  update() {
    // 星星的大小随时间变化以模拟闪烁效果
    this.size = map(sin(frameCount * this.speed), -1, 1, 1, 3);
    this.color.setAlpha(random(150, 255)); // 透明度随时间变化
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size); // 绘制星星
  }
}

// 动态调整画布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
