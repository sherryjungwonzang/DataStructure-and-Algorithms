//1913. Maximum Product Difference Between Two Pairs
//the product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d)
//for example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16
//given an integer array nums
//choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized
//return the maximum such product difference

//Approach:
//using sorting
var maxProductDiff = (nums) => {
    let m  = nums.length;

    //sorting
    nums.sort((a, b) => a - b);

    //(largest * second largest) - (smallest - second smallest): max product difference
    return (nums[m - 2] * nums[m - 1]) - (nums[0] * nums[1]);
}
maxProductDiff([5,6,2,7,4]); //34 - The product difference is (6 * 7) - (2 * 4) = 34
//sorting: [2, 4, 5, 6, 7]
//          ^  ^     ^  ^
//(7 * 6) - (2 * 4) = 34

maxProductDiff([4,2,5,9,7,4,8]); //64 - The product difference is (9 * 8) - (2 * 4) = 64
//sorting: [2, 4, 4, 5, 7, 8, 9]
//          ^  ^           ^  ^
//(9 * 8) - (2 * 4) = 64
