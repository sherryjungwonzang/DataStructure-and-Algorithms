//258. Add Digits
//given an integer num
//repeatedly add all its digits until the result has only one digit and return it

//Approach:
//using .toString()
var addDigits = (num) => {
    //base case
    if (num < 10) return num;

    let numString = num.toString(); //converting to string
    let stringArr = numString.split(''); //making as an array
    let sum = 0;

    //traversing
    for (let str of stringArr) sum += parseInt(str); //converting to integer again

    //recursive until one digit
    return addDigits(sum);
}
//TC: O(n)
//SC: O(n)
addDigits(38); //3 - 38 --> 3 + 8 --> 11 && 11 --> 1 + 1 --> 2 
//num = 38 -> numString = 38 -> stringArr = ["3", "8"]
//stringArr = ["3", "8"]
//              ^
//sum = 0 -> 3 -> 11

//num = 11 -> numString = 11 -> stringArr = ["1", "1"]
//stringArr = ["1", "1"]
//              ^
//sum = 0 -> 1 -> 2
//2

addDigits(234509098); //4
//num = 234509098 -> numString = 234509098 -> stringArr = ["2", "3", "4", "5", "0", "9", "0", "9", "8"]
//stringArr = ["2", "3", "4", "5", "0", "9", "0", "9", "8"]
//              ^
//sum = 0 -> 2 -> 5 -> 9 -> 14 -> 14 -> 23 -> 23 -> 32 -> 40

//num = 40 -> numString = 40 -> stringArr = ["4", "0"]
//stringArr = ["4", "0"]
//              ^
//sum = 0 -> 4 -> 4
//4

addDigits(0); //0 
