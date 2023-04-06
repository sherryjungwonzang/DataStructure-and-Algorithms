//Missing Number(268)
//given an array 'nums' containing 'n' distinct numbers in the range [0, n]
//return the only number in the range that is missing from the array

//Approach:
//using Bit Manipulation with bitwise operator XOR
var missingNumber = (nums) => {
  let xor = nums.length;

  //loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }
  return xor; //will retun the value that we are missing
}
//TC: O(n) - loop through nums's array
//SC: O(1)

missingNumber([3,0,1]); //2 - there are 3 numbers: [0,3] | all numbers are in the range [0,3] but 2 is the missing number in tha range
//xor = 3
//-> 3 ^ 0 ^ 3 = 0
//xor = 0
//-> 0 ^ 1 ^ 0 = 1
//xor = 1
//-> 1 ^ 2 ^ 1 = 2

//missing xor = 2

missingNumber([0,1]); //2 - there are 2 numbers: [0,2] | 2 is the missing number in the range
//xor = 2
//-> 2 ^ 0 ^ 0 = 2
//xor = 2
//-> 2 ^ 1 ^ 1 = 2

//missing xor = 2
