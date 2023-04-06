//Subset II (90)
//given an integer array 'nums' that may contain duplicates
//return all possible subsets - in any order
//the solution set must not contain duplicate subsets
var subset2 = (nums) => {
  //creating an res with populating an empty array
  let res = [[]]; 

  //sorting nums array - to compare side by side for duplication
  nums.sort((a, b) => a - b);

  //DFS
  function dfs(nums, res, currArr, start) {
    //loop through
    for (let i = start; i < nums.length; i++) {
      //to check whether there are any duplications
      if (i === start || nums[i] !== nums[i - 1]) { //no duplications
        currArr.push(nums[i]);
        res.push([...currArr]);
        //recursive calls
        dfs(nums, res, currArr, i + 1);
        //backtracking
        currArr.pop();
      }
    }
  }
  dfs(nums, res, [], 0); //passing nums array, res - need to populate that, [] - will be the current array, 0 - index of number

  return res;
}
subset2([1,2,2]); //[[], [1], [1,2], [1,2,2], [2], [2,2]]
subset2([0]); //[[], [0]]
