//1004. Max Consecutive Ones III
//given a binary arry 'nums' and an integer 'k'
//return the max number of consecutive 1's in the array if you can flip at most k 0's

//Approach:
//using sliding windows with two pointers
var maxConsecutiveOnes3 = (nums, k) => {
    let left = 0;
    let right = 0;

    while(right < nums.length) {
        //meaning we can flip
        if (nums[right] === 0) k--;

        if (k < 0) {
            if (nums[left] === 0) k++;
            left++; //shrinking window size
        }
        right++; //extending window size
    }
    return right - left; //window size
}
maxConsecutiveOnes3(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2); //6
//[1,1,1,0,0,1,1,1,1,1,1]
//           ^         ^ - flipped from 0 to 1

maxConsecutiveOnes3(nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3); //10
//[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
//         ^ ^       ^  - flipped from 0 to 1
