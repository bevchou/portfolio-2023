//arrays
let paragraph = [];
let words = [];
let allWaves;
let waves = [];
//fonts
let Arial;
let fontsize = 20;
//text boxes
let textboxA = {
  rectx: 50,
  recty: 50,
  rectwidth: 100,
  rectheight: 150
}
let textboxB = {
  rectx: 200,
  recty: 50,
  rectwidth: 100,
  rectheight: 150
}
let textboxC = {
  rectx: 50,
  recty: 50,
  rectwidth: 250,
  rectheight: 350
}


function preload() {
  Arial = loadFont('fonts/Arial Bold.ttf');
  paragraph = loadStrings('waves.txt');
}

function setup() {
  createCanvas(350, 500);
  //turn text file int an array of words
  allWaves = new TextToArray(paragraph);
  words = allWaves.makeWordArray();
  //array of objects of a word, x, y, xspeed, yspeed
  for (let i = 0; i < words.length; i++) {
    waves.push(new manipulateText(words[i], 0, 0, 1, 1));
  }
}

function draw() {
  //appearance
  background(0);
  fill(255);
  textSize(fontsize);
  //textbox A scroll
  drawScroll(0, 5, textboxA, .5);
  //textbox B scroll
  drawScroll(6, 11, textboxB, .5);
  //all across tilt
  drawTilt(12, 13, 200);
  //textbox C scroll
  drawScroll(14, 23, textboxC, 1);
  //all across tilt
  drawTilt(24, 26, 400);
}



function drawScroll(startindex, endindex, textbox, speed) {
  push();
  for (i = startindex; i <= endindex; i++) {
    waves[i].scroll(textbox, speed);
    translate(0, fontsize);
  }
  pop();
  waves[0].boundVert(textbox);
}

function drawTilt(startindex, endindex, ypos) {
  let count = 0;
  for (i = startindex; i <= endindex; i++) {
    count++;
    waves[i].tilt(ypos + fontsize * count);
  }
}
