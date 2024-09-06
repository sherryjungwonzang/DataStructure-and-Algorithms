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
        //DP
        let [prevCoolDown, prevSell, prevHold] = [coolDown, sell, hold];

        //max profits
        coolDown = Math.max(prevCoolDown, prevSell); //(doing nothing, checking prevsell before being cooldown)
        sell = prevHold + price;
        hold = Math.max(prevHold, prevCoolDown - price); //(keep holding stock, checking "buy")
    }

    return Math.max(sell, coolDown);
}
//TC: O(n)
bestTimeStockCooldown([1,2,3,0,2]); //3 - [buy, sell, cooldown, buy, sell]
//coolDown = 0
//sell = 0
//hold = -Infinity
//DP = [0, 0, -Infi]
//prevCoolDown     prevSell      prevHold        coolDown        Sell        Hold
//     0               0            0       


//[1, 2, 3, 0, 2]
// p
//prevCoolDown     prevSell      prevHold      coolDown          Sell                   Hold
//     0               0            0          (0, 0) = 0        -Infi + 1 = -Infi      (-Infi, 0 - 1) = -1
//DP = [0, -Infi, -1]

//[1, 2, 3, 0, 2]
//    p
//prevCoolDown     prevSell      prevHold      coolDown          Sell                   Hold
//     0             -Infi          -1         (0, -Infi) = 0     -1 + 2 = 1          (-1, 0 - 2) = -1
//DP = [0, 1, -1]

//[1, 2, 3, 0, 2]
//       p
//prevCoolDown     prevSell      prevHold      coolDown          Sell                   Hold
//     0               1          -1           (0, 1) = 1       -1 + 3 = 2              (-1, 0 - 3) = -1
//DP = [1, 2, -1]

//[1, 2, 3, 0, 2]
//          p
//prevCoolDown     prevSell      prevHold      coolDown          Sell                   Hold
//     1               2          -1           (1, 2) = 2       -1 + 0 = -1             (-1, 1 - 0) = 1
//DP = [2, -1, 1]

//[1, 2, 3, 0, 2]
//             p
//prevCoolDown     prevSell      prevHold      coolDown          Sell                   Hold
//     2               -1           1          (2, -1) = 2       1 + 2 = 3             (1, 2 - 2) = 1
//DP = [2, 3, 1]
//max between coolDown and sell = 3

bestTimeStockCooldown([1]); //0
