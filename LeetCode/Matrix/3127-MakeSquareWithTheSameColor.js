//3127. Make Square With The Same Color
//given a 2D matrix 'grid' of size 3 x 3 consisting only of characters 'B' and 'W'
//character 'W' represents the white color, and 'B' represents the black color
//task is to change the color of at most one cell so that the matrix has a 2 x 2 square where all cells are of the same color
//return true if it is possible to create a 2 x 2 square of the same color, otherwise, return false

//Approach:
//using map
var sameColorSquare = (grid) => {
    //checking with 2 x 2
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let map = new Map();

            //checking all cells
            map.set(grid[i][j], (map.get(grid[i][j]) || 0) + 1); //standard cell
            map.set(grid[i][j + 1], (map.get(grid[i][j + 1]) || 0) + 1); //right cell
            map.set(grid[i + 1][j], (map.get(grid[i + 1][j]) || 0) + 1); //below cell
            map.set(grid[i + 1][j + 1], (map.get(grid[i + 1][j + 1]) || 0) + 1); //cross cell

            //both B and W = 2 -> not possible to make square
            if (map.get("B") !== 2 && map.get("W") !== 2) return true;
        }
    }

    return false;
}
sameColorSquare([["B","W","B"],["B","W","W"],["B","W","B"]]); //true - It can be done by changing the color of the grid[0][2]
//  B W B
//  B W W
//  B W B

//i = 0, j = 0
//-> [0][0]: map = { B: 1, W: 0 }
//-> [0][1]: map = { B: 1, W: 1 }
//-> [1][0]: map = { B: 2, W: 1 }
//-> [1][1]: map = { B: 2, W: 2 }
//false - not possible to make square

//i = 0, j = 1
//-> [0][1]: map = { B: 0, W: 1 }
//-> [0][2]: map = { B: 1, W: 1 }
//-> [1][1]: map = { B: 1, W: 2 }
//-> [1][2]: map = { B: 1, W: 3 }
//true - possible to make square

sameColorSquare([["B","W","B"],["W","B","W"],["B","W","B"]]); //false
//  B W B
//  W B W
//  B W B

//i = 0, j = 0
//-> [0][0]: map = { B: 1, W: 0 }
//-> [0][1]: map = { B: 1, W: 1 }
//-> [1][0]: map = { B: 1, W: 2 }
//-> [1][1]: map = { B: 2, W: 2 }
//false - not possible to make square

//i = 0, j = 1
//-> [0][1]: map = { B: 0, W: 1 }
//-> [0][2]: map = { B: 1, W: 1 }
//-> [1][1]: map = { B: 2, W: 1 }
//-> [1][2]: map = { B: 2, W: 2 }
//false - not possible to make square

//i = 1, j = 0
//-> [1][0]: map = { B: 0, W: 1 }
//-> [1][1]: map = { B: 1, W: 1 }
//-> [2][0]: map = { B: 2, W: 1 }
//-> [2][1]: map = { B: 2, W: 2 }
//false - not possible to make square

//i = 1, j = 1
//-> [1][1]: map = { B: 1, W: 0 }
//-> [1][2]: map = { B: 1, W: 1 }
//-> [2][1]: map = { B: 1, W: 2 }
//-> [2][2]: map = { B: 2, W: 2 }
//false - not possible to make square

sameColorSquare([["B","W","B"],["B","W","W"],["B","W","W"]]); //true - already contains 2 x 2 square with the same color
