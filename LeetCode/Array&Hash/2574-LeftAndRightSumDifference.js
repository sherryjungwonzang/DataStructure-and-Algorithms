//2574. Left And Right Sum Difference
//given a 0-indexed integer array nums
//find a 0-indexed integer array answere where:
//answer.length === nums.length
//answer[i] = |leftSum[i] - rightSum[i]|

//where:
//leftSum[i] is the sum of elements to the left of the index i in the array nums
//if there is no such element, leftSum[i] = 0
//rightSum[i] is the sum of elements to the right of the index i in the array nums
//if there is no such element, rightSum[i] = 0
//return the array answer

//Appraoch:
//using prefixSum
var leftRightSumDiff = (nums) => {
    let leftSum = 0;
    let rightSum = nums.reduce((sum, curr) => sum += curr, 0); //collecting all sum

    return nums.map((curr, i) => {
        //subtracting from the total
        rightSum -= curr;

        //checking diff
        let res = Math.abs(leftSum - rightSum);

        //adding to leftSum
        leftSum += curr;

        return res;
    });
}
//TC: O(n)
//SC: O(n)
leftRightSumDiff([10,4,8,3]); //[15,1,11,22] - The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0]
//[10, 4, 8, 3]
// ^
//rightSum = 10 + 4 + 8 + 3 = 25 -> 15
//res = |0 - 15| = 15
//leftSum = 0 -> 10

//[10, 4, 8, 3]
//     ^
//rightSum = 10 + 4 + 8 + 3 = 25 -> 15 -> 11
//res = |0 - 15| = 15, |10 - 11| = 1
//leftSum = 0 -> 10 -> 14

//[10, 4, 8, 3]
//        ^
//rightSum = 10 + 4 + 8 + 3 = 25 -> 15 -> 11 -> 3
//res = |0 - 15| = 15, |10 - 11| = 1, |3 - 14| = 11
//leftSum = 0 -> 10 -> 14 -> 22

//[10, 4, 8, 3]
//           ^
//rightSum = 10 + 4 + 8 + 3 = 25 -> 15 -> 11 -> 3 -> 0
//res = |0 - 15| = 15, |10 - 11| = 1, |14 - 3| = 11, |22 - 0| = 22
//leftSum = 0 -> 10 -> 14 -> 22 -> 25

//[15, 1, 11, 22]

leftRightSumDiff([1]); //[0] - The array leftSum is [0] and the array rightSum is [0]
