//2595. Number Of Even And Odd Bits
//given a positive integer n
//let even denote the number of even indices in the binary representation of n with value 1
//let odd denote the number of odd indices in the binary representation of n with value 1
//note that bits are indexed from right to left in the binary representation of a number
//return the array [even, odd]

//Approach:
//using toString(2)
var evenOddBit = (n) => {
    //converting to binary
    let binary = n.toString(2).split("").reverse();
    let even = 0;
    let odd = 0;

    //checking 1
    for (let i = 0; i < binary.length; i++) {
        //find 1
        if (binary[i] == 1) {
            //checking the position
            if (i % 2 === 0) even++;
            else odd++;
        }
    }

    return [even, odd];
}
//TC: O(n)
//SC: O(1)
evenOddBit(50); //[1, 2]
//50 toString(2) = 110010
//reverse: [0, 1, 0, 0, 1, 1]

//[0, 1, 0, 0, 1, 1]
//    ^
//i = 1 -> "1"
//1 % 2 != 0: odd
//odd = 0 -> 1

//[0, 1, 0, 0, 1, 1]
//             ^
//i = 4 -> "1"
//4 % 2 = 0: even
//odd = 0 -> 1
//even = 0 -> 1

//[0, 1, 0, 0, 1, 1]
//                ^
//i = 5 -> "1"
//5 % 2 != 0: odd
//odd = 0 -> 1 -> 2
//even = 0 -> 1

//[1, 2]

evenOddBit(2); //[0, 1]
//2 toString(2) = 10
//reverse: [0, 1]

//[0, 1]
//    ^
//i = 1 -> "1"
//1 % 2 = 0: odd
//odd = 0 -> 1
//even = 0

//[0, 1]

