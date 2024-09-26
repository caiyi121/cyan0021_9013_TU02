//We need a variable to hold our image
let img;

//We will divide the image into segments
let numSegments = 50;

//We will store the segments in an array
let segments = [];

//lets add a variable to switch between drawing the image and the segments
// now i will adapt the segment so i will make them visible at start pooint.
let drawSegments = true;

// //  this an object that will hold our mona [Object D]
let imgDrwPrps = {aspect:0 , width:0, height:0, xOffset:0, yOffset:0};

// // variable for the aspect ratio of the canvas (B)
let canvasAspectRatio = 0;

//lets load the image from disk
function preload() {
  img = loadImage('assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}

function setup() {
  //We will make the canvas the same size as the image using its properties
  // // replace with window properties (explorer, or chrome window)
  createCanvas(windowWidth, windowHeight);
  // // aspect ratio of object D
  imgDrwPrps.aspect = img.width / img.height;
  // // aspect ratio of the canvas (replace value of variable)
  canvasAspectRatio = width / height;
  // ////  now we add the function and make it useful 
  // calculateImageDrawProps();
  //
  //We can use the width and height of the image to calculate the size of each segment
  let segmentWidth = img.width / numSegments;
  let segmentHeight = img.height / numSegments;
  /*
  Divide the original image into segments, we are going to use nested loops
  */
let positionInColumn = 0;
  for (let segYPos=0; segYPos<img.height; segYPos+=segmentHeight) {
    let positionInRow = 0;
    //this is looping over the height
    for (let segXPos=0; segXPos<img.width; segXPos+=segmentWidth) {
      //We will use the x and y position to get the colour of the pixel from the image
      //lets take it from the centre of the segment
      let segmentColour = img.get(segXPos + segmentWidth / 2, segYPos + segmentHeight / 2);
       let segment = new ImageSegment(positionInColumn,positionInRow,segmentColour);
       segments.push(segment);
       positionInRow++;
    }
    positionInColumn++;
  }
  for (const segment of segments) {
    segment.calculateSegDrawProps () ;
  }
}

function draw() {
  background(0);
  if (drawSegments) {
    //lets draw the segments to the canvas
    for (const segment of segments) {
      //lets set the scale of each segment based on its distance from the mouse
       segment.scale = dist(segment.srcImgSegXPos, segment.srcImgSegYPos, mouseX, mouseY)/100;
       segment.draw();
    }
  } else {
    //lets draw the image to the canvas
    // replace values of image with the object that hold the image properties
    image(img, imgDrwPrps.xOffset, imgDrwPrps.yOffset, imgDrwPrps.width, imgDrwPrps.height);
  }
}



function keyPressed() {
  if (key == " ") {
    //this is a neat trick to invert a boolean variable,
    //it will always make it the opposite of what it was
    drawSegments = !drawSegments;
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  calculateImageDrawProps() ;
  for (const segment of segments) {
    segment.calculateSegDrawProps();
  }
}

//// the function that with calculate the aspect ratio required to keep the proportions of my image
function calculateImageDrawProps() {
  if (imgDrwPrps.aspect > canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = width / imgDrwPrps.aspect;
    imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
    imgDrwPrps.xOffset = 0;
  } else if (imgDrwPrps.aspect < canvasAspectRatio) {
    imgDrwPrps.height = height ;
    imgDrwPrps.width = height * imgDrwPrps.aspect;
    imgDrwPrps.xOffset = (width - imgDrwPrps.width) / 2 ;
    imgDrwPrps.yOffset = 0;
  }
  else if (imgDrwPrps.aspect == canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = height;
    imgDrwPrps.xOffset=0;
    imgDrwPrps.yOffset=0;
  }
}


//Here is our class for the image segments, we start with the class keyword
// needs to be updated to the new changing values
class ImageSegment {

  constructor(columnPositionInPrm,rowPositionInPrm,srcImgSegColourInPrm) {
    //these parameters are used to set the internal properties of an instance of the segment
    //These parameters are named as imageSource as they are derived from the image we are using
    this.columnPosition = columnPositionInPrm;
    this.rowPosition = rowPositionInPrm;
    this.srcImgSegColour = srcImgSegColourInPrm;

    this.drawXPos = 0;
    this.drawYPos = 0;
    this.drawWidth = 0;
    this.drawHeight =0;
}
 calculateSegDrawProps() {
  this.drawWidth = imgDrwPrps.width / numSegments;
  this.drawHeight = imgDrwPrps.height / numSegments;

  this.drawXPos = this.rowPosition * this.drawWidth + imgDrwPrps.xOffset;
  this.drawYPos = this.columnPosition * this.drawHeight + imgDrwPrps.yOffset;
 }

  draw() {
    //lets draw the segment to the canvas, now filled with the colour and with a black border
    stroke(0);
    fill(this.srcImgSegColour);
    rect(this.drawXPos, this.drawYPos, this.drawWidth,this.drawHeight);
  }
}