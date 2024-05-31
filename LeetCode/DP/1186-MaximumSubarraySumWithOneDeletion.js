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
    oneDeletion = Math.max(oneDelete + arr[i], noDelete);
    noDeletion = Math.max(noDelete + arr[i], arr[i]);
    max = Math.max(max, Matj.max(noDeletion, oneDeletion));
  }

  return max;
}
//TC: O(n)
//SC: O(1)
maxSubarrayWithOneDeletion([1, -2, 0, 3]); //4
//Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value

maxSubarrayWithOneDeletion([1,-2,-2,3]); //3 - We just choose [3] and it's the maximum sum

maxSubarrayWithOneDeletion([-1,-1,-1,-1]); //-1
//The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0
