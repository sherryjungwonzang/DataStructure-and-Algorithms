//179. Largest Number
//given a list of non-negative integers nums
//arrange them such that they form the largest number and return it
//since the result may be very large, so you need to return a string instead of an integer

//Approach:
//using Greedy algorithm
var largestNum = (nums) => {
    //sorting
    nums.sort((a, b) => {
        let numA = a.toString(); //bigger one
        let numB = b.toString(); //smaller one

        //a + b > b + a -> a comes before b
        //a + b < b + a -> b comes before a        
        return parseInt(numA + numB) > parseInt(numB + numA) ? -1 : 1;
    });

    //edge case
    if (nums[0] === 0) return '0';

    return nums.join('');
}
//TC: O(n logn)
//SC: O(n)
largestNum([3,30,34,5,9]); //"9534330"
//[3, 30, 34, 5, 9]
// ^   ^
//starting from 3 & 30 
//a = 30
//b = 3
//a + b = 30 + 3 = 303
//b + a = 3 + 30 = 330
//303 < 330 -> b comes before a
//[3, 30, 34, 5, 9] -> [3, 30, 34, 5, 9]

//[3, 30, 34, 5, 9]
//     ^   ^
//a = 34
//b = 30
//a + b = 34 + 30 = 3430
//b + a = 30 + 34 = 3034
//3430 > 3034 -> a comes before b
//[3, 30, 34, 5, 9] -> [3, 34, 30, 5, 9]

//[3, 34, 30, 5, 9]
// ^   ^
//a = 34
//b = 3
//a + b = 34 + 3 = 343
//b + a = 3 + 34 = 334
//343 > 334 -> a comes before b
//[3, 34, 30, 5, 9]-> [34, 3, 30, 5, 9]

//[34, 3, 30, 5, 9]
//     ^      ^
//a = 5
//b = 3
//a + b = 5 + 3 = 53
//b + a = 3 + 5 = 35
//53 > 35 -> a comes before b
//[34, 3, 30, 5, 9] -> [34, 5, 3, 30, 9]

//[34, 5, 3, 30, 9]
// ^   ^
//a = 34
//b = 5
//a + b = 34 + 5 = 345
//b + a = 5 + 34 = 534
//345 < 534 -> b comes before a
//[34, 5, 3, 30, 9] -> [5, 34, 3, 30, 9]

//[5, 34, 3, 30, 9]
//        ^      ^
//a = 9
//b = 3
//a + b = 9 + 3 = 93
//b + a = 3 + 9 = 39
//93 > 39 -> a comes before b
//[5, 34, 3, 30, 9] -> [5, 34, 9, 3, 30]

//[5, 34, 9, 3, 30]
//    ^   ^
//a = 34
//b = 9
//a + b = 34 + 9 = 349
//b + a = 9 + 34 = 934
//349 < 934 -> b comes before a
//[5, 34, 9, 3, 30] -> [5, 9, 34, 3, 30]

//[5, 9, 34, 3, 30]
// ^  ^
//a = 9
//b = 5
//a + b = 9 + 5 = 95
//b + a = 5 + 9 = 59
//95 > 59 -> a comes before b
//[5, 9, 34, 3, 30] -> [9, 5, 34, 3, 30]

//[9, 5, 34, 3, 30] -> "9534330"

largestNum([10, 2]); //"210"
