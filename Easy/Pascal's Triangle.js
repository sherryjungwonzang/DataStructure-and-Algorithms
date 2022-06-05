//Pascal's Triangle
//given an integer numRows
//return numRows of Pascal's triangle
//in pascal's triangle, each num is sum of two nums directly above it

//approach 1: Dynamic Programming (DP)
var generate = (numRows) => {
    let arr = [[1]];
    let count = 1;

    while(count < numRows) {
        count++;
        let temp = [];

        for (let i = 0; i < count; i++) {
            if (i === 0 || i === count - 1) {
                temp.push(1);
            } else {
                temp.push(arr[arr.length - 1][i - 1] + arr[arr.length - 1][i]);
            }
        }
        arr.push(temp);
    }
    return arr;
}
