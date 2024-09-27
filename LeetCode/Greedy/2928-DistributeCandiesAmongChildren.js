//2928. Distribute Candies Amoing Children
//given two positive integers n and limit
//return the total number of ways to distribute n candies amoung 3 children
//such that no child gets more than limit candies

//Approach:
//using greedy algorithm
var distributeCandy = (n, limit) => {
    let res = 0;

    for (let i = 0; i <= limit; i++) {
        let firstDistribute = n - i; //candy amount - i

        for (let j = 0; j <= limit; j++) {
            let secondDistribute = firstDistribute - j;

            //invalid distribute
            if (secondDistribute > limit || secondDistribute < 0) continue;

            res++;
        }
    }

    return res;
}
distributeCandy(n = 5, limit = 2); //3 - (1, 2, 2), (2, 1, 2) and (2, 2, 1)
//res = 0

//fisrt distibute          second distribute   || valid checkng
//i = 0 -> 5 - 0 = 5   || j = 0 -> 5 - 0 = 5   || 5 > 2: T || 5 < 0: F = T -> invalid
//                     || j = 1 -> 5 - 1 = 4   || 4 > 2: T || 4 < 0: F = T -> invalid
//                     || j = 2 -> 5 - 2 = 3   || 3 > 2: T || 3 < 0: F = T -> invalid
//res = 0 -> 0

//i = 1 -> 5 - 1 = 4   || j = 0 -> 4 - 0 = 4   || 4 > 2: T || 4 < 0: F = T -> invalid
//                     || j = 1 -> 4 - 1 = 3   || 3 > 2: T || 3 < 0: F = T -> invalid
//                     || j = 2 -> 4 - 2 = 2   || 2 > 2: F || 3 < 0: F = F -> valid
//res = 0 -> 0 -> 1

//i = 2 -> 5 - 2 = 3   || j = 0 -> 3 - 0 = 3   || 3 > 2: T || 3 < 0: F = T -> invalid
//                     || j = 1 -> 3 - 1 = 2   || 2 > 2: F || 2 < 0: F = F -> valid
//res = 0 -> 0 -> 1 -> 2
//                     || j = 2 -> 3 - 2 = 1   || 1 > 2: F || 1 < 0: F = F -> valid
//res = 0 -> 0 -> 1 -> 2 -> 3

distributeCandy(n = 3, limit = 3); //10 - (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0)
//res = 0

//fisrt distibute          second distribute   || valid checkng
//i = 0 -> 3 - 0 = 3   || j = 0 -> 3 - 0 = 3   || 3 > 3: F || 3 < 0: F = F -> valid
//res = 0 -> 1
//                     || j = 1 -> 3 - 1 = 2   || 2 > 3: F || 2 < 0: F = F -> valid
//res = 0 -> 1 -> 2
//                     || j = 2 -> 3 - 2 = 1   || 1 > 3: F || 1 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3
//                     || j = 3 -> 3 - 3 = 0   || 0 > 3: F || 0 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4

//i = 1 -> 3 - 1 = 2   || j = 0 -> 2 - 0 = 2   || 2 > 3: F || 2 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5
//                     || j = 1 -> 2 - 1 = 1   || 1 > 3: F || 1 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
//                     || j = 2 -> 2 - 2 = 0   || 0 > 3: F || 0 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
//                     || j = 3 -> 2 - 3 = -1   || -1 > 3: F || -1 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

//i = 2 -> 3 - 2 = 1   || j = 0 -> 1 - 0 = 1   || 1 > 3: F || 1 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
//                     || j = 1 -> 1 - 1 = 0   || 0 > 3: F || 0 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
//                     || j = 2 -> 1 - 2 = -1   || -1 > 3: F || -1 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
//                     || j = 3 -> 1 - 3 = -2   || -2 > 3: F || -2 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

//i = 3 -> 3 - 3 = 0   || j = 0 -> 0 - 0 = 0   || 0 > 3: F || 0 < 0: F = F -> valid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
//                     || j = 1 -> 0 - 1 = -1   || -1 > 3: F || -1 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
//                     || j = 2 -> 0 - 2 = -2   || -2 > 3: F || -2 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
//                     || j = 3 -> 0 - 3 = -3   || -3 > 3: F || -3 < 0: T = T -> invalid
//res = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
