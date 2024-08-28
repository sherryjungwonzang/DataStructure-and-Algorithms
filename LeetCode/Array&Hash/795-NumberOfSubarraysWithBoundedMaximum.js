//795. Number Of Subarrays With Bounded Maximum
//given an integer array 'nums' and two integers left and right
//return the num of contiguous non-empty subarrays such that the value of the max array
//element in that subarray is in the range [left, right]\

//Approach:
//using brute force
var boundedMax = (nums, left, right) => {

    function countSubarrays (max) {
        let total = 0;
        let count = 0;

        for (let num of nums) {
            if (num <= max) {
                count += 1;
                total += count;
            } else {
                count = 0; //reset to 0
            }
        }

        return total;
    }
    
    return countSubarrays(right) - countSubarrays(left - 1);
}
boundedMax([2,1,4,3], 2, 3); //3 - [2], [2,1], [3]
//[2, 1, 4, 3]
//countSubarrays(3) = 4
//total = 0 -> 1 -> 3 -> 3 -> 4
//count = 0 -> 1 -> 2 -> 0 -> 1
//2 <= 3 || 1 <= 3 || 4 > 3 - count reset || 3 = 3

//countSubarrays(1) = 1
//total = 0 -> 0 -> 1 -> 1 -> 1
//count = 0 -> 0 -> 1 -> 0 -> 0
//2 > 1 - count reset || 1 = 3 || 4 > 3 - count reset || 3 > 1 - count reset

//countSubarrays(3) = 4 - countSubarrays(1) = 1 = 3

boundedMax([2,9,2,5,6], 2, 8); //7 - [2], [2], [2,5], [2,5,6], [5,6], [5], [6]
//[2, 9, 2, 5, 6]
//countSubarrays(8) = 7
//total = 0 -> 1 -> 1 -> 2 -> 4 -> 7
//count = 0 -> 1 -> 0 -> 1 -> 2 -> 3
//2 <= 8 || 9 > 8 - count reset || 2 <= 8 || 5 <= 8 || 6 <= 8

//countSubarrays(1) = 0
//total = 0 -> 0 -> 0 -> 0 -> 0 -> 0
//count = 0 -> 0 -> 0 -> 0 -> 0 -> 0
//2 > 1 - count reset || 2 > 1 - count reset || 2 > 1 - count reset || 5 > 1 - count reset || 6 > 1 - count reset 
//countSubarrays(8) = 7 - countSubarrays(1) = 0 = 7
