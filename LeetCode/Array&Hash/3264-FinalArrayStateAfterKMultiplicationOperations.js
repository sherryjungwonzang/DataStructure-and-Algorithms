//3264. Final Array State After K Multiplication Operations
//given an integer array 'nums', an integer k, and an integer multiplier
//need to perform k operation on nums
//in each operation:
//find the min value x in nums - if there are multiple occurrence of the min value, select the one that appears first
//replace the selected min value x with x * multiplier
//return an integer array denoting the final state of nums after performing all k operations
var finalArrayState = (nums, k, multiplier) => {
    while (k--) {
        let min = nums[0];
        let index = 0;

        //checking the min value
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) { //updating
                min = nums[i];

                index = i;
            }
        }

        //multiply
        nums[index] *= multiplier;
    }

    return nums;
}
//TC: O(k * n)
//SC: O(1)
finalArrayState(nums = [2,1,3,5,6], k = 5, multiplier = 2); //[8,4,6,5,6]
//k = 5
//[2, 1, 3, 5, 6] -> [2, 2, 3, 5, 6] 
//    ^
//index 1 < min
//min = 2 -> 1
//index = 0 -> 1
//update 1 * 2 to index[1]

//k = 4
//[2, 2, 3, 5, 6] -> [4, 2, 3, 5, 6]
// ^
//min = 2
//index = 0
//there is no element less than min
//update 2 * 2 to index[0]

//k = 3
//[4, 2, 3, 5, 6]  -> [4, 4, 3, 5, 6]
//    ^
//index 1 < min
//min = 4
//index = 0 
//update 2 * 2 to index[1]

//k = 2
//[4, 4, 3, 5, 6]  -> [4, 4, 6, 5, 6]
//       ^
//index 2 < min
//min = 4 -> 3
//index = 0 -> 2
//update 3 * 2 to index[2]

//k = 1
//[4, 4, 6, 5, 6]  -> [8, 4, 6, 5, 6]
// ^
//min = 4
//index = 0 
//there is no element less than min
//update 4 * 2 to index[0]

finalArrayState(nums = [1,2], k = 3, multiplier = 4); //[16, 8]
//k = 3
//[1, 2]  -> [4, 2]
// ^
//min = 1
//index = 0 
//there is no element less than min
//update 1 * 4 to index[0]

//k = 2
//[4, 2]  -> [4, 8]
//    ^
//index 1 < min
//min = 4 -> 2
//index = 0 -> 1
//update 2 * 4 to index[1]

//k = 1
//[4, 8]  -> [16, 8]
// ^
//min = 4
//index = 0
//there is no element less than min
//update 4 * 4 to index[0]
