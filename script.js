function setup() {
  //Set canvas to window height and width
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(100);
  }

  circle(150, 150, 80);
}
