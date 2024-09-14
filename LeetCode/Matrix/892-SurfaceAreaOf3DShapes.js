//892. Surface Area Of 3D Shapes
//given an n x n grid where you have placed some 1 x 1 x 1 cubes
//each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j)
//after placing these cubes, you have decided to glue any direcly adjacent cubes to each other, forming several irregular 3D shapes
//return the total surface area of the resulting shapes
//the bottom face of each shape counts toward its surface area
var surfaceArea3D = (grid) => {
    let n = grid.length;
    let unitCube = 1;
    let lateralFaces = (4 * unitCube); //left, right, front, back
    let baseFaces = (2 * unitCube); //top, bottom
    let res = 0;

    //traversing
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                //intial value
                res += (grid[i][j] * lateralFaces) + baseFaces;

                //vertical overlappting
                if (i > 0) res -= Math.min(grid[i][j], grid[i - 1][j]) * (2 * unitCube); //between curr and above cell from surface

                //horizontal overlappting
                if (j > 0) res -= Math.min(grid[i][j], grid[i][j - 1]) * (2 * unitCube); //between curr and left cell from surface
            }
        }
    }

    return res;
}
//TC: O(n^2)
//SC: O(1)
surfaceArea3D(grid = [[1,2],[3,4]]); //34
//  1  2
//  3  4 

//i = 0, j = 0
//res = (1 * 4) + 2 = 6
//no overlapping
//res = 0  -> 6

//i = 0, j = 1
//res = (2 * 4) + 2 = 10
//res = 0  -> 6 -> 16
//horizontal overlapping -> min(2, 1) * 2 = 2
//res = 0  -> 6 -> 16 -> 14

//i = 1, j = 0
//res = (3 * 4) + 2 = 14
//res = 0  -> 6 -> 16 -> 14 -> 28
//vertical overlapping -> min(3, 1) * 2 = 2
//res = 0  -> 6 -> 16 -> 14 -> 28 -> 26

//i = 1, j = 1
//res = (4 * 4) + 2 = 18
//res = 0  -> 6 -> 16 -> 14 -> 28 -> 26 -> 44
//vertical overlapping -> min(4, 2) * 2 = 2
//horizontal overlapping -> min(4, 3) * 2 = 6
//res = 0  -> 6 -> 16 -> 14 -> 28 -> 26 -> 44 -> 40 -> 34

surfaceArea3D(grid = [[2,2,2],[2,1,2],[2,2,2]]); 46
//  2  2  2
//  2  1  2
//  2  2  2

//i = 0, j = 0
//res = (2 * 4) + 2 = 10
//no overlapping
//res = 0  -> 10

//i = 0, j = 1
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20
//horizontal overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16

//i = 0, j = 2
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26
//horizontal overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22

//i = 1, j = 0
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32
//vertical overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28

//i = 1, j = 1
//res = (1 * 4) + 2 = 6
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34
//vertical overlapping -> min(1, 2) * 2 = 2
//horizontal overlapping -> min(1, 2) * 2 = 2
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30

//i = 1, j = 2
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40
//vertical overlapping -> min(2, 2) * 2 = 4
//horizontal overlapping -> min(2, 1) * 2 = 2
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34

//i = 2, j = 0
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44
//vertical overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44 -> 40

//i = 2, j = 1
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44 -> 40 -> 50
//vertical overlapping -> min(2, 1) * 2 = 2
//horizontal overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44 -> 40 -> 50 -> 48 -> 44

//i = 2, j = 2
//res = (2 * 4) + 2 = 10
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44 -> 40 -> 50 -> 48 -> 44 -> 54
//vertical overlapping -> min(2, 2) * 2 = 4
//horizontal overlapping -> min(2, 2) * 2 = 4
//res = 0  -> 10 -> 20 -> 16 -> 26 -> 22 -> 32 -> 28 -> 34 -> 32 -> 30 -> 40 -> 36 -> 34 -> 44 -> 40 -> 50 -> 48 -> 44 -> 54 -> 50 -> 46

surfaceArea3D(grid = [[1,1,1],[1,0,1],[1,1,1]]); //32
//  1  1  1
//  1  0  1
//  1  1  1





