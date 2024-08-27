//1007. Minimum Domino Rotations For Equal Row
//in a row of dominoes, tops[i] and bottoms[i] represents the top and bottom halves of i_th domino
//a domino is a tile with two numbers from 1 to 6 - one on each half of the tile

//we may rotate the i_th domino, so that tops[i] and bottoms[i] swap values
//return the min number of rotations so that all the values in tops are the same, or all the values in bottoms are the same
//if it cannot be done, return -1
var minDominoRotations = (tops, bottoms) => {
    let topArr = new Array(7).fill(0);
    let bottomArr = new Array(7).fill(0);
    let same = new Array(7).fill(0);

    //collecting the num of elements
    for (let i = 0; i < tops.length; i++) {
        topArr[tops[i]]++;
        bottomArr[bottoms[i]]++;

        //same elements
        if (tops[i] ===bottoms[i]) same[tops[i]]++;
    }

    for (let i = 1; i <= 6; i++) {
        if (topArr[i] + bottomArr[i] - same[i] === tops.length) return Math.min(topArr[i] - same[i], bottomArr[i] - same[i]);
    }

    return -1;
}
minDominoRotations(tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]); //2
//topArr =    [0, 1, 4, 0, 1, 0, 0]
//bottomArr = [0, 0, 3, 1, 0, 1, 1]
//same =      [0, 0, 1, 0, 0, 0, 0]

//i = 1 -> topArr[1] + bottomArr[1] - same[1] = 1 + 0 - 0 = 1 != 6
//i = 2 -> topArr[2] + bottomArr[2] - same[2] = 4 + 3 - 1 = 6 = 6
//min (4 - 1, 3 - 1) = 2
//i = 3 -> topArr[3] + bottomArr[3] - same[3] = 0 + 1 - 0 = 1 != 6
//i = 4 -> topArr[4] + bottomArr[4] - same[4] = 1 + 0 - 0 = 1 != 6
//i = 5 -> topArr[5] + bottomArr[5] - same[5] = 0 + 1 - 0 = 1 != 6
//i = 6 -> topArr[6] + bottomArr[6] - same[6] = 0 + 1 - 0 = 1 != 6

minDominoRotations(tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]); //-1
