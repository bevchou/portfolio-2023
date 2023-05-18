let canvas;
let video;
let factor = 10;
let thresholdSlider;
//pentatnoic scale freq in hz starting on middle C
//https://pages.mtu.edu/~suits/notefreqs.html
//C, D, E, G, A, C
let pentatonic = [261.63, 293.66, 329.63, 392, 440, 523.25];
let musicBarSlider;
let sounds = [];

function setup() {
  //canvas
  canvas = createCanvas(600, 400);
  pixelDensity(1);
  canvas.id('canvas');
  //get webcam
  video = createCapture(VIDEO);
  video.id('webcam');
  video.size(width / factor, height / factor);
  //threshold slider
  thresholdSlider = createSlider(0, 255, 120);
  thresholdSlider.size(200);
  thresholdSlider.id('thresholdSlider');
  //music bar slider
  musicBarSlider = createSlider(0, video.height, video.height * 0.25);
  musicBarSlider.size(200);
  musicBarSlider.id('musicBarSlider');
  //envelope
  // env = new p5.Env();
  // env.setADSR(.25, .25, .5, .25);
  // env.setRange(1, 0);
  // env.play();
  //sounds
  for (let i = 0; i < pentatonic.length; i++) {
    sounds.push(new p5.Oscillator());
    sounds[i].setType('sine');
    sounds[i].freq(pentatonic[i]);
    sounds[i].amp(.75);
  }

}

function draw() {
  video.loadPixels();
  //REFERENCE DAN SHIFFMAN: CHECKBOX MIRROR https://youtu.be/m1G6WBvrOBE
  for (let y = 0; y <= video.height; y++) {
    for (let x = 0; x <= video.width; x++) {
      //color location in pixel array
      let index = ((y * video.width) + video.width - x) * 4;
      //get color of the pixel
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      //average for brightness
      let bright = (r + g + b) / 3;
      //make black & white pixels only with threshold
      let threshold = thresholdSlider.value();
      //active area horizontal bar height
      let barHeight = 8;
      if (bright < threshold) {
        fill(0);
        //make active area red
        if (y > musicBarSlider.value() - 0.5 * barHeight && y < (musicBarSlider.value() + 0.5 * barHeight)) {
          fill(255, 0, 0);
          let keyWidth = video.width / sounds.length;
          //play tones in each area equally divided horizontally if active
          for (let j = 0; j < sounds.length; j++) {
            if (x > j * keyWidth && x < (j + 1) * keyWidth) {
              sounds[j].start();
            }
          }
        } else {
          for (let i = 0; i < sounds.length; i++) {
            sounds[i].stop();
          }
        }
      } else {
        fill(255);
      }
      noStroke();
      rectMode(CENTER);
      rect(x * factor, y * factor, factor, factor);
    }
  }
}
