let n;
let y;
let dragging = false;
let a, b;
let speeda, directiona, speedb, directionb;



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

}

function draw() {
	background(220);


	//draw the slider
	stroke(200);
	line(width - n, 0, width - n, height);
	noStroke();
	fill(150)
	if (dragging) {
		y = y + (mouseY - pmouseY) / 5;
		//console.log(y)
		fill(100);
	}
	y = constrain(y, 0, height - 2 * n);
	rect(width - 2 * n, y, 2 * n, 2 * n);
	fill(150);
	let x = map(y, 0, height, 0, width);

	for (let i = 0; i < height + 20; i += 20) {
		for (let m = 0; m < x + 20; m += 20) {
			fill(random(110, 220))
			ellipse(m, i, 10, 10);
		}

	}
	fill(150);
	ellipse(a, b, 30, 30);
	if (a >= width - 15 || a <= x + 30) {
		directiona = -directiona;
	}
	if (b >= height - 15 || b <= 15) {
		directionb = -directionb;
	}
	a += speeda * directiona;
	b += speedb * directionb;
}

function mousePressed() {
	if (mouseX >= width - 2 * n && mouseX <= width && mouseY >= y && mouseY <= y + 2 * n) {
		dragging = true;
	}
}

function mouseReleased() {
	dragging = false;
}