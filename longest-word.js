// return the length of the largest word in a string
function findLongestWord(str) {
  // split words intro array based on space character
  var words = str.split(" ");
  // variable to hold length of current longest word
  var length = 0;
  // variable to hold current longest word
  var longWord = "";
  // loops through each word in words array
  for(i in words) {
    // check if current word is longer than length
    if(word[i].length > length) {
      // assign length of words[i] to length
      length = words[i].length;
    }
  }
  // return largest value
  return length;
}
