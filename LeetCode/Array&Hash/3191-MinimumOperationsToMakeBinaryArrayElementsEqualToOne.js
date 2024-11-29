//3191. Minimum Operations To Make Binary Array Elements Equal To One 
//given a binary array nums
//you can do the following operation on the array any number of times (possibly zero):
//choose any 3 consecutive elements from the array and flip all of them
//flipping an element means changing its value from 0 to 1, and from 1 to 0
//return the minimum number of operations required to make all elements in nums equal to 1 - if it is impossible, return -1
var makeBinaryArrOne = (nums) => {
    let count = 0;
    let m = nums.length;
    
    for (let i = 0; i < m - 2; i++) {
        if (nums[i] === 0) {
            //changing to 1
            nums[i] = 1;
            nums[i + 1] = nums[i + 1] ? 0: 1;
            nums[i + 2] = nums[i + 2] ? 0 : 1;

            count++;
        }
    }

    return nums[m - 1] && nums[m - 2] ? count : -1;
}
makeBinaryArrOne([0,1,1,1,0,0]); //3
//[0, 1, 1, 1, 0, 0]
// ^
//0 -> 1 and i + 1 & i + 1 no changes
//count = 0 -> 1

//[1, 1, 1, 1, 0, 0]
//    ^
//there is no 0
//count = 0 -> 1 -> 1

//[1, 1, 1, 1, 0, 0]
//       ^
//there is 0 in i + 2 position -> changing to 1
//count = 0 -> 1 -> 1 -> 2

//[1, 1, 1, 1, 1, 0]
//          ^
//there is 0 in i + 2 position -> changing to 1
//count = 0 -> 1 -> 1 -> 2 -> 3

//[1, 1, 1, 1, 1, 1]
//             ^  ^ -> checking the last two position = all 1
//count = 3

makeBinaryArrOne([0,1,1,1]); //-1
