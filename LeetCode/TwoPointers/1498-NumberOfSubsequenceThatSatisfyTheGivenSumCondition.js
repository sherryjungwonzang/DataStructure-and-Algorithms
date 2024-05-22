//1498. Number of subsequence that satisfy the given sum condition
//given an array of integers 'nums' and an integer 'target'
//return the number of non-empty subsequnce of nums such that the sum of the minimum and max element on it is less or equal to 'target'
//since the answer may be too large, return it modulo 10^9 + 7

//Approach:
//using two pointers
var numSubseq = (nums, target) => {
    //sorting in ascending order - to find min and max value
    nums.sort((a, b) => a - b);

    //two pointers
    let left = 0;
    let right = nums.length - 1;
    let mod = 10 ** 9 + 7;
    let res = 0;
    let pow = [1]; //collecting power of 2

    //colleting power of 2
    for (let i = 1; i < nums.length; i++) {
        pow.push((pow[i - 1] * 2) % mod);
    }

    //checking min and max value with target
    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            res = (res + count[right - left]);
            left++;
        }
    }
    return res % mod;
}
numSubseq([3,5,6,7], 9); //4
//There are 4 subsequences that satisfy the condition.
//[3] -> Min value + max value <= target (3 + 3 <= 9)
//[3,5] -> (3 + 5 <= 9)
//[3,5,6] -> (3 + 6 <= 9)
//[3,6] -> (3 + 6 <= 9)

numSubseq([3,3,6,8], 10); //6
//There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
//[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

numSubseq([2,3,3,4,6,7], 12); //61
//There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
//Number of valid subsequences (63 - 2 = 61)
