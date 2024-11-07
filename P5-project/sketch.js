let cloudImage;
let birdMask;
let xOffset = 0; // Perlin noise offset for the horizontal movement of clouds
let yOffset = 0; // Perlin noise offset for the vertical movement of clouds

function preload() {
  cloudImage = loadImage('./assets/clouds.jpg'); // Load cloud image
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create graphics object to draw the dove shape
  birdMask = createGraphics(500, 400); // Fixed size canvas to draw dove shape

  drawDove(birdMask); // Draw the dove shape on the mask
  cloudImage.mask(birdMask); // Apply the dove shape as a mask to the cloud image
}

function draw() {
  background(0, 100, 200); // Set background color

  // Use Perlin noise to smoothly control the cloud movement
  let xMove = map(noise(xOffset), 0, 1, -20, 20); // Horizontal drift range
  let yMove = map(noise(yOffset), 0, 1, -10, 10); // Vertical drift range

  // Update offsets to make the clouds move gradually
  xOffset += 0.01;
  yOffset += 0.01;

  // Dynamically adjust cloud opacity based on the mouse's vertical position
  let cloudOpacity = map(mouseY, 0, height, 100, 255);
  tint(255, cloudOpacity); // Set the cloud image opacity

  // Calculate scaling factor to ensure the dove stays proportional and fits the screen
  let scaleFactor = min(width / 500, height / 400);

  // Center and scale the dove pattern
  let imgWidth = 500 * scaleFactor;
  let imgHeight = 400 * scaleFactor;
  image(cloudImage, width / 2 - imgWidth / 2 + xMove, height / 2 - imgHeight / 2 + yMove, imgWidth, imgHeight);
}

function drawDove(pg) {
  pg.fill(255); // Fill with white for the mask
  pg.noStroke();
  
  // Draw the dove shape using Bezier curves
  pg.beginShape();
  pg.vertex(200, 150);
  pg.bezierVertex(172, 141, 160, 74, 73, 3); // Top wing
  pg.bezierVertex(155, 188, 109, 98, 82, 152); // Head curve
  pg.bezierVertex(137, 126, 105, 144, 70, 149); // Beak curve
  pg.bezierVertex(135, 166, 98, 196, 166, 244); // Neck curve
  pg.bezierVertex(169, 246, 238, 282, 198, 260); // Body curve
  pg.bezierVertex(332, 396, 392, 292, 249, 250); // Tail curve
  pg.bezierVertex(231, 200, 305, 260, 343, 160); // Tail curve
  pg.bezierVertex(241, 274, 339, 195, 391, 89); // Wing curve
  pg.bezierVertex(322, 96, 487, 89, 291, 74); // Wing curve
  pg.bezierVertex(212, 57, 164, 165, 197, 155); // Wing returning to head
  pg.endShape(CLOSE);
  
  // Dove's tail section
  pg.beginShape();
  pg.vertex(239, 296);
  pg.vertex(294, 268);
  pg.vertex(357, 307);
  pg.vertex(284, 345);
  pg.endShape(CLOSE);
}

// Dynamically adjust the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
D

