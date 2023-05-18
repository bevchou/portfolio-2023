//arc origin and radius
let x, y ,r;
//angle of slider
let angle;
//difference of mouse angle and slider angle
let offsetAngle;
//end of slider rotation
let stopAngle;
//colors
let h, s, l;

//track if user dragging the slider
let dragging = false;
//track when to change color
let changeCol = false;
//track if you've passed the stop angle
let passedStop = false;


function setup() { 
	createCanvas(550, 400);
	colorMode(HSL);
	//start color
	h = 8;
	s = 88;
	l = 58;
	//start position of slider
	angle = 0;
	//end position of slider
	stopAngle = PI*2/3;
} 

function draw() { 
	background(255);
	//arc placement
	x = width/2;
	y = 0;
	//radius to fill the screen
	r = dist(x, y, width, height);
	//slider appearance
	noStroke();
	fill(h, s, l);
	//change in mouse position
	let dx = mouseX - x;
	let dy = mouseY - y;
	//angle of mouse from 0
	let mouseAngle = atan2(dy, dx);
	//increase the angle while dragging
	if (dragging){
		angle = mouseAngle - offsetAngle;
	}
	//if slider reaches the area after the stop angle
	if (angle > stopAngle || angle < 0){
		//reset arc rotation
		angle = 0;
		//define when to change color
		//if hasn't passed the stop angle before
		if (!passedStop){
			//flip boolean value
			changeCol = !changeCol;
			passedStop = !passedStop;
		}
	} else {
		passedStop = false;
	}
	//change color
	if (changeCol) {
			h += 20;
			//reset after changing color
			passedStop=false;
	}
	//reset color cycling
	if (h > 360) {
			h = 0;
		}
	//draw the arc
	push();
	translate(x, y);
	rotate(angle);
	arc(0, 0, 2*r, 2*r, PI/8 , PI*1.3);
	pop();
	//add text
	fill(0);
	textSize(13);
	text("Drag your cursor to the left!", width*0.7, height*0.08);
	console.log(angle);
}

//drag rotation based on knob GUI code from Dan Schiffman: 
//https://github.com/ITPNYU/ICM-2015/blob/master/03_interaction/GUI/knob/sketch.js
function mousePressed() {
	//when user is dragging mouse inside the circle
	//track angle of mouse relative to angle of slider
	if (dist(mouseX, mouseY, x, y) < r){
		dragging = true;
		let dx = mouseX - x;
		let dy = mouseY - y;
		offsetAngle = atan2(dy, dx)-angle;
	}
}

//when mouse is released, dragging is false
function mouseReleased() {
	dragging = false;
	changeCol = false;
}