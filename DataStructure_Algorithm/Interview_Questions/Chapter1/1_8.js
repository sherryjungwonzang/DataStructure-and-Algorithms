//1.8 Zero Matrix
//if an element in an M x N matrix is 0
//its entire row and column are set to 0
var checkZeros = (matrix) => {
    var matrixHeight = matrix.length;
    var matrixWidth = matrix[0].length;
    var rowsToZeroify = {};
    var colsToZeroify = {};

    for (var i = 0; i < matrixHeight; i++) {
        for (var j = 0; j < matrixWidth; j++) {
            if (matrix[i][j] === 0) {
                rowsToZeroify[i] = true;
                colsToZeroify[j] = true;
            }
        }
    }
    return {
        rowsToZeroify: rowsToZeroify,
        colsToZeroify: colsToZeroify
    };
};

var printMatrix = (matrix) => {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
};

var zeroifyCol = (matrix, col) => {
    for (var i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
};


var zeroifyCols = (matrix, zeroScan) => {
    for (var col in zeroScan.colsToZeroify) {
        zeroifyCol(matrix, Number(col));
    }
};

var zeroifyRow = (matrix, row) => {
    for (var i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
    }
};

var zeroifyRows = (matrix, zeroScan) => {
    for (var row in zeroScan.rowsToZeroify) {
        zeroifyRow(matrix, Number(row));
    }
};


//main function
var zeroMatrix = (matrix) => {
    if(matrix.length === 0) return;

    var zeroScan = checkZeros(matrix);

    zeroifyCols(matrix, zeroScan);
    zeroifyRows(matrix, zeroScan);
};

//TEST
var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];

console.log('before:');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after:');
printMatrix(testMatrix);
