//keep track of gifs
let currentGif; //the file path
let image; //the actual image
//API info
let APIkey = "3GGsEajJUSgykXGpw4EeN6QYY5w5Ve7G";
let numGif = 25;
let queryLeft;
let queryRight;
let giphyLeftData;
let giphyMiddleData;
let giphyRightData;

function setup() {
  noCanvas();
  //get inputs from user
  queryLeft = select('#leftInput');
  queryRight = select('#rightInput');
  //make slider
  slider = createSlider(0, 100, 20);
  slider.size(300);
  slider.parent('#slider');
  //make button
  button = createButton('GO!');
  button.size(50, 50);
  button.parent('#button');
  //starter image
  image = createImg('welcome.gif');
  image.class('gif');
  //remove and then show new gif
  button.mousePressed(updateGif);
  button.mouseReleased(showGif);
}

function draw() {
  //pick gifs based on slider position
  if (giphyLeftData) {
    sliderValue = slider.value();
    currentGif = pickGif(sliderValue);
  }
}

function getLeftData(leftData) {
  giphyLeftData = leftData;
}

function getMiddleData(middleData) {
  giphyMiddleData = middleData;
}

function getRightData(rightData) {
  giphyRightData = rightData;
}

function showGif() {
  image = createImg(currentGif);
  image.class('gif');
}

function updateGif() {
  //API load JSON file
  loadJSON("https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + queryLeft.value() + "&limit=" + numGif + "&offset=0&rating=PG&lang=en", getLeftData);
  loadJSON("https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + queryLeft.value() + "+" + queryRight.value() + "&limit=" + numGif + "&offset=0&rating=PG&lang=en", getMiddleData);
  loadJSON("https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + queryRight.value() + "&limit=" + numGif + "&offset=0&rating=PG&lang=en", getRightData);
  a = selectAll('.gif');
  //remove gifs
  for (let i = 0; i < a.length; i++) {
    a[i].remove();
  }
}

//function that changes the gif based on slider value
function pickGif(sliderValue) {
  let newGif;
  let gifIndex = floor(random(0, numGif));
  if (sliderValue >= 0 && sliderValue < 33) {
    newGif = giphyLeftData.data[gifIndex].images.fixed_height.url;
  } else if (sliderValue >= 33 && sliderValue < 66) {
    newGif = giphyMiddleData.data[gifIndex].images.fixed_height.url;
  } else if (sliderValue >= 66 && sliderValue <= 100) {
    newGif = giphyRightData.data[gifIndex].images.fixed_height.url;
  }
  return newGif;
}
