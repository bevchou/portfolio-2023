let numLayers, layerHeight;
let startCol, endCol, colIncr;

let fish1x, fish2x, fish3x;
let bub1y, bub2y, bub3y, bub4y;

let theta;


function setup() {
	createCanvas(400, 600);
	//water
	numLayers = 50;
	layerHeight = height/numLayers;
	startCol = color(177, 233, 239);
	endCol = color(26, 33, 68);
	colIncr = 1/numLayers;
	//fish
	fish1x =  width*0.1;
	fish2x = width*0.7;
	fish3x = width*0.3;
	//bubbles
	bub1y = height*0.9;
	bub2y = height*0.7;
	bub3y = height*0.5;
	bub4y = height*0.4;
	//angle
	theta = 0;
	//jellyfishes
	jelly1y = height*0.3;
	jelly2y = height*0.8;
}

function draw() {
	background(0);
	noStroke();
	//draw water - each rect get darker as height increases
	for (let i = 0; i < numLayers; i++){
		let waterCol = lerpColor(startCol, endCol, colIncr*i);
		fill(waterCol);
		rect(0, layerHeight*i, width, layerHeight);
	}

	fish(fish1x, height*0.3, .5, color(232, 123, 111));
	fish1x = moveLoopX(fish1x, 2);

	fish(fish2x, height*0.7, 0.8, color(219, 142, 0));
	fish2x = moveLoopX(fish2x, 1);

	jellyfish(width*0.8, jelly1y, 1, color(214, 122, 226, 200));
	jelly1y = moveLoopY(jelly1y, -0.25);

	fish(fish3x, height*0.9, 1.2, color(193, 52, 87))
	fish3x = moveLoopX(fish3x, .5);

	bubble(width*0.1, bub1y, 40);
	bub1y = moveLoopY(bub1y, -1);

	bubble(width*0.7, bub2y, 30);
	bub2y = moveLoopY(bub2y, -0.5);

	jellyfish(width*0.2, jelly2y, .5, color(137, 113, 232, 200));
	jelly2y = moveLoopY(jelly2y, -0.5);

	bubble(width*0.4, bub3y, 50);
	bub3y = moveLoopY(bub3y, -1.5);

	bubble(width*0.9, bub4y, 40);
	bub4y = moveLoopY(bub4y, -1);

}

function fish(fishX, fishY, fishSize, fishCol) {
	push();
	fill(fishCol);
	translate(fishX, fishY);
	scale(fishSize);
	triangle(0, 0, -35, -20, -35, 20);
	ellipse(20, 0, 80, 40);
	fill(0);
	ellipse(35, -8, 6);
	pop();
}

function moveLoopX(xpos, xspeed){
	xpos += xspeed;
	if (xpos > width*1.2){
		xpos = -width*0.2;
	}
	return xpos;
}

function moveLoopY(ypos, yspeed){
	ypos += yspeed;
	if (ypos < -0.2*height){
		ypos = height*1.2;
	}
	return ypos;
}

function bubble(bubX, bubY, bubSize){
	push();
	fill(255, 255, 255, 50);
	ellipse(bubX, bubY,bubSize);
	fill(255, 255, 255, 180);
	ellipse(bubX+0.2*bubSize, bubY-0.2*bubSize, 0.2*bubSize);
	pop();
}

function jellyfish(jellyX, jellyY, jellySize, jellyCol){
	push();
	fill(jellyCol);
	translate(jellyX, jellyY);
	scale(jellySize);
	//body, use sin() to oscillate size
	let jw = map(sin(theta), -1, 1, 65, 90);
	theta += 0.05;
	arc(0, 0, jw, 100, PI, 0);
	//tentacles
	stroke(jellyCol);
	strokeWeight(3);
	for (let k= -25; k <= 25; k += random(2,10)){
	line(k, 0, k, random(20,70));
	}
	//eyes
	fill(0);
	ellipse(-10, -10, 8);
	ellipse(10, -10, 8);
	pop();
}
