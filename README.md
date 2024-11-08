## Time-based Animation and Interactive Features
By using frameCount in combination with mathematical functions like sin() and cos(), I was able to create a smooth, time-based animation that gradually updates over time. For instance, the "Peace" text in the animation dynamically changes its position and transparency, creating the effect of floating and fading as time progresses. This creates a lively and smooth interaction, enhancing the overall feel of the animation.

## Interactive Description
The user interacts with the animation by clicking on the screen. Each mouse click triggers the appearance of the “Peace” text at the clicked position. The text gradually fades away and shifts slightly both horizontally and vertically, creating a floating effect. Additionally, the transparency of the text is controlled by time, allowing it to fade smoothly as it moves. This interactive feature allows users to create their own "Peace" messages that appear and disappear based on their actions.

###  - Peace Text Animation
Each time the user clicks, a "Peace" text element is generated at the mouse position. The text fades out over time by gradually decreasing its alpha value. It also moves randomly in the horizontal and vertical direction to simulate a drifting effect. This is achieved by using a combination of sin(frameCount) and cos(frameCount) functions to move the text in a dynamic, smooth way..

###    - Movement and Floating Effect
Use the sin() and cos() functions to control the motion of the clouds and stars. sin() is used to control the horizontal and vertical motion of the clouds, while cos() ensures that the vertical motion of the clouds is synchronized with the horizontal direction. For the stars, the sin() function controls the size of the stars, which gives them a twinkling effect and adds dynamism to the background.

###    - Text Transparency
The random movement of the text is based on sine and cosine functions that allow it to drift in a smooth, periodic pattern. The sin() and cos() functions control the horizontal and vertical displacement over time. As a result, the "Peace" text gives the appearance of floating, making the scene feel dynamic and interactive.


## Team Member Differences
For this project, my main focus was on the "Peace" text animation, including its movement, fading, and interactive behavior. Other team members may have focused on elements such as background effects, further interactivity, or additional text animations. Each of us contributed different features to enhance the overall dynamic of the animation.

## Three iterations of changes
！[IM]
### Iteration 1: Basic Setup without Text
In the first iteration, the animation was focused on creating a basic visual environment without introducing the "Peace" text. I set up the time-based effects, including the background gradient and the initial setup for the cloud-like movement using sine and cosine functions. The focus was on establishing the dynamic background and preparing the framework for later additions.
#### Improvement Point: 
While the background was visually appealing, the absence of interactive text made the scene feel static and unengaging for the user.

### Iteration 2 : Adding "Peace" Text
In the second iteration, I introduced the "Peace" text to the animation. The text appears at the position of the mouse click and fades out gradually. This added the first layer of interactivity, allowing the user to create personalized text that would appear and disappear based on their clicks. The fade effect was applied by modifying the alpha transparency of the text, and its position remained static after appearing.
#### Improvement Point: 
The "Peace" text provided interactivity, but its lack of movement beyond fading made it feel slightly static and could be more dynamic in its interaction with the background.

### Iteration 3 : Floating "Peace" Text with Enhanced Movement
In the third iteration, I introduced more dynamic movement to the "Peace" text. The text now not only fades out but also moves randomly in both horizontal and vertical directions using sin() and cos() functions. This gives the text a floating effect, making it feel more alive and interactive. The floating movement combined with the fading creates a more immersive and engaging experience for the user.

#### Improvements
The "Peace" text now behaves more dynamically with smoother movement, adding a sense of liveliness and interaction. The background was further enhanced with richer color transitions, making the overall experience feel layered and immersive.
#### Reference section
1. For the gradient background, I refer to the usage of the lerpColor() function detailed on this page, which creates a gradient effect by linear interpolation. [https://p5js.org/reference/#/p5/lerpColor]
2. Regarding the star effect, I refer to this website that provides tutorials on how to simulate natural phenomena through programming, in particular how to use the sin() function to simulate the fluctuation and blinking effects found in nature. [https://natureofcode.com/]
3. for cloud animation, I refer to this YouTube video which shows how to use the sin() and cos() functions to create smooth animation effects, especially for simulating natural elements such as clouds.[https://www.youtube.com/watch?v=K5j68h0zCG0]