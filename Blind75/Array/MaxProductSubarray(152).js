//Maximum Product Subarray (152)
//given an integer array 'nums'
//find a subarray that has the largest product
//and return the product

//Approach:
//DP programming
var maxSubarray = (nums) => {
  //setting variables with nums[0] value
  let prevMax = nums[0];
  let prevMin = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);

    //updating the prevMax and prevMin as currMax and currMin
    prevMax = currMax;
    prevMin = currMin;

    //update the res
    res = Math.max(res, currMax);
  }
  return res;
}
maxSubarray([2, 3, -2, 4]); //6 - [2,3] has the largest product
//prevMax = 2
//prevMin = 2
//res = 2

//              i
//currMax = max(3, 3*2, 3*2) = 6
//currMin = min(3, 3*2, 3*2) = 3

//prevMax = 2 -> 6
//prevMin = 2 -> 3
//res = 2 -> 6

//                  i
//currMax = max(-2, -2*6, -2*3) = -2
//currMin = min(-2, -2*6, -2*3) = -12

//prevMax = 2 -> 6 -> 6
//prevMin = 2 -> 3 -> -12
//res = 2 -> 6 -> 6

//                      i
//currMax = max(4, 4*-2, -2*3) = -2
//currMin = min(4, 4*-12, -2*3) = -48

//prevMax = 2 -> 6 -> 6 -> 6
//prevMin = 2 -> 3 -> -12 -> -48
//res = 2 -> 6 -> 6 -> 6
//max(currMax vs res) = 6

maxSubarray([-2, 0, -1]); //0 - [-2,-1] cannnot be a subarray
//prevMax = -2
//prevMin = -2
//res = -2

//               i
//currMax = max(0, 0*-2, 0*-2) = 0
//currMin = min(0, 0*-2, 0*-2) = 0

//prevMax = -2 -> 0
//prevMin = -2 -> 0
//res = -2 -> 0

//                  i
//currMax = max(-1, -1*0, -1*0) = 0
//currMin = min(-1, -1*0, -1*0) = 0

//prevMax = -2 -> 0 -> 0
//prevMin = -2 -> 0 -> 0
//res = -2 -> 0 -> 0
//max(currMax vs res) = 0
