class TextToArray {
  constructor(paragraphTemp) {
    //text files import so every line is an item in the array
    this.paragraph = paragraphTemp;
    this.words = [];
    this.wordArray = [];
    this.letters = [];
    this.letterArray = [];
  }
  makeWordsByLine() {
    for (let i = 0; i < this.paragraph.length; i++) {
      this.words.push(split(this.paragraph[i], ' '));
    }
    //returns an array lines of an array of words
    return this.words;
  }
  makeLettersByWord() {
    this.makeWordsByLine();
    for (let j = 0; j < this.words.length; j++) {
      for (let k = 0; k < this.words[j].length; k++) {
        this.letters.push(split(this.words[j][k], ''));
      }
    }
    //returns an array of words of an array of letters
    return this.letters;
  }
  makeWordArray() {
    this.makeWordsByLine();
    //return an array of all words in order
    return this.wordArray = makeArray(this.words);
  }
  makeLetterArray() {
    this.makeLettersByWord();
    //returns an array with all the letters in order
    return this.letterArray = makeArray(this.letters);

  }
}

//NOT PART OF THE CLASS
//turns an array of an array into a single array
function makeArray(array) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      outputArray.push(array[i][j]);
    }
  }
  return outputArray;
}
