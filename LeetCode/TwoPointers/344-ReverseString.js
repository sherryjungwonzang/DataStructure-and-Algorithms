//344. Reverse String
//write a function that reverse a string
//the input string is given as an array of characters 's'

//Approach:
//using two pointers
var reverseString = (s) => {
    //two pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}
reverseString(s = ["h","e","l","l","o"]); //["o","l","l","e","h"]

reverseString(s = ["H","a","n","n","a","h"]); //["h","a","n","n","a","H"]
