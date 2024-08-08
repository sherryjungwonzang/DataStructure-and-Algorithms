//97. Interleaving String
//given strings s1, s2 and s3
//find whether s3 is formed by an interleacing of s1 and s2
//an interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively such that:
//s = s1 + s2 + ... + sn
//t = t1 + t2 + ... + tm
//|n - m| <= 1
//the interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or tq + s1 + t2 + s2 + t3 + s3 + ...

//Approach:
//using DP
var interleavingString = (s1, s2, s3) => {
    let m = s1.length;
    let n = s2.length;
    let l = s3.length;

    //base case
    if (m + n !== l) return false;

    //dp - to store substrings of s1 and s2 can interleave at each position
    let dp = new Array(n + 1).fill(false); 
    dp[0] = true; //empty s1 and s2 can form empty s3

    //to check all possible combinations of substrings
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            //both s1 and s2 are empty
            if (i === 0 && j === 0) dp[j] = true;

            //check s2 at j - 1 matches in s3 i + j -1
            //using prev val of dp[j - 1]
            else if (i === 0) dp[j] = dp[j - 1] && s2[j - 1] === s3[i + j - 1];

            //check s1 at i - 1 matches in s3 i + j - 1 index
            //using the curr val of dp[j - 1]
            else if (j === 0) dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1];

            //i and j are not 0
            //curr char in s1 matches in s3 and prev substring of s1 can interleave to form prev part of s3
            //or
            //curr char in s2 matches in s3 and prev substring of s2 can interleave to form prev part of s3
            else dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    return dp[n];
}
//TC: O(m * n) - m is s1 length, n is s2 length
//SC: O(n) - length of s2
interleavingString("aabcc", "dbbca", "aadbbcbcac"); //true
//One way to obtain s3 is:
//Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
//Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".

interleavingString("aabcc", "dbbca", "aadbbaccc"); //false

interleavingString("", "", ""); //true
