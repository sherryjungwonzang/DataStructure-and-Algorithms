//1523. Count Odd Numbers In An Interval Range
//given two non-negative integers low and high
//return the count of odd numbers between low and high(inclusive)

//Approach:
//using math
var countOddNums = (low, high) => {
    //even & odd || odd & even
    if (low % 2 !== 0 && high % 2 === 0 || low % 2 ===0 && high % 2 !== 0) return Math.ceil((high - low) / 2);

    //even & even
    if (low % 2 === 0 && high % 2 === 0) return (high - low) / 2;

    //odd & odd
    if (low % 2 !== 0 && high % 2 !== 0) return ((high - low) / 2) + 1;
}
countOddNums(low = 3, high = 7); //3 - [3, 5, 7]
//[3, 4, 5, 6, 7]
// ^     ^     ^
//low % 2 != 0: odd
//high % 2 != 0: odd
//(high - low) / 2 + 1 = (7 - 3) / 2 + 1 = 3

countOddNums(low = 8, high = 10); //1 - [9]
//[8, 9, 10]
//    ^    
//low % 2 = 0: even
//high % 2 = 0: even
//(high - low) / 2 = (10 - 8) / 2  = 1

countOddNums(low = 3, high = 10); //4 - [3, 5, 7, 9]
//[3, 4, 5, 6, 7, 8, 9, 10]
// ^     ^     ^     ^
//low % 2 != 0: odd
//high % 2 = 0: even
//ceil(high - low) / 2 = ceil(10 - 3) / 2 = 4
