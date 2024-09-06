//121. Best Time to Buy and Sell Stock
//given an array 'prices' - where prices[i] is the price of a given stock on the i-th day
//want to maximize profit by choosing a single day to buy one stock
//and choosing a different day in the future to sell that stock
//return the max profit you can achieve from transaction
//if you cannot achieve any profit - return 0

//Approach:
//using DP
var bestTimeStock = (prices) => {
    let currMax = 0; //no profit
    let currMin = prices[0];

    for (let i = 1; i < prices.length; i++) {
        currMax = Math.max(currMax, prices[i] - currMin); //prices[i] - currMin: profit
        currMin = Math.min(prices[i], currMin);
    }

    return currMax;
}
//TC: O(n)
//SC:O(1)
maxProfit([7, 1, 5, 3, 6, 4]); //5 - buy on Day 2(price=1) and sell on Day5(price=6) -> profit = 6 - 1 = 5
//currMin = 7 -> 1 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 4 -> 4 -> 5 -> 5


//[7, 1, 5, 3, 6, 4]
//    i
//currMin = min(1, 7) = 1
//currMax = max(0, 1 - 7) = 0

//[7, 1, 5, 3, 6, 4]
//       i
//currMin = min(5, 1) = 1
//currMax = max(5, 5 - 1) = 4

//[7, 1, 5, 3, 6, 4]
//          i
//currMin = min(3, 1) = 1
//currMax = max(4, 3 - 1) = 4

//[7, 1, 5, 3, 6, 4]
//             i
//currMin = min(6, 1) = 1
//currMax = max(1, 6 - 1) = 5

//[7, 1, 5, 3, 6, 4]
//                i
//currMin = min(4, 1) = 1
//currMax = max(5, 4 - 1) = 5

maxProfit([7, 6, 4, 3, 1]); //0 - no transactions are done and the max profit is 6
//currMin = 7 -> 6 -> 4 -> 3 -> 1
//currMax = 0 -> 0 -> 0 -> 0 -> 0

//[7, 6, 4, 3, 1]
//    i
//currMin = min(6, 7) = 6
//currMax = max(0, 6 - 7) = 0

//[7, 6, 4, 3, 1]
//       i
//currMin = min(4, 6) = 4
//currMax = max(0, 4 - 6) = 0

//[7, 6, 4, 3, 1]
//          i
//currMin = min(3, 4) = 3
//currMax = max(0, 3 - 4) = 0

//[7, 6, 4, 3, 1]
//             i
//currMin = min(1, 3) = 1
//currMax = max(0, 1 - 3) = 0
