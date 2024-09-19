//1480. Running Sum Of 1D Array
//given an array nums
//we define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i])
//return the running sum of nums

//Approach:
//using prefix sum
var runningSum = (nums) => {
    //to store the sum
    let arr = new Array(nums.length);

    //base setting
    arr[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i - 1] + nums[i];
    }

    return arr;
}
//TC: O(n)
//SC: O(n)
runningSum([1,2,3,4]); //[1,3,6,10]
//arr = [1, , , ]

//[1, 2, 3, 4]
//    ^
//arr[1] = arr[0] + nums[1] = 1 + 2 = 3
//arr = [1, 3, , ]

//[1, 2, 3, 4]
//       ^
//arr[2] = arr[1] + nums[2] = 3 + 3 = 6
//arr = [1, 3, 6, ]

//[1, 2, 3, 4]
//          ^
//arr[3] = arr[2] + nums[3] = 6 + 4 = 10
//arr = [1, 3, 6, 10]

runningSum([1,1,1,1,1]); //[1,2,3,4,5]
//arr = [1, , , , ]

//[1, 1, 1, 1, 1]
//    ^
//arr[1] = arr[0] + nums[1] = 1 + 1 = 2
//arr = [1, 2, , , ]

//[1, 1, 1, 1, 1]
//       ^
//arr[2] = arr[1] + nums[2] = 2 + 1 = 3
//arr = [1, 2, 3, , ]

//[1, 1, 1, 1, 1]
//          ^
//arr[3] = arr[2] + nums[3] = 3 + 1 = 4
//arr = [1, 2, 3, 4, ]

//[1, 1, 1, 1, 1]
//             ^
//arr[4] = arr[3] + nums[4] = 4 + 1 = 5
//arr = [1, 2, 3, 4, 5]

runningSum([3,1,2,10,1]); //[3,4,6,16,17]
