//5. Longest Palindrome Substring
//given a string 's'
//return the longest palindrome substring in s

//Approach:
//creating helper function - isPal(s, left, right) -> to check palindrome with left and right pointer
//setting respectively - even and odd length
//odd - compare the left and right side on the index
//even - compare the left and right itself

//*longest = max(longestPal, longest)
var longestPalindromic = (s) => {
    let longest = "";

    //isPal function
    function isPal(s, left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right); //not want to include curr left values
    }

    //through strings
    for (let i = 0; i < s.length; i++) {
        let oddPal = isPal(s, i, i); //for odd string - starting at the same index
        let evenPal = isPal(s, i, i + 1); //for even string - starting at the different index with i and i+1

        //compare longest between odd and even
        let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;

        if (longestPal.length > longest.length) {
            longest = longestPal;
        }
    }
    return longest;
}
//TC: O(n^2) - loop through odd length and even length 2 times
//SC: O(1) - update longest
longestPalindromic("babad"); //"bab" - "aba" is also a valid answer
//longest = ""
//isPal
//  b a b a d
//starting from 'b'
//l
//  r
//b -> is palindrome right now and update longest
//longest = "b"

//starting 'a'
//  l
//      r
//b vs b -> palindrome
//longest = "bab"

//starting 'b'
//    l
//        r
//a vs a -> palindrome
//longest = "bab" | "aba" is the same length so no update

//starting 'a'
//       l
//           r
//b vs d -> no palindrome

//starting 'd'
//          l
//              r 
//out of bound

longestPalindromic("cbbd:"); //"bb"
//longest = ""
//isPal
//  c b b d
//starting from 'c' - is the palindrome
//  l
//    r
//longest = "c"

//    l
//       r
//b vs b ->  palindrome
//longest = "bb"

//       l
//          r
//b vs d -> no palindrome
