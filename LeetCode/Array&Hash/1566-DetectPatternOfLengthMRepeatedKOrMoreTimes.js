//1566. Detect Pattern Of Length M Repeated K Or More Times
//given an array of positive integers arr, find a pattern of length m that is repeated k or more times
//a pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping
//a pattern is defined by its length and the number of repetitions
//return true if there exists a pattern of length m that is repeated k or more times
//otherwise return false
var detectPattern = (arr, m, k) => {
    let count = 0; //to count num of pattern

    for (let i = 0, j = m; i < arr.length - m; i++, j++) {
        //pattern
        if (arr[i] === arr[j]) count++;
        else count = 0;

        //k or more time
        if (count === m * (k - 1)) return true;
    }

    return false;
}
detectPattern(arr = [1,2,4,4,4,4], m = 1, k = 3); //true
//[1, 2, 4, 4, 4, 4]
// i  j
//i != j -> no pattern

//[1, 2, 4, 4, 4, 4]
//    i  j
//i != j -> no pattern

//[1, 2, 4, 4, 4, 4]
//       i  j
//i = j -> pattern
//count = 0 -> 1 !== checkng with 1 * (3 - 1) = 2

//[1, 2, 4, 4, 4, 4]
//          i  j
//i = j -> pattern
//count = 0 -> 1 -> 2 === checkng with 1 * (3 - 1) = 2
//true

detectPattern(arr = [1,2,1,2,1,1,1,3], m = 2, k = 2); //true

detectPattern(arr = [1,2,1,2,1,3], m = 2, k = 3); //false
//[1, 2, 1, 2, 1, 3]
// i     j
//i = j -> pattern
//count = 0 -> 1 !== checkng with 2 * (3 - 1) = 4

//[1, 2, 1, 2, 1, 3]
//    i     j
//i = j -> pattern
//count = 0 -> 1 -> 2 !== checkng with 2 * (3 - 1) = 4

//[1, 2, 1, 2, 1, 3]
//       i     j
//i = j -> pattern
//count = 0 -> 1 -> 2 -> 3 !== checkng with 2 * (3 - 1) = 4

//[1, 2, 1, 2, 1, 3]
//          i     j
//i != j -> pattern
//count = 0 -> 1 -> 2 -> 3 -> 3 !== checkng with 2 * (3 - 1) = 4
//false
