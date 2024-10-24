//2864. Maximum Odd Binary Number
//given a binary string s that contains at least one '1'
//you have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination
//return a string representing the maximum odd binary number that can be created from the given combination
//note that the resulting string can have leading zeros

//Approach:
//using greedy algorithm and soring & swapping
var maxOddBinaryNum = (s) => {
    //sorting as 1 at the front and 0 at the end
    let binary = s.split('').sort().reverse();

    //one 1 needs to be at the ned
    for (let i = binary.length - 1; i >= 0; i--){
        if (binary[i] === "1") {
            //swapping
            [binary[i], binary[binary.length - 1]] = [binary[binary.length - 1], binary[i]];

            break;
        }
    }

    return binary.join('');
}
//TC: O(nlogn)
//SC: O(1)
maxOddBinaryNum("010"); //"001"
//sorting & reversing -> 100
//1 0 0
//^ ^ ^ -> traversing from the back
//swapping with 1 and 0 => 0 0 1
//001

maxOddBinaryNum("0101"); //"1001"
//sorting & reversing -> 1100
//1 1 0 0
//  ^       -> traversing from the back
//swapping with 1 and 0 => 1 0 0 1
//1001
