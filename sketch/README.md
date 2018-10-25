# Workshop 5 - Objects

You’ll be working in pairs again - **driver/navigator** style, same as before.
Start by setting up the workshop as usual.

For each of the **bold** questions below:

<h3 align="center">
  🗣 Discuss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👩‍💻 Change &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👀 Observe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  🔄 Repeat
</h3>

1. **🗣 Discuss** the question with your partner
1. **👩‍💻 Change the code** - what do you expect your changes to do?
1. **👀 Observe the results** - what happened when you ran your code? How did it
   differ from your expectations
1. **🔄 Repeat** - keep discussing, changing, and running the code until you
   feel you understand it

**Remember, it’s about exploration and understanding. Take your time!**

**Don’t move on until you fully understand what’s happening.**

# Part 1

Create a sketch with the following code:

```js
var ballCount = 5
var xs = []
var ys = []
var speedX = []
var speedY = []

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] = Math.random() * width
    ys[i] = Math.random() * height
    speedX[i] = Math.random() * 3
    speedY[i] = Math.random() * 3
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
```

1. **Read through the code and understand what it does and how it works. You may
   need to take some time reviewing previous workshops and slides in order to do
   so**
1. **Add comments throughout the code describing the purpose of each line**
1. **How does this code use arrays and loops?**
1. **Can you think of a way this might cause problems?**

---

In this example, we have several on-screen objects - the balls. In our code,
each object is made up of four pieces of information. **What are they?**
xs, ys, width and height

On screen and as we're thinking about this project, we probably think about each
ball as it's own self contained thing. That's not how things work in our code
though - rather than each _ball_ being grouped together, all the bits that make
up each one are stored separately - an array for each different type of
information across all the balls. We have all these different arrays to keep
track of, but they don't really map onto how we think about what this code is
actually doing at a high level and what it draws on the screen.

Luckily, there is a solution! Just like we have objects in the real world and
objects (like our 5 balls) on screen, we can use objects in code.

With objects, instead of having four arrays each having a number, we can group
everything about a specific ball together in a single thing. This means that the
way we organise our code is much closer to how we're likely to think about the
problem, which makes it easier to understand.

![Arrays vs objects](./img/arrays-vs-objects.jpg)

---

You write an object like this:

```js
var myUser = {
  name: 'alex',
  age: 23
}
```

And you can use it like this:

```js
myUser.name
// returns 'alex'

myUser.age
// returns 23

myUser.age = 24

myUser.age
// returns 24
```

Open up the Chrome console where you can run single simple lines of JavaScript.
With each of the lines below:

1. read it carefully and make a prediction as to what you think will happen -
   **this is the most important step!**
2. type it into the console and press enter
3. record the actual result
4. try to figure out **why**, especially if your guess was incorrect.

Take your time, and feel free to explore and play if something unexpected
happens.

> **Note:** don’t copy-paste! If you copy paste these lines, some of them won’t
> run correctly. Type them out by hand - it’s better practice anyway.

| Line                                               | Expected Result | Actual Result | Were you right? Why? |
    | -------------------------------------------------- | --------------- | ------------- | -------------------- |
| `var alex = {name: 'alex', age: 23, height: 163}`  |     undefined   |undefined      |yes                   |
| `alex.name`                                        |      Alex       |Alex           |yes                   |
| `alex.age`                                         |        23       |23             |yes                   |
| `alex.age = 1000`                                  |         1000    |1000           |yes                   |
| `alex` (use the ▶ to expand the object)           |{name:'Alex', etc}|{name:'Alex', etc}|yes               |
| `alex.hairColor = 'blue'`                          |        blue     |blue           |yes                   |
| `alex`                                             |{name:'Alex', hairColor: 'blue'}|{name:'Alex', hairColor: 'blue'}|yes|
| `var pet = {name: 'amber', type: 'dog'}`           |   undefined     |undefined      |yes                   |
| `pet`                                              |{name:fj,type:dk}|{name:fj,type:dk}|   yes                |
| `alex.pet = pet`                                   |       dont know |{name:fj,type:dk}|  no - didnt guess  |
| `alex`                                             |{name;, etc pet{name:, typr:}} etc|{name;, etc pet{name:, typr:}} etc |yes|
| `pet.name = 'lyla'`                                |       Lyla      |lyla           |yes                   |
| `alex.pet`                                         |{name:lyla, type:}|{name:lyla, type:}|yes                   |
| `delete alex.pet`                                  |         ?       |        true   |   no - didnt guess   |
| `alex.pet`                                         |        undefined|undefined      |yes                   |
| `pet`                                              |{name:cd, type:jh}|{name:cd, type:jh}| yes              |
| `alex["name"]`                                     |          Alex   |Alex           |yes                      |
| `var someString = 'age'`                           |undefined        |indefined      |yes                   |
| `alex[someString]`                                 |       1000      |1000           |yes                   |
| `alex[someString] = 23`                            |         23      |23             |yes                  |
| `var weirdObj = {spooky: true}`                    |undefined        |undefined      |yes                   |
| `weirdObj.strange = weirdObj`                      |?                |{spooky: , strange:[circular]}|     yes            |
| `weirdObj` (use ▶ to expand - how far does it go?) |            ?   |same as above  |yes                      |

Answer the following questions (you might need to do some research!)

1. What is a JavaScript object? an object is a code version of a real world objecvt - e.g. a person is an object whick is modeled by its attributes and behaviors.
1. In a JavaScript object, what are:
   - keys - name 
   - values - value of keys - e.g name = Dan
   - properties
1. Why would you use an object in JavaScript

## Challenge

Take your commented sketch code from before and see if you can refactor it to
use objects rather than arrays. If you need to, use the hints below:

<details><summary>Hint 1 (click to expand)</summary><p>

You can add objects to an array.

```js
for (var i = 0; i < ballCount; i = i + 1) {
  var myBall = {
    // write ball properties here
  }
  balls[i] = myBall
}
```

</p></details>

<details><summary>Hint 2 (click to expand)</summary><p>

Try using this function:

```js
function createBall() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    speedX: Math.random() * 3,
    speedY: Math.random() * 3
  }
}
```

</p></details>

**Extension: modify your sketch to create a new ball at the position of the
mouse whenever it is pressed down** - DONE 

**Extension: add gravity! Add a small amount to the vertical speed of each ball
every frame** - DONE
