//91. Decode Ways
//given a string 's' containing only digits
//return the num of ways to decode it

//a message containing letters from A-Z can be ancoded into numbers using the following mapping:
//'A' -> "1", 'B' -> "2", ..., 'Z' -> "26"

//to decode an encoded message, all the digits must be grouped then mapped back into letters
//using the reverse of the mapping above - it can be multiple ways
//"AAJF" with grouping (1 1 10 6)
//"KJF" with grouping (11 10 6)
//grouping (1 11 06) is invalid - because "06" cannot be mapped into 'F' since "6" is different from "06"

//Approach:
//DP Array
var decodeWays = (s) => {
  //base case - there is no possible solutions
  if (s[0] === '0') return 0;

  //DP array
  let dp = new Array(s.length + 1).fill(0);

  //base case
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    //set single and double
    let single = +s[i - 1];
    let double = +(s[i - 2] + s[i - 1]);

    //check single and double are within the range or not
    if (single >= 1 && single <= 9) dp[i] += dp[i - 1];
    if (double >= 10 && double <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
}
//TC: O(n) 
//SC: O(n)
decodeWays("12"); //2 - 12 could be decoded as "AB" (1 2) or "L" (12)
//s = 1 2
//DP = [ 0 | 0 | 0 ]

//applying the base cases
//DP = [ 1 | 1 | 0 ]
//               i
//single = s[2-1] = s[1] = 2
//double = s[2-2] + s[2-1] = s[0] +s[1] = 12
//check single and double are in range or not -> YES
//add DP[1] value and DP[0] value in DP[2] 
//DP = [ 1 | 1 | 2 ]
//return 2

decodeWays("226"); //3 - 226 could be decoded as "B2" (2 26), "VF" (22 6)
//s = 2 2 6
//DP = [ 0 | 0 | 0 | 0 ]

//applying the base cases
//DP = [ 1 | 1 | 0 | 0 ]
//               i
//single = s[2-1] = s[1] = 2
//double = s[2-2] + s[2-1] = s[0] +s[1] = 22
//check single and double are in range or not -> YES
//add DP[1] value and DP[0] value in DP[2] 

//DP = [ 1 | 1 | 2 | 0 ]
//                   i
//single = s[3-1] = s[2] = 2
//double = s[3-2] + s[3-1] = s[1] +s[2] = 26
//check single and double are in range or not -> YES
//add DP[2] value and DP[1] value in DP[3] 
//DP = [ 1 | 1 | 2 | 3 ]
//return 3
