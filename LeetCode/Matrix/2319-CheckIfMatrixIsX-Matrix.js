//2319. Check If Matrix Is X-Matrix
//a square matrix is said to be an X-matrix if both of following conditions hold:
//1. all the elements in the diagonals of the matrix are non-zero
//2. all other elements are 0

//given a 2D integer array 'grid' of size n xn - representing a square matrix
//return true if grid is an X-matrix, otherwise, return false
var xMatrix = (grid) => {
    let m = grid.length;

    //traversing
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            //checking diagonal
            let isDiagonal = (i === j || i + j === m - 1);

            //checking valid two conditions:
            //1. diagonal with non-zero elements
            //2. non-diagonal with 0
            if ((isDiagonal && grid[i][j] === 0) || (!isDiagonal && grid[i][j] !== 0)) return false;
        }
    };

    return true;
}
xMatrix([[5,7,0],[0,3,1],[0,5,0]]); //false
// 5 7 0
// 0 3 1
// 0 5 0

//diagonal:
//i = 0, j = 0 -> 0 = 0: T || 0 + 0 != 2: F = T
//i = 0, j = 1 -> 0 != 1: F || 0 + 1 != 2: F = F
//i = 0, j = 2 -> 0 != 2: F || 0 + 2 = 2: T = T

//i = 1, j = 0 -> 1 != 0: F || 1 + 0 != 2: F = F
//i = 1, j = 1 -> 1 = 1: T || 1 + 1 = 2: T = T
//i = 1, j = 2 -> 1 != 2: F || 1 + 2 != 2: T = F

//i = 2, j = 0 -> 2 != 0: F || 2 + 0 = 2: T = T
//i = 2, j = 1 -> 2 != 1: F || 2 + 1 != 2: F = F
//i = 2, j = 2 -> 2 = 2: T || 2 + 2 != 2: F = T

//-> (0, 0), (0, 2), (1, 1), (2, 0), (2, 2)

//checking validation
//1. (0, 0), (0, 2), (1, 1), (2, 0), (2, 2) should non-zero
//2. except (0, 0), (0, 2), (1, 1), (2, 0), (2, 2) should zero

//(0, 0) = 5
//(0, 2) = 0
//(1, 1) = 3
//(2, 0) = 0
//(2, 2) = 0
//False -> all diagonal are not non-zero & non diagonal are not zero

xMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]); //true
// 2 0 0 1
// 0 3 1 0
// 4 0 0 2

//diagonal:
//i = 0, j = 0 -> 0 = 0: T || 0 + 0 != 3: F = T
//i = 0, j = 1 -> 0 != 1: F || 0 + 1 != 3: F = F
//i = 0, j = 2 -> 0 != 2: F || 0 + 2 != 3: F = F
//i = 0, j = 3 -> 0 != 3: F || 0 + 3 = 3: T = T

//i = 1, j = 0 -> 1 != 0: F || 1 + 0 != 3: F = F
//i = 1, j = 1 -> 1 = 1: T || 1 + 1 = 3: T = T
//i = 1, j = 2 -> 1 != 2: F || 1 + 2 = 3: T = T
//i = 1, j = 3 -> 1 != 3: F || 1 + 3 != 3: T = F

//i = 2, j = 0 -> 2 != 0: F || 2 + 0 != 3: F = F
//i = 2, j = 1 -> 2 != 1: F || 2 + 1 = 3: T = T
//i = 2, j = 2 -> 2 = 2: T || 2 + 2 != 3: F = T
//i = 2, j = 3 -> 2 != 3: F || 2 + 3 != 3: F = F

//i = 3, j = 0 -> 3 != 0: F || 3 + 0 = 3: T = T
//i = 3, j = 1 -> 3 != 1: F || 3 + 1 != 3: F = F
//i = 3, j = 2 -> 3 != 2: F || 3 + 2 != 3: F = F
//i = 3, j = 3 -> 3 = 3: T || 3 + 3 != 3: F = T

//-> (0, 0), (0, 3), (1, 1), (1, 2), (2, 1), (2, 2), (3, 0), (3, 3)

//checking validation
//1. (0, 0), (0, 3), (1, 1), (1, 2), (2, 1), (2, 2), (3, 0), (3, 3) should non-zero
//2. except (0, 0), (0, 3), (1, 1), (1, 2), (2, 1), (2, 2), (3, 0), (3, 3) should zero

//(0, 0) = 2
//(0, 3) = 1
//(1, 1) = 3
//(1, 2) = 1
//(2, 1) = 5
//(2, 2) = 2
//(3, 0) = 4
//(3, 3) = 2
//True -> all diagonal are  non-zero & non diagonal are  zero
