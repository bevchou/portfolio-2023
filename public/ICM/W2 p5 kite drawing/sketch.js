let cloud, kite, person;
let r1, r2, size;

function setup() {
	createCanvas(600, 400);
	//hide cursor
	noCursor();
	//initial cloud variables
	cloud = {
		//position
		x: 100,
		y: 75,
	};
	//cloud size/shape
	size = 1.2;
	r1 = size * random(60, 90);
	r2 = size * random(40, 70);
	person = {
		x: width*0.85,
		y: height*0.70
	};
}

function draw() {
	//blue sky
	background(203, 227, 242);
	//sun
	noStroke();
	fill(255, 234, 117);
	ellipse(50,50,120);
	//clouds
	//position clouds horizontally across the sky
	for(horiz = -100; horiz <= width+100; horiz += 200){
		//position clouds vertically along top 40% of sky
		for(vert = -50; vert <= height*0.60; vert += 120){
			//creating the cloud shape
			for (i = -20; i <= 20; i += 20) {
				fill(230, 237, 235, 170);
				console.log(r1, "----", r2);
				ellipse(cloud.x+i+horiz, cloud.y+vert, r1, r2);
				ellipse(cloud.x+5+horiz, cloud.y+i+vert, r1, r2);
			}
		}	
	}
	//move clouds
	cloud.x += 0.5;
	//loop clouds
	if (cloud.x > width/3){
		cloud.x =0;
	}
	//grass
	fill(92, 173, 74);
	beginShape();
	vertex(0, height*0.90);
	vertex(width, height*0.70);
	vertex(width,height);
	vertex(0,height);
	endShape(CLOSE);
	//kite position + other variables
	kite = {
		x: mouseX,
		y: mouseY,
	};
	let fade;
	//draw kite
	colorMode(HSL);
	fade = map(mouseY, 0, height, 70, 20 );
	fill(6, 100, fade);
	beginShape();
	vertex(kite.x, kite.y);
	kite.x -= 20;
	kite.y -= 35;
	vertex(kite.x, kite.y);
	kite.x -= 30;
	vertex(kite.x, kite.y);
	kite.x += 10;
	kite.y += 30;
	vertex(kite.x, kite.y);
	endShape();
	//kite string
	colorMode(RGB);
	noFill();
	stroke(0);
	line(mouseX, mouseY, person.x,person.y+60);
	//kite flyer
	//legs
	noStroke();
	rectMode(CENTER);
	fill(41, 54, 84);
	rect(person.x, person.y+80, 50, 100);
	//body
	fill(232, 189, 239);
	rect(person.x, person.y+50, 55,80, 3)
	//hair
	fill(79, 71, 55);
	ellipse(person.x, person.y, 40, 50);
	rect(person.x, person.y+20, 40, 40);

	//drawing for cloud without loopgs
	//    ellipse(cloud.x, cloud.y, 50,40);
	//    ellipse(cloud.x+20, cloud.y-20, 30, 30);
	//    ellipse(cloud.x+30, cloud.y+20, 50, 40);
	//    ellipse(cloud.x+40, cloud.y, 60, 30);
}
