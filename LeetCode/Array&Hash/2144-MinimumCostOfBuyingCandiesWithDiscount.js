//2144. Minimum Cost Of Buying Candies With Discount
//a shop is selling candies at a discount
//for every two candies sold, the shop gives a third candy for free

//the customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bough
//for example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3
//they can take the candy with cost 1 for free, but not the candy with cost 4
//given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy
//return the minimum cost of buying all the candies

//Approach:
//using sorting
var minCostBuyingCandies = (cost) => {
    //base case
    if (cost.length < 3) return cost.reduce((prev, curr) => prev + curr);

    let count = 0; //counting candies
    let sum = 0; //cost of buying candies

    //sorting - ascending order
    cost.sort((a, b) => b - a);

    for (let num of cost) {
        //free candy
        if (count === 2) {
            //resetting
            count = 0;

            continue;
        }

        //collecting
        sum += num;

        count++;
    }

    return sum;
}
minCostBuyingCandies([6,5,7,9,2,2]); //23 - 9 + 7, 5 + 2
//sorting: [9, 7, 6, 5, 2, 2]
//          ^
//count = 0 -> 1
//sum = 0 -> 9

//sorting: [9, 7, 6, 5, 2, 2]
//             ^
//count = 0 -> 1 -> 2
//sum = 0 -> 9 -> 16

//sorting: [9, 7, 6, 5, 2, 2]
//                ^: free candy
//count = 0 -> 1 -> 2 -> 0
//sum = 0 -> 9 -> 16

//sorting: [9, 7, 6, 5, 2, 2]
//                   ^
//count = 0 -> 1 -> 2 -> 0 -> 1
//sum = 0 -> 9 -> 16 -> 21

//sorting: [9, 7, 6, 5, 2, 2]
//                      ^
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 2
//sum = 0 -> 9 -> 16 -> 21 -> 23

//sorting: [9, 7, 6, 5, 2, 2]
//                         ^: free candy
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 2 -> 0
//sum = 0 -> 9 -> 16 -> 21 -> 23

minCostBuyingCandies([1,2,3]); //5 - 2 + 3

minCostBuyingCandies([5,5]);
