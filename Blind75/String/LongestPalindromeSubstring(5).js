//Longest Palindrome Substring (5)
//given a string 's'
//return the longest palindrome substring in s
var longestPalindromic = (s) => {
  let longest = "";

  //to check for palindromes with left and right pointer
  function isPal(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right); //we dont want to include curresnt left values
  }

  //loop through the strings
  for (let i = 0; i < s.length; i++) {
    let oddPal = isPal(s, i, i); //for odd length string - starting at the same index
    let evenPal = isPal(s, i, i + 1); //even length string - starting at the different index  with i and i+1

    //work out the longest palindrome between the odd and even Pal
    let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;

    //check the longesPal against the longest variable
    if (longestPal.length > longest.length) {
      //update the longest to longestPal
      longest = longestPal;
    }
  }
  return longest;
}
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
