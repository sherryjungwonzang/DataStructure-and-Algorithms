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
        hold = Math.max(prevHold, prevCoolDown - price); //(keep holding stokc, checking "buy")
    }

    return Math.max(sell, coolDown);
}
//TC: O(n)
bestTimeStockCooldown([1,2,3,0,2]); //3 - [buy, sell, cooldown, buy, sell]
//coolDown = 0
//sell = 0
//hold = -Infinity

//[1, 2, 3, 0, 2]
// p
//dp = [0, 0, -Infi]
//coolDown = max(0, 0) = 0
//sell = -Infi + 1 = -Infi
//hold = max (-Infi, 0 - 1) = -1
//dp = [0, -Infi, -1]

//[1, 2, 3, 0, 2]
//    p
//dp = [0, -Infi, -1]
//coolDown = max(0, -Infi) = 0
//sell = -1 + 2 = 1
//hold = max (-1, 0 - 2) = -1
//dp = [0, 1, -1]

//[1, 2, 3, 0, 2]
//       p
//dp = [0, 1, -1]
//coolDown = max(0, 1) = 1
//sell = -1 + 3 = 2
//hold = max (-1, 1 - 3) = -1
//dp = [1, 2, -1]

//[1, 2, 3, 0, 2]
//          p
//dp = [1, 2, -1]
//coolDown = max(1, 2) = 2
//sell = -1 + 0 = -1
//hold = max (-1, 1 - 0) = 1
//dp = [2, -1, 1]

//[1, 2, 3, 0, 2]
//             p
//dp = [2, -1, 1]
//coolDown = max(2, -1) = 2
//sell = 1 + 2 = 3
//hold = max (1, 2 - 2) = 1
//dp = [2, 3, 1]

bestTimeStockCooldown([1]); //0

