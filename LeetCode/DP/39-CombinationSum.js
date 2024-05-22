//39. Combination Sum
//given an array of distinct integers 'candidates' and a target integer 'target'
//return a list of all unique combination of candidates - where the chosen numbers sum to target
//may return the combincations in any order

//the same number maybe chosen from candidates an unlimited number of times
//two combinations are unique if the frequency of a t least one of the chosen numbers is different

//it is guaranteed that the num of unique combinations that sum up to target is less than 150 combinations for the given input

//Approach:
//DP solution
//utilizes the solutions of previously calculated sums to  calculate the current sum
//DP 2D Array: go through each individual sums + working out the total number of ways
var combinationSum = (candidates, target) => {
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
            if (candidates[i] >= prev[prev.length - 1]) { //if it is greater than the last value within prev
              combine.push([...prev, candidates[i]]);
            }
          }
        }
        dp[sum] = combine;
      }
    }
    return dp[target];
  }
  combinationSum([2,3,6,7], 7); //[[2,2,3], [7]] 
  //DP - 2D array
  //     0   1    2    3    4    5     6      7
  // 2   []  []  [2]   [] [2,2] []  [2,2,2] []
  // 3   []  []  []   [3]  [] [2,3] [3,3] [2,2,3]
  // 6   []  []  []    []  []   []   [6]    []
  // 7   []  []  []    []  []   []   []    [7]
  
  //0 []
  //1 []
  //2 [2]
  //3 [3]
  //4 [2,2]
  //5 [2,3]
  //6 [2,2,2], [3,3], [6]
  //7 [2,2,3], [7] -> return
  
  combinationSum([2,3,5], 8); //[[2,2,2,2], [2,3,3], [3,5]]
  //DP - 2D array
  //     0   1    2    3    4    5     6      7        8
  // 2   []  []  [2]   [] [2,2]  []  [2,2,2]  []   [2,2,2,2]
  // 3   []  []  []    [3]  [] [2,3] [3,3]  [2,2,3]  [2,3,3]
  // 5   []  []  []    []  []   [5]   []    [2,5]    [3,5]
  
  //0 []
  //1 []
  //2 [2]
  //3 [3]
  //4 [2,2]
  //5 [2,3], [5]
  //6 [2,2,2], [3,3]
  //7 [2,2,3], [2,5]
  //8  [2,2,2,2], [2,3,3], [3,5] -> return
