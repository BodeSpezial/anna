function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
zoro.show()
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Xpos -= 1
  }
  if (keyCode === RIGHT_ARROW) {
    Xpos += 1
  }
  if (keyCode === UP_ARROW) {
    Ypos -= 1
  }
  if (keyCode === DOWN_ARROW) {
    Ypos += 1
  }
}

class Snake {
  constructor() {
    this.length = 3;
    this.speed = 10;
    this.dir = [0,0];
  }
  show() {
    rect(this.dir[0],this.dir[1],this.length*grid,grid)
  } 
}
let grid = 10;
let zoro = new Snake()

