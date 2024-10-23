//2600. K Items With The Maximum Sum
//there is a bag that consists of items, each item has a number 1, 0, or -1 written on it
//the bag initially contains:
//numOnes items with 1s written on them
//numZeroes items with 0s written on them
//numNegOnes items with -1s written on them

//we want to pick exactly k items among the available items
//given four non-negative integers numOnes, numZeros, numNegOnes, and k
//return the maximum possible sum of numbers written on the items
var kItemsMaxSum = (numOnes, numZeros, numNegOnes) => {
    //base case
    if (k <= numOnes) return k;

    let sum = 0;

    //checking max value first
    if (numOnes) {
        sum += numOnes;

        k -= numOnes;
    }

    //still k is there after reducing 1s
    if (k > 0 && numZeros) k -= numZeros;

    //considering negative thing as well
    if (k > 0 && numNegOnes) sum += k * -1;

    return sum;
}
//TC: O(1)
//SC: O(1)
kItemsMaxSum(numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2); //2
//numOnes = 3 -> 2  || -> 1
//k = 2 -> 1        || -> 0
//sum = 0 -> 1      || -> 2

kItemsMaxSum(numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4); //3
//numOnes = 3 -> 2  || -> 1   || -> 0
//k = 4 -> 3        || -> 2   || -> 1
//sum = 0 -> 1      || -> 2   || -> 3

//as k is left 1 -> checking numZeros
//numZeros = 2 -> 1
//k = 1 -> 0 
//sum = 0 -> 1 -> 2 -> 3 -> 4
