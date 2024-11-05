//2859. Sum Of Values At Indices With K Set Bits
//given a 0-indexed integer array nums and an integer k
//return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation
//the set bits in an integer are the 1's present when it is written in binary
//for example, the binary representation of 21 is 10101, which has 3 set bits

//Approach:
//using toString(2)
var sumIndicesWithKSetBits = (nums, k) => {
    let m = nums.length;
    let sum = 0;
    
    for (let i = 0; i < m; i++) {
        let binary = i.toString(2).replaceAll('0', ''); //without 0s

        //find k set bits
        if (binary.length === k) sum += nums[i];
    }

    return sum;
}
sumIndicesWithKSetBits(nums = [5,10,1,5,2], k = 1); //13
//[5, 10, 1, 5, 2]
// ^
//0 -> toString(2): 0
//  -> replace 0 to '': ''
//binary = '''s length != k

//[5, 10, 1, 5, 2]
//    ^
//1 -> toString(2): 001
//  -> replace 0 to '': 1 
//binary = 1's length = k
//sum = 0 -> 10

//[5, 10, 1, 5, 2]
//        ^
//2 -> toString(2): 010
//  -> replace 0 to '': 1 
//binary = 1's length = k
//sum = 0 -> 10 -> 11

//[5, 10, 1, 5, 2]
//           ^
//3 -> toString(2): 011
//  -> replace 0 to '': 11 
//binary = 11's length != k
//sum = 0 -> 10 -> 11

//[5, 10, 1, 5, 2]
//              ^
//4 -> toString(2): 100
//  -> replace 0 to '': 1 
//binary = 1's length = k
//sum = 0 -> 10 -> 11 -> 13

sumIndicesWithKSetBits(nums = [4,3,2,1], k = 2); //1
//[4, 3, 2, 1]
// ^
//0 -> toString(2): 0
//  -> replace 0 to '': ''
//binary = '''s length != k

//[4, 3, 2, 1]
//    ^
//1 -> toString(2): 001
//  -> replace 0 to '': 1 
//binary = 1's length != k

//[4, 3, 2, 1]
//       ^
//2 -> toString(2): 010
//  -> replace 0 to '': 1 
//binary = 1's length != k

//[4, 3, 2, 1]
//          ^
//3 -> toString(2): 011
//  -> replace 0 to '': 11 
//binary = 11's length = k
//sum = 0 -> 1
