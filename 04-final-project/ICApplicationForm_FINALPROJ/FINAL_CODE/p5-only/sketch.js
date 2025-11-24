
/*
 logic:
 get form data value
 pass into the Person class
 create a function that sets the thing u want for the person
 for eg.
 set address (east,west,north,south) -> if answer is north then set this.hairShape to be bald
 
 then when done with all the constructors, can start doing the generation inside setup()
*/

// initialise variable to store form data
let personName, pronouns, yearOfBirth, address,
 hawkerFood, diet, fight, ftqns, musicqn, race, toesqn; 

// initialise variable for card color
let cardColor = 100;

// game started
let gameStarted = false;
let formSent = false;

// assets
let shirtNorth;
let shirtSouth;
let shirtEast;
let shirtWest;

let eyeHim;
let eyeHer;
let eyeThem;

let mouthLose;
let mouthWin;

let hawkerCR;
let hawkerCF;
let hawkerWestern;
let hawkerNP;
let hawkerBM;
let hawkerIndian;
let hawkerYTF;
let hawkerMala;

let qOrange;
let qApple;

const spacing = 20;

let myFont;


// canvas size (for card)
let canvasWidth, canvasHeight;
class Person {
  constructor(name, pronouns, yearOfBirth, address, ) {
    // Form details
    this.name = name;
    this.pronouns = pronouns;
    this.yearOfBirth = yearOfBirth;
    this.address = address;
    this.hawkerFood = hawkerFood;
    this.diet = diet;
    this.fight = fight;
    this.toesqn = toesqn;
    this.musicqn = musicqn;
    this.race = race;
    this.ftqns = ftqns; 

    // Form 
    this.cardColor = null;
    this.faceShape = null;
    this.hairShape = null;
    this.shirt = null;
    this.race = null;
    this.toesqn = null;
    this.musicqn = null; 
    this.ftqns = null; 


  }

  // generate card color
  generateCardColor() {
    if (redList.includes(personName)) {
      this.cardColor = color(random(200,255), random(0,50), random(0,50));
    } else if (greenList.includes(personName)) {
      this.cardColor = color(random(0,50), random(200,255), random(0,50));
    } else if (blueList.includes(personName)) {
      this.cardColor = color(random(0,50), random(0,50), random(200,255));
    }
    return this.cardColor;
  }

  // generate shrit
  generateShirt() {
      if (this.address == "north") {
      return image(shirtNorth, (canvasWidth/3)/7.3, 310);
    } else if (this.address == "south") {
      return image(shirtSouth, (canvasWidth/3)/7.3, 310);
    } else if (this.address == "east") {
      return image(shirtEast, (canvasWidth/3)/7.3, 310);
    } else if (this.address == "west") {
      return image(shirtWest, (canvasWidth/3)/7.3, 310);
    }
  }

  // generate face shape 
  generateFaceShape() {
      
    if (this.yearOfBirth < 2000) {
      fill("#f7e5d1");
      // put square in the middle
      rect(canvasWidth/4.5, 230, 155)
    } else {
      // circle
      fill("#f7e5d1");
      circle(canvasWidth*0.225, 230, 180); 
    }
  }

  generateEyes() {
    if (this.pronouns == "he/him") {
      return image(eyeHim, canvasWidth/7.4, 180);
    } else if (this.pronouns == "she/her") {
      return image(eyeHer, canvasWidth/7.4, 180);
    } else {
      return image(eyeThem, canvasWidth/7.4, 180); 
    }
  }

  generateMouth() {
    if (this.fight < 50) {
      fill("black");
      rect(169, 280, 45, 30);
    } else {
      fill("black");
      ellipse(169, 280, 20);
    }
  }

  generateHat() {
    if (this.hawkerFood == "CR") {
      return image(hawkerCR, canvasWidth/13.5, 120);
    } else if (this.hawkerFood == "CF") {
      return image(hawkerCF, canvasWidth/17.5, 120);
    } else if (this.hawkerFood == "Western") {
      return image(hawkerWestern, canvasWidth/10, 90);
    } else if (this.hawkerFood == "NP") {
      return image(hawkerNP, canvasWidth/11.5, 120);
    } else if (this.hawkerFood == "BM") {
      return image(hawkerBM, canvasWidth/11, 120);
    } else if (this.hawkerFood == "Indian") {
      return image(hawkerIndian, canvasWidth/13.5, 120);
    } else if (this.hawkerFood == "YTF") {
      return image(hawkerYTF, canvasWidth/12, 120);
    } else {
      return image(hawkerMala, canvasWidth/14.5, 280);
    }
  }
  
  generateStamp() {
    if (this.ftqns == "feet"){
      return image(qOrange, canvasWidth*0.78, 30);      
    } else if (this.ftqns == "hands") {  
      return image(qApple, canvasWidth*0.78, 30); 
    }
  }

 
  generateEars(){
    console.log("EARS:")
    console.log(this.diet)
    if (this.diet == "herbcar") {
      fill("#f7e5d1")
      ellipse(canvasWidth/11.5, 250, 90);
      ellipse(canvasWidth*0.35, 250, 90);
    } else if (this.diet == "carvi") {
      fill("#f7e5d1")
      rect(canvasWidth/11.5, 240, 50, 90);
      rect(canvasWidth*0.35, 240, 50, 90);
    } 
  }

  generateNose(){
    if (this.toesqn == "licktoe") {
      fill(240, 202, 175);
      rect(168, 255, 29, 10);
    } else if (this.toesqn == "toelick"){
      fill(240, 202, 175);
      ellipse(169, 255, 10); 
    }
  }

  generateCutep(){
    if (this.musicqn == "rockmus"){
      for (let i = 0; i < canvasWidth; i += spacing) {
        if ((i / spacing) % 2 == 0) {
          fill(255, random(7, 41), 18); 
          ellipse(i + spacing/2, canvasHeight - 30, random(10, 14));
        }
        else {
          fill(random(200, 255), random(20, 176), 189);   
          rect(i + spacing/2, canvasHeight- 30,  14);    
        } 
      }   
    } else if (this.musicqn == "hyperpop"){ 
      for (let i = 0; i < canvasWidth; i += spacing) {
        if ((i / spacing) % 2 == 0) {
          fill(255, random(90, 119), 41); 
          ellipse(i + spacing/2, canvasHeight - 30, random(5, 9));
        }
        else {
          fill(255, random(100, 184), random(35, 41)); 
          ellipse(i + spacing/2, canvasHeight - 30, 14);
        }
    }
  } else if (this.musicqn == "popmus"){
    for (let i = 0; i < canvasWidth; i += spacing) {
      if ((i / spacing) % 2 == 0) {
        fill(98, 255, random(50, 66)); 
        rect(i + spacing/2, canvasHeight- 30,  random(12, 14));   
      }
      else {
        fill(173, random(200, 250), random(150, 160)); 
        rect(i + spacing/2, canvasHeight- 30,  random(10, 14)); 
      }
    } 
  } else if (this.musicqn == "heavymetal"){
    for (let i = 0; i < canvasWidth; i += spacing) { 
      if ((i / spacing) % 2 == 0) {
        fill(75, random(10, 33), random(200, 255)); 
        rect(i + spacing/2, canvasHeight- 30,  9, random(10, 15));   
      }
      else {
        fill(168, random(120, 148), random(200, 255)); 
        rect(i + spacing/2, canvasHeight- 30,  14, random(25, 30));      
      } 
    } 
  }
 } 
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.c = color(red( 200,150,200), green(200,150,200), blue(200,150,200));
    // gentle random direction
    this.vel = createVector(0, 1);
    this.vel.x = random(-1, 2) * 3.5;
    this.vel.y = random(-1, 2) * 2.0; 
  }
 
  update() {
    this.pos.add(this.vel);
  } 

  checkWallBounce() {
    // bounce off top/bottom
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= canvasHeight) {
      this.vel.y = random(-1, 1) * 7.0;
      this.pos.y = constrain(this.pos.y, this.r, canvasHeight - this.r);
    }
    // bounce off left/right
    if (this.pos.x + this.r < 0 || this.pos.x - this.r > canvasWidth) {
      this.vel.x = random(-1, 1) * 3.5;
      this.pos.x = constrain(this.pos.x, this.r, canvasWidth - this.r);
    }

  }

  show() {
    push();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r * 2.5);
    pop();
  }

}


// intialise person
let person1 = new Person(); 
let balls = [];


function preload() {
  // Example for an image in the root folder
  shirtNorth = loadImage('./assets/SHIRT_01.png');
  shirtSouth = loadImage('./assets/SHIRT_02.png');
  shirtEast = loadImage('./assets/SHIRT_03.png');
  shirtWest = loadImage('./assets/SHIRT_04.png');
  
  eyeHim = loadImage('./assets/EYE_01.png');
  eyeHer = loadImage('./assets/EYE_02.png');
  eyeThem = loadImage('./assets/EYE_03.png');

  mouthLose = loadImage('./assets/MOUTH_01.png');
  mouthWin = loadImage('./assets/MOUTH_02.png');

  
  hawkerCR = loadImage('./assets/ACC_01.png');
  hawkerCF = loadImage('./assets/ACC_02.png');
  hawkerWestern = loadImage('./assets/ACC_03.png');
  hawkerNP = loadImage('./assets/ACC_04.png');
  hawkerBM = loadImage('./assets/ACC_05.png');
  hawkerIndian = loadImage('./assets/ACC_05_1.png');
  hawkerYTF = loadImage('./assets/ACC_07.png');
  hawkerMala = loadImage('./assets/ACC_08.png');

  qApple = loadImage('./assets/HAND_APPLE.png');
  qOrange = loadImage('./assets/FEET-ORANGE.png');

  myFont = loadFont('./assets/ari-w9500-bold.ttf');
}

function setup() {
  // If you want a canvas that fills the window
  // use createCanvas(windowWidth, windowHeight)

  // create canvas, set id, set address in the HTML
  canvasWidth = windowWidth/2;
  canvasHeight = 500;
  let cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.id('myCanvas')
  cnv.parent('contentIC')
  cnv.style("border-radius: 40px")

  // create submit button and put it under the form div
  let submitButton = createButton('Submit');
  submitButton.parent('formDiv');
  submitButton.mousePressed(submitFormData);

  // resize images
  shirtNorth.resize(280, 0)
  shirtSouth.resize(280, 0)
  shirtEast.resize(280, 0)
  shirtWest.resize(280, 0)

  eyeHim.resize(135, 0)
  eyeHer.resize(135, 0)
  eyeThem.resize(135, 0)

  mouthLose.resize(100, 0)
  mouthWin.resize(100, 0)
  
  hawkerCR.resize(250, 0);
  hawkerCF.resize(270, 0);
  hawkerWestern.resize(190, 0);
  hawkerNP.resize(200, 0);
  hawkerBM.resize(200, 0); 
  hawkerIndian.resize(250, 0);
  hawkerYTF.resize(250, 0);
  hawkerMala.resize(250, 0);

  qApple.resize(170, 0);
  qOrange.resize(170, 0); 

  // hides the form
  document.getElementById("formDiv").style.display = 'none'
  // hides the card
  document.getElementById("contentIC").style.display = 'none'
  document.getElementById("collectionIC").style.display = 'none'

  // ball starts center with a gentle push
  for (let i = 0; i < 10; i++) {
    balls.push(new Ball(random(0,canvasWidth), random(0,canvasHeight), random(80,140)));
  }
}


function draw() {

  // checks if the card has been generated once
  // make space for the drawing part
  if (formSent) {
    
    // background for card color (updates every time)
    background(cardColor);

    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];

      if (person1.race == "chinese") {
        noStroke();
        ball.c = color(random(140, 182), random(4, 18), 255);
      } else if (person1.race == "malay") {
        noStroke();
        ball.c = color(5, random(240, 255), random(180, 218));
      } else if (person1.race == "indian") {
        noStroke();
        ball.c = color(random(180, 230), random(100, 255), random(5, 18));
      } else if (person1.race == "others"){ 
        noStroke(); 
        ball.c = color(random(230, 255), 5, random(70, 109));
      }
      ball.show();
      ball.update(); 
      ball.checkWallBounce();  
    }

    // top of card 
    fill(red(cardColor) + 40, green(cardColor) + 40, blue(cardColor) + 40);
    rect(-1,-1, canvasWidth + 5, canvasHeight*0.1);

    // the background of the id picture
    fill('white');
    rect(50,100, canvasWidth/3, canvasHeight*0.7);
    // face shape

    push();
    rectMode(CENTER);

    console.log("genrate shirt: "+ person1.personName)
    person1.generateShirt();
    person1.generateEars();
    person1.generateFaceShape();
    person1.generateEyes();
    person1.generateMouth();
    person1.generateNose();
    person1.generateCutep();
    person1.generateStamp();
    pop();

    push();
    // top of the card text
    fill("white"); 
    textFont(myFont);
    textSize(30);
    text("BADDIE IDENTIFICATION CARD", 50, canvasHeight*0.1 - 13)
    
    // position of name 
    fill(random (200, 255), 255);
    let nameWidthPosition = canvasWidth/2; 
    let nameHeightPosition = canvasHeight*0.15 + 45;  
    
    // name
    text("MY NAME IS ", nameWidthPosition, nameHeightPosition)
    text("[" + person1.personName + "]" , nameWidthPosition, nameHeightPosition + 30)

    // pronouns
    text("PRONOUNS USED", nameWidthPosition, nameHeightPosition + 90)
    text("[" + person1.pronouns + "]" ,  nameWidthPosition, nameHeightPosition + 120)

    // year of birth
    text("DEBUT YEAR", nameWidthPosition, nameHeightPosition + 180)
    text("[" + person1.yearOfBirth + "]" , nameWidthPosition, nameHeightPosition + 210)

    // addy
    text("STALKING RIGHTS", nameWidthPosition, nameHeightPosition + 270)  
    text("[" + person1.address + " of sg]", nameWidthPosition, nameHeightPosition + 300)
    pop();

  }

  // generateHat is here to overlap the drawings of the hair
  person1.generateHat();

  // start game
  if (keyIsPressed) {
    if (key == " ") {
      gameStarted = true;
    } 
  }

  if (gameStarted) {
    document.getElementById("formDiv").style.display = 'block'
    document.getElementById("welcomePage").style.display = 'none'
    if (formSent) {
      document.getElementById("welcomePage").style.display = 'none'
      document.getElementById("formDiv").style.display = 'none'
      document.getElementById("contentIC").style.display = 'block'
      document.getElementById("collectionIC").style.display = 'block'
    }
    return;
  }

}

function keyPressed() {
 if (key == "s" || key == "S"){
    saveCanvas("myIC", "jpg");
  }
}

// submit the form
function submitFormData() {
  // Retrieve the values from the HTML inputs using their IDs
  personName = document.getElementById('name').value;
  yearOfBirth = document.getElementById('myRange').value;
  pronouns = document.querySelector('input[name="pronoun"]:checked').value;
  address = document.querySelector('input[name="sideofsg"]:checked').value;
  hawkerFood = document.getElementById('hfood').value;
  fight = document.getElementById('myFight').value;
  diet = document.querySelector('input[name="herbcar"]:checked').value;
  race = document.querySelector('input[name="race"]:checked').value;
  toesqn = document.querySelector('input[name="toesqn"]:checked').value;
  musicqn = document.querySelector('input[name="musicqn"]:checked').value;
  ftqns = document.querySelector('input[name="ftqns"]:checked').value;
 
  
  // For numerical input, it is useful to convert the string value to a number
  // userAge = parseInt(document.getElementById('age').value);
 
  // create the person to store person info and generate card
  person1.personName = personName;
  person1.yearOfBirth = yearOfBirth;
  person1.pronouns = pronouns;
  person1.address = address;
  person1.fight = fight;
  person1.hawkerFood = hawkerFood;
  person1.diet = diet;
  person1.race = race;
  person1.toesqn = toesqn;
  person1.musicqn = musicqn;
  person1.ftqns = ftqns;

  // triggering generation of card using the Person functions
  cardColor = person1.generateCardColor()
  
  // hide the form 
  formSent = true;
  document.getElementById("formDiv").style.display = 'none';

  // show the card
  document.getElementById("contentIC").style.display = 'block';

}
