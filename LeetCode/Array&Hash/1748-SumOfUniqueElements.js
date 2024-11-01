//1748. Sum Of Unique Elements
//given an integer array nums
//the unique elements of an array are the elements that appear exactly once in the array
//return the sum of all the unique elements of nums

//Approach:
//using hash map 
var sumUniqueElements = (nums) => {
    let map = {};
    let sum = 0;

    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;

        if (map[num] === 1) sum += num;
        else if (map[num] === 2) sum -= num;
    }

    return sum;
}
sumUniqueElements([1,2,3,2]); //4 - [1, 3]
//[1, 2, 3, 2]
// ^
//map = { 
//      1: 1,
//}
//sum = 0 -> 1

//[1, 2, 3, 2]
//    ^
//map = { 
//      1: 1,
//      2: 1,
//}
//sum = 0 -> 1 -> 3

//[1, 2, 3, 2]
//       ^
//map = { 
//      1: 1,
//      2: 1,
//      3: 1,
//}
//sum = 0 -> 1 -> 3 -> 6

//[1, 2, 3, 2]
//          ^
//map = { 
//      1: 1,
//      2: 1 -> 2
//      3: 1,
//}
//sum = 0 -> 1 -> 3 -> 6 -> 4

sumUniqueElements([1,1,1,1,1]); //0 - no unique elements
//[1, 1, 1, 1, 1]
// ^
//map = { 
//      1: 1,
//}
//sum = 0 -> 1
 
//[1, 1, 1, 1, 1]
//    ^
//map = { 
//      1: 1 -> 2
//}
//sum = 0 -> 1 -> 0

//[1, 1, 1, 1, 1]
//       ^
//map = { 
//      1: 1 -> 2 -> 3
//}
//sum = 0 -> 1 -> 0

sumUniqueElements([1,2,3,4,5]); //15 - [1,2,3,4,5]
