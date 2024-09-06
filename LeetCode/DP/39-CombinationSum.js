//39. Combination Sum (DFS solution is better - adding here just in case)
//given an array of distinct integers 'candidates' and a target integer 'target'
//return a list of all unique combination of candidates - where the chosen numbers sum to target
//may return the combincations in any order

//the same number maybe chosen from candidates an unlimited number of times
//two combinations are unique if the frequency of a t least one of the chosen numbers is different

//it is guaranteed that the num of unique combinations that sum up to target is less than 150 combinations for the given input

//Approach:
//using DP 2D array
var combinationSum = (candidates, target) => {
    //ascending order
    candidates.sort((a, b) => a - b);

    //dp - array of arrays of arrays
    let dp = [ [ [ ] ] ]; 

    //looping
    for (let sum = 0; sum <= target; sum++) {
        dp[sum] = [];

        //to combine all potential solutions
        let combine = [];

        //looping through candidates
        for (let i = 0; i < candidates.length && candidates[i] <= sum; i++) {
            if (sum === candidates[i]) combine.push([candidates[i]]);
            else {
                //check prev val within DP
                for (let prev of dp[sum - candidates[i]]) {
                    if (candidates[i] >= prev[prev.length - 1]) combine.push([...prev, candidates[i]]);
                }
            }
            dp[sum] = combine;
        }
    }

    return dp[target];
}
combinationSum([2,3,6,7], 7); //[[2,2,3], [7]] 
//DP 
//     0   1    2    3   4    5     6     7                    0   1    2    3     4      5      6        7
// 2   []  []  []   []   []   []   []    []               2    []  []  [2]   []  [2,2]   []    [2,2,2]   []
// 3   []  []  []   []   []   []   []    []      ->       3    []  []  []    [3]   []   [2,3]   [3,3]   [2,2,3]
// 6   []  []  []   []   []   []   []    []               6    []  []  []    []    []    []     [6]      []
// 7   []  []  []   []   []   []   []    []               7    []  []  []    []    []    []     []       [7]
  
//sorting: [2, 3, 6, 7] -> [2, 3, 6, 7]
//sum = 0 - dp[0] = [], combine = [ ]
//[2, 3, 6, 7]
// ^
//i = 0 -> 2 > 0   || i = 1 -> 3 > 0   || i = 2 -> 6 > 0   || i = 3 -> 7 > 0

//sum = 1 -> dp[1] = [], combine = [ ]
//[2, 3, 6, 7]
// ^
//i = 0 -> 2 > 1  || i = 1 -> 3 > 1   || i = 2 -> 6 > 1   || i = 3 -> 7 > 1

//sum = 2 -> dp[2] = [], combine = [ ]
//[2, 3, 6, 7]
// ^
//i = 0 -> 2 = 2  => combine = [ 2 ]
//i = 1 -> 3 > 2  || i = 2 -> 6 > 2   || i = 3 -> 7 > 2
//dp[2] = [2]

//sum = 3 -> dp[3] = [], combine = [ ]
//[2, 3, 6, 7]
// ^  ^
//i = 0 -> 2 <= 3                 
//prev of dp[3 - 2] = dp[1]: []
//i = 1 -> 3 <= 3  => combine = [ 3 ]
//i = 2 -> 6 > 3   || i = 3 -> 7 > 3
//dp[3] = [3]

//sum = 4 -> dp[4] = [], combine = [ ]
//[2, 3, 6, 7]
// ^  ^
//i = 0 -> 2 <= 4 => prev of dp[4 - 2] = dp[2]: [2]
//2 >= prev[1 - 1] = 2 -> combine = [2, 2]
//i = 1 -> 3 <= 4 => prev of dp[4 - 3] = dp[1]: []
//i = 2 -> 6 > 4   || i = 3 -> 7 > 4
//dp[4] = [2, 2]

//sum = 5 -> dp[5] = [], combine = [ ]
//[2, 3, 6, 7]
// ^  ^
//i = 0 -> 2 <= 5 => prev of dp[5 - 2] = dp[3]: [3]
//2 < prev[1 - 1] = 3
//i = 1 -> 3 <= 5 => prev of dp[5 - 3] = dp[2]: [2]
//3 > prev[1 - 1] = 2 -> combine = [2, 3]
//i = 2 -> 6 > 4   || i = 3 -> 7 > 4
//dp[5] = [2, 3]

//sum = 6 -> dp[6] = [], combine = [ ]
//[2, 3, 6, 7]
// ^  ^  ^
//i = 0 -> 2 <= 6 => prev of dp[6 - 2] = dp[4]: [2, 2]
//2 >= prev[2 - 1] = 2 -> combine = [2, 2, 2]
//i = 1 -> 3 <= 6 => prev of dp[6 - 3] = dp[3]: [3]
//3 = prev[1 - 1] = 3 -> combine = [3, 3]
//i = 2 -> 6 = 6  => combine = [ 6 ]
//dp[6] = [2, 2, 2], [3, 3], [6]

//sum = 7 -> dp[7] = [], combine = [ ]
//[2, 3, 6, 7]
// ^  ^  ^  ^
//i = 0 -> 2 <= 7 => prev of dp[7 - 2] = dp[5]: [2, 3]
//2 < prev[2 - 1] = 3
//i = 1 -> 3 <= 7 => prev of dp[7 - 3] = dp[4]: [2, 2]
//3 > prev[2 - 1] = 2 -> combine = [2, 2, 3]
//i = 2 -> 6 < 7  => prev of dp[7 - 6] = dp[]: [ ]
//i = 3 -> 7 = 7  => combine = [ 7 ]
//dp[6] = [2, 3], [2, 2, 3], [7]

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
