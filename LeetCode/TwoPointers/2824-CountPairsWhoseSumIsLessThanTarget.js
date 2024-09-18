//2824. Count Pairs Whose Sum Is Less Than Target
//given a 0-indexed integer array nums of length n and an integer target
//return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target

//Approach:
//using two pointers
var countPairs = (nums, target) => {
    //sorting
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    //two pointers
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;

            left++;
        } else {
            right--;
        }
    }
    
    return count;
}
countPairs(nums = [-1,1,2,3,1], target = 2); //3
//sorting: [-1. 1. 1. 2. 3]
//          L            R
//-1 + 3 = 2 -> right--
//count = 0

//[-1. 1. 1. 2. 3]
// L         R
//-1 + 2 = 1 -> right - left = 3 - 0 = 3
//count = 0 -> 3

//[-1. 1. 1. 2. 3]
//     L     R
//1 + 2 = 3 > 2
//count = 0 -> 3

//[-1. 1. 1. 2. 3]
//     L  R
//1 + 1 = 2 = 2
//count = 0 -> 3

countPairs(nums = [-6,2,5,-2,-7,-1,3], target = -2); //10
//sorting: [-7, -6, -2, -1, 2, 3, 5]
//          L                     R
//-7 + 5 = -2 = -2
//count = 0

//[-7, -6, -2, -1, 2, 3, 5]
//  L                 R
//-7 + 3 = -4 < -2
//right - left = 5 - 0 = 5
//count = 0 -> 5

//[-7, -6, -2, -1, 2, 3, 5]
//      L             R
//-6 + 3 = -3 < -2
//right - left = 5 - 1 = 4
//count = 0 -> 5 -> 9

//[-7, -6, -2, -1, 2, 3, 5]
//          L         R
//-2 + 3 = -1 > -2
//count = 0 -> 5 -> 9

//[-7, -6, -2, -1, 2, 3, 5]
//          L      R
//-2 + 2 = 0 > -2
//count = 0 -> 5 -> 9

//[-7, -6, -2, -1, 2, 3, 5]
//          L   R
//-2 + -1 = -3 > -2
//right - left = 3 - 2 = 1
//count = 0 -> 5 -> 9 -> 10



