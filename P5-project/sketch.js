let cloudImage;
let birdMask;

function preload() {
  cloudImage = loadImage('./images/clouds.jpg'); // Load the cloud image
}

function setup() {
    createCanvas(500, 400);

  // Create a graphics object to draw the bird shape for masking
  birdMask = createGraphics(width, height);

  drawDove(birdMask); // Draw the bird shape on the mask
  cloudImage.mask(birdMask); // Apply the bird shape as a mask on the cloud image
}

  function draw() {
    background(0, 100, 200); // Set background color

    // Display the masked cloud image, so it appears in the shape of the bird
    image(cloudImage, 0, 0, width, height);
  }

  function drawDove(pg) {
    pg.fill(255); // Fill white for the mask

    pg.noStroke();

    pg.beginShape();

    // 鸽子的头部
    pg.vertex(200, 150);
    pg.bezierVertex(172, 141, 160, 74, 73, 3); // 上翅膀
    pg.bezierVertex(155, 188, 109, 98, 82, 152); // 头部曲线
    pg.bezierVertex(137, 126, 105, 144, 70, 149); // 嘴曲线
    // 鸽子的颈部
    pg.bezierVertex(135, 166, 98, 196, 166, 244); // 颈部曲线

    // 鸽子的身体和尾部
    pg.bezierVertex(169, 246, 238, 282, 198, 260); // 身体曲线
    pg.bezierVertex(332, 396, 392, 292, 249, 250); // 尾部曲线
    pg.bezierVertex(231, 200, 305, 260, 343, 160); // 尾部曲线

    // 鸽子的翅膀
    pg.bezierVertex(241, 274, 339, 195, 391, 89); // 翅膀曲线
    pg.bezierVertex(322, 96, 487, 89, 291, 74); // 翅膀曲线
    pg.bezierVertex(212, 57, 164, 165, 197, 155); // 翅膀回到头部

    pg.endShape(CLOSE);

    pg.beginShape();
    pg.vertex(239, 296);
    pg.vertex(294, 268);
    pg.vertex(357, 307);
    pg.vertex(284, 345);
    pg.endShape(CLOSE);
  }
