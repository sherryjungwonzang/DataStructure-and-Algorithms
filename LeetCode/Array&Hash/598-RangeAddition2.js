//598. Range Addition2
//given an m x n matrix M initialized with all 0's and an array of operations ops
//where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi
//count and return the number of max integers in the matrix after performing all the operations
var rangeAddition2 = (m, n, ops) => {
    let minRow = m;
    let minCol = n;

    //to find min overlapping
    for (let op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }

    return minRow * minCol;
}
rangeAddition2(m = 3, n = 3, ops = [[2,2],[3,3]]); //4
//  0 0 0     1 1 0     2 2 1
//  0 0 0 ->  1 1 0 ->  2 2 1
//  0 0 0     0 0 0     1 1 1

//[[2, 2], [3, 3]]
//   ^
//minRow = 3 -> min(3, 2) = 2
//minCol = 3 -> min(3, 2) = 2

//[[2, 2], [3, 3]]
//            ^
//minRow = 3 -> min(3, 2) = 2 -> min(2, 3) = 2
//minCol = 3 -> min(3, 2) = 2 -> min(2, 3) = 2
//2 * 2 = 4

rangeAddition2(m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]); //4

rangeAddition2(m = 3, n = 3, ops = []); //9
