
function setup() {
  createCanvas(750, 300);
}

var angle = 0;
function draw() {
  background(255);
  fill(127);
  stroke(0);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(angle);
  line(-50, 0, 50, 0);
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(50, 0, 16, 16);
  ellipse(-50, 0, 16, 16);
  angle += 0.05;
}
