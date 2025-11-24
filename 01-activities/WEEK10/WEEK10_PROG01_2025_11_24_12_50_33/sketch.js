let colorBtn, sizeSlider, shapeSelect;
let shapeColor;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");

  // starting color
  shapeColor = color(random(255), random(255), random(255));

  // Button: change color
  colorBtn = createButton("Change Colour");
  colorBtn.position(70, 300);
  colorBtn.mousePressed(randomShapeColor);

  colorBtn.addClass("colorBtn");

  function randomShapeColor() {
    shapeColor = color(random(255), random(255), random(255));
  }

  // Slider: controls size
  createP("Size").position(215, 280).style("margin", "4px 0 0 16px");
  sizeSlider = createSlider(20, 220, 100, 1);
  sizeSlider.position(230, 300);
  sizeSlider.addClass("sizeSlider");

  // Dropdown: choose shape
  createP("Shape").position(215, 320).style("margin", "8px 0 0 16px");
  shapeSelect = createSelect();
  shapeSelect.position(230, 350);
  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");
  
  shapeSelect.addClass("shapeSelect");
}

function draw() {
  background(240);

  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();

  fill(shapeColor);

  // draw chosen shape
  let choice = shapeSelect.value();
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  }
  pop();
}
