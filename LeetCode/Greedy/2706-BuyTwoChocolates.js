//2706. Buy Two Chocolates
//given an integer array prices representing the prices of various chocolates in a store
//also given a single integer money, which represents your initial amount of money
//you must buy exactly two chocolates in such a way that you still have some non-negative leftover money
//you would like to minimize the sum of the prices of the two chocolates you buy
//return the amount of money you will have leftover after buying the two chocolates
//if there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative

//Approach:
//using Greedy algorithms and sorting
var buy2Chocolates = (prices, money) => {
    //sorting
    prices.sort((a, b) => a - b);

    let minCost = prices[0] + prices[1];

    //leftover money
    if (minCost <= money) return money - minCost;
    else return money; //cannot buy chocolate
}
//TC: O(n * logn)
//SC: O(n)
buy2Chocolates(prices = [1,2,2], money = 3); //0
//sorting: [1, 2, 2]
//          ^  ^      -> minCost: 1 + 2 = 3
//minCost = money -> 3 - 3 = 0

buy2Chocolates(prices = [3,2,3], money = 3); //3
//sorting: [2, 3, 3]
//          ^  ^      -> minCost: 2 + 3 = 5
//minCost > money -> return whole money since cannot buy
