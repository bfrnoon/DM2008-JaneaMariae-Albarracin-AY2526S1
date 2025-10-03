// DM2008
// Activity 1b (Georg Nees)
// i thought of this concept in the shower... #showerthoughts
//the int room is so cold so i wanted to showcase a 'bonfire' that warms you up.. teehee

let x;
let y;
let w;
let cc = 0;

  
let sound1; 
let sound2Played = false;

let canvasHeight = 600;
let canvasWidth = 600;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  
  sound1 = loadSound('fire_sound.wav');
  sound2 = loadSound('yippee_sound.flac');
}

function draw() {
  let brownColor = color(random(60, 74), random(25,41), 16)
  x = random(width);
  y = random(height);
  w = random(10, 90);
  
  // background(240,40);
  
  
  fill(brownColor)
  rect(x, canvasHeight-canvasHeight/3, w, w);
}

function mouseMoved() {
  x = random(width);
  y = random(height);
  w = random(10, 90);
  
   stroke(0);
  strokeWeight(random(0.5, 2));
  fill(252, random(3,244), random(3, 10));
  ellipse(x, (y/3)*2, w, w);
  
  cc += 1;
  if(cc>300){
     textSize(random(43,45));
  fill(random(100, 240), random(100, 240), random(100, 240));
  text("youre all better now.. yippee!", random(19,20), random(545, 550)); 
      if (!sound2Played) {
          sound2Played = true, sound2.play()
      }
  }
  
  
  else{
  if (!sound1.isPlaying() ) { sound1.loop() }  
    }
  

}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}