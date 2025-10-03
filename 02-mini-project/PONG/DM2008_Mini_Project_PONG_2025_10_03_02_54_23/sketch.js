// DM2008 — Mini Project
// PONG (Starter Scaffold)

// Notes for students:
// 1) Add paddle controls (W/S and ↑/↓) inside handleInput()
// 2) Add scoring + reset when the ball goes past a paddle
// 3) Add win conditions / start + game-over states if you want

/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball;

let score = [0, 0]; // left and right
const maxScore = 5;

let gameStarted = false;

let img_homep, img_apple, img_player1, img_player2;
let font;
let audio;

/* ----------------- Setup & Draw ----------------- */
function preload() {
  img_homep = loadImage("ASSETS/HOMEPAGE.png");
  img_apple = loadImage("ASSETS/APPLE.png");
  img_player1 = loadImage("ASSETS/P1.png");
  img_player2 = loadImage("ASSETS/P2.png");

  font = loadFont("ASSETS/I-pixel-u.ttf");

  //soundFormats("wav", "flac");
  audio = loadSound("ASSETS/CLINKCLANK_AUDIO.wav");
}

function setup() {
  createCanvas(640, 360);
  noStroke();
  leftPaddle = new Paddle(30, height / 2 - 30, 10, 100);
  rightPaddle = new Paddle(width - 40, height / 2 - 30, 10, 100);

  // ball starts center with a gentle push
  ball = new Ball(width / 2, height / 2, 8);
}

function draw() {
  background("#120508");

  // start game
  if (keyIsPressed) {
    if (key == " ") {
      gameStarted = true;
    }
    if (keyIsPressed) {
      if (key == "r" || key == "R") {
        ball.reset();
        score[0] = 0;
        score[1] = 0;
      }
    }
  }

  if (!gameStarted) {
    //imageMode(CENTER);
    image(img_homep, width / 7.5, height / 8);
    img_homep.resize(0, 300);
    image(img_homep, width / 7.5, height / 8);
    return;
  }

  // 1) read input (students: add paddle movement here)
  handleInput();

  // 2) update world
  leftPaddle.update();
  rightPaddle.update();
  ball.update();

  // 3) handle collisions
  ball.checkWallBounce(); // top/bottom
  ball.checkPaddleBounce(leftPaddle);
  ball.checkPaddleBounce(rightPaddle);

  // 4) draw everything
  drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  ball.show();

  fill(255);
  noStroke();
  textFont(font);
  textSize(24);
  text(score[0], 275, 30);
  text(score[1], 350, 30);
}

/* ----------------- Input ----------------- */
function handleInput() {
  // TODO (students): move paddles
  // Example targets:
  // - W/S to move leftPaddle up/down
  // - UP/DOWN to move rightPaddle up/down
  //
  // Hints:
  // leftPaddle.vy = -5 or 5; rightPaddle.vy = -5 or 5;
  // Make sure to stop paddles when keys are released (see keyReleased)

  if (keyIsPressed == true) {
    if (key == "w" || key == "W") {
      leftPaddle.vy = -10;
    } else if (key == "s" || key == "S") {
      leftPaddle.vy = 10;
    }

    if (key == "p" || key == "P") {
      rightPaddle.vy = -10;
    } else if (key == "l" || key == "L") {
      rightPaddle.vy = 10;
    }
  }
}

function keyReleased() {
  // Stop paddles when keys are released (students: fill this once handleInput is added)
  leftPaddle.vy = 0;
  rightPaddle.vy = 0;
}

/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0; // students will change this via input
    this.speed = 10;
  }

  update() {
    // basic vertical movement; constrained to canvas
    this.pos.y += this.vy; // this.pos.y = this.pos.y +this.vy
    this.pos.y = constrain(this.pos.y, 0, height - this.h);
  }

  show() {
    noFill();
    rect(this.pos.x, this.pos.y, this.w, this.h, 2);
    image(img_player1, this.pos.x, this.pos.y);
    img_player1.resize(0, 100);
    image(img_player1, this.pos.x, this.pos.y);
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.c = color(255, 170, 70);
    // gentle random direction
    this.vel = createVector(0, 0);
    this.vel.x = random([-1, 1]) * 3.5;
    this.vel.y = random([-1, 1]) * 2.0;
  }

  update() {
    this.pos.add(this.vel);
  }

  checkWallBounce() {
    // bounce off top/bottom
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }

    // TODO (students): detect when ball passes left or right edge.
    // Increase a score counter and reset ball to center with a new direction.
    if (this.pos.x + this.r < 0) {
      /* right player scores */
      score[1] += 1;
      this.reset();
    }
    if (score[0] == maxScore) {
      push();
      textAlign(CENTER);
      textFont(font);
      textSize(70);
      fill(random(0, 255), random(0, 255), random(0, 255));
      text("P1.. u r Winnier!", width / 2, height / 2);
      pop();

      textSize(25);
      text("rematch? press 'r' to restart the game", 100, 240);
      this.vel.set(0, 0);

     
    }

    if (this.pos.x - this.r > width) {
      /* left player scores */
      score[0] += 1;
      this.reset();
    }
    if (score[1] == maxScore) {
      push();
      textAlign(CENTER);
      textSize(70);
      textFont(font);
      fill(random(0, 255), random(0, 255), random(0, 255));
      text("P2.. u r Winnier!", width / 2, height / 2);
      pop();

      textSize(25);
      text("rematch? press 'r' to restart the game ", 100, 240);
      this.vel.set(0, 0);
      
     
    }
  }

  checkPaddleBounce(p) {
    // AABB-then-circle quick check (simple & forgiving)
    const withinY = this.pos.y > p.pos.y && this.pos.y < p.pos.y + p.h;
    const withinX =
      this.pos.x + this.r > p.pos.x && this.pos.x - this.r < p.pos.x + p.w;

    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = p.pos.x + p.w + this.r;
      } else {
        this.pos.x = p.pos.x - this.r;
      }
      this.vel.x *= -1.3; // reflect horizontally
      this.c = color(random(255), random(255), random(255));
       audio.play();
    }
  }

  show() {
    push();

    fill(this.c);
    circle(this.pos.x, this.pos.y, this.r * 2.5);
    imageMode(CENTER);
    // tint(this.c);
    image(img_apple, this.pos.x, this.pos.y);
    img_apple.resize(0, 30);
    image(img_apple, this.pos.x, this.pos.y);

    pop();
  }

  reset() {
    // students: call this after a point is scored
    this.pos.set(width / 2, height / 2);
    this.vel.set(random([-1, 1]) * 3.5, random([-1, 1]) * 2.0);
  }
}

/* ----------------- UI helpers ----------------- */
function drawCourt() {
  // center line
  stroke(250, 42, 70);
  strokeWeight(2);
  for (let y = 10; y < height; y += 18) {
    line(width / 2, y, width / 2, y + 8);
  }
  noStroke();
}
