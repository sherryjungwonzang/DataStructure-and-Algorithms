//2932. Maximum Strong Pair XOR
//given a 0-indexed integer array nums
//a pair of integers x and y is called a strong pair if it satisfies the condition:
//|x - y| <= min(x, y)
//need to select two integers from nums such that they form a strong pair
//and their bitwise XOR is the max among all strong pairs in the array
//return the max XOR value out of all possible strong pairs in the array nums
var maxStrongPairXOR = (nums) => {
    let res = 0;

    //iterating as pairs
    for (let a of nums) {
        for (let b of nums) {
            //check strong pair
            if (Math.abs(a - b) <= Math.min(a, b)) res = Math.max(res, a ^ b);
        }
    }

    return res;
}
maxStrongPairXOR([1,2,3,4,5]); //7
//[1, 2, 3, 4, 5]
// a  a  a  a  a
// b  b  b  b  b
  
//possible pairs:
//(1, 1): |1 - 1| <= 1 -> valid    || (2, 2): |2 - 2| <= 2 -> valid     || (3, 3): |3 - 3| <= 3 -> valid   || (4, 4): |4 - 4| <= 4 -> valid
//(1, 2): |1 - 2| <= 1 -> valid    || (2, 3): |2 - 3| <= 2 -> valid     || (3, 4): |3 - 4| <= 3 -> valid   || (4, 5): |4 - 5| <= 4 -> valid
//(1, 3): |1 - 3| <= 1 -> invalid  || (2, 4): |2 - 4| <= 2 -> valid     || (3, 5): |3 - 5| <= 3 -> valid   
//(1, 4): |1 - 4| <= 1 -> invalid  || (2, 5): |2 - 5| <= 2 -> invalid   ||                                 || (5, 5): |5 - 5| <= 5 -> valid
//(1, 5): |1 - 5| <= 1 -> invalid  ||                                  

//valid strong pairs:
//    (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5), (5, 5) 
//XOR:  0       3       0       1       6       0       7       6       0       1       0
//res = 0 -> 3 -> 6 -> 7

maxStrongPairXOR([10, 100]); //0
//There are 2 strong pairs in the array nums: (10, 10) and (100, 100)
//The maximum XOR possible from these pairs is 10 XOR 10 = 0 since the pair (100, 100) also gives 100 XOR 100 = 0

maxStrongPairXOR([5,6,25,30]); //7
//There are 6 strong pairs in the array nums: (5, 5), (5, 6), (6, 6), (25, 25), (25, 30) and (30, 30)
//The maximum XOR possible from these pairs is 25 XOR 30 = 7 since the only other non-zero XOR value is 5 XOR 6 = 3
