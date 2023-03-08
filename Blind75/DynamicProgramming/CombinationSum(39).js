//Combination Sum(39)
//given an array of distinct integers 'candidates' and a target integer 'target'
//return a list of all unique combination of candidates - where the chosen numbers sum to target
//may return the combincations in any order

//the same number maybe chosen from candidates an unlimited number of times
//two combinations are unique if the frequency of a t least one of the chosen numbers is different

//it is guaranteed that the num of unique combinations that sum up to target is less than 150 combinations for the given input

//Approach:
//1. DFS with recursive
//2. DP solution

//1) DFS with recursive
var combinationSum = (candidates, target) => {
  let result = [];

  //DFS
  //arr - populate with the candidates that we have taken at each step
  function dfs(index, currVal, arr) {
    if (currVal < 0) return;
    if (currVal === 0) {
      result.push([...arr]);
    }

    //each stage,  we are going to add 1 on i - avoid duplicates
    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      //carry out the recursive calls
      dfs(i, currVal - candidates[i], arr);
      arr.pop();
    }
  }
  dfs(0, target, []);

  return result;
}
combinationSum([2,3,6,7], 7); //[[2,2,3], [7]] - 2 and 2 are candidates | 2 can be used multiple times
//[ 2, 2, 2, 2 ]
//[ 2, 2, 2, 3 ]
//[ 2, 2, 2, 6 ]
//[ 2, 2, 2, 7 ]
//[ 2, 2, 2 ] - pop() to go backwards

//[ 2, 2, 3, 3 ]
//[ 2, 2, 3, 6 ]
//[ 2, 2, 3, 7 ]
//[ 2, 2, 3 ]
//[ 2, 2, 6 ]
//[ 2, 2, 7 ]
//[ 2, 2 ] - pop() to go backwards

//[ 2, 3, 3 ]
//[ 2, 3, 6 ]
//[ 2, 3, 7 ]
//[ 2, 3 ]
//[ 2, 6 ]
//[ 2, 7 ]
//[ 2 ] - pop() to go backwards

//exclude 2 after come back
//[ 3, 3, 3 ]
//[ 3, 3, 6 ]
//[ 3, 3, 7 ]
//[ 3, 3 ] - pop() to go backwards

//[ 3, 6 ]
//[ 3, 7 ]
//[ 3 ] - pop() to go backwards

//exclude 3 after come back
//[ 6, 6 ]
//[ 6, 7 ]
//[ 6 ] - pop() to go backwards

//exclude 6 after come back
//[ 7, 7 ]
//[ 7 ]

combinationSum([2,3,5], 8); //[[2,2,2,2], [2,3,3], [3,5]]
/**
[ 2, 2, 2, 2, 2 ]
[ 2, 2, 2, 2, 3 ]
[ 2, 2, 2, 2, 5 ]
[ 2, 2, 2, 2 ] - pop() to go backwards

[ 2, 2, 2, 3 ]
[ 2, 2, 2, 5 ]
[ 2, 2, 2 ] - pop() to go backwards

[ 2, 2, 3, 3 ]
[ 2, 2, 3, 5 ]
[ 2, 2, 3 ]
[ 2, 2, 5 ]
[ 2, 2 ] - pop() to go backwards

[ 2, 3, 3, 3 ]
[ 2, 3, 3, 5 ]
[ 2, 3, 3 ]
[ 2, 3, 5 ]
[ 2, 3 ]
[ 2, 5, 5 ]
[ 2, 5 ]
[ 2 ] - pop() to go backwards

//exclude 2 after come back
[ 3, 3, 3 ]
[ 3, 3, 5 ]
[ 3, 3 ] - pop() to go backwards

[ 3, 5, 5 ]
[ 3, 5 ]
[ 3 ] - pop() to go backwards

//exclude 3 after come back
[ 5, 5 ]
[ 5 ]
 */

//2) DP solution
var combinationSum_DP = (candidates, target) => {
  //making 'candidates' as sorted - ascending order
  candidates.sort((a, b) => a - b);

  let dp = [[[]]]; //an array of arrays of arrays
  
  //loop through sum
  for (let sum = 0; sum <= target; sum++) {
    dp[sum] = [];

    //combine all the potential solutions for a given target
    let combine = [];

    //loop through candidates
    for (let i = 0; i < candidates.length && candidates[i] <= sum; i++) {
      if (sum === candidates[i]) {
        combine.push([candidates[i]]);
      } else {
        //need to check the previous values within DP and loop through those
        for (let prev of dp[sum - candidates[i]]) {
          //stop duplicates
          if (candidates[i] >= prev[prev.length - 1]) {
            combine.push([...prev, candidates[i]])
          }
        }
      }
      dp[sum] = combine;
    }
  }
  return dp[target];
}
//DP - 2D array
//     0   1    2    3   4    5    6      7
// 2   []  []  [2]   [] [2,2] []  [2,2,2] []
// 3   []  []  []   [3]  [] [2,3] [3,3] [2,2,4]
// 6   []  []  []    []  []   []   [6]    []
// 7   []  []  []    []  []   []   []    [7]

//0 []
//1 []
//2 [2]
//3 [3]
//4 [2,2]
//5 [2,3]
//6 [2,2,2], [3,3]
//7 [2,2,4], [7]

