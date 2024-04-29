function setup() {
    createCanvas(600, 600);
    fill(255, 255, 255);
  }
  
  function draw() {
    let c = rbgMixRandom(255, 255, 255, 0.7)
    fill(c);
    generateTriangles(600, 600);

    console.log(rbgMixRandom(255, 255, 255, 0.5))
    let baseColor = color(137, 206, 237)
    fill(baseColor);
    triangle(300, 150, 150, 350, 450, 350)

    x = random(600)
    y = random(600)

    if (mouseIsPressed){
        let c = rbgMixRandom(255, 255, 255, 0.5)
        fill(c);
        triangle(x, y, x + 50, y + 60, x + 90, y + 60)
    }
  }


// helpers
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

function generateTriangles(width, height){
    x = random(600)
    y = random(600)

    x1 = x - 50;
    x2 = x + 50;
    y1 = y+ 50;
    
    stroke(50) 
    return triangle(x, y, x1, y1, x2, y1)
}

//TO DO:
/*
    Make big triangle maintain single color
    Make big triangle in middle a button
    When button is pressed generate random little other triangles w/ alternating colors
*/