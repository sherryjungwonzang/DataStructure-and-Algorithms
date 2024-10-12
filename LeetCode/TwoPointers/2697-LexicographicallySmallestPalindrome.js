//2697. Lexicographically Smallest Palindrome
//given a string s consisting of lowercase English letters, and you are allowed to perform operations on it
//in one operation, you can replace a character in s with another lowercase English letter

//your task is to make s a palindrome with the minimum number of operations possible
//if there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one
//a string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b
//return the resulting palindrome string

//Approach:
//using two pointers
var lexicographicalSmallestPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    let words = s.split('');

    //two pointers
    while (left < right) {
        //non-palindromic
        if (words[left] !== words[right]) {
            //making it palindromic
            if (words[left] < words[right]) words[right] = words[left];
            else words[left] = words[right];
        }

        left++;

        right--;
    }

    return words.join('');
}
//TC: O(n)
//SC: O(n)
lexicographicalSmallestPalindrome("egcfe"); //"efcfe" - operation takes 1
//"e g c f e"
// L       R    -> e = e: palindrome

//"e g c f e"
//   L   R    -> g != f: not palindrome
//g > f -> changing g to f
//"e f c f e"

lexicographicalSmallestPalindrome("abcd"); //"abba" - operations takes 2
//"a b c d"
// L     R    -> a != d: not palindrome
//a < d -> changing d to a
//"a b c a"

//"a b c a"
//   L  R    -> b != c: not palindrome
//b < c -> changing c to b
//"a b b a"

lexicographicalSmallestPalindrome("seven"); //"neven" - operations takes 1
