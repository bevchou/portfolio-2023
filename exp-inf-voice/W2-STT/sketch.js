//flickr img
let apiKey = 'e5c82f4288ef7ac62ca49ac5d501e548';
let flickrQuery;
let flickrURL;

//speech recognition
var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
let word;

let picture;

//debug
let myinput;

function setup() {
  createCanvas(320, 500);
  background(255);

  textSize(32);
  textAlign(CENTER);
  text("say something", width / 2, height / 2);
  myRec.onResult = showResult;
  myRec.continuous = true;
  myRec.start();

  // myinput = createInput('something');
  // myinput.position(200, 600);

}

// function debug() {
//   word = myinput.value();
//   console.log(myinput.value());
//   flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&safe_search=1&sort=relevance&text=' + word + '&format=json&nojsoncallback=1';
//   loadJSON(flickrURL, gotPhotos);
// }

function draw() {
  // myinput.changed(debug);
}

function showResult() {
  if (myRec.resultValue == true) {
    // background(192, 255, 192);
    word = myRec.resultString;
    //get flickr images
    flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&safe_search=1&sort=relevance&text=' + word + '&format=json&nojsoncallback=1';
    loadJSON(flickrURL, gotPhotos);

    // text(myRec.resultString, width / 2, height / 2);
    console.log(word);
  }
}

function gotPhotos(photoData) {
  flickrData = photoData;
  //once data loads
  if (flickrData) {
    let i = 0;
    let farmid = flickrData.photos.photo[i].farm;
    let serverid = flickrData.photos.photo[i].server;
    let id = flickrData.photos.photo[i].id;
    let secret = flickrData.photos.photo[i].secret;
    //create photo url
    photoURL = 'https://farm' + farmid + '.staticflickr.com/' + serverid + '/' + id + '_' + secret + '_n.jpg';
    //and create an array of img elements
    background(255);
    loadImage(photoURL, function(img) {
      picture = image(img, 0, 0);
    });
    text(word, width * 0.5, height * 0.7);

  }
}
