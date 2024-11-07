## Time-based animation
In this project, I used time-based animation techniques to control changes in the animation, specifically through timers and events. By constantly updating the time (e.g. using frameCount and the sin(),cos() functions), I made the elements in the scene (e.g. clouds, stars, etc.) change smoothly over time, thus creating a smooth dynamic effect.

## Interactive Description:
The user can interact with this project by moving the mouse. As the mouse is moved, the transparency and position of the clouds change based on the Y coordinate of the mouse. Specifically, the vertical position of the mouse (i.e. mouseY ) affects the transparency of the cloud, with the cloud becoming more opaque near the top and more transparent near the bottom. At the same time, the position of the cloud will show a sinusoidal fluctuation effect according to the time change, giving a feeling of floating and flowing.

## Animation details:
###  - Clouds: 
The movement of the clouds is realized through the sin() and cos() functions, which are dynamically updated according to time, creating a smooth, periodic movement of the clouds. This time-driven motion gives the clouds a natural, smooth floating effect.
###  - Stars: 
The stars in the background twinkle over time. By varying the size of the stars through sin(frameCount * speed) based on time, a twinkling effect is created that simulates the fluctuation of the stars in the night sky.
###  - Dove Mask: 
A dove shape is applied to the mask of the cloud image, allowing the movement of the clouds to be combined with a dove pattern. This mask effect is created in a separate Graphics object and applied to the cloud image via cloudImage.mask(birdMask), causing parts of the cloud to form the outline of a dove.

## Animation tips
###    - Time-based animation: 
Use the sin() and cos() functions to control the motion of the clouds and stars. sin() is used to control the horizontal and vertical motion of the clouds, while cos() ensures that the vertical motion of the clouds is synchronized with the horizontal direction. For the stars, the sin() function controls the size of the stars, which gives them a twinkling effect and adds dynamism to the background.

###    - Gradient background: 
The background color is created by the lerpColor() function, which creates a gradient effect that smoothly transitions from one color to another based on the position of each scan line. This time-based gradient effect makes the image richer and more layered.

## Team Member Differences:
 For this project, I focused primarily on the implementation of the cloud motion, star twinkle, and dove mask effects. These elements add interactivity to the animation, especially the movement and transparency of the clouds, the twinkling of the stars, and the masking of the dove shape. Other team members may have focused more on other aspects such as color changes or control of component visibility, possibly implementing trigger events or reveal and hide effects for elements.

## Inspiration
The visual inspiration for this project came primarily from cloud images and dove shapes. I wanted to combine the soft, flowing feel of the clouds with the serene image of the dove to create an image that is both dynamic and quiet. The dove shape was inspired by minimalist bird designs, while the clouds referenced simple textured cloud images that can be used as mask images.

### Reference section:
1. For the gradient background, I refer to the usage of the lerpColor() function detailed on this page, which creates a gradient effect by linear interpolation. [https://p5js.org/reference/#/p5/lerpColor]
2. Regarding the star effect, I refer to this website that provides tutorials on how to simulate natural phenomena through programming, in particular how to use the sin() function to simulate the fluctuation and blinking effects found in nature. [https://natureofcode.com/]
3. for cloud animation, I refer to this YouTube video which shows how to use the sin() and cos() functions to create smooth animation effects, especially for simulating natural elements such as clouds.[https://www.youtube.com/watch?v=K5j68h0zCG0]
