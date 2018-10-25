// var ballCount = 5
// var xs = []
// var ys = []
// var speedX = []
// var speedY = []
var balls = []
function setup() {
  createCanvas(400, 400)
  createBall()

}
function createBall(){
  balls.push({
    x: Math.random() * width,
    y: Math.random() * height,
    speedX: Math.random() * 3,
    speedY: Math.random() * 3,
    red: Math.random() * 256,
    blue: Math.random() * 256,
    green: Math.random() * 256
  })
}
function createBallOnClick(){
  balls.push({
    x: mouseX,
    y: mouseY,
    speedX: Math.random() * 3,
    speedY: Math.random() * 3,
    red: Math.random() * 256,
    blue: Math.random() * 256,
    green: Math.random() * 256
  })
}

function draw() {
  background(200)

  for (var i = 0; i < balls.length; i = i + 1) {
    balls[i].x += balls[i].speedX
    balls[i].y += balls[i].speedY

    if (balls[i].x < 0 || balls[i].x > width) {
      balls[i].speedX = balls[i].speedX * -1
    }
    if (balls[i].y < 0 || balls[i].y > height) {
      balls[i].speedY = balls[i].speedY * -1
    }
    balls[i].red++
    balls[i].green--
    fill(balls[i].red, balls[i].green, balls[i].blue)
    ellipse(balls[i].x - 5, balls[i].y - 5, 20, 20)
  }
}
function mousePressed(){
  createBallOnClick()
}