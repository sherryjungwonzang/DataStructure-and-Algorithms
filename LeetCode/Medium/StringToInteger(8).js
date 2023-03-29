//8. String to Integer(atoi)
//implement myAtoi(string s) function - converts a string to 32-bit signed integer

//read-in and ignore any leading whitespace
//check if the next character is '-' or '+'
//read this character in if iti is either
//determines if the final result is negative or positive respectively
//assume the result of positive if neither is present

//read in the next characters until the next non-digit character or the end of the input is reached
//the rest of the string is ignored

//convert these digits into an integer - ex: "123" -> 123, "0032" -> 32
//if no digits were read, then the integer is 0
//change the sign as necessary

//if the integer is out of the 32-bit signed integer rance [-2^31, 2^31 - 1]
//then clamp the integer so that is remains in the range
//specifically, integers less than -2^31 should be clamped to -2^31
//and integers greater than 2^31 - 1 should be clamped to 2^31 - 1

//return the integer as the final result

//only the space character ' ' is considered a whitespace character
//do not ignore any characters other than the leading whitespace or the rest of the string after the digits
var myAtoi = (str) => {
  let index = 0;
  let isNeg = false;
  let res = 0;

  //Step1: check and remove any leading white spaces
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      index++;
    } else {
      break
    }
  }

  //Step2: check signed - or +
  if (str[index] === '-' || str[index] === '+') {
    isNeg = str[index] === '-';
    index++;
  } 

  //Step3: loop through intergers within string
  for (let i = index; i < str.length; i++) {
    let num = str.charCodeAt(i) - 48; //to ensure the value is between 0 and 9

    if (num < 0 || num > 9) break;

    res *= 10;
    res += num;
  }

  //Step4: convert to negative based on the Step2
  if (isNeg) {
    res = -res;
  }

  //Step5: bind it to upperbound and lowerbound
  let min = -(2 ** 31);
  let max = 2 ** 31 - 1;

  let minimum = Math.min(max, res);
  return Math.max(minimum, min);
}
myAtoi("42"); //42 
/**
The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
 */

myAtoi("   -42"); //-42
/**
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
 */

myAtoi("4193 with words"); //4193
/**
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
 */
