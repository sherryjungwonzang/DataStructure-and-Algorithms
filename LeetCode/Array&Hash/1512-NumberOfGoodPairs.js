//1512. Number Of Good Pairs
//given an array of integers nums
//return the num of good pairs
//a pair (i, j) is called good if nums[i] == nums[j] and i < j

//Approach:
//using hash table
var goodPairs = (nums) => {
    let frequency = {}; //for frequency
    let res = 0;

    //traversing
    for (let num of nums) {
        if (num in frequency) {
            res += frequency[num];
            
            frequency[num]++;
        } else { //setting frequency
            frequency[num] = 1;
        }
    }

    return res;
}
//TC: O(n)
//SC: O(n)
goodPairs(nums = [1,2,3,1,1,3]); //4 - (0,3), (0,4), (3,4), (2,5)
//[1, 2, 3, 1, 1, 3]
// ^
//frequency = {
//  1: 1
//}
//res = 0

//[1, 2, 3, 1, 1, 3]
//    ^
//frequency = {
//  1: 1
//  2: 1
//}
//res = 0

//[1, 2, 3, 1, 1, 3]
//       ^
//frequency = {
//  1: 1
//  2: 1
//  3: 1
//}
//res = 0

//[1, 2, 3, 1, 1, 3]
//          ^
//frequency = {
//res = 0 -> 1
//  1: 1 -> 2
//  2: 1
//  3: 1
//}

//[1, 2, 3, 1, 1, 3]
//             ^
//frequency = {
//res = 0 -> 1 -> 3
//  1: 1 -> 2 -> 3
//  2: 1
//  3: 1
//}

//[1, 2, 3, 1, 1, 3]
//                ^
//frequency = {
//res = 0 -> 1 -> 3 -> 4
//  1: 1 -> 2 -> 3
//  2: 1
//  3: 1 -> 2
//}

goodPairs(nums = [1,1,1,1]); //6 - each pair in the array
//[1, 1, 1, 1]
// ^
//frequency = {
//  1: 1
//}
//res = 0

//[1, 1, 1, 1]
//    ^
//res = 0 -> 1
//frequency = {
//  1: 1 -> 2
//}

//[1, 1, 1, 1]
//       ^
//res = 0 -> 1 -> 3
//frequency = {
//  1: 1 -> 2 -> 3
//}

//[1, 1, 1, 1]
//          ^
//res = 0 -> 1 -> 3 -> 6
//frequency = {
//  1: 1 -> 2 -> 3 -> 4
//}

goodPairs(nums = [1,2,3]); //0
