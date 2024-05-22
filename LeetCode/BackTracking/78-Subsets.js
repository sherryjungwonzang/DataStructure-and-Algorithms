//78. Subsets
//Given an integer array 'nums' of unique elements
//return all possible subsets
//the solution set must not contain duplicate subsets
//return the solution in any order
var subsets = (nums) => {
    //setting res array with an empty array as default value
    let res = [ [] ];
  
    //DFS function
    function dfs(index, curr) {
      for (let i = index; i < nums.length; i++) {
        curr.push(nums[i]);
        res.push([...curr]); //pushing into res array right after we collects in curr array
  
        //recursion
        dfs(i + 1, curr);
  
        //backtracking
        curr.pop();
      }
    }
    dfs(0, []);
  
    return res;
}
  
subsets([1, 2, 3]); //[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  
subsets([0]); //[[],[0]]
