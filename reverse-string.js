function reverseString(str) {
  // Split string by each character then psh into an array in reverse order
  // then join each array element into a string and return value
  return str.split("").reverse().join("");
}

reverseString("hello");
