//1252. Cells With Odd Values In A Matrix
//there is an m x n matrix that is initialized to all 0's
//there is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix
//for each location indices[i], do both of the following:
//increment all the cells on row ri
//increment all the cells on column ci

//given m, n, and indices
//return the number of odd-valued cells in the matrix after applying the increment to all locations in indices
var cellsOddVal = (m, n, indices) => {
    //creating a 0 array with m and n
    let row = new Array(m).fill(0); //row
    let col = new Array(n).fill(0); //col
    let res = 0;

    //increase the num based on indices
    for (let [i, j] of indices) {
        row[i]++;
        col[j]++;
    }

    //checking every cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let curr = row[i] + col[j];

            //checking odd
            if (curr % 2 === 1) res++;
        }
    }

    return res;
}
cellsOddVal(m = 2, n = 3, indices = [[0,1],[1,1]]); //6
//row = [0, 0]
//col = [0, 0, 0]

//[ [0, 1], [1, 1] ]
//   ^  ^
//row = [0, 0] -> [1, 0]
//col = [0, 0, 0] -> [0, 1, 0]

//[ [0, 1], [1, 1] ]
//           ^  ^
//row = [0, 0] -> [1, 1]
//col = [0, 0, 0] -> [0, 2, 0]

//i = 0, j = 0 -> curr = row[0] + col[0] = 1 + 0 = 1
//1 % 2 = 1 -> odd
//res = 0 -> 1

//i = 0, j = 1 -> curr = row[0] + col[1] = 1 + 2 = 3
//3 % 2 = 1 -> odd
//res = 0 -> 1 -> 2

//i = 0, j = 2 -> curr = row[0] + col[2] = 1 + 0 = 1
//1 % 2 = 1 -> odd
//res = 0 -> 1 -> 2 -> 3

//i = 1, j = 0 -> curr = row[1] + col[0] = 1 + 0 = 1
//1 % 2 = 1 -> odd
//res = 0 -> 1 -> 2 -> 3 -> 4

//i = 1, j = 1 -> curr = row[1] + col[1] = 1 + 2 = 3
//3 % 2 = 1 -> odd
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5

//i = 1, j = 2 -> curr = row[1] + col[2] = 1 + 0 = 1
//1 % 2 = 1 -> odd
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

cellsOddVal(m = 2, n = 2, indices = [[1,1],[0,0]]); //0
// 0 0 ->  0 1 -> 2 2
// 0 0     1 2    2 2
