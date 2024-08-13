//279. Perfect Squares
//given an integer 'n'
//return the least number of perfect square number that sum to n
//a perfect square is an integer that is the square of an integer
//in other words, it is the product of some integer with itself
//1,4,9 and 16 are perfect squares while 3 and 11 are not

//Approach:
//using DP
var perfectSquares = (n) => {
    let dp = new Array(n + 1).fill(Infinity);

    //base case
    dp[0] = 0; //not required perfect square

    for (let i = 1; i <= n; i++) {
        let min = Infinity;

        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, dp[i - j * j] + 1);
        }

        dp[i] = min; //updating
    }

    return dp[n];
}
perfectSquares(12); //3 - 4 + 4 + 4

perfectSquares(13); //2 - 4 + 9
