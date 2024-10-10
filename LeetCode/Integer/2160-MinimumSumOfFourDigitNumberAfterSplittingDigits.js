//2160. Minimum Sum Of Four Digit Number After Splitting Digits
//given a positive integer num consisting of exactly four digits
//split num into two new integers new1 and new2 by using the digits found in num
//leading zeros are allowed in new1 and new2, and all the digits found in num must be used

//for example, given num = 2932, you have the following digits: two 2's, one 9 and one 3
//some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329]
//return the minimum possible sum of new1 and new2

//Approach:
//using sorting
var minSumFourDigits = (num) => {
    //sorting
    let sorted = num.toString().split('').sort();

    return parseInt(sorted[0] + sorted[2]) + parseInt(sorted[1] + sorted[3]); //min sum
}
minSumFourDigits(2932); //52 - 23 + 29 = 52
//sorting: [2, 2, 3, 9]
//          ^     ^     : 23
//              ^    ^  : 29
//23 + 29 = 52

minSumFourDigits(4009); //13 - 4 + 9 = 13
//sorting: [0, 0, 4, 9]
//          ^     ^     : 4
//              ^    ^  : 9
//4 + 9 = 13
