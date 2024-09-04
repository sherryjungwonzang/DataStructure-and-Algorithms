//322. Coin Change
//given an integer array 'coins' - representing coins of different denominations
//and an integer 'amount' - representing a total amount of money
//return the fewest num of coins that need to make up that amount
//if that amount of money cannot be made up by any combination of the coins - return -1

//Approach:
//using DP
var coinChange = (coins, amount) => {
    //to store all results to the values between 0 and amount
    let dp = Array(amount + 1).fill(Infinity);

    //base case - no need any coints to make up the amount of 0
    dp[0] = 0;

    for (let currAmount = 1; currAmount <= amount; currAmount++) {
        for (let coin of coins) {
            //dp[currAmount - coin]: the min number of coins required to make up the amount using all the coins except the curr coin
            if (currAmount - coin >= 0) dp[currAmount] = Math.min(dp[currAmount], 1 + dp[currAmount - coin]);
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}
//TC: O(s * n) - s is the amount and n is the denomication of count
//SC: O(s)
coinChange([1,   2,    5], 11); //3 - 5+5+1
//         coin
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 3, 9: 3, 10: 2, 11: 3]

//currAmount = 1
//1 - 1 = 0 -> dp[1] = (dp[0], 1 + dp[0]) = 1
//1 - 2 x
//1 - 5 x

//currAmount = 2
//2 - 1 = 1 -> dp[2] = (dp[1], 1 + dp[1]) = 2
//2 - 2 = 0 -> dp[2] = (dp[1], 1 + dp[0]) = 1
//2 - 5 x

//currAmount = 3
//3 - 1 = 2 -> dp[3] = (dp[3], 1 + dp[2]) = 2
//3 - 2 = 1 -> dp[3] = (dp[3], 1 + dp[1]) = 2
//3 - 5 x

//currAmount = 4
//4 - 1 = 3 -> dp[4] = (dp[4], 1 + dp[3]) = 3
//4 - 2 = 2 -> dp[4] = (dp[4], 1 + dp[2]) = 2
//4 - 5 x

//currAmount = 5
//5 - 1 = 4 -> dp[5] = (dp[5], 1 + dp[4]) = 3
//5 - 2 = 3 -> dp[5] = (dp[5], 1 + dp[3]) = 3
//5 - 5 = 0 -> dp[5] = (dp[5], 1 + dp[0]) = 1

//currAmount = 6
//6 - 1 = 5 -> dp[6] = (dp[6], 1 + dp[5]) = 2
//6 - 2 = 4 -> dp[6] = (dp[6], 1 + dp[4]) = 3
//6 - 5 = 1 -> dp[6] = (dp[6], 1 + dp[1]) = 2

//currAmount = 7
//7 - 1 = 6 -> dp[7] = (dp[7], 1 + dp[6]) = 3
//7 - 2 = 5 -> dp[7] = (dp[7], 1 + dp[5]) = 2
//7 - 5 = 2 -> dp[7] = (dp[7], 1 + dp[2]) = 2

//currAmount = 8
//8 - 1 = 7 -> dp[8] = (dp[8], 1 + dp[7]) = 3
//8 - 2 = 6 -> dp[8] = (dp[8], 1 + dp[6]) = 3
//8 - 5 = 3 -> dp[8] = (dp[8], 1 + dp[3]) = 3

//currAmount = 9
//9 - 1 = 8 -> dp[9] = (dp[9], 1 + dp[8]) = 4
//9 - 2 = 7 -> dp[9] = (dp[9], 1 + dp[7]) = 3
//9 - 5 = 4 -> dp[9] = (dp[9], 1 + dp[4]) = 3

//currAmount = 10
//10 - 1 = 9 -> dp[10] = (dp[10], 1 + dp[9]) = 4
//10 - 2 = 8 -> dp[10] = (dp[10], 1 + dp[8]) = 4
//10 - 5 = 5 -> dp[10] = (dp[10], 1 + dp[5]) = 2

//currAmount = 11
//11 - 1 = 10 -> dp[11] = (dp[11], 1 + dp[10]) = 3
//11 - 2 = 9 -> dp[11] = (dp[11], 1 + dp[9]) = 4
//11 - 5 = 6 -> dp[11] = (dp[11], 1 + dp[6]) = 3

coinChange([2], 3); //-1

coinChange([1], 0); //0
