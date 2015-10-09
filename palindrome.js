// return true if a string is a palindrome otherwise return false
function palindrome(str) {
  // variable to lowercase letters of a string based on regex criteria
  // include 0-9 since numbers are common in sentences
  var letters = str.replace(/[^a-zA-Z0-9]/g, '').toLowereCase();
  // set i to 0 and increment increment until less than letters length
  for(i = 0; i<letters.length; i++) {
    // check if first letter matches last letter then move to next character
    if(letters.charAt(i) !== letters.charAt(letters.length-1-i)) {
      // return false once a match isn't found
      return false
    }
  }
  // return true if all caracters match correctrly
  return true;
}

palindrome("eye");
