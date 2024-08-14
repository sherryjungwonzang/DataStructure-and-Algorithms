//1186. Maximum subarray sum with one deletion
//given an array of integers
//return the max sum for a non-empty subarray with at most one element deletion
//want to choose a subarray and optionally delete one element from it
//so that there is still at least one element left and the sum of the remaining elements is max possible

//Approach:
//using DP
var maxSubarrayWithOneDeletion = (arr) => {
    let oneDeletion = 0;
    let noDeletion = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        //DP
        oneDeletion = Math.max(oneDeletion + arr[i], noDeletion);
        noDeletion = Math.max(noDeletion + arr[i], arr[i]);
        max = Math.max(max, Math.max(noDeletion, oneDeletion));
    }

    return max;
}
//TC: O(n)
//SC: O(1)
maxSubarrayWithOneDeletion([1, -2, 0, 3]); //4 - Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value
//[1, -2, 0, 3]
//oneDeletion = 0
//noDeletion = 1
//max = 1

//[1, -2, 0, 3]
//     ^
//oneDeletion = 0 -> max(0 + -2, 1) = 1
//noDeletion = 1 -> max(1 + -2, -2) = -1
//max = 1 -> max(1, max(1, -1)=1) =1

//[1, -2, 0, 3]
//        ^
//oneDeletion = 0 -> 1 -> max(1 + 0, -1) = 1
//noDeletion = 1 -> -1 -> max(-1 + 0, 0) = 0
//max = 1 -> 1 -> max(1, max(1, 0)=1) =1

//[1, -2, 0, 3]
//           ^
//oneDeletion = 0 -> 1 -> 1 -> max(1 + 3, 0) = 4
//noDeletion = 1 -> -1 -> 0 -> max(0 + 3, 3) = 3
//max = 1 -> 1 -> 1 -> max(1, max(4, 3)=4) =4

maxSubarrayWithOneDeletion([1,-2,-2,3]); //3 - We just choose [3] and it's the maximum sum

maxSubarrayWithOneDeletion([-1,-1,-1,-1]); //-1
//The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0
