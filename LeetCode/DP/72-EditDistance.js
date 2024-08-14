//72. Edit distance
//given two strings 'word1' and 'word2'
//return the min number of operations required to convert word11 to word2
//you have the following three operations permitted on a word:
//insert a character
//delete a character
//replace a character

//Approach:
//using DP
var editDistance = (word1, word2) => {
    let dp = Array.from(Array(word1.length + 1), () => new Array(word2.length + 1).fill(0));
    let m = dp.length;
    let n = dp[0].length;

    //set the first row with each position number
    for (let i = 0; i < m; i++) dp[i][0] = i;

    //set the first col with each position number
    for (let i = 0; i < n; i++) dp[0][i] = i;

    //DP
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, //checking top
                dp[i][j - 1] + 1, //checking left
                dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0) //checking diagonal
            );
        }
    }

    return dp[m - 1][n - 1];
}
//TC: O(n)
editDistance("horse", "ros"); //3
//horse -> rorse (replace 'h' with 'r')
//rorse -> rose (remove 'r')
//rose -> ros (remove 'e')

//DP
//[
//    [ 0, 0, 0, 0 ],           [ 0, 1, 2, 3 ],
//    [ 0, 0, 0, 0 ],           [ 1, 0, 0, 0 ],
//    [ 0, 0, 0, 0 ],           [ 2, 0, 0, 0 ],
//    [ 0, 0, 0, 0 ], --->      [ 3, 0, 0, 0 ],
//    [ 0, 0, 0, 0 ],           [ 4, 0, 0, 0 ],
//    [ 0, 0, 0, 0 ]            [ 5, 0, 0, 0 ]
//]

//[1][1] = min(1+1, 1+1, 0+1) = 1
//[1][2] = min(2+1, 1+1, 1+1) = 2
//[1][3] = min(3+1, 2+1, 2+1) = 3

//[2][1] = min(1+1, 2+1, 1+1) = 2
//[2][2] = min(2+1, 2+1, 1+0) = 1
//[2][3] = min(3+1, 1+1, 2+1) = 2

//[3][1] = min(2+1, 3+1, 2+0) = 2
//[3][2] = min(1+1, 2+1, 2+1) = 2
//[3][3] = min(2+1, 2+1, 1+1) = 2

//[4][1] = min(2+1, 4+1, 3+1) = 3
//[4][2] = min(2+1, 3+1, 2+1) = 3
//[4][3] = min(2+1, 3+1, 2+0) = 2

//[5][1] = min(3+1, 5+1, 4+1) = 4
//[5][2] = min(3+1, 4+1, 3+1) = 4
//[5][3] = min(2+1, 4+1, 3+1) = 3

//[ 0, 1, 2, 3 ],
//[ 1, 1, 2, 3 ],
//[ 2, 2, 1, 2 ],
//[ 3, 2, 2, 2 ],
//[ 4, 3, 3, 2 ],
//[ 5, 4, 4, 3 ]


editDistance("intention", "execution"); //5
//intention -> inention (remove 't')
//inention -> enention (replace 'i' with 'e')
//enention -> exention (replace 'n' with 'x')
//exention -> exection (replace 'n' with 'c')
//exection -> execution (insert 'u')
