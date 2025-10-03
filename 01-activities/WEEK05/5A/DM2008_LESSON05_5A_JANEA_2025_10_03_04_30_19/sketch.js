// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];

function setup() {
  createCanvas(400, 400);

  //Step 1: create two Ball objects
  balls.push(new Ball(100, 40));
  balls.push(new Ball(300, 40));
}

function draw() {
  background(0);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();

    // Step 3: check collisions
    balls[i].checkCollision(balls);
    // Use dist() between ball centers
    // Trigger feedback (color, bounce, etc.)
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 30;
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    // TODO: wrap around OR bounce off edges
    if (this.pos.x - this.r < 0) {
      this.vel.x *= -1;
    }
    if (this.pos.x + this.r > width ) {
      this.vel.x *= -1;
    }
    if (this.pos.y - this.r < 0 ) {
      this.vel.y *= -1;
    }
    if (this.pos.y + this.r > height) {
      this.vel.y *= -1;
    }
  }

  show() {
    fill(100, 180, 220);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually

  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

        if (d < this.r + other.r) {
          push();
          stroke(255, 54, 144);
          strokeWeight(5);
          fill(random(100,300), 54, random(120, 144));
          ellipse(this.pos.x, this.pos.y, this.r * 2);
          colorMode(HSB);
          fill(HSB);
          textSize(random(20, 70));
          text("hey", random(0, 400), random(0, 400));
          pop();
          
        
        }
      }
    }
  }
}
