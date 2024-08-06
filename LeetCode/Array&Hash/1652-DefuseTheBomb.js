//1652. Defuse The Bomb
//you have a bom to defuse and your time is running out
//your informer will provide you with a circular array code of length of n and a key k

//to decrypt the code, you must replace every number
//all the numbers are replaced simultaneously
//if k > 0, replace the i_th number with the sum of the next k number
//if k < 0, replace the i_th number with the sum of the previous k numbers
//if k = 0, replace the i_th number with 0

//as code is circular, the next element of code[n - 1] is code[0]
//and the previous element of code[0] is code[n - 1]

//given the circular array code and an integer key k
//return the decrypted code to defuse the bomb

//Appraoch:
//using array
var defuseBomb = (code, k) => {
    let res = new Array(code.length).fill(0);

    //k is positive
    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            let count = 0;
            let j = i + 1; //starting from the next element to sum

            while (count < k) {
                if (j === code.length) j = 0; //reset for sum the previous elements
                res[i] += code[j];
                count = count + 1;
                j++;
            }
        }
    }

    //k is negative
    if (k < 0) {
        for (let i = 0; i < code.length; i++) {
            let count = 0;
            let j = i - 1; //starting from the previous element to sum

            while (count > k) {
                if (j === -1) j = code.length - 1;
                res[i] += code[j];
                count = count - 1;
                j--;
            }
        }
    }

    return res;
}
defuseBomb([5,7,1,4], 3); //[12, 10, 16, 13] - the decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]
//res = [ 0, 0, 0, 0 ]

//i = 0
//count = 0
//[5, 7, 1, 4]
//    j
//j = 1
//res = [ 7, 0, 0, 0 ]
//count = 0 -> 1
//j = 1 -> 2

//[5, 7, 1, 4]
//       j
//j = 1 -> 2
//res = [ 8, 0, 0, 0 ]
//count = 0 -> 1 -> 2
//j = 1 -> 2 -> 3

//[5, 7, 1, 4]
//          j
//j = 1 -> 2 -> 3
//res = [ 12, 0, 0, 0 ]
//count = 0 -> 1 -> 2 -> 3

//----------------------------------
//i = 1
//count = 0
//[5, 7, 1, 4]
//       j
//j = 2
//res = [ 12, 1, 0, 0 ]
//count = 0 -> 1
//j = 2 -> 3

//[5, 7, 1, 4]
//          j
//j = 1 -> 2 -> 3
//res = [ 12, 5, 0, 0 ]
//count = 0 -> 1 -> 2
//j = 2 -> 3 -> 0 : reset

//[5, 7, 1, 4]
// j
//j = 2 -> 3 -> 0 : reset -> 1
//res = [ 12, 10, 0, 0 ]
//count = 0 -> 1 -> 2 -> 3

//----------------------------------
//i = 2
//count = 0
//[5, 7, 1, 4]
//          j
//j = 3
//res = [ 12, 10, 4, 0 ]
//count = 0 -> 1
//j = 3 -> 0: reset

//[5, 7, 1, 4]
// j
//j = 3 -> 0: reset -> 1
//res = [ 12, 10, 9, 0 ]
//count = 0 -> 1 -> 2

//[5, 7, 1, 4]
//    j
//j = 3 -> 0: reset -> 1 -> 2
//res = [ 12, 10, 16, 0 ]
//count = 0 -> 1 -> 2 -> 3

//----------------------------------
//i = 3
//count = 0
//[5, 7, 1, 4]
// j
//j = 0: reset
//res = [ 12, 10, 16, 5 ]
//count = 0 -> 1

//[5, 7, 1, 4]
//    j
//j = 0: reset -> 1
//res = [ 12, 10, 16, 12 ]
//count = 0 -> 1 -> 2

//[5, 7, 1, 4]
//       j
//j = 0: reset -> 1 -> 2
//res = [ 12, 10, 16, 13 ]
//count = 0 -> 1 -> 2 -> 3

defuseBomb([2, 4, 9, 3], -2); //[12, 5, 6, 13] - the decrypted code is [3+9, 2+3, 4+2, 9+4]
//res = [ 0, 0, 0, 0 ]

//i = 0
//count = 0
//j = -1 -> 3: reset
//[2, 4, 9, 3]
//          j
//res = [ 3, 0, 0, 0 ]
//count = 0 -> -1
//j = 3 -> 2

//[2, 4, 9, 3]
//       j
//res = [ 12, 0, 0, 0 ]
//count = 0 -> -1 -> -2
//j = 3 -> 2 -> 1

//----------------------------------
//i = 1
//count = 0
//j = 0
//[2, 4, 9, 3]
// j
//res = [ 12, 2, 0, 0 ]
//count = 0 -> -1 
//j = 0 -> -1 -> 3: reset

//[2, 4, 9, 3]
//          j
//res = [ 12, 5, 0, 0 ]
//count = 0 -> -1 -> -2
//j = 0 -> -1 -> 3: reset -> 2

//----------------------------------
//i = 2
//count = 0
//j = 1
//[2, 4, 9, 3]
//    j
//res = [ 12, 5, 4, 0 ]
//count = 0 -> -1 
//j = 1 -> 0

//[2, 4, 9, 3]
// j
//res = [ 12, 5, 6, 0 ]
//count = 0 -> -1 -> -2
//j = 1 -> 0 -> -1 -> 3: reset

//----------------------------------
//i = 3
//count = 0
//j = 2
//[2, 4, 9, 3]
//       j
//res = [ 12, 5, 6, 9 ]
//count = 0 -> -1 
//j = 2 -> 1

//[2, 4, 9, 3]
//    j
//res = [ 12, 5, 6, 13 ]
//res = [ 12, 5, 6, 9 ]
//count = 0 -> -1 -> -2
//j = 2 -> 1 -> 0

defuseBomb([1, 2, 3, 4], 0); //[0, 0, 0, 0]
