//2980. Check If Bitwise OR Has Trailing Zeros
//given an array of positive integers nums
//you have to check if it is possible to select two or more elements in the array 
//such that the bitwise OR of the selected elements has at least one trailing zero in its binary representation
//for example, the binary representation of 5, which is "101", does not have any trailing zeros, whereas the binary representation of 4, which is "100", has two trailing zeros
//return true if it is possible to select two or more elements whose bitwise OR has trailing zeros, return false otherwise

//Approach
//using bitwise operation OR
var hasTrailingZeros = (nums) => {
    let m = nums.length;

    //checking pairs
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            //bitwise OR & even number checking
            if (i !== j && (nums[i] | nums[j]) % 2 === 0) return true;
        }
    }

    return false;
}
hasTrailingZeros([1,2,3,4,5]); //true - 2 OR 4 = 6
//[1, 2, 3, 4, 5]
// i  
// j
//0 = 0: F & (1 | 1) % 2 = 1: F

//[1, 2, 3, 4, 5]
// i  
//    j
//0 != 1: T & (1 | 2) % 2 = 1: F
//...

//[1, 2, 3, 4, 5]
//    i  
//          j
//1 != 3: T & (2 | 4) % 2 = 0: T
//true

hasTrailingZeros([2,4,8,16]); //true - 2 OR 4 = 6 - (2, 8), (2, 16), (4, 8), (4, 16), (8, 16), (2, 4, 8), (2, 4, 16), (2, 8, 16), (4, 8, 16), and (2, 4, 8, 16)

hasTrailingZeros([1,3,5,7,9]); //false
