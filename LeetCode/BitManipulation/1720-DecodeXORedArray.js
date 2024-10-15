//1720. Decode XORed Array
//there is a hidden integer array 'arr' that consists of n non-negative integers
//it was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]
//for example, if arr = [1,0,2,1], then encoded = [1,2,3]

//given the encoded array
//you are also given an integer first, that is the first element of arr, i.e. arr[0]
//return the original array arr - It can be proved that the answer exists and is unique

//Approach:
//using bit manipulation
var decodeXORedArray = (encoded, first) => {
    let res = [first];

    for (let i = 0; i < encoded.length; i++) {
        //XORed array
        res.push(res[i] ^ encoded[i]);
    }

    return res;
}
decodeXORedArray(encoded = [1,2,3], first = 1); //[1,0,2,1]
//res = [1, ] || encoded = [1, 2, 3]
//       ^                  ^          -> 1 ^ 1 = 0

//res = [1, 0, ] || encoded = [1, 2, 3]
//          ^                     ^          -> 0 ^ 2 = 2

//res = [1, 0, 2,  ] || encoded = [1, 2, 3]
//             ^                         ^          -> 2 ^ 3 = 1

//res = [1, 0, 2, 1]

decodeXORedArray(encoded = [6,2,7,3], first = 4); //[4,2,0,7,4]
//res = [4, ] || encoded = [6, 2, 7, 3]
//       ^                  ^          -> 4 ^ 6 = 2

//res = [4, 2,  ] || encoded = [6, 2, 7, 3]
//          ^                      ^          -> 2 ^ 2 = 0

//res = [4, 2, 0,  ] || encoded = [6, 2, 7, 3]
//             ^                         ^          -> 0 ^ 7 = 7

//res = [4, 2, 0, 7,  ] || encoded = [6, 2, 7, 3]
//                ^                            ^          -> 7 ^ 3 = 4

//res = [4, 2, 0, 7, 4] 
