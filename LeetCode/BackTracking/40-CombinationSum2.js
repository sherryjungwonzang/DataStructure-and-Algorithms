//40. Combination SumII
//given a collection of candidate numbers 'candidates' and a target number 'target'
//find all unique combinations in 'candidates' - where the candidate numbers sum to 'target'

//each number in candidates may only be used once in the combination
//the solution set must not contain duplicate combinations

//Approach:
//using DFS with backtracking
var combinationSum2 = (candidates, target) => {
    //sorting
    candidates.sort((a, b) => a - b);

    let res = [];

    //DFS
    function dfs(index, currVal, curr) {
        //base case
        if (currVal < 0) return;
        if (currVal === 0) res.push([...curr]);

        for (let i = index; i < candidates.length; i++) {
            //no need to check
            if (candidates[i] > target) continue;

            curr.push(candidates[i]);

            //recursive calls
            dfs(i + 1, currVal - candidates[i], curr);

            //backtracking
            curr.pop();

            //skip duplicates
            while (candidates[i + 1] === candidates[i]) i++;
        }
    };

    dfs(0, target, []);

    return res;
}
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8); //[ [1,1,6], [1,2,5], [1,7], [2,6] ]

combinationSum2([2, 5, 2, 1, 2], 5); //[ [1,2,2], [5] ]
