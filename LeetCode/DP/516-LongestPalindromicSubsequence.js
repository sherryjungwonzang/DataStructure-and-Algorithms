//516. Longest Palindromic subsequence
//given a string 's'
//find the longest palindromic subsequence's length in s
//a subsequence is a sequence that can be dreived from another sequence by deleting some or no elements without changing the order of the remaining elements

//Approach:
//using DP with 2D array
var longestPalindromicSubsequence = (s) => {
    let n = s.length;
    let dp = Array(n).fill().map(() => Array(n).fill(0)); //2D array

    //traversing from backwards
    for (let i = n - 1; i >= 0; i--) {
        //base case - longest palindromic subsequence of single character is 1
        dp[i][i] = 1;

        for (j = i + 1; j < n; j++) {
            //find palindromic
            //extended by 2
            if (s[i] === s[j]) dp[i][j] = 2 + dp[i + 1][j -1]; //the first and last char of substring
            //non-palindrome
            else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]); //max two possible substring
        }
    }

    return dp[0][n - 1];
}
//TC: O (n^2) - the length of the input string
//SC: O(n^2) - storing the length of the longest palindromic subsequence for each substring
longestPalindromicSubsequence("bbbab"); //4 - "bbbb" is the longest possible palindromic subsequence
//DP
//[
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ]
//  ]

//"b b b a b"
//         i  j
//i = 4, j = 5
//dp[4][4] = 1
//[
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 1 ]
//  ]

//"b b b a b"
//       i j
//i = 3, j = 4
//dp[3][3] = 1

//a != b -> max(dp[4][4], dp[3][3]) = (1, 1) = 1
//[
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 1, 1 ],
//    [ 0, 0, 0, 0, 1 ]
//  ]

//"b b b a b"
//     i j
//i = 2, j = 3
//dp[2][2] = 1
//b != a -> max(dp[3][3], dp[2][2]) = (1, 1) = 1

//"b b b a b"
//     i   j
//i = 2, j = 4
//b = b -> 2 + dp[3][3] = 3
//dp[2][4] = 3
//[
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 0, 1, 1, 3 ],
//    [ 0, 0, 0, 1, 1 ],
//    [ 0, 0, 0, 0, 1 ]
//  ]

//"b b b a b"
//   i j
//i = 1, j = 2
//dp[1][1] = 1
//b = b -> 2 + dp[2][1] = 2
//dp[1][2] = 2

//"b b b a b"
//   i   j
//i = 1, j = 3
//b != a -> max(dp[2][3], dp[1][2]) = (1, 2) = 2
//dp[1][3] = 2

//"b b b a b"
//   i     j
//i = 1, j = 4
//b = b -> 2 + dp[2][3] = 3
//dp[1][4] = 3

//[
//    [ 0, 0, 0, 0, 0 ],
//    [ 0, 1, 2, 2, 3 ],
//    [ 0, 0, 1, 1, 3 ],
//    [ 0, 0, 0, 1, 1 ],
//    [ 0, 0, 0, 0, 1 ]
//  ]

//"b b b a b"
// i j
//i = 0, j = 1
//dp[0][0] = 1
//b = b -> 2 + dp[1][0] = 2
//dp[0][1] = 2

//"b b b a b"
// i   j
//i = 0, j = 2
//b = b -> 2 + dp[1][1] = 3
//dp[0][2] = 3

//"b b b a b"
// i     j
//i = 0, j = 3
//b != a -> max(dp[1][3], dp[0][2]) = (2, 3) = 3
//dp[0][3] = 3

//"b b b a b"
// i       j
//i = 0, j = 4
//b = b -> 2 + dp[1][3] = 4
//dp[0][4] = 4

//[
//    [ 1, 2, 3, 3, 4 ],
//    [ 0, 1, 2, 2, 3 ],
//    [ 0, 0, 1, 1, 3 ],
//    [ 0, 0, 0, 1, 1 ],
//    [ 0, 0, 0, 0, 1 ]
//  ]

//dp[0][4] = 4

longestPalindromicSubsequence("cbbd"); //2
//"bb" is the longest possivle palindromic subsequence
