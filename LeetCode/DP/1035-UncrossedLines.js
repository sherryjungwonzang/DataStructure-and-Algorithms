//1035. Uncrossed Lines
//given two integer arrays 'nums1' and 'nums2'
//we write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines
//we may draw connecting lines: a straight line connecting two numbers: nums1[i] and nums2[i]
//nums1[i] === nums2[i]
//and the line we draw does not intersect any other connecting non horizontal line
//connectng line cannot intersect even at the endpoints
//return the max number of connecting lines we can draw in this way

//Approach:
//using DP
var uncrossedLines = (nums1, nums2) => {
    let m = nums1.length;
    let n = nums2.length;
    let dp = Array.from({ length: m + 1}, () => Array(n + 1).fill(0));

    //DP
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //matching
            if (nums1[i - 1] === nums[j - 1]) dp[i][j] += dp[i - 1][j - 1] + 1; //diagonal
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i][j]); //checking left, top and itself
        }
    };

    return dp[m][n];
}
uncrossedLines(nums1 = [1,4,2], nums2 = [1,2,4]); //2
//DP
//  0 0 0 0 
//  0 0 0 0 
//  0 0 0 0 
//  0 0 0 0 

//i = 1, j = 1 -> 1 = 1
//dp[1][1] = dp[0][0] + 1 = 1
//  0 0 0 0 
//  0 1 0 0 
//  0 0 0 0 
//  0 0 0 0 

//i = 1, j = 2 -> 1 != 2
//dp[1][2] = max(dp[0][2], dp[1][1], dp[1][2]) = (0, 1, 0) = 1
//  0 0 0 0 
//  0 1 1 0 
//  0 0 0 0 
//  0 0 0 0 

//i = 1, j = 3 -> 1 != 4
//dp[1][3] = max(dp[0][3], dp[1][2], dp[1][3]) = (0, 1, 0) = 1
//  0 0 0 0 
//  0 1 1 1 
//  0 0 0 0 
//  0 0 0 0 

//i = 2, j = 1 -> 4 != 1
//dp[2][1] = max(dp[1][1], dp[2][0], dp[2][1]) = (1, 0, 0) = 1
//  0 0 0 0 
//  0 1 1 1 
//  0 1 0 0 
//  0 0 0 0 

//i = 2, j = 2 -> 4 != 2
//dp[2][2] = max(dp[1][2], dp[2][1], dp[2][2]) = (1, 1, 0) = 1
//  0 0 0 0 
//  0 1 1 1 
//  0 1 1 0 
//  0 0 0 0 

//i = 2, j = 3 -> 4 = 4
//dp[2][3] = dp[1][2] + 1 = 2
//  0 0 0 0 
//  0 1 1 1 
//  0 1 1 2 
//  0 0 0 0 

//i = 3, j = 1 -> 2 != 1
//dp[3][1] = max(dp[2][1], dp[3][0], dp[3][1]) = (1, 0, 0) = 1
//  0 0 0 0 
//  0 1 1 1 
//  0 1 1 2 
//  0 1 0 0 

//i = 3, j = 2 -> 2 = 2
//dp[3][2] = dp[2][1] + 1 = 2
//  0 0 0 0 
//  0 1 1 1 
//  0 1 1 2 
//  0 1 2 0 

//i = 3, j = 3 -> 2 != 4
//dp[3][3] = max(dp[2][3], dp[3][2], dp[3][3]) = (2, 2, 0) = 2
//  0 0 0 0 
//  0 1 1 1 
//  0 1 1 2 
//  0 1 2 2 

uncrossedLines(nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]); //3

uncrossedLines(nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]); //2
