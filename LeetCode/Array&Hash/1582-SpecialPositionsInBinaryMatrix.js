//1582. Special Positions In Binary Matrix
//given an m x n binary matrix 'mat'
//return the num of special positions in mat
//a position (i, j) is called special if mat[i][j] = 1 and all other elements in row i and column i are 0
var specialPosition = (mat) => {
    let m = mat.length;
    let n = mat[0].length;
    let rowCount = new Array(m).fill(0); //collecting 1s in row
    let colCount = new Array(n).fill(0); //collecting 1s in col
    let res = 0;

    //counting 1s in row and col
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 1) {
                rowCount[r]++; //1s in row
                colCount[c]++; //1s in col
            }
        }
    }

    //checking "Special" elements
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            //if element is 1
            if (mat[r][c] === 1) {
                //both row and col is 1 = special
                if (rowCount[r] === 1 && colCount[c] === 1) res++;
            }
        }
    }

    return res;
}
specialPosition([[1,0,0],[0,0,1],[1,0,0]]); //1
//  1 0 0
//  0 0 1 <-
//  1 0 0

//rowCount = [ 0, 0, 0 ]
//colCount = [ 0, 0, 0 ]

//[1,0,0],[0,0,1],[1,0,0]
// ^   (0, 0)
//rowCount = [ 1, 0, 0 ]
//colCount = [ 1, 0, 0 ]

//[1,0,0],[0,0,1],[1,0,0]
//             ^   (1, 2)
//rowCount = [ 1, 1, 0 ]
//colCount = [ 1, 0, 1 ]

//[1,0,0],[0,0,1],[1,0,0]
//                 ^   (2, 0)
//rowCount = [ 1, 1, 1 ]
//colCount = [ 2, 0, 1 ]

//res = 0
//(0, 0) = 1 & rowCount[0] = 1 & colCount[0] != 2
//(1, 2) = 1 & rowCount[1] = 1 & colCount[2] = 1
//res = 0 -> 1
//(2, 0) = 1 & rowCount[2] != 2 & colCount[0] = 1

specialPosition([[1,0,0],[0,1,0],[0,0,1]]); //3
//  1 0 0 <-
//  0 1 0 <-
//  0 0 1 <-

//rowCount = [ 0, 0, 0 ]
//colCount = [ 0, 0, 0 ]

//[1,0,0],[0,1,0],[0,0,1]
// ^   (0, 0)
//rowCount = [ 1, 0, 0 ]
//colCount = [ 1, 0, 0 ]

//[1,0,0],[0,1,0],[0,0,1]
//           ^   (1, 1)
//rowCount = [ 1, 1, 0 ]
//colCount = [ 1, 1, 0 ]

//[1,0,0],[0,1,0],[0,0,1]
//                     ^   (2, 2)
//rowCount = [ 1, 1, 1 ]
//colCount = [ 1, 1, 1 ]

//res = 0
//(0, 0) = 1 & rowCount[0] = 1 & colCount[0] = 1
//res = 0 -> 1
//(1, 1) = 1 & rowCount[1] = 1 & colCount[1] = 1
//res = 0 -> 1 -> 2
//(2, 2) = 1 & rowCount[2] = 1 & colCount[2] = 1
//res = 0 -> 1 -> 2 -> 3
