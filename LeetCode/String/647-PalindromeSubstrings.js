//647. Palindrome Substrings
//given a string 's'
//return the num of palindromic sunstrings in it
//string is a palindrome when it reads the same backward as forward
//substring is a contiguous sequence of characters within the string

//Approach:
//using left and right pointer and expand it to find the palindrome
//checking both odd & even palindrome 
//using the helper function for odd and even array - isPal()
var palindromeSubstrings = (s) => {
    let count = 0;

    //looping through strings
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        //for odd
        isPal(left, right);

        //for even
        isPal(left, right + 1);
    }

    function isPal(left, right) {
        //looping through substrings
        while(left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            count++;

            //expand left and right
            left--;
            right++;
        }
    }
    return count;
}
//TC: O (n * n) = O(n^2) - the first n is looping through string, the second n is expanding on every string
//SC: O(1) - not allocating extra space
palindromeSubstrings("abc"); //3 - three palindromic strings: "a", "b", "c"
//   a b c 
//   ^
//count = 1 - 'a' itself
// <   > : expand - out of range
//     ^
//count = 2 - 'b' itself
//   <   > : expand - a vs c is not palindrome
//       ^
//count = 3 - 'c' itself
//     <   > : expand - out of range

palindromeSubstrings("aaa"); //6 - six palindrome strings: "a", "a", "a", "aa", "aa"
//   a a a 
//   ^
//count = 1 - 'a' itself
// <   > : expand - out of range
//     ^
//count = 2 - 'a' itself
//   <    > : expand - a vs a is palindrome
//count = 3 - 'aa'
//   -  - : a vs a is palindrome
//count = 4 - 'aa'
//     -  - : a vs a is palindrome
//count = 5 - 'aa'
//        ^
//count = 6 - 'a' itself
//      <   > : expand - out of range
