//1636. Sort Array By Increasing Frequency
//given an array of integers 'nums'
//sort the array in increasing order based on the frequency of the values
//if multiple values have the same frequency, sort them in decreasing order
//return the sorted array

//Approach:
//using map and sorting
var increasingFreqSort = (nums) => {
    let res = [];
    let map = new Map();

    //frequency checking
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    };

    //sorting
    map = new Map([...map].sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));

    //rearranging the res array with increasing frequency
    for (let [key, val] of map) {
        while (val > 0) {
            res.push(key);

            val--; //until it is 0
        }
    }

    return res;
}
increasingFreqSort([1,1,2,2,2,3]); //[3,1,1,2,2,2]
//map = { 
//    1: 2,              3: 1,
//    2: 3, -> sorting:  1: 2,
//    3: 1,              2: 3
//}

//key: val
// 3:   1 -> 0
// 1:   2 -> 1 -> 0
// 2:   3 -> 2 -> 1 -> 0

//starting with '3'
//res = [ 3, ]
//next to '1'       
//res = [ 3, 1, ]   || res = [ 3, 1, 1, ] 
//next to '2'       
//res = [ 3, 1, 1, 2, ]    || res = [ 3, 1, 1, 2, 2, ]   || res = [ 3, 1, 1, 2, 2, 2 ] 

//res = [ 3, 1, 1, 2, 2, 2 ] 

increasingFreqSort([2,3,1,3,2]); //[1,3,3,2,2]
//map = { 
//    2: 2,              1: 1,
//    3: 2, -> sorting:  3: 2,
//    1: 1,              2: 2
//}

//key: val
// 1:   1 -> 0
// 3:   2 -> 1 -> 0
// 2:   2 -> 1 -> 0

//starting with '1'
//res = [ 1, ]
//next to '3'       
//res = [ 1, 3, ]   || res = [ 1, 3, 3, ] 
//next to '2'       
//res = [ 1, 3, 3, 2, ]     || res = [ 1, 3, 3, 2, 2 ] 

//res =  [ 1, 3, 3, 2, 2 ] 

increasingFreqSort([-1,1,-6,4,5,-6,1,4,1]); //[5,-1,4,4,-6,-6,1,1,1]
