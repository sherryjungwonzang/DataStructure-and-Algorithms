//309. Best Time to buy and sell stock with cooldown
//given an array prices where prices[i] is the price of a given stock on the i_th day
//find the max profit you can achieve

//may complete as many transactions as you like with the following transactions - like buy one and sell one share of the stock multiple times
//after you sell your stock, you cannot buy stock on the next day - cooldown one day
//you may no engage in multiple transasctions simultaneusoly - you must sell the stock before you buy again

//Approach:
//using DP
var bestTimeStockCooldown = (prices) => {
  let coolDown = 0;
  let sell = 0;
  let hold = Number.NEGATIVE_INFINITY;

  for (let price of prices) {
    let [prevCoolDown, prevSell, prevHold] = [coolDown, sell, hold];

    //max profits
    coolDown = Math.max(prevCoolDown, prevSell);
    sell = prevHold + price;
    hold = Math.max(prevHold, prevCoolDown - price);
  }
  return Math.max(sell, coolDown);
}
//TC: O(n)
bestTimeStockCooldown([1,2,3,0,2]); //3 - [buy, sell, cooldown, buy, sell]

bestTimeStockCooldown([1]); //0
