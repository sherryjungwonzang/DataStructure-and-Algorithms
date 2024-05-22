//120. Triangle
//given a triangle array
//return the min path sum from top to bottom

//for each step, you may move to an adjacent number of the row below
//more formally, if you are on index i on the current row
//you may move to either index i or index i + 1 on the next row
var triangle = (triangle) => {
    //starting from second row
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
}
triangle([[2],[3,4],[6,5,7],[4,1,8,3]]); //11
//       2
//     3   4
//   6   5   7
// 4   1   8    3
//The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11

triangle([[-10]]); //-10
