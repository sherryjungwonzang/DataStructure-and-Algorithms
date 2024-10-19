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
//using recursion
var predictWinner = (nums) => {
    let m = nums.length;

    //DFS
    function dfs(i, j) {
        //base case
        if (i === j) return nums[i];

        let left = nums[i] - dfs(i + 1, j);
        let right = nums[j] - dfs(i, j - 1);

        return Math.max(left, right);
    }

    //non-negative: first player wins || negative: second player wins
    return dfs(0, m - 1) >= 0;
}
//TC: O(2^n)
//SC: O(n)
predictWinner([1,5,2]); //false

predictWinner([1,5,233,7]); //true
