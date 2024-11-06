//1417. Reformat The String
//given an alphanumeric string s
//(Alphanumeric string is a string consisting of lowercase English letters and digits)
//you have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit
//that is, no two adjacent characters have the same type
//return the reformatted string or return an empty string if it is impossible to reformat the string
var reformatString = (s) => {
    let strArr = [];
    let numArr = [];
    let str = '';

    //separating str and num
    for (let char of s) {
        if (isNaN(char)) strArr.push(char);
        else numArr.push(char);
    }

    let strLen = strArr.length;
    let numLen = numArr.length;

    //invalid for reformation
    if (Math.abs(strLen - numLen) > 1) return '';

    //reformatting
    for (let i = 0; i < Math.min(numLen, strLen); i++) str += `${numArr[i]}${strArr[i]}`;

    //if there is remaining str or num
    if (numLen > strLen) str += numArr[numLen - 1];
    else if (strLen > numLen) str = strArr[strLen - 1] + str;

    return str;
}
reformatString("a0b1c2"); //"0a1b2c"
//a 0 b 1 c 2
//^
//strArr = [ a, b, c ] -> 3
//numArr = [ 0, 1, 2 ] -> 3
//3 - 3 = 0 < 1 -> valid

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2 ]
//           ^                       ^
//str = '' -> '0a'

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2 ]
//              ^                       ^
//str = '' -> '0a1b'

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2 ]
//                  ^                       ^
//str = '' -> '0a1b2c'

reformatString("a0b1c23"); //"0a1b2c3"
//a 0 b 1 c 2 3
//^
//strArr = [ a, b, c ] -> 3
//numArr = [ 0, 1, 2, 3 ] -> 4
//4 - 3 = 1 = 1 -> valid

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2, 3 ]
//           ^                       ^
//str = '' -> '0a'

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2, 3 ]
//              ^                       ^
//str = '' -> '0a1b'

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2, 3 ]
//                  ^                       ^
//str = '' -> '0a1b2c'

//strArr = [ a, b, c ] || numArr = [ 0, 1, 2, 3 ]
//                                            ^
//numLen > strLen -> adding numArr[len - 1] = '3' to str
//str = '' -> '0a1b2c3'

reformatString("leetcode"); //""
//l e e t c o d e
//^
//strArr = [l, e, e, t, c, o, d, e] -> 8
//numArr = [ ] -> 0
//8 - 0 = 8 > 1-> invalid

reformatString("1229857369"); //""
