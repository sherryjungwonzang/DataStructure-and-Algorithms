//Pascal's Triangle II
//given an integer rowIndex
//return towIndex-th row of the Pascal's triangle

//approach: Dynamic Programming
var getRow = (rowIndex) => {
    let dp = [];

    for (let i = 0; i <= rowIndex; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);
            } else {
                temp.push(dp[j] + dp[j - 1])
            }
        }
        dp = temp;
    }
    return dp;
}
