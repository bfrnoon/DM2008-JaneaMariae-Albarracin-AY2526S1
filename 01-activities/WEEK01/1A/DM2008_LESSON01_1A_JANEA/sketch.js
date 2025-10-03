// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB, 100);
  
  background(random(255));

  
 
  noStroke();
  fill(0);
  rect(45, 175, 80, 20);
  rect(53, 230, 80, 20);
  rect(257, 138, 80, 20);
  rect(277, 209, 80, 20);
  rect(135, 80, 10, 90);
  rect(200, 60, 10, 90);
  
  
  fill(245, 66, 111);
  ellipse(200, 200, 180);
  
  stroke(80, 80, 80);
  line(115, 226, 250, 126);
  
  fill(0);
  noStroke();
  ellipse(228, 174, 30);
  ellipse(189, 238, 30);
  ellipse(247, 215, 30);
  ellipse(149, 223, 30);
  ellipse(140, 80, 20);
  ellipse(206, 61, 20);
  
  textSize(40);
  text('👁️', 128, 170);
  text('👁️', 178, 156);
  
  textSize(30);
  fill(245, 185, 66);
  text('let me in pwease..', 47, 319);
  
  textSize(50);
  text('🙏🏻', mouseX, mouseY);
  
  
  
  
  helperGrid(); // do not edit or remove this line
}
