//Best Time to Buy and Sell Stock (121)
//given an array 'prices' - where prices[i] is the price of a given stock on the i-th day
//want to maximize profit by choosing a single day to buy one stock
//and choosing a different day in the future to sell that stock
//return the max profit you can achieve from transaction
//if you cannot achieve any profit - return 0

//Approach:
//set the first price as currMin and currMax as 0 and keep updating 
//need to compare between current price and updated currMin
//need to compare between currMax and the difference between price and currMin
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
//         i
//currMin = 7
//currMax = 0
//            i
//currMin = 7 -> 1
//currMax = 0 -> 0
//               i
//currMin = 7 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4
//                   i 
//currMin = 7 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 
//                       i
//currMin = 7 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 
//                          i
//currMin = 7 -> 1 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 -> 4-1=3
//currMin = 1 | currMax = 5 


maxProfit([7, 6, 4, 3, 1]); //0 - no transactions are done and the max profit is 6
//        min
//         i
//currMin = 7
//currMax = 0
//currMin = min(7, 7) = 7 | 7 -> 7
//currMax = max(0, 0) = 0 | 0 -> 0
//            i
//currMin = min(6, 7) = 6 | 7 -> 6
//currMax = max(0, 6-6) = 0 | 0 -> 0
//               i
//currMin = min(6, 4) = 4 | 6 -> 4
//currMax = max(0, 4-4) = 0 | 0 -> 0
//                   i 
//currMin = min(3, 4) = 3 | 4 -> 3
//currMax = max(0, 3-3) = 0 | 0 -> 0
//                      i
//currMin = min(1, 3) = 1 | 3 -> 1
//currMax = max(0, 1-1) = 0 | 0 -> 0
//currMin = 1 | currMax = 0
