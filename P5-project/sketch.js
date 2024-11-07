let cloudImage;
let birdMask;
let cloudMoveSpeed = 0.5; // Controls the speed of cloud movement
let cloudMoveDirection = 1; // Controls the direction of cloud movement
let stars = []; // To store star objects

function preload() {
  cloudImage = loadImage('./assets/clouds.jpg'); // Load cloud image
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create graphics object to draw the dove shape
  birdMask = createGraphics(500, 400); // Fixed size canvas to draw dove shape

  drawDove(birdMask); // Draw the dove shape on the mask
  cloudImage.mask(birdMask); // Apply the dove shape as a mask to the cloud image

  // Initialize stars
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0, 100, 200); // Set background color

  // Add gradient effect
  drawGradientBackground();

  // Use time-based animation, update cloud position at fixed intervals
  let xMove = sin(frameCount * cloudMoveSpeed) * 20 * cloudMoveDirection; // Horizontal drift range
  let yMove = cos(frameCount * cloudMoveSpeed) * 10 * cloudMoveDirection; // Vertical drift range

  // Dynamically adjust cloud opacity based on mouse vertical position
  let cloudOpacity = map(mouseY, 0, height, 100, 255);
  tint(255, cloudOpacity); // Set cloud image opacity

  // Calculate scaling factor to ensure the dove stays proportional and fits the screen
  let scaleFactor = min(width / 500, height / 400);

  // Center and scale the dove pattern
  let imgWidth = 500 * scaleFactor;
  let imgHeight = 400 * scaleFactor;
  image(cloudImage, width / 2 - imgWidth / 2 + xMove, height / 2 - imgHeight / 2 + yMove, imgWidth, imgHeight);

  // Draw stars
  for (let star of stars) {
    star.update();
    star.show();
  }
}

function drawDove(pg) {
  pg.fill(255); // Fill with white for the mask
  pg.noStroke();

  // Use Bezier curves to draw the dove shape
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

// Add gradient background
function drawGradientBackground() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(0, 100, 200), color(255, 150, 50), inter);
    stroke(c);
    line(0, i, width, i);
  }
}

// Star class
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.speed = random(0.5, 1.5); // Speed of star's flicker
  }

  update() {
    // The size of the star changes over time to simulate flickering
    this.size = map(sin(frameCount * this.speed), -1, 1, 1, 3);
  }

  show() {
    noStroke();
    fill(255, 255, 255, 150); // Set the color of stars
    ellipse(this.x, this.y, this.size, this.size); // Draw star
  }
}

// Dynamically adjust canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


