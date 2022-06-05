//Best Time to Buy and Sell Stock
//given an array prices
//prices[i] is the price of given stock on the i-th day
//maximize the profit by choosing a single day to buy one stock and different day in the future to see
//return max profit


//two pointers
var maxProfit = (prices) => {
    let maxProfit = 0;
    let buy = 0; //the day to buy stock
    let sell = 1;

    while(sell < prices.length) {
        const profit = prices[sell] - prices[buy];

        if (profit < 0) {
            buy = sell;
            //if the profit is negative, it means selling price is smaller than buying price
            //set the day to buy the stock and to sell stock at the same day
        } else {
            maxProfit = Math.max(maxProfit, profit);
            //only when the profit is positive, calculate max profit
        }
        sell++;  
    }
    return maxProfit;
}
