//714. Best Time to buy and sell stock with transaction fee
//given an array 'prices' where prices[i] is the price of a given stock on the i_th day
//and an integer fee representing a transaction fee
//find the max profit you can achieve

//you may complete as many transactions as you like, but you need to pay the transaction fee for each transaction
//may not engage in multiple transactions simultaneously - like must sell the stock before you buy again
//the transaction fee is only charged once for each stock purchase and sale

//Approach:
//using DP
var bestTimeStockTransactionFee = (prices, fee) => {
  let totalProfit = 0; //will be no profit on day 0
  let hold = -prices[0]; //-prices[0] since it is bought at that price as holding

  for (let i = 1; i < prices.length; i++) {
    totalProfit = Math.max(totalProfit, hold + prices[i] - fee);
    hold = Math.max(hold, totalProfit - prices[i]);
  }
  return totalProfit; //after considering all transactions and fees
}
//TC: O(n)
//SC: O(1)
bestTimeStockTransactionFee([1,3,2,8,4,9], 2); //8
//The maximum profit can be achieved by:
//Buying at prices[0] = 1
//Selling at prices[3] = 8
//Buying at prices[4] = 4
//Selling at prices[5] = 9
//The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8

bestTimeStockTransactionFee([1,3,7,5,10,3], 3); 6
