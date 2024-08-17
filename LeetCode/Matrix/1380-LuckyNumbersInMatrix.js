//1380. Lucky Numbers In Matrix
//given a m x n matrix of distinct numbers
//return all lucky numbers in the matrix in any order
//a lucky number is an element of the matrix such that it is the min element in its row and max in its col
var luckyNumbers = (matrix) => {
    let m = matrix.length; //row
    let n = matrix[0].length; //col
    let minRow = new Array(m).fill(Infinity);
    let maxCol = new Array(n).fill(0);
    
    //traversing to find min from rows and max from cols
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let curr = matrix[r][c];

            minRow[r] = Math.min(minRow[r], curr);
            maxCol[c] = Math.max(maxCol[c], curr);
        }
    };

    //checking lucky number
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let curr = matrix[r][c];

            if (curr === minRow[r] && curr === maxCol[c]) return [curr];
        }
    };

    return [];
}
luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]); //[15]
//  3  7  8
//  9  11 13
//  15 16 17

//minRow = [Infi, Infi, Infi]
//maxCol = [0, 0, 0]

//r = 0, c = 0, curr = 3
//min(Infi, 3) = 3
//max(0, 3) = 3
//minRow = [3, Infi, Infi]
//maxCol = [3, 0, 0]

//r = 0, c = 1, curr = 7
//min(3, 7) = 3
//max(0, 7) = 7
//minRow = [3, Infi, Infi]
//maxCol = [3, 7, 0]

//r = 0, c = 2, curr = 8
//min(3, 8) = 3
//max(0, 8) = 8
//minRow = [3, Infi, Infi]
//maxCol = [3, 7, 8]

//r = 1, c = 0, curr = 9
//min(Infi, 9) = 9
//max(3, 9) = 9
//minRow = [3, 9, Infi]
//maxCol = [9, 7, 8]

//r = 1, c = 1, curr = 11
//min(9, 11) = 9
//max(7, 11) = 11
//minRow = [3, 9, Infi]
//maxCol = [9, 11, 8]

//r = 1, c = 2, curr = 13
//min(9, 13) = 9
//max(8, 13) = 13
//minRow = [3, 9, Infi]
//maxCol = [9, 11, 13]

//r = 2, c = 0, curr = 15
//min(Infi, 15) = 15
//max(9, 15) = 15
//minRow = [3, 9, 15]
//maxCol = [15, 11, 13]

//r = 2, c = 1, curr = 16
//min(15, 16) = 15
//max(11, 16) = 16
//minRow = [3, 9, 15]
//maxCol = [15, 16, 13]

//r = 2, c = 2, curr = 17
//min(15, 17) = 15
//max(13, 17) = 17
//minRow = [3, 9, 15]
//maxCol = [15, 16, 17]

//[15]

luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]); //[12]

luckyNumbers([[7,8],[1,2]]); //[7]
