//1399. Count Largest Group
//given an integer n
//each number from 1 to n is grouped according to the sum of its digits
//return the number of groups that have the largest size

//Approach:
//using hash map
var countLargestGroup = (n) => {
    let res = 0;
    let max = 0;
    let count = {}; //to correct frequency

    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            sum += num % 10;

            num = Math.floor(num / 10);
        }

        //adding frequency
        count[sum] = (count[sum] || 0) + 1;

        max = Math.max(max, count[sum]);
    }

    //largest size group
    for (let num in count) {
        if (count[num] === max) res++;
    }

    return res;
}
countLargestGroup(13); //4 - [1,10], [2,11], [3,12], [4,13]
//n = 13

//i = 1                             i = 2                           i = 3                       ...     i = 9
//num = 1 -> (1 / 10) = 0           num = 2 -> (2 / 10) = 0         num = 3 -> (3 / 10) = 0             num = 9 -> (9 / 10) = 0           
//sum = 0 -> (1 % 10) = 1           sum = 0 -> (2 % 10) = 1         sum = 0 -> (3 % 10) = 1             sum = 0 -> (9 % 10) = 1
//count = {
//  1: 1,
//  2: 1,
//  3: 1,
//  ...
//  9: 1
//}
//max = 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 1) = 1 -> ... -> (1, 1) = 1

//i = 10                                              i = 11                                             i = 12                                               i = 13
//num = 10 -> (10 / 10) = 1  -> (1 / 10) = 0          num = 11 -> (11 / 10) = 1  -> (1 / 10) = 0         num = 12 -> (12 / 10) = 1  -> (1 / 10) = 0           num = 13 -> (13 / 10) = 1  -> (1 / 10) = 0            
//sum = 0  -> (10 % 10) = 0  -> (1 % 10) = 1          sum = 0  -> (11 % 10) = 1  -> (1 % 10) = 1         sum = 0  -> (12 % 10) = 2  -> (1 % 10) = 1           sum = 0  -> (13 % 10) = 3  -> (1 % 10) = 1
//count = {
//  1: 1 -> 2
//  2: 1 -> 2
//  3: 1 -> 2
//  4: 1 -> 2
//  ...
//  9: 1
//}
//max = 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 1) = 1 -> ... -> (1, 1) = 1 -> (1, 2) = 2 -> (1, 2) = 2 -> (1, 2) = 2 -> (1, 2) = 2

//max is 2 and in count there are 4 '2's
//count = {
//  1: 1 -> 2
//  2: 1 -> 2
//  3: 1 -> 2
//  4: 1 -> 2
//  ...
//  9: 1
//}

countLargestGroup(2); //2 - [1], [2]
