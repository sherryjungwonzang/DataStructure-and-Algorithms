//1460. Make Two Arrays Equal By Reversing Subarrays
//given two integer arrays of equal length 'target' and 'arr'
//in one step, you can select any non-empty subarray of arr and reverse it
//are allowed to make any number of steps
//return true if you can make arr equal to target or false otherwise

//Approach:
//using sorting
var afterReversingCanBeEqual = (target, arr) => {
    //sorting
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    //converting to string for comparison
    return target.toString() === arr.toString();
}
//TC: O(n * logn)
//SC: O(1)
afterReversingCanBeEqual(target = [1,2,3,4], arr = [2,4,1,3]); //true
//sorting: target = [1,2,3,4], arr = [1,2,3,4]
//toString: target = 1,2,3,4 !== arr =  1,2,3,4
//true

afterReversingCanBeEqual(target = [3,7,9], arr = [3,7,11]); //false
//sorting: target = [3,7,9], arr = [3,7,11]
//toString: target = 3,7,9 !== arr =  3,7,11
//false

afterReversingCanBeEqual(target = [7], arr = [7]); //true
