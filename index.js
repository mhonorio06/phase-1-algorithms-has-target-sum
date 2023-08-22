function hasTargetSum(array, target) {
  // Write your algorithm here
  //looking through each item in array
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
  //if two numbers in array equal target
        if( array[j] + array[i] === target) return true
    }
  }
  return false;
}





    

/* 
  Write the Big O time complexity of your function here
  run time: 0(n^2)
*/ 

/* 
  Add your pseudocode here
  write function with an array of integers.
  return true if two numbers in array equal target
*/

/*
  Add written explanation of your solution here
  it will loop through the beginning of array to the end
  it will return true if two numbers equal its target number
  it will return false if tar
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
