//1827. Minimum Operations To Make The Array Increasing
//given an integer array 'nums' - 0-indexed
//in one operation, you can choose an element of the array and increment it by 1
//for example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3]
//return the min number of operations needed to make 'nums' strictly increasing
//an array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1
var minOperations = (nums) => {
    //base case
    if (nums.length < 2) return 0;

    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        //not increasing
        if (nums[i] <= nums[i - 1]) {
            //+1: to make bigger than prev one
            let diff = nums[i - 1] - nums[i] + 1;

            count += diff;

            nums[i] += diff;
        }
    }

    return count;
}
minOperations([1,1,1]); //3
//[1, 1, 1]
//    ^
//[1] = 1 = [0] = 1 -> not increasing
//diff = 1 - 1 + 1 
//count = 0 -> 1
//[1] = 1 + 1 = 2

//[1, 2, 1]
//       ^
//[2] = 1 < [1] = 2 -> not increasing
//diff = 2 - 1 + 1  = 2
//count = 0 -> 1 -> 3
//[1] = 1 + 2 = 3

//[1, 2, 3]

minOperations([1,5,2,4,1]); //14
//[1, 5, 2, 4, 1]
//    ^
//[1] = 5 > [0] = 1 -> increasing

//[1, 5, 2, 4, 1]
//       ^
//[2] = 2 < [1] = 5 -> not increasing
//diff = 5 - 2 + 1  = 4
//count = 0 -> 4
//[2] = 2 + 4 = 6

//[1, 5, 6, 4, 1]
//          ^
//[3] = 4 < [2] = 6 -> not increasing
//diff = 6 - 4 + 1  = 3
//count = 0 -> 4 -> 7
//[2] = 4 + 3 = 7

//[1, 5, 6, 7, 1]
//             ^
//[4] = 1 < [3] = 7 -> not increasing
//diff = 7 - 1 + 1  = 7
//count = 0 -> 4 -> 7 -> 14
//[2] = 1 + 7 = 8

//[1, 5, 6, 7, 8]

minOperations([8]); //0
