//961. N-Repeated Element In Size 2N Array
//given an integer array nums with the following properties:
//nums.length == 2 * n
//nums contains n + 1 unique elements
//exactly one element of nums is repeated n times
//return the element that is repeated n times

//Approach:
//using set
var nRepeatedElements = (nums) => {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return num;

        set.add(num);
    }
}
nRepeatedElements([1,2,3,3]); //3
//[1, 2, 3, 3]
// ^
//set = [ 1, ]

//[1, 2, 3, 3]
//    ^
//set = [ 1, 2, ]

//[1, 2, 3, 3]
//       ^
//set = [ 1, 2, 3, ]

//[1, 2, 3, 3]
//          ^
//set = [ 1, 2, 3 ] -> already in set
//3

nRepeatedElements([2,1,2,5,3,2]); //2
//[2, 1, 2, 5, 3, 2]
// ^
//set = [ 2, ]

//[2, 1, 2, 5, 3, 2]
//    ^
//set = [ 2, 1, ]

//[2, 1, 2, 5, 3, 2]
//       ^
//set = [ 2, 1, ] -> already in set
//2

nRepeatedElements([5,1,5,2,5,3,5,4]); //5

