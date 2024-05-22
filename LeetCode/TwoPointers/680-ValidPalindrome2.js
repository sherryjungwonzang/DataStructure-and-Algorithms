//680. Valid PalindromeII
//given a string 's'
//return true if the s can be palindrome, after deleting at most one character from it

//Approach:
//using two pointers
var validPalindrome2 = (s) => {
    //two pointers
    let left = 0;
    let right = s.length - 1;

    //checking palindrome - isPal() function
    while(left < right) {
        if (s[left] !== s[right]) {
            //excluding one pointer and checking the rest - left + 1 or right - 1 to exclude
            return isPal(s, left + 1, right) || isPal(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

function isPal(s, left, right) {
    while(left < right) {
        //not palindrome
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
//TC: O(n) - characters within the string
//SC: O(1)
validPalindrome2("aba"); //true
//a b a
//l   r -> palindrome

validPalindrome2("abca"); //true - you could delete the character 'c'
//a b c a
//l     r -> palindrome
//  l r

//excluding b -> checking aca: palindrome
//excluding c -> checking aba: palindrome

validPalindrome2("abc"); //false
//a b c
//l   r

//excluding a -> bc: non palindrome
//excluding c -> ab: non palindrome
