//1863. Sum Of All Subset XOR Totals
//the XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty
//for example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1

//given an array nums
//return the sum of all XOR totals for every subset of nums
//an array b is a subset of an array b if a can be obtained from b by deleting some elements of b

//Approach:
//using bitwise operations
var sumSubsetXOR = (nums) => {
    let res = 0;

    //capturing all bits - OR operations
    for (let num of nums) res |= num;

    return res << (nums.length - 1); //left shift
}
//TC: O(n)
//SC: O(1)
sumSubsetXOR([1, 3]); //6
//res = 0

//[1, 3]       || [1, 3]
// ^                  ^
//0 || 1 = 1      1 || 3 = 3  
//0000            0001
//0001            0011
//----            ----
//0001            0011

//3 << 1 = 6
//0001
//0011
//-----
//0011

sumSubsetXOR([5,1,6]); //28
//res = 0

//[5, 1, 6]       || [5, 1, 6]    || [5, 1, 6]
// ^                     ^                  ^
//0 || 5 = 5         5 || 1 = 5       5 || 6 = 7   
//0000               0101             0101
//0101               0001             0110
//----               ----             ----
//0101               0101             0111  

//7 << 2 = 28
//7 * (2 ** 2) = 28

sumSubsetXOR([3, 4, 5, 6, 7, 8]); //480
