//1051. Height Checker
//a school is tryng to take an annual photo of all the students
//the students are asked to stand in a single file line in non-decreasing order by height
//let this ordering be represented by the integer array 'expected' where expected[i] is the expected height of the i_th student in line

//given an integer array heights representing the current order that the students are standing in
//each heights[i] is the height of the i_th student in line 0-indexed
//return the number of indices where heights[i] != expected[i]

//Approach:
//using sorting
var heightChecker = (heights) => {
    let count = 0;
    let sorted = heights.slice().sort((a, b) => a - b); //into shallow copy

    for (let i = 0; i < heights.length; i++) {
        //height checker
        if (sorted[i] !== heights[i]) count++;
    }

    return count;
}
heightChecker([1,1,4,2,1,3]); //3
//height = [1, 1, 4, 2, 1, 3]
//          ^
//sorted = [1, 1, 1, 2, 3, 4]
//          ^
//1 = 1 -> as expected

//height = [1, 1, 4, 2, 1, 3]
//             ^
//sorted = [1, 1, 1, 2, 3, 4]
//             ^
//1 = 1 -> as expected

//height = [1, 1, 4, 2, 1, 3]
//                ^
//sorted = [1, 1, 1, 2, 3, 4]
//                ^
//4 != 1 -> not expected
//count = 0 -> 1

//height = [1, 1, 4, 2, 1, 3]
//                   ^
//sorted = [1, 1, 1, 2, 3, 4]
//                   ^
//2 = 2 -> as expected
//count = 0 -> 1

//height = [1, 1, 4, 2, 1, 3]
//                      ^
//sorted = [1, 1, 1, 2, 3, 4]
//                      ^
//1 != 3 -> not expected
//count = 0 -> 1 -> 2

//height = [1, 1, 4, 2, 1, 3]
//                         ^
//sorted = [1, 1, 1, 2, 3, 4]
//                         ^
//3 != 4 -> not expected
//count = 0 -> 1 -> 2 -> 3

heightChecker([5,1,2,3,4]); //5
//height = [5, 1, 2, 3, 4]
//          ^
//sorted = [1, 2, 3, 4, 5]
//          ^
//5 != 1 -> not expected
//count = 0 -> 1

//height = [5, 1, 2, 3, 4]
//             ^
//sorted = [1, 2, 3, 4, 5]
//             ^
//1 != 2 -> not expected
//count = 0 -> 1 -> 2

//height = [5, 1, 2, 3, 4]
//                ^
//sorted = [1, 2, 3, 4, 5]
//                ^
//2 != 3 -> not expected
//count = 0 -> 1 -> 2 -> 3

//height = [5, 1, 2, 3, 4]
//                   ^
//sorted = [1, 2, 3, 4, 5]
//                   ^
//3 != 4 -> not expected
//count = 0 -> 1 -> 2 -> 3 -> 4

//height = [5, 1, 2, 3, 4]
//                      ^
//sorted = [1, 2, 3, 4, 5]
//                      ^
//4 != 5 -> not expected
//count = 0 -> 1 -> 2 -> 3 -> 4 -> 5

heightChecker([1,2,3,4,5]); //0
