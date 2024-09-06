//123. Best Time To Buy And Sell Stock3
//given an array prices where prices[i] is the price of a given stick on the i_th day
//find the max profit you can achieve
//you may complete at most two transactions

//Approach:
//using DP and run twice
var bestTimeStock3 = (prices) => {
    //base case
    if (prices.length === 0) return 0;

    let dp = new Array(prices.length).fill(0);

    //1st DP - calculate the max profit
    let min = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }

    //2nd DP - borrow the 1st run and calculate the final max profit
    min = prices[0];
    max = 0;

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i] - dp[i], min);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }

    return dp.pop(); //the last element
}
bestTimeStock3([3,3,5,0,0,3,1,4]); //6
//Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3

//[3, 3, 5, 0, 0, 3, 1, 4]

//1st DP = [0, 0, 0, 0, 0, 0, 0, 0] -> [0, 0, 2, 2, 2, 3, 3, 4]
//min: 3 -> 3 -> 3 -> 0 -> 0 -> 0 -> 0 -> 0
//max: 0 -> 0 -> 2 -> 2 -> 2 -> 3 -> 3 -> 4
//i = 1                 i = 2             i = 3             i = 4             i = 5             i = 6             i = 7
//min:(3, 3) = 3       (5, 3) = 3        (0, 3) = 0        (0, 0) = 0        (3, 0) = 0        (1, 0) = 0        (4, 0) = 0
//max: (0, 3 - 3) = 0   (0, 5 - 3) = 2    (2, 0 - 3) = 2    (2, 0 - 0) = 2    (2, 3 - 0) = 3     (3, 1 - 0) = 3    (4, 4 - 3) = 4

//2nd DP = [0, 0, 2, 2, 2, 3, 3, 4] -> [0, 0, 2, 2, 2, 5, 5, 6]
//min: 3 -> 3 -> 3 -> -2 -> -2 -> -2 -> -2 -> -2
//max: 0 -> 0 -> 2 -> 2 -> 2 -> 5 -> 5 -> 6
//i = 1                 i = 2             i = 3             i = 4               i = 5               i = 6             i = 7
//min: (3 - 0, 3) = 3   (5 - 2, 3) = 3    (0 - 2, 3) = -2   (0 = 2, -2) = -2   (1 - 3, -2) = -2    (1 - 3, -2) = -2   (4 - 4, -2) = -2
//max: (0, 3 - 3) = 0   (0, 5 - 3) = 2    (2, 0 - 3) = 2    (2, 0 - -2) = 2    (2, 3 - -2) = 5     (5, 1 - -2) = 5    (5, 4 - -2) = 6

bestTimeStock3([1,2,3,4,5]); //4
//Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4

bestTimeStock3([7,6,4,3,7]); //4
//[7, 6, 4, 3, 7]

//1st DP = [0, 0, 0, 0, 0] -> [0, 0, 0, 0, 4]
//min: 7 -> 6 -> 4 -> 3 -> 7
//max: 0 -> 0 -> 0 -> 0 -> 4
//i = 1                  i = 2             i = 3             i = 4                  
//min:(6, 7) = 6        (4, 6) = 4         (3, 4) = 3        (7, 3) = 3          
//max: (0, 7 - 7) = 0   (0, 4 - 6) = -2    (0, 3 - 4) = 0    (0, 7 - 3) = 4    

//2nd DP = [0, 0, 0, 0, 4] -> [0, 0, 0, 0, 4]
//min: 7 -> 6 -> 6 -> 3 -> 4
//max: 0 -> 0 -> 0 -> 0 -> 4
//i = 1                     i = 2              i = 3              i = 4                  
//min:(6 - 0, 7) = 6        (6 - 0, 6) = 6     (3 - 0, 6) = 3     (7 - 4, 3) = 3          
//max: (0, 6 - 7) = 0       (0, 4 - 6) = -2    (0, 3 - 6) = -3    (0, 7 - 3) = 4 
