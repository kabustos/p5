/*
INTERACTIVE
- Click to populate screen with stars
*/


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sun(){
  fill(255, 255, 0)
  stroke(2)
  circle(600, 300, 350)
}

function moon(){
  fill(157, 156, 139)
  stroke(167, 166, 149)
  strokeWeight(2)
  circle(280, 350, 30)
}

function earth(){
  fill(39, 134, 210)
  stroke(2)
  circle(150, 400, 80)
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  x = getRandomInt(0, 600)
  y = getRandomInt(0, 600)
  if (mouseIsPressed) {
    stroke(6)
    fill(255,255,255)
    ellipse(x, y, 10, 10);
  }
  sun()
  moon()
  earth()
}