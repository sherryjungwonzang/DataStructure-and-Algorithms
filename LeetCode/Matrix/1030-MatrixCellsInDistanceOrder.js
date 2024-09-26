//1030. Matrix Cells In Distance Order
//given four integers row, cols, rCenter and cCenter
//there is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter)
//return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter)
//from the smallest distance to the largest distance
//may return the answer in any order that satisfies this condition
//the distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 + c2|

//Approach:
//using counting sort
var matrixCellsDistanceOrder = (rows, cols, rCenter, cCenter) => {
    let res = [];
    let records = []; //temporary distance storage

    //checking distance
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let distance = Math.abs(i - rCenter) + Math.abs(j - cCenter);

            //filling arr
            if (records[distance] === undefined) records[distance] = [];

            records[distance].push([i, j]);
        }
    }

    for (let record of records) res.push(...record);

    return res;
}
matrixCellsDistanceOrder(rows = 1, cols = 2, rCenter = 0, cCenter = 0); //[[0,0],[0,1]] - The distances from (0, 0) to other cells are: [0,1]
//i = 0, j = 0
//distance = |0 - 0| + |0 - 0| = 0
//records = [ [[0, 0]]
//               0

//i = 0, j = 1
//distance = |0 - 0| + |1 - 0| = 1
//records = [ [[0, 0]],  [[0, 1]] ]
//               0           1
//res = [[0, 0], [0, 1]]

matrixCellsDistanceOrder(rows = 2, cols = 2, rCenter = 0, cCenter = 1); //[[0,1],[0,0],[1,1],[1,0]] - The distances from (0, 1) to other cells are: [0,1,1,2]
//i = 0, j = 0
//distance = |0 - 0| + |0 - 1| = 1
//records = [ [[0, 0]] ]
//                1 

//i = 0, j = 1
//distance = |0 - 0| + |1 - 1| = 0
//records = [ [[0, 1]], [[0, 0]] ]
//                0        1  

//i = 1, j = 0
//distance = |1 - 0| + |0 - 1| = 2
//records = [ [[0, 1]], [[0, 0]], [[1, 0]] ]
//                0        1          2

//i = 1, j = 1
//distance = |1 - 0| + |1 - 1| = 1
//records = [ [[0, 1]], [[0, 0], [1, 1]], [[1, 0]] ]
//                0            1              2
//res = [[0, 1], [0, 0], [1, 1], [1, 0]]

matrixCellsDistanceOrder(rows = 2, cols = 3, rCenter = 1, cCenter = 2); //[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]] - The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
