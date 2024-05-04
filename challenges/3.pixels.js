function setup(){
 createCanvas(765, 600);
 background(51);
}

function draw(){
	redX = 255
	greenX = 510
	blueX = 765
	square(mouseX, mouseY, 50)

	if(mouseX <= redX){
		fill(mouseX, 0, 0)
	}
	if(mouseX > redX && mouseX <= greenX){
		fill(0, greenX, 0)
	}

	if(mouseX > greenX && mouseX <= blueX){
		fill(0, 0, blueX)
	}
}

function mousePressed(){
	 background(51);
}
