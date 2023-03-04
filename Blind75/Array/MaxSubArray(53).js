//Maximum Subarray(53)
//subarray is a contiguous part of an array
//given an integer array 'nums'
//find the subarray with the largest sum and return its sum

//Approach:
//DP - with currMax
//setting max - to compare each time and set the maximum value as outcome at the end
var maxSubarray = (nums) => {
  //currentMax and max will start with the first value of nums
  let currMax = nums[0];
  let max = nums[0];

  //loop through  nums
  //starting from [1] - since we already set [0] as the first value
  for (let i = 1; i < nums.length; i++) {
    //update currMax and max
    currMax = Math.max(nums[i], currMax + nums[i]);
    max = Math.max(max, currMax);
  }
  return max;
}
maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6 - subarray [4,-1,2,1] has the largest sum 6
//currMax = -2 | 
//max = -2

//               i
//currMax = max(1, -1) = 1
//currMax = -2 | 1 | 
//max = -2 -> 1

//                   i
//currMax = max(-3, -2) = -2
//currMax = -2 | 1 | -2 |
//max = -2 -> 1 -> 1

//                      i
//currMax = max(4, 2) = 4
//currMax = -2 | 1 | -2 | 4 | 
//max = -2 -> 1 -> 1 -> 4

//                         i
//currMax = max(-1, 3) = 3
//currMax = -2 | 1 | -2 | 4 | 3 | 
//max = -2 -> 1 -> 1 -> 4 -> 4

//                             i
//currMax = max(2, 5) = 5
//currMax = -2 | 1 | -2 | 4 | 3 | 5 | 
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5

//                                 i
//currMax = max(1, 6) = 6
//currMax = -2 | 1 | -2 | 4 | 3 | 5 | 6 | 
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6

//                                      i
//currMax = max(-5, 1) = 1
//currMax = -2 | 1 | -2 | 4 | 3 | 5 | 6 | 1 |  
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6 -> 6

//                                           i
//currMax = max(4, 5) = 5
//currMax = -2 | 1 | -2 | 4 | 3 | 5 | 6 | 1 | 5 |  
//max = -2 -> 1 -> 1 -> 4 -> 4 -> 5 -> 6 -> 6 -> 6
//return 6

maxSubarray([1]); //1 - has the largest sum 1

maxSubarray([5, 4, -1, 7, 8]); //23 - [5,4,-1,7,8] has the largest sum is 23
//currMax = 5 | 
//max = 5

//              i
//currMax = max(4, 9) = 9
//currMax = 5 | 9 | 
//max = 5 -> 9

//                  i
//currMax = max(-1, 8) = 8
//currMax = 5 | 9 | 8 | 
//max = 5 -> 9 -> 9

//                      i
//currMax = max(7, 15) = 15
//currMax = 5 | 9 | 8 | 15 | 
//max = 5 -> 9 -> 9 -> 15

//                         i
//currMax = max(8, 23) = 23
//currMax = 5 | 9 | 8 | 15 | 23 |  
//max = 5 -> 9 -> 9 -> 15 -> 23
//return 23


