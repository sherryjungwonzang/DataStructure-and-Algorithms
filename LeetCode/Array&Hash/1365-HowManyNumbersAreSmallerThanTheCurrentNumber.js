//1365. How Many Numbers Are Smaller Than The Current Number?
//given the array nums
//for each nums[i] find out how many numbers in the array are smaller than it
//that is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]
//return the answer in an array

//Approach:
//using sorting
var countSmallerNums = (nums) => {
    //sorting - ascending
    let sorted = nums.slice().sort((a, b) => b - a);
    let map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));

    return nums.map(num => map.get(num));
}
countSmallerNums([8, 1, 2, 2, 3]); //[4, 0, 1, 1, 3]
//sorted = [8, 3, 2, 2, 1]
//          ^
//nums.length - index - 1 = 5 - 0 - 1 = 4
//map = {
//  8: 4
//}

//sorted = [8, 3, 2, 2, 1]
//             ^
//nums.length - index - 1 = 5 - 1 - 1 = 3
//map = {
//  8: 4
//  3: 3
//}

//sorted = [8, 3, 2, 2, 1]
//                ^
//nums.length - index - 1 = 5 - 2 - 1 = 2
//map = {
//  8: 4
//  3: 3
//  2: 2
//}

//sorted = [8, 3, 2, 2, 1]
//                   ^
//nums.length - index - 1 = 5 - 3 - 1 = 1
//map = {
//  8: 4
//  3: 3
//  2: 2 -> 1
//}

//sorted = [8, 3, 2, 2, 1]
//                      ^
//nums.length - index - 1 = 5 - 4 - 1 = 0
//map = {
//  8: 4
//  3: 3
//  2: 2 -> 1
//  1: 0
//}

//-> [4, 0, 1, 1, 3]

countSmallerNums([6, 5, 4, 8]); //[2, 1, 0, 3]
//sorted: [8, 6, 5, 4]
//         ^
//nums.length - index - 1 = 4 - 0 - 1 = 3
//map = {
//  8: 3
//}

//sorted: [8, 6, 5, 4]
//            ^
//nums.length - index - 1 = 4 - 1 - 1 = 2
//map = {
//  8: 3
//  6: 2
//}

//sorted: [8, 6, 5, 4]
//               ^
//nums.length - index - 1 = 4 - 2 - 1 = 1
//map = {
//  8: 3
//  6: 2
//  5: 1
//}

//sorted: [8, 6, 5, 4]
//                  ^
//nums.length - index - 1 = 4 - 3 - 1 = 0
//map = {
//  8: 3
//  6: 2
//  5: 1
//  4: 0
//}

//-> [2, 1, 0, 3]

countSmallerNums([7,7,7,7]); //[0,0,0,0]
