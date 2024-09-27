//1886. Determine Whether Matrix Can Be Obtained By Rotation
//given two n xn binary matrices mat and target
//return true if it is possible to make mat equal to target
//by rotating mat in 90-degree increments or false otherwise
var obtainedByRotation = (mat, target) => {
    let count = 0;
    let original = mat;
    let m = mat.length;
    let n = mat[0].length;

    while (count <= 3) { //after 3 turns, it will be original
        original = rotate(original);
        
        //check it is equal or not
        let isEqual = checkEqual(original, target);

        if (isEqual) return true;

        count++;
    }

    //rotating function
    function rotate(matrix) {
        let half = Math.floor(m / 2); //half length

        //swapping diagonally
        for (let i = 0; i < m; i++) {
            for (let j = i + 1; j < m; j++) { //i + 1: to avoid duplicate
                //swapping
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        //swapping vertically first and last column
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < half; j++) {
                //m - 1 - j: the last column
                [matrix[i][j], matrix[i][m - 1 - j]] = [matrix[i][m - 1 - j], matrix[i][j]];
            }
        }

        return matrix;
    };

    //checking equal or not
    function checkEqual(matrix, target) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                //not equal
                if (matrix[i][j] !== target[i][j]) return false;
            }
        }

        return true;
    };

    return false;
}
obtainedByRotation(mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]); //true - We can rotate mat 90 degrees clockwise two times to make mat equal target
// 0 0 0    1 0 0    1 1 1
// 0 1 0 -> 1 1 0 -> 0 1 0  
// 1 1 1    1 0 0    0 0 0

//count = 0
//m = 3, n = 3, half = 1, the last column: 3 - 1 - 0 = 2

//#1
//rotating diagonally first
//i = 0, j = 1 -> [0][1] <-> [1][0]
//i = 0, j = 2 -> [0][2] <-> [2][0]
//i = 1, j = 2 -> [1][2] <-> [2][1]
// 0 0 0       0 0 1
// 0 1 0   ->  0 1 1
// 1 1 1       0 0 1

//rotating vertically 
//i = 0, j = 0 -> [0][0] <-> [0][2]
//i = 1, j = 0 -> [1][0] <-> [1][2]
//i = 2, j = 0 -> [2][0] <-> [2][2]
// 0 0 0       0 0 1     1 0 0
// 0 1 0   ->  0 1 1 ->  1 1 0
// 1 1 1       0 0 1     1 0 0

//checking equality
//[ [1, 0, 0], [1, 1, 0], [1, 0, 0] ]
//       ^
//[ [1, 1, 1], [0, 1, 0], [0, 0, 0] ]
//0 != 1 -> false
//count = 0 -> 1

//#2
//rotating diagonally first
//i = 0, j = 1 -> [0][1] <-> [1][0]
//i = 0, j = 2 -> [0][2] <-> [2][0]
//i = 1, j = 2 -> [1][2] <-> [2][1]
// 1 0 0       1 1 1
// 1 1 0   ->  0 1 0
// 1 0 0       0 1 0

//rotating vertically 
//i = 0, j = 0 -> [0][0] <-> [0][2]
//i = 1, j = 0 -> [1][0] <-> [1][2]
//i = 2, j = 0 -> [2][0] <-> [2][2]
// 1 0 0       1 1 1     1 1 1
// 1 1 0   ->  0 1 0 ->  0 1 0
// 1 0 0       0 1 0     0 0 0

//checking equality
//[ [1, 1, 1], [0, 1, 0], [0, 0, 0] ]
//              vs
//[ [1, 1, 1], [0, 1, 0], [0, 0, 0] ]
//count = 0 -> 1 -> 2
//true

obtainedByRotation(mat = [[0,1],[1,1]], target = [[1,0],[0,1]]);//false
// 0 1    1 0 
// 1 1 -> 0 1

obtainedByRotation(mat = [[0,1],[1,0]], target = [[1,0],[0,1]]); //true
// 0 1    1 0 
// 1 0 -> 0 1
