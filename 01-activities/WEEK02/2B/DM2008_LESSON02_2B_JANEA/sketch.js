// DDM2008 — Activity 2b
// (Pattern Making, 40 min)

h = 80;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  frameRate(10);

  // A simple horizontal row of shapes using a 1D loop
  for (let i = 0; i < width; i += h) {
    if (i % 20 == 0) {
      fill(width / 2, height / 2, 120);
      ellipse(200, random(0, 300), 200);
      ellipse(random(0, 300), 170, 200);

      h = random(20, mouseY);
    } else {
      fill(255, 70, random(0, 100));
      rect(i / 2, 200, random(0, 130), 60);
      //h = (random(40, mouseY));
    }

    // TODO: add an if() condition to alternate shape, size, or color
    // (hint: use % modulo to alternate every other shape)

    // TODO: add one interaction (mouse or key) to change the rule
    // (hint: try changing fill() or size when mouseIsPressed)
  }
}
