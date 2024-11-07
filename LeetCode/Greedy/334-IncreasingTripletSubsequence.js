//334. Increasing Triplet Subsequence
//given an integer array nums
//return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]
//if no such indices exists, return false

//Approach:
//using Greedy algorithm
var increasingTriplet = (nums) => {
    let first = Infinity;
    let second = Infinity;

    for (let third of nums) {
        //to set first element
        if (third < first) first = third;

        //to set the second element
        else if (third < second && third > first) second = third;

        //increasing triplet subsequence
        else if (third > second && third > first) return true;
    }

    return false;
}
//TC: O(n)
//SC: O(1)
increasingTriplet(nums = [2,1,5,0,4,6]); //true - 0, 4, 6
//[2, 1, 5, 0, 4, 6]
// ^
//2 < first -> reset first to third
//first = Infi -> 2
//second = Infi
//third = 2

//[2, 1, 5, 0, 4, 6]
//    ^
//1 < first -> reset first to third
//first = Infi -> 2 -> 1
//second = Infi
//third = 1

//[2, 1, 5, 0, 4, 6]
//       ^
//5 > first || 5 < second & 5 > first -> reset second to 5
//first = Infi -> 2 -> 1
//second = Infi -> 5
//third = 5

//[2, 1, 5, 0, 4, 6]
//          ^
//0 < first -> reset first to third
//first = Infi -> 2 -> 1 -> 0
//second = Infi -> 5
//third = 0

//[2, 1, 5, 0, 4, 6]
//             ^
//4 > first || 4 < second & 4 > first -> reset second to 4
//first = Infi -> 2 -> 1 -> 0
//second = Infi -> 5 -> 4
//third = 4

//[2, 1, 5, 0, 4, 6]
//                ^
//6 > first || 6 > second -> increasing triplet
//first = Infi -> 2 -> 1 -> 0
//second = Infi -> 5 -> 4
//third = 6

//[2, 1, 5, 0, 4, 6]
//        1st 2nd 3rd
//true

increasingTriplet(nums = [5,4,3,2,1]); //false
//[5, 4, 3, 2, 1]
// ^
//5 < first -> reset first to third
//first = Infi -> 5
//second = Infi
//third = 5

//[5, 4, 3, 2, 1]
//    ^
//4 < first -> reset first to third
//first = Infi -> 5 -> 4
//second = Infi
//third = 4

//[5, 4, 3, 2, 1]
//       ^
//3 < first -> reset first to third
//first = Infi -> 5 -> 4 -> 3
//second = Infi
//third = 3

//[5, 4, 3, 2, 1]
//          ^
//2 < first -> reset first to third
//first = Infi -> 5 -> 4 -> 3 -> 2
//second = Infi
//third = 2

//[5, 4, 3, 2, 1]
//             ^
//1 < first -> reset first to third
//first = Infi -> 5 -> 4 -> 3 -> 2 -> 1
//second = Infi
//third = 1

//false

increasingTriplet(nums = [1,2,3,4,5]); //true
