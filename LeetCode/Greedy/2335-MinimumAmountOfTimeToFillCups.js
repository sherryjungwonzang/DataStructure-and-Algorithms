//2335. Minimum Amount Of Time To Fill Cups
//you have a water dispenser that can dispense cold, warm, hot water
//every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water
//given a 0-indexed integer array amount of length 3 where amount[0], anmount[1], amount[2] denote the num of cold, warm, hot
//you need to fill respectively
//return the min number of seconds needed to fill up all the cups

//Approach:
//using greedy algorithm 
var minAmountFillCups = (amount) => {
    amount.sort((a, b) => a - b); //using 2 biggest cups

    let res = 0;

    //checking two biggest cups
    while (amount[1] && amount[2]) {
        res++; //filling both at the same time

        amount[1]--;
        amount[2]--;

        //keep sorting
        amount.sort((a, b) => a - b);
    };

    //when nothing in biggest cup
    res += amount[2];

    return res;
}
minAmountFillCups([1,4,2]); //4
//sorting: [1, 2, 4]

//[1, 2, 4]  -> [1, 1, 3] -> [1, 0, 2] -> sorting: [0, 1, 2] -> [0, 0, 1]
//    ^  ^          ^  ^                               ^  ^
//res = 0 -> 1  -> 2                                -> 3    
//amount[1] cup has nothing ---> res = 3 + amount[2] = 1 = 4

minAmountFillCups([5,4,4]); //7
//sorting: [4, 4, 5]

//[4, 4, 5] -> [4, 3, 4] -> sorting: [3, 4, 4] -> [3, 3, 3] -> [3, 2, 2] -> sorting: [2, 2, 3] -> [2, 1, 2] -> sorting: [1, 2, 2] -> [1, 1, 1] -> [1, 0, 0] -> sorting: [0, 0, 1]
//    ^  ^                               ^  ^         ^  ^                               ^  ^                               ^  ^         ^  ^ 
//res = 0 -> 1                       -> 2         -> 3                                -> 4                              -> 5          -> 6
//amount[1] cup has nothing ---> res = 6 + amount[2] = 1 = 7

minAmountFillCups([5,0,0]); //5
//sorting: [0, 0, 5]
//amount[1] cup has nothing ---> res = 0 + amount[2] = 5 = 5
