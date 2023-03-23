//Subsets (78)
//given an integer array 'nums' of unique elements
//return all possible subsets (the power set)

//the solution set must not contain duplicate subsets.
//return the solution in any order

//Approach:
//using DFS recursice calls - through each solution to find all potential solutions
var subsets = (nums) => {
  let res = [[]]; //array containing single arrays

  function dfs(index, current) {
    for (let i = index; i < nums.length; i++) {
      //pushing into current and res right away
      current.push(nums[i]);
      res.push([...current]);

      //recursive calls - to the next potential solutions
      dfs(i + 1, current);

      //backtracking
      current.pop();
    }
  }
  dfs(0, []); //(initial index, current value)

  return res;
}
subsets([1,2,3]); //[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
//picking 1 - current = [1]
//the rest: [2,3]
//picking 2 in [2,3] - current = [1,2]
//the rest: [3]
//picking 3 - current = [1,3]
//the rest = []
//backtracking

////picking 3 in [2,3] - current = [1,3]
//the rest = []
//backtracking

//picking 2 - current = [2]
//the rest = [3]
//picking 3 - current = [2,3]
//the rest = []
//backtracking

//picking 3 - current = [3]
//the rest = []
//backtracking

//res: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

subsets([0]); //[[], [0]]
//picking 0 - current = [0]
//the rest = []
//backtracking

//res = [[], [0]]
