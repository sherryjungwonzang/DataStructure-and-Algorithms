//90. Subsets2
//given an integer array 'nums' that may contain duplicates
//return all possible subsets
//the solution set must not contain duplicate subsets
//return the solution in any order
var subsets2 = (nums) => {
  let res = [ [] ];

  //sorting the nums array for avoid checking the same value
  nums.sort((a, b) => a - b);

  //DFS
  function dfs(nums, res, curr, index) {
    for (let i = index; i < nums.length; i++) {
      //check whether they have any duplications or not
      if (i === index || nums[i] !== nums[i - 1]) {
        curr.push(nums[i]);
        res.push([...curr]);

        //recursive call
        dfs(nums, res, curr, i + 1);
        
        //backtracking
        curr.pop();
      }
    }
  }
  dfs(nums, res, [], 0);

  return res;
}
subsets2([1, 2, 2]); //[[],[1],[1,2],[1,2,2],[2],[2,2]]

subsets2([0]); //[[],[0]]
