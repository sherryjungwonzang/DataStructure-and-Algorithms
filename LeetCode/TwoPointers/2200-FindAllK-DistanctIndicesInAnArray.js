//2200. Find All K-Distanct Indices In An Array
//given a 0-indexed integer array nums and two integers key and k
//a k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key
//return a list of all k-distant indices sorted in increasing order

//Approach:
//using two pointers
var findKdistantIndices = (nums, key, k) => {
    let res = [];
    let left = 0;
    let right = 0;

    //two pointers
    while (left < nums.length) {
        //k-distant index
        if (Math.abs(left - right) <= k && nums[right] === key) {
            res.push(left);

            left++;
        }

        //not k-distant index
        if (right - left > k) left++;

        //not k-distant index
        if (nums[right] !== key || left - right > k) right++;
    }

    return res;
}
findKdistantIndices(nums = [3,4,9,1,3,9,5], key = 9, k = 1); //[1,2,3,4,5,6]
//[3, 4, 9, 1, 3, 9, 5]
// L
// R
//|0 - 0| <= 1: T && nums[0] = 3 != key: F -> F
//0 - 0 > 1 -> F
//nums[0] = 3 != key: T || 0 - 0 > 1: F -> T
//move right

//[3, 4, 9, 1, 3, 9, 5]
// L
//    R
//|0 - 1| <= 1: T && nums[1] = 4 != key: F -> F
//1 - 0 = 1 -> F
//nums[1] = 4 != key: T || 0 - 1 > 1: F -> T
//move right

//[3, 4, 9, 1, 3, 9, 5]
// L
//       R
//|0 - 2| > 1: F && nums[2] = 9 = key: T -> F
//2 - 0 > 1 -> T
//move left

//[3, 4, 9, 1, 3, 9, 5]
//    L
//       R
//|1 - 2| = 1: F && nums[2] = 9 = key: T -> F
//2 - 1 = 1 -> F
//nums[2] = 9 = key: F || 1 - 2 = 1: F -> F
//left to res
//res = [ 1, ]

//[3, 4, 9, 1, 3, 9, 5]
//       L  L
//       R
//|2 - 2| = 0 < 1: T && nums[2] = 9 = key: T -> T
//push left to res
//res = [ 1, 2, ]
//2 - 3 = - 1 < k -> F
//nums[2] = 9 = key: F || 3 - 2 = 1 = k: F -> F

//[3, 4, 9, 1, 3, 9, 5]
//          L  L
//       R
//|3 - 2| = 1 = 1: T && nums[2] = 9 = key: T -> T
//push left to res
//res = [ 1, 2, 3, ]
//2 - 4 = - 2 < k -> F
//nums[2] = 9 = key: F || 4 - 2 = 2 > k: T -> T
//move right

//[3, 4, 9, 1, 3, 9, 5]
//             L
//          R
//|4 - 3| = 1 = 1: T && nums[3] = 1 != key: F -> F
//3 - 4 = -1 > k -> F
//nums[3] = 1 != key: T || 4 - 3 = 1: F -> T
//move right

//[3, 4, 9, 1, 3, 9, 5]
//             L
//             R
//|4 - 4| = 0 < 1: T && nums[4] = 3 != key: F -> F
//4 - 4 = 0 > k -> F
//nums[4] = 3 != key: T || 4 - 4 = 0 < k: F -> T
//move right

//[3, 4, 9, 1, 3, 9, 5]
//             L  L
//                R
//|4 - 5| = 1 = 1: T && nums[5] = 9 = key: T -> T
//push left to res
//res = [ 1, 2, 3, 4, ]
//5 - 5 = 0 > k -> F
//nums[5] = 9 = key: F || 5 - 5 = 0 < k: F -> F

//[3, 4, 9, 1, 3, 9, 5]
//                L  L
//                R
//|5 - 5| = 0 < 1: T && nums[5] = 9 = key: T -> T
//push left to res
//res = [ 1, 2, 3, 4, 5, ]
//5 - 6 = -1 < k -> F
//nums[5] = 9 = key: F || 6 - 5 = 1 = k: F -> F


//[3, 4, 9, 1, 3, 9, 5]
//                   L
//                R
//|6 - 5| = 1 = 1: T && nums[5] = 9 = key: T -> T
//push left to res
//res = [ 1, 2, 3, 4, 5, 6 ]
//5 - 6 = -1 < k -> F
//nums[5] = 9 = key: F || 6 - 5 = 1 = k: F -> F

//res = [ 1, 2, 3, 4, 5, 6 ]

findKdistantIndices(nums = [2,2,2,2,2], key = 2, k = 2); [0,1,2,3,4]
