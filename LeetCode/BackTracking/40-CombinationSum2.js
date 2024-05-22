//40. Combination SumII
//given a collection of candidate numbers 'candidates' and a target number 'target'
//find all unique combinations in 'candidates' - where the candidate numbers sum to 'target'

//each number in candidates may only be used once in the combination
//the solution set must not contain duplicate combinations

//Approach:
//usign DFS with recursion and sorting array
var combinationSum2 = (candidates, target) => {
  let res = [];

  //sorting for checking duplicates
  candidates.sort((a, b) => a - b);

  //DFS
  function dfs(index, currVal, curr) {
    //limitations
    if (currVal < 0) return;
    if (currVal === 0) res.push([...curr]); //meaning find matches

    for (let i = index; i < candidates.length; i++) {
      //no meaning to continue
      if (candidates[i] > target) continue;

      curr.push(candidates[i]);

      dfs(i + 1, currVal - candidates[i], curr);

      curr.pop(); //backtracking

      while(candidates[i + 1] === candidates[i]) i++; //skip the duplicates
    }
  }

  dfs(0, target, []);

  return res;
}
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8); //[ [1,1,6], [1,2,5], [1,7], [2,6] ]

combinationSum2([2, 5, 2, 1, 2], 5); //[ [1,2,2], [5] ]
