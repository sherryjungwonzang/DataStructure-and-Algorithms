//498. Diagonal Traverse
//given an m x n matrix 'mat'
//return an array of all the elements of the array in a diagonal order

//.flat(): create a new array with all sub-array elements concatenated into it recursively up to the specified depth
var diagonalTraverse = (mat) => {
    //only one value
    if (mat.length === 1) return mat.flat();

    let row = mat.length;
    let col = mat[0].length;

    //containing arrays based on row + col - 1
    let res = Array.from(Array(row + col - 1), () => new Array().fill([]));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ((i + j) % 2 === 0) { //even index
                res[i + j].unshift(mat[i][j]); //need to do unshift because of the order
            } else { //odd index
                res[i + j].push(mat[i][j]);
            }
        }
    }
    return res.flat();
}
diagonalTraverse([[1,2,3],[4,5,6],[7,8,9]]); //[1,2,4,7,5,3,6,8,9]
// 1  2  3
// 4  5  6
// 7  8  9

//row = 3 | col = 3
//res = [ [], [], [], [], [] ]
//         0   1   2   3   4 

//i = 0 | j = 0 ---> 1
//res = [ [1], [], [], [], [] ]

//i = 0 | j = 1 ---> 2
//res = [ [1], [2, ], [], [], [] ]

//i = 0 | j = 2 ---> 3
//res = [ [1], [2, ], [3, ], [], [] ]

//i = 1 | j = 0 ---> 4
//res = [ [1], [2, 4], [3, ], [], [] ]

//i = 1 | j = 1 ---> 5
//res = [ [1], [2, 4], [5, 3], [], [] ]

//i = 1 | j = 2 ---> 6
//res = [ [1], [2, 4], [5, 3], [6, ], [] ]

//i = 2 | j = 0 ---> 7
//res = [ [1], [2, 4], [7, 5, 3], [6, ], [] ]

//i = 2 | j = 1 ---> 8
//res = [ [1], [2, 4], [7, 5, 3], [6, 8], [] ] 

//i = 2 | j = 2 ---> 9
//res = [ [1], [2, 4], [7, 5, 3], [6, 8], [9] ]

diagonalTraverse([[1,2], [3,4]]); //[1,2,3,4]
// 1  2
// 3  4
