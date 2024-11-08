let cloudImage;
let birdMask;
let stars = []; // Array to store star objects
let peaceTexts = []; // Array to store "Peace" text objects

function preload() {
  cloudImage = loadImage('./assets/clouds.jpg'); // Load main cloud image
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create graphics object to draw the dove shape
  birdMask = createGraphics(500, 400); // Fixed size canvas to draw dove shape

  drawDove(birdMask); // Draw the dove shape on the mask
  cloudImage.mask(birdMask); // Apply the dove shape as a mask to the main cloud image

  // Initialize stars
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0, 100, 200); // Set background color

  // Add gradient effect
  drawGradientBackground();

  // Display the dove shape with animation
  tint(200, 220, 255); // Light blue color to make the dove stand out
  let xMove = sin(frameCount * 0.01) * 30;
  let yMove = cos(frameCount * 0.01) * 15;
  let scaleFactor = min(width / 500, height / 400);
  let imgWidth = 500 * scaleFactor;
  let imgHeight = 400 * scaleFactor;
  image(cloudImage, width / 2 - imgWidth / 2 + xMove, height / 2 - imgHeight / 2 + yMove, imgWidth, imgHeight);

  // Draw stars
  for (let star of stars) {
    star.update();
    star.show();
  }

  // Display "Peace" texts and handle fading
  for (let i = peaceTexts.length - 1; i >= 0; i--) {
    let peaceText = peaceTexts[i];
    peaceText.update();
    peaceText.show();
    if (peaceText.isFadedOut()) {
      peaceTexts.splice(i, 1); // Remove fully faded-out texts
    }
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

// Gradient background with prominent colors
function drawGradientBackground() {
  let baseColor1 = color(10, 120 + sin(frameCount * 0.01) * 50, 250 + sin(frameCount * 0.01) * 40);
  let baseColor2 = color(255, 200 + cos(frameCount * 0.02) * 55, 100 + cos(frameCount * 0.02) * 40);

  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(baseColor1, baseColor2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

// Star class for twinkling stars
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.speed = random(0.5, 1.5); // Speed of star's flicker
    this.color = color(255, random(150, 255), random(220, 255), 150); // Random color for stars
  }

  update() {
    this.size = map(sin(frameCount * this.speed), -1, 1, 1, 3);
    this.color.setAlpha(random(180, 255)); // Star opacity changes over time
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size); // Draw star
  }
}

// Peace text class for animated text
class PeaceText {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255; // Start fully opaque
  }

  update() {
    this.alpha -= 2; // Gradually fade out
  }

  show() {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255, this.alpha); // White text with current opacity
    textFont("Georgia"); // Elegant font for "Peace"
    text("Peace", this.x, this.y);
  }

  isFadedOut() {
    return this.alpha <= 0; // Check if fully faded out
  }
}

// Mouse pressed event to add "Peace" text at click position
function mousePressed() {
  peaceTexts.push(new PeaceText(mouseX, mouseY));
}

// Dynamically adjust canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
