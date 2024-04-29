function setup() {
    createCanvas(600, 600);
    fill(255, 
        255,  
        255);
  }
  
  function draw() {
    background(220);
    let c = rbgMixRandom(255, 255, 255, 0.6)
    fill(c);
    triangle(300, 100, 150, 300, 450, 300)

    x = getRandomInt(0, 600)
    y = getRandomInt(0, 600)

    if (mouseIsPressed){
        let c = rbgMixRandom(255, 255, 255, 0.6)
        fill(c);
        triangle(x, y, x + 50, y + 60, x + 90, y + 60)
    }
  }


// helpers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rbgMixRandom(red, green, blue, weight){
    let r, g, b;

    weight = weight > 1 ? 1 : weight;
    weight = weight < 0 ? 0 : weight;
    
    r = random(256);
    g = random(256);
    b = random(256);

    r = (1-weight) * r + weight * red;
    g = (1-weight) * g + weight * green;
    b = (1-weight) * b + weight * blue;

    return color(r, g, b)
}

//TO DO:
/*
    Make big triangle maintain single color
    Make big triangle in middle a button
    When button is pressed generate random little other triangles w/ alternating colors
*/