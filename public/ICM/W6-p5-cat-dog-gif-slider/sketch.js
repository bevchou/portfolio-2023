//I have 7 of each type of gif
let numGif = 7;
//arrays for image file paths
let catGif = [];
let catDogGif = [];
let dogGif = [];
//keep track of gifs
let currentGif; //the file path
let image; //the actual image


function setup() {
  noCanvas();
  //arrays of image file paths
  for (let i = 0; i < numGif; i++) {
    catGif.push("/ICM/W6-p5-cat-dog-gif-slider/cat-gifs/cat" + i + ".gif");
    catDogGif.push("/ICM/W6-p5-cat-dog-gif-slider/cat-dog-gifs/catdog" + i + ".gif");
    dogGif.push("/ICM/W6-p5-cat-dog-gif-slider/dog-gifs/dog" + i + ".gif");
  }
  //make slider
  slider = createSlider(0, 100, 20);
  slider.size(300);
  slider.parent('#slider');
  //make button
  button = createButton('GO!');
  button.size(50, 50);
  button.parent('#button');
  //starter image
  image = createImg("welcome.gif");
  image.class('gif');
  //remove and then show new gif
  button.mousePressed(removeGif);
  button.mouseReleased(showGif);
}

function draw() {
  //pick gifs based on slider position
  sliderValue = slider.value();
  currentGif = pickGif(sliderValue);
}

function showGif() {
  image = createImg(currentGif);
  image.class('gif');
}

function removeGif() {
  a = selectAll('.gif');
  for (let i = 0; i < a.length; i++) {
    a[i].remove();
  }
}

//function that changes the gif based on slider value
function pickGif() {
  let newGif;
  let gifIndex = floor(random(0, numGif));
  if (sliderValue >= 0 && sliderValue < 33) {
    newGif = catGif[gifIndex];
  } else if (sliderValue >= 33 && sliderValue < 66) {
    newGif = catDogGif[gifIndex];
  } else if (sliderValue >= 66 && sliderValue <= 100) {
    newGif = dogGif[gifIndex];
  }
  return newGif;
}
