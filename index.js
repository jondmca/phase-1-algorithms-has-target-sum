function hasTargetSum(array, target) {
  //goes through each number of array
  for (let i = 0; i < array.length; i++){
    //goes through the next number of array
    for (let j = i + 1; j < array.length; j++){
      console.log(array[i]+array[j])
      //adds them together and checks if it equals target
      if ((array[i] + array[j]) === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  This is what I believe to be an 0(n^2) quadractic time
  as the code needs to run through the array many times 
  to keep pulling numbers and adding them together
  just to check to see if it equals the target (which may never
  equal the targeted sum).
*/

/* 
  Add your pseudocode here
  for array elements pull one number
  for array elements pull second number
  add two numbers together
  check to see if equal to target
  return true if sum equals target
  return false if ran through code 
    with no matches
*/

/*
  Add written explanation of your solution here
  The first for loop decides which element in the array
  it will add to the second for loop element that is grabbed.
  Then it will add them together and check to see if any
  of the numbers equal the target sum.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
