// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;
let flavour = ["chocolate", "strawberry cream"];

function setup() {
  createCanvas(400, 400);
  noStroke();

  myCookie = new Cookie("chocolate", this.sz, width - width / 4, height- height / 6);
   chocCookie2 = new Cookie("chocolate", this.sz, width-width/4, height - 320);
  chocCookie3 = new Cookie("chocolate", this.sz, width/4, height / 2);
  
  
  anotherCookie = new Cookie("strawberry cream", this.sz, width - width /4, height / 2);
  strawbCookie2 = new Cookie("strawberry cream", this.sz, width / 4, height - 320 );
  strawbCookie3 = new Cookie("strawberry cream", this.sz, width/ 4, height - 70 );
 
  
  // Step 3: make one cookie object
  // cookie = new Cookie("chocolate", 80, width/2, height/2);
}

function draw() {
  background(255);

  // Step 4: call the cookie’s show() method
  myCookie.show();
  chocCookie2.show();
  chocCookie3.show()
  anotherCookie.show();
  strawbCookie2.show();
  strawbCookie3.show();
 
  
  keyPressed();
  mouseMoved();
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, sz, x, y) {
    // set up required properties
    this.flavor = flavor;
    this.sz = 100;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    if (this.flavor == "chocolate") {
      fill(196, 146, 96);
      ellipse(this.x, this.y, this.sz);

      fill(36, 17, 2);
      ellipse(this.x, this.y, this.sz - 25);
    } else if (this.flavor == "strawberry cream") {
      fill(196, 146, 96);
      ellipse(this.x, this.y, this.sz);

      fill(255, 243, 240);
      ellipse(this.x, this.y, this.sz - 19);

      rectMode(CENTER);
      fill(230, 29, 7);
      rect(this.x, this.y, this.sz - 60);
    }
  }

  // Steps 5 & 6: Implement additional methods here
}

function keyPressed() {
  if (keyIsPressed == true) {
    if (key == "c" || key == "C") {
      myCookie.show();
      chocCookie2.show();
      chocCookie3.show();
      
      fill(255);
      ellipse(width - width /4, height / 2, 120);
      ellipse(width / 4, height - 320, 120);
      ellipse(width/ 4, height - 70, 120);
      
      fill(230, 29, 7);
      textAlign(CENTER);
      textSize(15);
      text("those were my",width - width /4, height / 2);
      text("hey!",width / 4, height - 320);
      text("strawberries...",width/ 4, height - 70);
      
      
    } else if (key == "s" || key == "S") {
      anotherCookie.show();
      strawbCookie2.show();
      strawbCookie3.show();
      
      fill(255);
      ellipse(width - width / 4, height- height / 6, 120);
      ellipse(width-width/4, height - 320, 120);
      ellipse(width/4, height / 2, 120);
      
      fill(36, 17, 2);
      textAlign(CENTER);
      textSize(15);
      text("hey!",width-width/4, height - 320);
      text("chocolate...",width - width / 4, height- height / 6);
      text("those were my",width/4, height / 2);
    }
  }
}

function mouseMoved() {
  fill(255);
  ellipse(mouseX, mouseY, 120);
  

  textAlign(CENTER);
   fill(0);
  textSize(40);
  text("yum!", mouseX, mouseY);
}
// Step 5: add movement (keyboard arrows)
// function keyPressed() {}

// Step 6: add flavor randomizer (mouse click)
// function mousePressed() {}
