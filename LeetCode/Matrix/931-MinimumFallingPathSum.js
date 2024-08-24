//931. Minimum Falling Path Sum
//given an n x n array of integers matrix
//return the min sum of any falling path through matrix

//a falling path starts at any element in the first row 
//and chooses the element in the next row that is either directly below or diagonally left/right
//specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col) or (row + 1, col + 1)
var minFallingPathSum = (matrix) => {
    let m = matrix.length; //row
    let n = matrix[0].length; //col
    let prevRow = matrix[0].slice(); //initialize with the first row

    for (let r = 1; r < m; r++) { //starting from the second row
        let currRow = []; //collecting the min sum

        for (c = 0; c < n; c++) { //col
            let curr = matrix[r][c];
            let up = curr + prevRow[c]; //directly up
            let upLeft = curr + (prevRow[c - 1] || Infinity); //diagonally up-left
            let upRight = curr + (prevRow[c + 1] || Infinity) //diagonally up-right

            currRow[c] = Math.min(up, upLeft, upRight);
        };

        prevRow = currRow; //update with current row for next comparison
    }

    return Math.min(...prevRow);
}
//TC: O(m * n) - m is the num of rows and n is the num of cols
//SC: O(n)
minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]); //13 - [1,5,7] or [1,4,8]
//  2  1  3
//  6  5  4
//  7  8  9

//prevRow = [2, 1, 3] -> [7, 6, 5]
//currRow = []

//r = 1, c = 0
//curr = [1][0] = 6
//up: curr + prevRow[0] = 6 + 2 = 8
//upLeft = Infinity
//upRight = curr + prevRow[1] = 6 + 1 = 7
//currRow = [7, ]

//r = 1, c = 1
//curr = [1][1] = 5
//up: 5 + 1 = 6
//upLeft = 5 + 2 = 7
//upRight = 5 + 3 = 8
//currRow = [7, 6, ]

//r = 1, c = 2
//curr = [1][2] = 4
//up: 4 + 3 = 7
//upLeft = 4 + 1 = 5
//upRight = Infinity
//currRow = [7, 6, 5]

//  2  1  3
//  7  6  5
//  7  8  9

//r = 2, c = 0
//curr = [2][0] = 6
//up: 7 + 7 = 14
//upLeft = Infinity
//upRight = 7 + 6 = 13
//currRow = [13, ]

//r = 2, c = 1
//curr = [2][1] = 8
//up: 8 + 6 = 14
//upLeft = 8 + 7 = 15
//upRight = 8 + 5 = 13
//currRow = [13, 13, ]

//r = 2, c = 2
//curr = [2][2] = 9
//up: 9 + 5 = 14
//upLeft = 9 + 6 = 15
//upRight = Infinity
//currRow = [13, 13, 14]

minFallingPathSum([[-19,57],[-40,-5]]); //-59 - [-19, -40]
