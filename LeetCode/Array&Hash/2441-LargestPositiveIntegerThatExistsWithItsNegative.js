//2441. Largest Positive Integer That Exists With Its Negative
//given an integer array 'nums' that does not contain any zeros
//find the largest positive integer k such that -k also exists in the array
//return the positive integer k - if there is no such integer, return -1

//Approach:
//using hash set
var largestPositiveNegativeInteger = (nums) => {
    let res = -1;
    let set = new Set(nums); //hash set

    for (let num of set) {
        //checking if it has opposite num in set
        if (set.has(-num)) res = Math.max(res, num);
    }

    return res;
}
//TC: O(n)
//SC: O(n)
largestPositiveNegativeInteger([-1,2,-3,3]); //3
//set = {-1, 2, -3, 3}
//       ^
//checking 1 is in set -> no

//{-1, 2, -3, 3}
//     ^
//checking -2 is in set -> no

//{-1, 2, -3, 3}
//        ^
//checking 3 is in set -> yes
//res = -1 -> max(-1, -3) = -1

//{-1, 2, -3, 3}
//            ^
//checking -3 is in set -> yes
//res = -1 -> max(-1, -3) = -1 -> (-1, 3) = 3

largestPositiveNegativeInteger([-1,10,6,7,-7,1]); //3
//set = { -1, 10, 6, 7, -7, 1 }
//        ^
//checking 1 is in set -> yes
//res = -1 -> max(-1, 1) = 1

//{ -1, 10, 6, 7, -7, 1 }
//      ^
//checking -10 is in set -> no

//{ -1, 10, 6, 7, -7, 1 }
//          ^
//checking -6 is in set -> no

//{ -1, 10, 6, 7, -7, 1 }
//             ^
//checking -7 is in set -> yes
//res = -1 -> max(-1, 1) = 1 -> (1, -7) = 1

//{ -1, 10, 6, 7, -7, 1 }
//                ^
//checking 7 is in set -> yes
//res = -1 -> max(-1, 1) = 1 -> (1, -7) = 1 -> (1, 7) = 7

//{ -1, 10, 6, 7, -7, 1 }
//                    ^
//checking -1 is in set -> yes
//res = -1 -> max(-1, 1) = 1 -> (1, -7) = 1 -> (1, 7) = 7 -> (7, 1) = 7

largestPositiveNegativeInteger([-10,8,6,7,-2,-3]); //3

