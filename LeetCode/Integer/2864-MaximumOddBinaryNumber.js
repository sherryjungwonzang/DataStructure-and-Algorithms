//2864. Maximum Odd Binary Number
//given a binary string s that contains at least one '1'
//you have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination
//return a string representing the maximum odd binary number that can be created from the given combination
//note that the resulting string can have leading zeros

//Approach:
//using counting
var maxOddBinaryNum = (s) => {
    let count1 = 0;
    let count0 = 0;

    //counting all 1s and 0s
    for (let num of s) {
        if (num === "1") count1++;
        else if (num === "0") count0++;
    }

    //need one '1' at the end
    return "1".repeat(count1 - 1) + "0".repeat(count0) + "1";
}
//TC: O(n)
//SC: O(n)
maxOddBinaryNum("010"); //"001"
//count1 = 1
//count0 = 2
//0 + 0 + 1 = 001

maxOddBinaryNum("0101"); //"1001"
//count1 = 2
//count0 = 2
//1+ 0 + 0 + 1 = 1001
