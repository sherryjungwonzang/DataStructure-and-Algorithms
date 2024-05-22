//1877. Minimize Maximum Pair Sum in Array
//the pair sum of a pair (a, b) is equal to a + b
//the max pair sum is the largest pair sum in a list of pairs
//for example, if we have pairs (1,5), (2,3) and (4,4) - the max pair sum would be max (1+5, 2+3, 4+4) = max(6,5,8) = 8

//given an array 'nums' of even length 'n'
//pair up the elements of nums into n / 2 pairs such that:
//each element of nums is in exactly one pair and
//the max pair sum is minimized

//return the minimized max pair sum after optimally pairing up the elements

//Approach:
//using two pointers
var minPairSum = (nums) => {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let res = Number.MIN_SAFE_INTEGER;

    //two pointers
    while (left < right) {
        let currPairSum = nums[left] + nums[right];
        res = Math.max(currPairSum, res);

        left++;
        right--;
    }
    return res;
}
//TC: O(n * log(n))
//SC: O(1)
minPairSum([3,5,2,3]); //7
//The elements can be paired up into pairs (3,3) and (5,2)
//The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7

minPairSum([3,5,4,2,4,6]); //8
//The elements can be paired up into pairs (3,5), (4,4), and (6,2)
//The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8
