/*
INTERACTIVE
- Move cursor along screen to see colors change
- Click to clear the screen
*/

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
		scaled = Math.floor(mouseX / 2)
		fill(0, scaled, 0)
	}

	if(mouseX > greenX && mouseX <= blueX){
		scaled = Math.floor(mouseX / 3)
		fill(0, 0, scaled)
	}
}

function mousePressed(){
	 background(51);
}
