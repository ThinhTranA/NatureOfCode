let origin;
let bob;
var len;
var angle = 0;
var aVel = 0.0;
var aAcc = 0.0;

function setup() {
  createCanvas(640, 360);
  angle = PI / 4
  len = 180;
  origin = createVector(width / 2, 0);
  bob = createVector(width / 2, len);
}

function draw() {
  background(220);
  bob.x = origin.x + len * sin(angle);
  bob.y = origin.y + len * cos(angle);

  line(origin.x, origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, 32, 32);

  aAcc = -0.01 * sin(angle);

  angle += aVel;
  aVel += aAcc;

  aVel *= 0.99;

}
