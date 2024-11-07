# Creative coding major project

## Personal Part: Perlin noise and randomness

![Images 0](.assets/clouds.jpg)

### 1. Variable Declarations

![Images 1](.assets/1.png)

##### - cloudImage:This variable will store the image of the clouds.
##### - birdMask: This is a graphics object (off-screen canvas) used to create the dove shape which will act as a mask on the cloud image.
##### - xOffset and yOffset: These are used to control the smooth horizontal and vertical movement of the clouds using Perlin noise.

### 2. Preloading the Cloud Image

![Images 2 ](.assets/2.png)

##### - The preload() function is used to load the clouds.jpg image before the sketch begins. This ensures that the image is fully loaded and available to be used in the rest of the code.

### 3. Setup Function

![Images 3 ](.assets/3.png)

#### - createCanvas(windowWidth, windowHeight) creates a canvas that spans the entire width and height of the browser window.
#### - createGraphics(500, 400) creates an off-screen graphics object (birdMask) with a fixed size of 500x400 pixels.
#### - drawDove(birdMask) is called to draw the dove shape on this off-screen canvas.
#### - cloudImage.mask(birdMask) applies the dove shape as a mask on the cloudImage, meaning the cloud image will be visible only in the shape of the dove.





