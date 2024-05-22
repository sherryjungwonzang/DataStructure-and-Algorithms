//122. Best Time to Buy and Sell Stock2
//given an integer array 'prices' - prices[i] is the price of a given stock on the i_th day
//on each day, may decide to buy and/or sell the stock
//can only hold at most one share of the stock at any time
//can buy it then immediately sell it on the same day

//find and return the max profit you can achieve

//Approach:
//buying stock at the bottom point and selling at the peaks
//comparing the i(loop) with the previous value
var bestTimeStock2 = (prices) => {
    //set total
    let total = 0;

    //looping through from index 1 to compare with index 0
    for (let i = 1; i < prices.length; i++) {
        //found the best timing for buy and sell
        if (prices[i] > prices[i - 1]) {
            let diff = prices[i] - prices[i - 1];

            //updating total
            total += diff;
        }
    }
    return total;
}
//TC: O(n) - n: the size of the input array prices
//SC: O(1) - constant value
bestTimeStock2([7,1,5,3,6,4]); //7
// 0  1  2  3  4  5
//[7, 1, 5, 3, 6, 4]
//    i
//total = 0
//1 > 7 -> No

//       i
//total = 0
//5 > 1 -> diff = 4
//total = 4

//           i
//total = 4
//3 > 5 -> NO

//              i
//total = 4
//6 > 3 -> diff = 3
//total = 7

//                 i
//total = 7
//4 > 6 -> NO

bestTimeStock2([1,2,3,4,5]); //4
// 0  1  2  3  4
//[1, 2, 3, 4, 5]
//    i
//total = 0
//2 > 1 -> diff = 1
//total = 1

//       i
//total = 1
//3 > 2 -> diff = 1
//total = 2

//           i
//total = 2
//4 > 3 -> diff = 1
//total = 3

//              i
//total = 3
//5 > 4 -> diff = 1
//total = 4
