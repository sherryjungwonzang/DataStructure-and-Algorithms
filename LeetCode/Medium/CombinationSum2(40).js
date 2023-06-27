//40. Combination Sum2
//given a collection of candidate numbers 'candidate' and a target number 'target'
//find all unique combinations in candidates - where the candidate numbers sum to targer

//each number in candidates may only be used once in the combination
//the solution set must not contain duplicate combinations
var combinationSum2 = (candidates, target) => {
  //setting res for storing all combinations
  const res = [];

  //sorting the given candidates
  candidates.sort((a, b) => a - b);

  //DFS function
  function dfs(i, candidates, target, arr) {
    if (target < 0) return;

    //base case
    if (target === 0) {
      res.push(arr.slice());
      return;
    }

    //DFS recursive call
    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[i] === candidates[j - 1]) continue;

      arr.push(candidates[j]);

      dfs(j + 1, candidates, target - candidates[j], arr);

      //backtracking
      arr.pop();
    }
  }
  //running the DFS function
  dfs(0, candidates, target, []);

  return res;
}
combinationSum2([10,1,2,7,6,1,5], 8); //[ [1,1,6], [1,2,5], [1,7], [2,6] ]

combinationSum2([2,5,2,1,2], 5); //[ [1,2,2], [5] ]
