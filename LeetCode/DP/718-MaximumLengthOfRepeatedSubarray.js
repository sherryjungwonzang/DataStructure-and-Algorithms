//718. Maximum length of repeated subarray
//given two integer arrays nums1 and nums2
//return the max length of a subarray that appears in both arrays

//Approach:
//using DP with 2D Array
var maxLenRepeatedSubarray = (nums1, nums2) => {
    //2D array
    let dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0));
    let maxLen = 0;

    //DP
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            //need to find the common num
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }

    return maxLen;
}
maxLenRepeatedSubarray([1,2,3,2,1], [3,2,1,4,7]); //3 - the repeated subarray with max length is [3,2,1]
//DP - matching num's position
//[
//          3  2  1  4  7 
//     [ 0, 0, 0, 0, 0, 0 ],
//  1  [ 0, 0, 0, 1, 0, 0 ],
//  2  [ 0, 0, 1, 0, 0, 0 ],
//  3  [ 0, 1, 0, 0, 0, 0 ],
//  2  [ 0, 0, 2, 0, 0, 0 ],
//  1  [ 0, 0, 0, 3, 0, 0 ]
//]

maxLenRepeatedSubarray([0,0,0,0,0], [0,0,0,0,0]); //5 - the repeated subarray with max length is [0,0,0,0,0]
