//486. Predict The Winner
//given an integer array nums
//two players are playing a game with this array: player 1 and player 2
//player 1 and player 2 take turns, with player 1 starting first
//both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array 
//(i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1

//the player adds the chosen number to their score
//the game ends when there are no more elements in the array
//return true if Player 1 can win the game
//if the scores of both players are equal, then player 1 is still the winner, and you should also return true
//you may assume that both players are playing optimally

//Approach:
//using DP
var predictWinner = (nums) => {
    let m = nums.length;
    let dp = Array.from(Array(m), () => Array(m).fill(0));

    //DP
    for (let i = m - 1; i >= 0; i--) {
        for (let j = i; j < m; j++) {
            if (i === j) dp[i][j] = nums[i]; //only one element left to pick
            else dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][m - 1] >= 0; //non-negative: first player wins || negative: second player wins
}
//TC: O(n^2)
//SC: O(n^2)
predictWinner([1,5,2]); //false
//dp = 0, 0, 0      1, 4, -2 
//     0, 0, 0  ->  0, 5, 3
//     0, 0, 0      0, 0, 2

//i = 2, j = 2 -> pick one element left
//dp[2][2] = 2

//i = 1, j = 1 -> pick one element left
//dp[1][1] = 5

//i = 1, j = 2 -> dp[1][2] = max(nums[1] - dp[2][2], nums[2] - dp[1][1])
//                              (5 - 2, 2 - 5) = 3

//i = 0, j = 0 -> pick one element left
//dp[0][0] = 1

//i = 0, j = 1 -> dp[0][1] = max(nums[0] - dp[1][1], nums[1] - dp[0][0])
//                              (1 - 5, 5 - 1) = 4

//i = 0, j = 2 -> dp[0][2] = max(nums[0] - dp[1][2], nums[2] - dp[0][1])
//                              (1 - 3, 2 - 4) = -2

//dp[0][2] = -2: negative -> second player wins

predictWinner([1,5,233,7]); //true
