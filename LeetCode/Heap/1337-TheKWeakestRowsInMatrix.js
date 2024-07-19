//1337. The K Weakest Rows In Matrix
//given an m x n binary matrix 'mat' of 1's - representing soldiers and 0's - representing civiians
//the soldiers are positioned in front of the civiians
//that is, all the 1's will appear to the left of all the 0's in each rot

//a row i is weaker than a row j if one of the following is true:
//the number of soldiers in row i is less than the number of soldiers in row j
//both rows have the same number of soldiers and i < j
//return the indices of the k weakest rows in the matrix ordered from weakest to strongest

//Approach:
//using min heap
var kWeakestRows = (mat, k) => {
    //set - [count, rowIndex]
    let set = new Set();

    //iterating
    for (row = 0; row < mat.length; row++) {
        let count = 0;

        //soldiers count - 1's
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] === 1) count++; //adding 1
            else break;
        }

        //min heap
        set.add([count, row]);
    }

    let sortedRows = Array.from(set);
    sortedRows.sort((a, b) => a[0] - b[0]);

    let weakestRow = [];
    for (let i = 0; i < k; i++) {
        weakestRow.push(sortedRows[i][1]);
    }

    return weakestRow;
}
//TC: O(n * m + k * logN)
//SC; O(n + k)
kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3); //[2,0,3]
//The number of soldiers in each row is: 
//- Row 0: 2 
//- Row 1: 4 
//- Row 2: 1 
//- Row 3: 2 
//- Row 4: 5 
//The rows ordered from weakest to strongest are [2,0,3,1,4].

kWeakestRows([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], 2); //[0, 2]
//The number of soldiers in each row is: 
//- Row 0: 1 
//- Row 1: 4 
//- Row 2: 1 
//- Row 3: 1 
//The rows ordered from weakest to strongest are [0,2,3,1]
