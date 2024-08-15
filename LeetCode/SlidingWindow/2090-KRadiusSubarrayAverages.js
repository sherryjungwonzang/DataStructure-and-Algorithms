//2090. K Radius Subarray Averages
//given a 0-indexed array 'nums' of 'n' integers, and an integer 'k'
//the k-radius average for a subarray of nums centered at some index i 
//with the radius k is the average of all elements in nums between the indices i - k and i + k - inclusive
//if there are less than k elements before or after the index i, then the k-radius average is -1

//build and return an array 'avgs' of length 'n' where avgs[i] is the k-radius average for the subarray centered at index i
//the average of x elements is the sum of the x elements divided by x, using integer division
//the integer division truncates toward zero, which means losing its fractional part
//for example, the average of four elements 2,3,1 and 5 is (2+3+1+5) / 4 = 11 / 4 = 2.75, which truncates to 2

//Approach:
//using sliding window
var kRdaiusAvg = (nums, k) => {
    let sum = 0;
    let size = k * 2 + 1;
    let res = [];

    //collecting the sum within the range from 0
    for (let i = 0; i < size; i++) sum += nums[i];

    //sliding window
    for (let i = 0; i < nums.length; i++) {
        //base case
        if (i < k || i > nums.length - k - 1) {
            res.push(-1);
            continue;
        };

        //moving the sliding window range
        if (i > k) sum += nums[i + k] - nums[i - k - 1];
        res.push(Math.floor(sum / size));
    };

    return res;
}
//TC: O(n)
//SC: O(1)
kRdaiusAvg(nums = [7,4,3,9,1,8,5,2,6], k = 3); //[-1,-1,-1,5,4,4,-1,-1,-1]
//[7, 4, 3, 9, 1, 8, 5, 2, 6], size = 3 * 2 + 1 = 7
// -------------------
//sum = 0 -> 7 -> 11 -> 14 -> 23 -> 24 -> 32 -> 37

//res = [ 
//i = 0  -> 0 < 3 || 0 > 9 - 3 - 1 -> T 
//res = [ -1, 

//i = 1  -> 1 < 3 || 0 > 9 - 3 - 1 -> T 
//res = [ -1, -1, 

//i = 2  -> 2 < 3 || 0 > 9 - 3 - 1 -> T 
//res = [ -1, -1, -1 

//i = 3 -> 3 < 3 || 3 > 9 - 3 - 1 -> F
//sum / size = 37 / 7 = 5
//res = [ -1, -1, -1, 5

//i = 4 -> 4 < 3 || 4 > 9 - 3 - 1 -> F
//4 > 3 -> moving sliding windows
//[7, 4, 3, 9, 1, 8, 5, 2, 6]
//    -------------------
//sum = 0 -> 7 -> 11 -> 14 -> 23 -> 24 -> 32 -> 37 -> 39 -> 32
//sum / size = 32 / 7 = 4
//res = [ -1, -1, -1, 5, 4

//i = 5 -> 5 < 3 || 5 > 9 - 3 - 1 -> F
//5 > 3 -> moving sliding windows
//[7, 4, 3, 9, 1, 8, 5, 2, 6]
//       -------------------
//sum = 0 -> 7 -> 11 -> 14 -> 23 -> 24 -> 32 -> 37 -> 39 -> 32 -> 38 -> 34
//sum / size = 34 / 7 = 4
//res = [ -1, -1, -1, 5, 4, 4

//i = 6  -> 6 < 3 || 6 > 9 - 3 - 1 -> T 
//res = [ -1, -1, -1, 5, 4, 4, -1

//i = 7  -> 7 < 3 || 7 > 9 - 3 - 1 -> T 
//res = [ -1, -1, -1, 5, 4, 4, -1, -1

//i = 8  -> 8 < 3 || 8 > 9 - 3 - 1 -> T 
//res = [ -1, -1, -1, 5, 4, 4, -1, -1, -1]

kRdaiusAvg(nums = [100000], k = 0); //[100000]
//The sum of the subarray centered at index 0 with radius 0 is: 100000.
//avg[0] = 100000 / 1 = 100000.

kRdaiusAvg(nums = [8], k = 100000); //[-1]
//avg[0] is -1 because there are less than k elements before and after index 0
