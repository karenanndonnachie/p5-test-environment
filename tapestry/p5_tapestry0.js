let rug;
function preload() {
  rug = loadImage("data/rug1.jpg");
}

let walkers = [];
var walkerCount = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  imageMode (CENTER);
  for (let i = 0; i < walkerCount; i++) {
    walkers[i] = new Walker();
  }

  //while loop makes the warp of the tapestry! L=lines (While loop learned via Daniel Shiffman)
  var l = 0;
  while (l < width) {
    strokeWeight(0.2);
    stroke(255);
    line (l, 0, l, height);
    l = l +6;
  }

  //This controls the speed of the sketch
  // frameRate(30);
}



function draw() {
  for (let i = 0; i < walkerCount; i++) {
    walkers[i].display();
    walkers[i].move();
  }
  //image (rug, windowWidth/2, windowHeight/2);
}



function Walker() {
  this.x = random(0,30); // starting position of the threads on the x axis
  this.y = random(800); // starting position of the threads on the y axis
  this.display = function() {
    var col = rug.get(this.x-30, this.y);
    stroke(col);
    strokeWeight(1);
    point(this.x, this.y);
  };

  this.move = function() {
    var r = random(1);
    if (r < 0.5) {
      this.x++;
    } else if (r < 0.76) {
      this.y++;
    } else {
      this.y--;
    }
    // this if statement makes the random walker stop moving
    if (this.x > windowWidth) {
      this.x = windowWidth;
    }
  };
}
