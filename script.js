const particles = [];

function setup() {
  //Set canvas to window height and width
  createCanvas(window.innerWidth, window.innerHeight);
  const particlesLength = Math.floor(window.innerWidth / 10);
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background("blue");
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    particle.checkParticles(particles.slice(index));
  });
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

  //Update the particle position by velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  //Draw the particle
  draw() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
    circle(this.pos.x, this.pos.y, this.size * 2);
  }

  //Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  //Connect the particles
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        stroke("rgba(255, 255, 255, 0.5)");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
