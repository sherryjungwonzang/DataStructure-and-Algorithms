//883. Projection Area Of 3D Shapes
//given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes
//each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j)
//we view the projection of these cubes onto the xy, yz, zx planes
//a projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane
//we are viewing the "shadow" when looking at the cubes from the top, front and the side
//return the total area of all three projections
var projectionArea = (grid) => {
    let n = grid.length;
    let xy = 0; //top projection
    let zx = 0; //front projection
    let yz = 0; //side projection
    let area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //top projection
            if (grid[i][j] > 0) xy++;

            //front projection
            if (grid[i][j] > zx) zx = grid[i][j];

            //side projection
            if (grid[j][i] > yz) yz = grid[j][i]; 
        }

        area += xy + zx + yz;

        //resetting for next grid
        xy = 0;
        zx = 0;
        yz = 0;
    }

    return area;
}
projectionArea(grid = [2]); //5
//i = 0, j = 0
//2 > 0 -> xy++
//2 > zx -> zx = 2
//2 > yz -> yz = 2

//xy = 0 -> 1
//zx = 0 -> 2
//yz = 0 -> 2
//area = 1 + 2 + 2 = 5

projectionArea(grid = [[1,2],[3,4]]); //17
//i = 0, j = 0           i = 0, j = 1 
//1 > 0 -> xy++          2 > 0 -> xy++ 
//1 > zx -> zx = 1       2 > zx -> zx = 2
//1 > yz -> yz = 1       [1][0] = 3 > yz -> yz = 3

//xy = 0 -> 1 -> 2
//zx = 0 -> 1 -> 2
//yz = 0 -> 1 -> 3
//area = 2 + 2 + 3 = 7

//i = 1, j = 0                     i = 1, j = 1 
//3 > 0 -> xy++                    4 > 0 -> xy++ 
//3 > zx -> zx = 3                 4 > zx -> zx = 4
//[0][1] = 2 > yz -> yz = 2       [1][1] = 4 > yz -> yz = 4

//xy = 0 -> 1 -> 2
//zx = 0 -> 3 -> 4
//yz = 0 -> 2 -> 4
//area = 2 + 4 + 4 = 10

//area = 7 + 10 = 17

projectionArea(grid = [[1,0],[0,2]]); //8
