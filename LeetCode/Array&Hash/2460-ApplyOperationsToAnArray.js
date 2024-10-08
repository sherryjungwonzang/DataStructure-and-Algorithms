//2460. Apply Operations To An Array
//given a 0-indexed array nums of size n consisting of non-negative integers
//need to apply n - 1 operations to this array where, in the ith operation (0-indexed),
//you will apply the following on the ith element of nums:
//if nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0, otherwise, you skip this operation
//after performing all the operations, shift all the 0's to the end of the array

//for example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0]
//return the resulting array
//note that the operations are applied sequentially, not all at once
var applyOperations = (nums) => {
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;

            nums[i + 1] = 0;
        }
    };

    //only sorting 0s
    return nums.sort((a, b) => !a - !b);
};
applyOperations([1,2,2,1,1,0]); //[1,4,2,0,0,0]
//[1, 2, 2, 1, 1, 0]
// ^
//1 != 2 -> skip

//[1, 2, 2, 1, 1, 0]
//    ^
//2 = 2 -> nums[1] = 4
//         nums[2] = 0
//[1, 4, 0, 1, 1, 0]

//[1, 4, 0, 1, 1, 0]
//       ^
//0 != 1 -> skip

//[1, 4, 0, 1, 1, 0]
//          ^
//1 = 1 -> nums[3] = 2
//         nums[4] = 0
//[1, 4, 0, 2, 0, 0]

//[1, 4, 0, 2, 0, 0]
//             ^
//0 = 0 -> nums[4] = 0
//         nums[5] = 0
//[1, 4, 0, 2, 0, 0]

//sorting: [1, 4, 2, 0, 0, 0]

applyOperations([0,1]); //[1,0]
