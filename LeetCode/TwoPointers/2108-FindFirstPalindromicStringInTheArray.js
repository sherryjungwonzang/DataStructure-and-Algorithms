//2108. Find First Palindromic String In The Array
//given an array of strings words
//return the first palindromic string in the array
//if there is no such string, return an empty string ""

//Approach:
//using two pointers
var firstPalindromicString = (words) => {
    //traversing
    for (let word of words) {
        if (isPalindrome(word)) return word;
    }

    //checking palindrone
    function isPalindrome(word) {
        //two pointers
        let left = 0;
        let right = word.length - 1;

        while (left <= right) {
            if (word[left] === word[right]) {
                left++;
                right--;
            } else { //not palindrome
                return false;
            }
        }

        return true;
    };

    return "";
}
//TC: O(n * m) - n: the num of words in input array, m: the max length of words
//SC: O(1)
firstPalindromicString(["abc","car","ada","racecar","cool"]); //"ada"
//["abc", "car", "ada", "racecar", "cool"]
//   ^
//checking "a b c"
//          l   r   -> a != c: not palindrome

//["abc", "car", "ada", "racecar", "cool"]
//          ^
//checking "c a r"
//          l   r   -> c != r: not palindrome

//["abc", "car", "ada", "racecar", "cool"]
//                 ^
//checking "a d a"
//          l   r   -> a = a: palindrome
//            lr   -> d = d: palindrome
//"ada" - the first palindrome

firstPalindromicString(["notapalindrome","racecar"]); //"racecar"
//["notapalindrome", "racecar"]
//       ^
//checking "n o t a p a l i n d r o m e"
//          l                         r   -> n != e: not palindrome

//["notapalindrome", "racecar"]
//                        ^
//checking "r a c e c a r"
//          l           r   -> r = r: palindrome
//            l       r   -> a = a: palindrome
//              l   r   -> c = c: palindrome
//               lr -> palindrome

firstPalindromicString(["def","ghi"]); //""
