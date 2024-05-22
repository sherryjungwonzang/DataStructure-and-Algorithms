//39. Combination Sum
//given an array of distinct integers 'candidates' and a target integer 'target'
//return a list of all unique combination of candidates - where the chosen numbers sum to target
//may return the combincations in any order

//the same number maybe chosen from candidates an unlimited number of times
//two combinations are unique if the frequency of a t least one of the chosen numbers is different

//it is guaranteed that the num of unique combinations that sum up to target is less than 150 combinations for the given input

//Approach:
//1. DP solution
//2. DFS with recursive

//2) DFS with recursive
var combinationSum = (candidates, target) => {
  let res = [];

  //DFS
  //arr - populate with the candidates that we have taken at each step
  function dfs(index, currVal, curr) {
    if (currVal < 0) return;
    if (currVal === 0) res.push([...curr]); //as we find the combinations

    //each stage,  we are going to add 1 on i - avoid duplicates
    for (let i = index; i < candidates.length; i++) {
      curr.push(candidates[i]);
      //carry out the recursive calls
      dfs(i, currVal - candidates[i], curr);
      curr.pop();
    }
  }
  dfs(0, target, []);

  return res;
}
//TC: O(n^ ((T/M)+1)) - n is the num of candidates, t is the target value, m is the min value within candidates
//SC: O(T/M)
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
