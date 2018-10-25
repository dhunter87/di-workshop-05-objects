var ballCount = 5
var xs = []
var ys = []
var speedX = []
var speedY = []

//setup function add a canvas to draw onto and calls the newly created createBalls() function.

function setup() {
  createCanvas(400, 400)
  createBalls()
}
//createBalls function created the balls for the draw function.
function createBalls(){
  console.log("create balls!")
  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] = Math.random() * width
    ys[i] = Math.random() * height
    speedX[i] = Math.random() * 3
    speedY[i] = Math.random() * 3
  }
}// the draw function draws specified objects to the canvas
function draw() {
  //background - sets the colour of the canvas
  background(200)

  //for loop - assigns xs and ys values for each of the balls created (uses ball count to determin how many tp draw to the screen)
  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] += speedX[i]
    ys[i] += speedY[i]

    if (xs[i] < 0 || xs[i] > width) {
      speedX[i] = speedX[i] * -1
    }
    if (ys[i] < 0 || ys[i] > height) {
      speedY[i] = speedY[i] * -1
    }

    ellipse(xs[i] - 5, ys[i] - 5, 20, 20)
  }
}
class Ball{
  constructor(xs, ys, height, width ){
    this.xs = xs
    this.ys = ys
    this.width = width
    this.height = height

  }

}