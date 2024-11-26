//2784. Check If Array Is Good
//given an integer array nums
//we consider an array good if it is a permutation of an array base[n]
//base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n)
//for example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3]
//return true if the given array is good, otherwise return false
//note: A permutation of integers represents an arrangement of these numbers
var isArrayGood = (nums) => {
    let max = Math.max(...nums);
    let freq = Array(max + 1).fill(0);

    //checking frequency
    for (let num of nums) freq[num] += 1;

    //base case - not good array
    if (freq[max] !== 2) return false;

    for (let i = 1; i < max; i++) {
        //not good array
        if (freq[i] !== 1) return false;
    }

    return true;
}
//TC: O(n)
//SC: O(n)
isArrayGood([2, 1, 3]); //false - base[3] = [1, 2, 3, 3]

isArrayGood([1, 3, 3, 2]); //true - base[3] = [1, 2, 3, 3]
//[1, 3, 3, 2]
//    ^         -> max = 3

//checking frequency
//[1, 3, 3, 2]              [1, 3, 3, 2]        [1, 3, 3, 2]        [1, 3, 3, 2]
// ^                            ^                      ^                      ^
//freq = [ 0, 1, 0, 0 ]     [ 0, 1, 0, 1 ]      [ 0, 1, 0, 2 ]      [ 0, 1, 1, 2 ]  

//freq = [ 0, 1, 1, 2 ]
//            ^  ^
//          good good

//true

isArrayGood([1, 1]); //true

isArrayGood([3, 4, 4, 1, 2, 1]); //false - base[4] = [1, 2, 3, 4, 4]
//[3, 4, 4, 1, 2, 1]
//    ^                 -> max = 4

//checking frequency
//[3, 4, 4, 1, 2, 1]            [3, 4, 4, 1, 2, 1]      [3, 4, 4, 1, 2, 1]      [3, 4, 4, 1, 2, 1]      [3, 4, 4, 1, 2, 1]
//    ^                                ^                          ^                          ^                          ^
//freq = [ 0, 0, 0, 0, 1 ]      [ 0, 0, 0, 0, 2 ]       [ 0, 1, 0, 0, 2 ]       [ 0, 1, 1, 0, 2 ]       [0, 2, 1, 0, 2 ]  

//freq = [0, 2, 1, 0, 2 ] 
//           ^
//false
