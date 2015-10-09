// factorialize a number
function factorialize(num) {
  // initial value set to 1
  var sum = 1;
  // starting point for multiplication
  var count = 1;
  // while count is less or equal to than num
  while(count <= num) {
    // multiply sum by count and save to sum
    sum *= count;
    // increment count by 1 for each itteration
    count++;
  }
  // return final value of sum;
  return sum;
}
