//47. Permutations II
//given a collection of numbers 'nums' - that might contain duplicates
//return all possible unique permutations in any order

//Approach:
//using backtracking and DFS
var permutations2 = (nums) => {
  let res = [];
  let visited = new Array(nums.length).fill(0);

  //sorting
  nums.sort((a, b) => a - b);

  //DFS
  function dfs(index, nums, arr, res) {
    if (index === nums.length) { //meaning looping all numbers
      res.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === 0) {
        arr.push(nums[i]);
        visited[i] = 1;

        dfs(index + 1, nums, arr, res);

        arr.pop(); //backtracking
        visited[i] = 0; //resetting as 0

        while (nums[i] === nums[i + 1]) i++; //avoiding the duplicates
      }
    }
  }

  dfs(0, nums, [], res);

  return res;
}
permutations2([1,1,2]); //[[1,1,2], [1,2,1], [2,1,1]]

permutations2([1,2,3]); //[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
