//53. Maximum Subarray
//subarray is a contiguous part of an array
//given an integer array 'nums'
//find the subarray with the largest sum and return its sum

//Approach:
//using DP
var maxSubarray = (nums) => {
    let currMax = nums[0]; //DP
    let max = nums[0]; //to compare each time and set the max value as outcome at the end

    //iterating
    for (let i = 1; i < nums.length; i++) {
        //calculating max value from contiguous array
        currMax = Math.max(nums[i], currMax + nums[i]); 

        max = Math.max(max, currMax);
    }

    return max;
}
//TC: O(n) - loop through nums array once
//SC: O(1)
maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6 - subarray [4,-1,2,1] has the largest sum 6
//currMax = -2
//max = -2

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//     i
//currMax = max(1, -2 + 1) = 1
//currMax = -2 -> 1
//max = -2 -> 1

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//        i
//currMax = max(-3, -3 + 1) = -2
//currMax = -2 -> 1 -> -2
//max = -2 -> 1 -> 1

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//            i
//            -
//currMax = max(4, -2 + 4) = 4
//currMax = -2 -> 1 -> -2 -> 4
//max = -2 -> 1 -> 1 -> 4

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//                i
//            ----- 
//currMax = max(-1, -1 + 4) = 3
//currMax = -2 -> 1 -> -2 -> 4 -> 3
//max = -2 -> 1 -> 1 -> 4 -> 4

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//                   i
//            --------
//currMax = max(2, 2 + 3) = 5
//currMax = -2 -> 1 -> -2 -> 4 -> 3 -> 5
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//                      i
//            ------------
//currMax = max(1, 1 + 5) = 6
//currMax = -2 -> 1 -> -2 -> 4 -> 3 -> 5 -> 6
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//                          i
//currMax = max(-5, -5 + 6) = 1
//currMax = -2 -> 1 -> -2 -> 4 -> 3 -> 5 -> 6 -> 1
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6 -> 6

//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//                             i
//currMax = max(4, 4 + 1) = 5
//currMax = -2 -> 1 -> -2 -> 4 -> 3 -> 5 -> 6 -> 1 -> 5
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6 -> 6 -> 6

maxSubarray([5, 4, -1, 7, 8]); //23 - [5,4,-1,7,8] has the largest sum is 23
//[5, 4, -1, 7, 8]
//currMax = 5
//max = 5

//[5, 4, -1, 7, 8]
//    i
//currMax = max(4, 4 + 5) = 9
//currMax = 5 -> 9
//max = 5 -> 9

//[5, 4, -1, 7, 8]
//        i
//currMax = max(-1, -1 + 9) = 8
//currMax = 5 -> 9 -> 8
//max = 5 -> 9 -> 9

//[5, 4, -1, 7, 8]
//           i
//currMax = max(7, 7 + 8) = 15
//currMax = 5 -> 9 -> 8 -> 15
//max = 5 -> 9 -> 9 -> 15

//[5, 4, -1, 7, 8]
//              i
//currMax = max(8, 8 + 15) = 23
//currMax = 5 -> 9 -> 8 -> 15 -> 23
//max = 5 -> 9 -> 9 -> 15 -> 23

maxSubarray([1]); //1 - has the largest sum 1
