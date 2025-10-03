// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

let counter = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);

  //bees hovering ontop
  myTt(random(100, 400), random(100, 40), 90, 90);
  //bees using mouse
  myTt(mouseX, mouseY, 50, 50);

  myFulip(width / 2, height / 2, 90);

}
//own function to create bees
function myTt(x, y, w, h) {
  noStroke();
  fill("#ffc917");
  rect(x, y, w, h, 30);

  fill("#8f17ff");
  ellipse(x - h / 2, y, 110, 20);
  ellipse(x + h / 2, y, 110, 20);

  fill("#fa6407");
  triangle(x - w / 5, y + h / 2, x + w / 5, y + h / 2, x, y + h / 2 + w / 5);
}

//own function to create flower
function myFulip(x, y, w, h) {
  noStroke();
  fill("#4ddb59");
  rect(x, y * 2, 20, 300);

  fill("#5565ed");
  ellipse(x, y, 100, 200);
  ellipse(x, y, 200, 100);

  fill("#e6bdff");
  ellipse(x, y, 80);
}

 // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.
