var ballCount = 5
var xs = []
var ys = []
var speedX = []
var speedY = []

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
    var myBall = {
      xs[i] = Math.random() * width
      ys[i] = Math.random() * height
      speedX[i] = Math.random() * 3
      speedY[i] = Math.random() * 3
    }
    balls[i] = myBall
  }

}

function draw() {
  background(200)

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