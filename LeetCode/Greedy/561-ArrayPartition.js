//561. Array Partition
//given an integer array nums of 2n integers
//group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
//such that the sum of min(a_i, b_i) for all i is maximized
//return the maximized sum

//Approach:
//using greedy algorithm
var arrayPartition = (nums) => {
    let res = 0;
    let n = nums.length;

    //sorting
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i += 2) res += nums[i];
    
    return res;
}
//TC: O(n * logn)
//SC: (1)
arrayPartition([1, 4, 3, 2]); //4
//1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
//2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
//3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
//So the maximum possible sum is 4

arrayPartition([6, 2, 6, 5, 1, 2]); //9
//The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
