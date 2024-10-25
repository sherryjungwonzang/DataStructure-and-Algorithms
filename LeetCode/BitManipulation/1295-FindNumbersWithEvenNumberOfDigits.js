//1295. Find Numbers With Even Number Of Digits
//given an array nums of integers
//return how many of them contain an even number of digits

//Approach:
//using bit manipulation(AND)
var evenNumDigits = (nums) => {
    let count = 0;

    //count digit length
    for (let i = 0; i < nums.length; i++) {
        //AND
        (nums[i].toString().length & 1) === 0 && count++;
    }

    return count;
}
evenNumDigits([12,345,2,6,7896]); //2 - 12, 7896
//[12, 345, 2, 6, 7896]
// ^
//12's length = 2 -> 0010
//                   0001
//                  -----
//                   0000 -> even
//count = 0 -> 1

//[12, 345, 2, 6, 7896]
//      ^
//345's length = 3 -> 0011
//                    0001
//                   -----
//                    0001 -> odd
//count = 0 -> 1 -> 1

//[12, 345, 2, 6, 7896]
//          ^
//2's length = 1 -> 0001
//                  0001
//                 -----
//                  0001 -> odd
//count = 0 -> 1 -> 1 -> 1

//[12, 345, 2, 6, 7896]
//             ^
//6's length = 1 -> 0001
//                  0001
//                 -----
//                  0001 -> odd
//count = 0 -> 1 -> 1 -> 1 -> 1

//[12, 345, 2, 6, 7896]
//                  ^
//7896's length = 4 -> 0100
//                     0001
//                    -----
//                     0000 -> even
//count = 0 -> 1 -> 1 -> 1 -> 1 -> 2

evenNumDigits([555,901,482,1771]); //1 - 1771
