//2500. Delete Greatest Value In Each Row
//given an m x n matrix grid consisting of positive integers:
//perform the following operation until grid becomes empty:
//delete the element with the greatest value from each row
//if multiple such elements exist, delete any of them
//add the max of deleted elements to the answer
//return the answer after performing the operations described above
var deleteRowGreatest = (grid) => {
    //sorting
    grid.forEach(row => row.sort((a, b) => a - b));
    
    let sum = 0;

    //shrinking until row is empty
    while (grid[0].length) {
        let rowMax = []; //to store greatest value of each row

        for (let row of grid) rowMax.push(row.pop()); //the greatest value will pop out

        sum += Math.max(...rowMax);
    }

    return sum;
}
deleteRowGreatest(grid = [[1,2,4],[3,3,1]]); //8
//  1  2  4
//  3  3  1

//sorting
//[1, 2, 4], [1, 3, 3] -> [1, 2], [1, 3] -> [1], [1]
//       ^          ^         ^       ^      ^    ^
//rowMax = [ 4, 3 || 2, 3 || 1, 1
//sum = 0 -> 4 -> 7 -> 8

deleteRowGreatest([[10]]); //10
