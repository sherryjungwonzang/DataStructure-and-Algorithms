//1550. Three Consecutive Odds
//given an integer array arr
//return true if there are three consecutive odd numbers in the array
//otherwise, return false
var threeConsecutiveOdds = (arr) => {
    let count = 0; //to track consecutive

    //traversing
    for (let num of arr) {
        //odd
        if (num % 2 !== 0) {
            count++;

            //three consecutive odds
            if (count === 3) return true;
        } else { //even
        //resetting
            count = 0;
        }
    }

    return false;
}
//TC: O(n)
//SC: O(1)
threeConsecutiveOdds([2,6,4,1]); //false

threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]); //true - [5,7,23] 
//[1, 2, 34, 3, 4, 5, 7, 23, 12]
// ^
//1 % 2 != 0 -> odd
//count = 0 -> 1

//[1, 2, 34, 3, 4, 5, 7, 23, 12]
//    ^
//2 % 2 = 0 -> even
//count = 0 -> 1 -> 0

//[1, 2, 34, 3, 4, 5, 7, 23, 12]
//        ^
//34 % 2 = 0 -> even
//count = 0 -> 1 -> 0 -> 0

//[1, 2, 34, 3, 4, 5, 7, 23, 12]
//           ^
//3 % 2 != 0 -> odd
//count = 0 -> 1 -> 0 -> 0 -> 1

//[1, 2, 34, 3, 4, 5, 7, 23, 12]
//              ^
//4 % 2 = 0 -> even
//count = 0 -> 1 -> 0 -> 0 -> 1 -> 0

//[1, 2, 34, 3, 4, 5, 7, 23, 12]                [1, 2, 34, 3, 4, 5, 7, 23, 12]                      [1, 2, 34, 3, 4, 5, 7, 23, 12]
//                 ^                                                ^                                                       ^
//5 % 2 != 0 -> odd                             7 % 2 != 0 -> odd                                   23 % 2 != 0 -> odd 
//count = 0 -> 1 -> 0 -> 0 -> 1 -> 0 -> 1       count = 0 -> 1 -> 0 -> 0 -> 1 -> 0 -> 1 -> 2        count = 0 -> 1 -> 0 -> 0 -> 1 -> 0 -> 1 -> 2 -> 3
//true


