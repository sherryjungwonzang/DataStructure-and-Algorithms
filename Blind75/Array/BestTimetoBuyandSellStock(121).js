//Best Time to Buy and Sell Stock (121)
//given an array 'prices' - where prices[i] is the price of a given stock on the i-th day
//want to maximize profit by choosing a single day to buy one stock
//and choosing a different day in the future to sell that stock
//return the max profit you can achieve from transaction
//if you cannot achieve any profit - return 0
var maxProfit = (prices) => {
  let currMin = prices[0]; //currMin should start from index 0
  let currMax = 0; //if there is no profit, we should return 0 - so starting with 0

  //looping through thr prices with comparing the difference
  //between the prices[i] and currMin for Minimum value
  //between the currMax and prices[i] - currMin for Maximum value
  for (let i = 0; i < prices.length; i++) {
    currMin = Math.min(prices[i], currMin);
    currMax = Math.max(currMax, prices[i] - currMin);
  }

  return currMax;
}
//TC: O(n)
//SC:O(1)
maxProfit([7, 1, 5, 3, 6, 4]); //5 - buy on Day 2(price=1) and sell on Day5(price=6) -> profit = 6 - 1 = 5
//        min
//currMin = 7
//currMax = 0
//            min
//currMin = 7 -> 1
//currMax = 0 -> 0
//               min
//currMin = 7 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4
//                 min
//currMin = 7 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 
//                     min
//currMin = 7 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 
//                         min
//currMin = 7 -> 1 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 -> 4-1=3
//currMin = 1 | currMax = 5 


maxProfit([7,6,4,3,1]); //0 - no transactions are done and the max profit is 6









