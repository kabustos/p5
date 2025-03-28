// Click and drag the mouse to view the scene from different angles.

let img;

// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('/screenshots/3.pixels.png');
}

function setup() {
  createCanvas(700, 700 ,WEBGL);

  describe('A sphere floating above a landscape. The surface of the sphere reflects the landscape. The full landscape is viewable in 3D as the user drags the mouse.');
}

function draw() {
  // Add the panorama.
  panorama(img);

  // Enable orbiting with the mouse.
  orbitControl();

  // Use the image as a light source.
  imageLight(img);

  // Style the sphere.
  noStroke();
  specularMaterial(50);
  shininess(200);
  metalness(100);

  // Draw the sphere.
  sphere(30);
}