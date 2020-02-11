let p;

function setup() {
  //Set canvas to window height and width
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();
}

function draw() {
  background("blue");
  p.update();
  p.draw();
}

class Particle {
  constructor() {
    //Position
    //Width and height provided by P5
    this.pos = createVector(random(width), random(height));
    //Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    //Size
    this.size = 10;
  }

  update() {
    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
    circle(this.pos.x, this.pos.y, this.size * 2);
  }
}
