//461. Hamming Distance
//the hamming distance between two integers is the num of positions at which the correcposing bits are different
//given two integers x and y
//return the hamming distance between them

//Approach:
//using bit manipulation
var hammingDistance = (x, y) => {
    let sum = x ^ y;
    let count = 0;

    while (sum != 0) {
        //different bits found
        if (sum & 1) ++count;

        sum = sum >> 1;
    }

    return count;
}
hammingDistance(x = 1, y = 4); //2
//1   (0 0 0 1)
//4   (0 1 0 0)
//       ↑   ↑

//count = 0
//  x = 0 0 0 1 = 1
//  y = 0 1 0 0 = 4
//-----------------
//  ^ = 0 1 0 1 = 5 -> sum != 0
//  & = 0 0 0 1 = 1
//-----------------
//      not null -> count = 0 -> 1
//sum = 0 1 0 1 = 5 
// >> = 0 0 1 0 = 2

//sum != 0 - repeat
//sum = 0 0 1 0 = 2
//  & = 0 0 0 1 = 1
//-----------------
//    = 0 0 0 0 
//sum = 0 0 1 0 = 2
// >> = 0 0 0 1 = 1

//sum != 0 -> repeat
//sum = 0 0 0 1 = 1
//  & = 0 0 0 1 = 1
//-----------------
//    = 0 0 0 1  -> count = 0 -> 1 -> 2
//sum = 0 0 0 1 = 1
// >> = 0 0 0 0 = 0

hammingDistance(x = 3, y = 1); //1
//count = 0
//  x = 0 0 1 1 = 3
//  y = 0 0 0 1 = 1
//-----------------
//  ^ = 0 0 1 0 = 2 -> sum != 0
//  & = 0 0 0 1 = 1
//-----------------
//           null -> count = 0 -> 0
//sum = 0 0 1 0 = 2
//>>  = 0 0 0 1 = 1

//sum != 0 -> repeat
//sum = 0 0 0 1 = 1
//  & = 0 0 0 1 = 1
//-----------------
//    = 0 0 0 1  -> count = 0 -> 1
//sum = 0 0 0 1 = 1
// >> = 0 0 0 0 = 0
