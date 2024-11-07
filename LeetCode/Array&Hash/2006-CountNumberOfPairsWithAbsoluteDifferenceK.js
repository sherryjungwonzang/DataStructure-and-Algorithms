//2006. Count Number Of Pairs With Absolute Difference K
//given an integer array nums and an integer k
//return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k
//the value of |x| is defined as:
//x if x >= 0
//-x if x < 0

//Approach:
//using hash map
var absoluteDifferenceK = (nums, k) => {
    let map = new Map();
    let res = 0;

    //frequency setting
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

    //find absolute difference K
    for (let num of nums) {
        let sum = num + k;

        if (map.has(sum)) res += map.get(sum);
    }

    return res;
}
absoluteDifferenceK(nums = [1,2,2,1], k = 1); //4
//map = {
//  1: 1 -> 2,
//  2: 1 -> 2
//}

//[1, 2, 2, 1]
// ^
//sum = k + 1 = 2 -> in map
//res = 0 -> 2

//[1, 2, 2, 1]
//    ^
//sum = k + 1 = 3 -> not in map
//res = 0 -> 2 -> 2

//[1, 2, 2, 1]
//       ^
//sum = k + 1 = 3 -> not in map
//res = 0 -> 2 -> 2 -> 2

//[1, 2, 2, 1]
//          ^
//sum = k + 1 = 2 -> in map
//res = 0 -> 2 -> 2 -> 2 -> 4

absoluteDifferenceK(nums = [1,3], k = 3); //0

absoluteDifferenceK(nums = [3,2,1,5,4], k = 2); //3
