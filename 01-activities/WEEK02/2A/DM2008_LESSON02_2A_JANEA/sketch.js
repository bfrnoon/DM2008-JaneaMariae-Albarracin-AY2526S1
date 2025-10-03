// DDM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0;        // ellipse x-position
let size = 50;    // ellipse size (you can change this in your if/else)
let bgColor;      // background color set by switch(key)

function setup() {
  createCanvas(400, 400);
  bgColor = color(1, 50);
}

function draw() {
  background(bgColor);
  
  fill(random(0, 255));
  ellipse(x, height / 2, size);
  
  x += 2;
  // Wrap around when it exits the right edge
  if (x > width + size / 2) {
    x = 0;
  }
}

// --- Mode switching with number keys: 1, 2, 3 ---
function keyPressed() {
  switch (key) {
    case '1':
      noStroke;
      fill(random(200, 250), (130, 151), (9, 12));
      ellipse(x, random(height/2), size*4);
      break;
    case '2':
      noStroke;
      fill(random(50, 255), (130, 200), (3, 230));
      rect(x, random(height/2), size*4);
      break;
    case '3':
      noStroke;
      fill(random(20, 255), (0, 56), (80, 109));
      triangle(x, random(height/9), random(width/10), 100, 200, 
      size*4);
      break;
    default:
      bgColor = color(0);     // grey
      
  }
    
}
