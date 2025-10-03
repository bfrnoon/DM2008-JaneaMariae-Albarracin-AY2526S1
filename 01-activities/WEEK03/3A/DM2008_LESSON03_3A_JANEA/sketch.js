// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#ff17ae", "#3c78d8", "#ffeb3b"];
let sizey = [160, 400, 130, 100, 40, 320];

// 2. A variable to track the current index
let currentpaletteIndex = 0;
let currentsizeyIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0, 50);
  
    if (mouseX < width/2) {
    fill(0, 150, 255);
    ellipse(mouseX, mouseY, random(sizey));
  } else {
    fill(random(sizey), 250, 30);
    rect(5, 20, random(0,380));
   }
    // 3. Use the array value at currentIndex
  fill(palette[currentpaletteIndex]);
  ellipse(width / 2, height / 2, sizey[currentsizeyIndex]);
}

// 4. Change the index when a key is pressed
function keyPressed() {
  
    if (key == 'a' || key == 'A') {
    // Add a new random color to the end
    palette.push(color(random(255), random(255), random(255)));
    sizey.push(random(0, 100));
  }
  if (key == 'r' || key == 'R' ) {
    // Remove the last color (if any)
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
    }
  }
  // Advance to the next item
  currentpaletteIndex++;
  currentsizeyIndex++;
  // Reset to 0 when we reach the end
  if (currentpaletteIndex >= palette.length) {
    currentpaletteIndex = 0;
    if (currentsizeyIndex >= sizey.length) {
      currentsizeyIndex = 0;
    }
  }
  // Log in the console to check
  console.log(
    "Current index:",
    currentpaletteIndex,
    "→",
    palette[currentpaletteIndex]
  );
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/
