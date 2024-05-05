function setup(){
 createCanvas(700, 600);
 background(51);
 // fill(128, 128, 128);
}

function draw(){
	mirror()
	photos()
	table()
	drostePhoto()
}

function mirror(){
	stroke(6)
	rect(400, 200, 300, 400)
}

function photos(){
	strokeWeight(3)
	rect(100, 150, 100, 150)
	rect(250, 150, 100, 150)
}

function table(){
	strokeWeight(3)
	rect(80, 530, 95, 20)
	triangle(60, 500, 60, 600, 190, 600);
}

function drostePhoto(){
	rect(520, 250, 150, 120)
	strokeWeight(1)
	rect(570, 260, 30, 50)
	rect(620, 260, 30, 50)
	rect(550, 340, 40, 8)
	triangle(540, 320, 540, 368, 590, 368)
}	

/*
Stretch goal:
- Hold click to recursively enter the photo
- Release click stops the animation
*/