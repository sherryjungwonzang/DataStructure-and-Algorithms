//3226. Number Of Bit Changes To Make Two Integers Equal
//given two positive integers n and k
//you can choose any bit in the binary representation of n that is equal to 1 and change it to 0
//return the number of changes needed to make n equal to k
//if it is impossible, return -1

//Approach:
//using bit manipulation
var bitChanges = (n, k) => {
    //checking range validation
    if ((n & k) !== k) return -1;

    let res = 0;

    //cout num of 1 bits - n and k
    for (let num of n.toString(2)) res += parseInt(num);

    for (let num of k.toString(2)) res -= parseInt(num);

    return res;
}
//TC: O(logn + logk)
//SC: O(1)
bitChanges(n = 13, k = 4); //2
//13 = 1101
//4 = 0100
//13 & 4 = 0100: in the range

//13 = 1 1 0 1                              4 = 0 1 0 0
//     ^                                        ^
//parseInt(1) = 1                           parseInt(0) = 0
//res = 0 -> 1                              res = 0 -> 1 -> 2 -> 2 -> 3 -> 3

//13 = 1 1 0 1                              4 = 0 1 0 0
//       ^                                        ^
//parseInt(1) = 1                           parseInt(1) = 1
//res = 0 -> 1 -> 2                         res = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 2

//13 = 1 1 0 1
//         ^
//parseInt(0) = 0
//res = 0 -> 1 -> 2 -> 2

//13 = 1 1 0 1
//           ^
//parseInt(1) = 1
//res = 0 -> 1 -> 2 -> 2 -> 3

//2

bitChanges( n = 21, k = 21); //0

bitChanges(n = 14, k = 13); //-1

