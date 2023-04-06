//Permutations (46)
//given an array 'nums' of distinct integers
//return all the possible permutations
//can return the answer in any order

//Approach:
//add given values: temporary array: arr = [], res array: res = []
//using backtracking
var permutations = (nums, arr = [], res = []) => {
  //base case - meaning that we loop to the end
  if (nums.length === 0) res.push([...arr]);

  //loop through nums array
  for (let i = 0; i < nums.length; i++) {
    //when we took one, we can have remainder
    let rest = nums.filter((n, index) => index !== i); //filter(): create a new array with elements that pass a test
    arr.push(nums[i]);

    //recursive call - through the rest of array
    //until the nums.length = 0
    permutations(rest, arr, res);

    //backtracking
    arr.pop();
  }
  return res;
}
permutations([1,2,3]); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

permutations([0,1]); //[[0,1], [1,0]]

permutations([1]); //[[1]]
