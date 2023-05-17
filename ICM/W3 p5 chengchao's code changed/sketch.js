//slider variables
let n;
let y;
let dragging = false;
//ellipse position
let a, b;
let speeda, directiona, speedb, directionb;
//add color variables
let colorOn = false;
//rgb colors, 'c' is used for blue
let r, g, c;
//hsl colors for bouncing ellipse
let h, s, l;




function setup() {
	createCanvas(600, 400);
	angleMode(DEGREES);
	n = width / 100;
	y = height / 2;
	a = 2 * width / 3;
	b = height / 2;
	speeda = random(3, 9);
	speedb = random(2, 15);
	directiona = 1;
	directionb = 1;
	h = 1;
	s = 60;
	l = 50;
}

function draw() {
	colorMode(RGB);
	background(220);
	
	//draw the slider
	//bc made the slider slide faster
	stroke(200);
	line(width - n, 0, width - n, height);
	noStroke();
	fill(150)
	if (dragging) {
		y = y + (mouseY - pmouseY);
		//console.log(y)
		fill(100);
	}
	y = constrain(y, 0, height - 2 * n);
	rect(width - 2 * n, y, 2 * n, 2 * n);
	fill(150);
	let x = map(y, 0, height, 0, width);

	//changing dots
	//bc added random color change when the mouse is pressed
	for (let i = 0; i < height + 20; i += 20) {
		for (let m = 0; m < x + 20; m += 20) {
			if (colorOn){
				r = random (100, 240);
				g = random (100, 240);
				c = random (100, 240);
				fill(r, g, c);
			} else {
				fill(random(110, 220))
			}
			push();
			rectMode(CENTER);
			rect(m, i, 10, 10);
			pop();
		}

	}

	//bouncing ellipse
	//bc added code to change color when it hits walls
	colorMode(HSL);
	fill(h, s, l);
	ellipse(a, b, 30, 30);
	if (a >= width - 15 || a <= x + 30) {
		directiona = -directiona;
		h += random(20, 200);
	}
	if (b >= height - 15 || b <= 15) {
		directionb = -directionb;
		h -= random(20,70);
	}
	a += speeda * directiona;
	b += speedb * directionb;
	//reset color
	if (h > 360){
		h=0;
	}
}

function mousePressed() {
	if (mouseX >= width - 2 * n && mouseX <= width && mouseY >= y && mouseY <= y + 2 * n) {
		dragging = true;
	}
	colorOn = true;
}

function mouseReleased() {
	dragging = false;
	colorOn = false;
}