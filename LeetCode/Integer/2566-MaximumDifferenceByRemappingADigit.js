//2566. Maximum Difference By Remapping A Digit
//given an integer num - you know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit
//return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num

//Notes:
//when Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2
//bob can remap a digit to itself, in which case num does not change
//bob can remap different digits for obtaining minimum and maximum values respectively
//the resulting number after remapping can contain leading zeroes

//Approach:
//using replaceAll()
var remappingDigit = (num) => {
    let str = num + "";
    let i = 0;

    //finding non 9 number
    while (str[i] == 9) i++;

    //replacing all same value with str[i] to 9 -> max
    let max = str.replaceAll(str[i], 9);

    //replacing all same value with [0] to 0 -> min 
    let min = str.replaceAll(str[0], 0);

    return max - min;
}
remappingDigit(11891); //99009
//str = 1 1 8 9 1
//      ^
//i = 0 -> "1"
//max: replacing all "1" -> 99899
//min: replacing all "1" -> 00890
//max - min = 99899 - 00890 = 99009

remappingDigit(90); //99
//str = 9 0
//      ^
//i = 0 -> "9"

//str = 9 0
//        ^
//i = 1 -> "0"
//max: replacing all "0" -> 99
//min: replacing all "0" -> 00
//max - min = 99 - 00 = 99
