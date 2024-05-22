//485. Max consecutive ones
//given a binary array 'nums'
//return the max number of consecutive 1's in the array
var maxConsecutiveOnes = (nums) => {
    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count); //update maxCount everytime
        } else {
            count = 0; //need to reset count when it encounters 0 again
        }
    }
    return maxCount;
}
//TC: O(n)
//SC: O(1)
maxConsecutiveOnes([1,1,0,1,1,1]); //3
//the first two digits or the last three digits are consecutive 1s
//the max number of consecutive 1s is 3

//                  i
//count = 0 -> 1
//maxCount = 0 -> 1

//                    i
//count = 0 -> 1 -> 2
//maxCount = 0 -> 1 -> 2

//                       i
//count = 0 -> 1 -> 2 -> 0(reset)
//maxCount = 0 -> 1 -> 2

//                         i
//count = 0 -> 1 -> 2 -> 0(reset) -> 1
//maxCount = 0 -> 1 -> 2 -> 2

//                           i
//count = 0 -> 1 -> 2 -> 0(reset) -> 1 -> 2
//maxCount = 0 -> 1 -> 2 -> 2 -> 2

//                             i
//count = 0 -> 1 -> 2 -> 0(reset) -> 1 -> 2 -> 3
//maxCount = 0 -> 1 -> 2 -> 2 -> 2 -> 3

maxConsecutiveOnes([1,0,1,1,0,1]); //2
