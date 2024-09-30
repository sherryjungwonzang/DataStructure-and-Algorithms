//2643. Row With Maximum Ones
//given a m x n binary matrix 'mat'
//find the 0-indexed position of the row that contains the max count of 1s, and the num of 1s in that row
//in case, there are multiple rows that have the max count of ones
//the row with the smallest row number should be selected
//return an array containing the index of the row, and the number of ones in it
var rowMaxOnes = (mat) => {
    let m = mat.length; //row
    let n = mat[0].length; //col
    let max = 0;
    let row = 0;

    //traversing
    for (let i = 0; i < m; i++) {
        //counting 1s from row
        let ones = 0;

        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) ones++;
        }

        //updating
        if (ones > max) {
            max = ones;

            //update with the index of row with max num of 1s
            row = i;
        }
    }

    return [row, max];
}
rowMaxOnes(mat = [[0,1],[1,0]]); //[0, 1] - both rows have the same number of 1's - So we return the index of the smaller row, 0, and the maximum count of ones (1)
//  0 1
//  1 0

//m = 2, n = 2
//max = 0
//row = 0

//i = 0, j = 0: "0"
//ones = 0 -> 0
//ones = max -> no update yet

//i = 0, j = 1: "1"
//ones = 0 -> 0 -> 1
//ones > max -> max = 0 -> 1
//              row = 0 -> 0

//[0, 1]

rowMaxOnes(mat = [[0,0,0],[0,1,1]]); //[1,2] - The row indexed 1 has the maximum count of ones (2) - So we return its index, 1, and the count
//  0 0 0
//  0 1 1

//m = 2, n = 3
//max = 0
//row = 0

//i = 0, j = 0: "0"              i = 0, j = 1: "0"               i = 0, j = 2: "0"
//ones = 0 -> 0                  ones = 0 -> 0 -> 0              ones = 0 -> 0 -> 0 -> 0
//ones = max -> no update yet    ones = max -> no update yet     ones = max -> no update yet

//i = 1, j = 0: "0"              i = 1, j = 1: "1"               i = 1, j = 2: "1"
//ones = 0 -> 0                  ones = 0 -> 0 -> 1              ones = 0 -> 0 -> 1 -> 2
//ones = max -> no update yet    ones > max -> max = 0 -> 1      ones > max -> max = 0 -> 1 -> 2
//                                             row = 0 -> 1                    row = 0 -> 1 -> 1

//[1, 2]

rowMaxOnes(mat = [[0,0],[1,1],[0,0]]); //[1,2] - The row indexed 1 has the maximum count of ones (2)
//  0 0
//  1 1
//  0 0

