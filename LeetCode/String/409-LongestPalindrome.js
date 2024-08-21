//409. Longest Palindrome
//given a string s which consists of lowercase or uppercase letters
//return the length of the longest palindrome that can be built with those letters
//letters are case sensitive - Aa is not considered a palindrome

//Approach:
//using set
var longestPalindrome = (s) => {
    let set = new Set();
    let count = 0;

    //traversing
    for (let char of s) {
        if (set.has(char)) {
            count += 2; //meaning palindrome
            set.delete(char);
        } else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
}
longestPalindrome("abccccdd"); //7 - "dccaccd" 
//count = 0
//set = { }

//"a b c c c c d d" 
// ^ 
//set = { a }

//"a b c c c c d d" 
//   ^ 
//set = { a b }

//"a b c c c c d d" 
//     ^ 
//set = { a b c }

//"a b c c c c d d" 
//       ^ 
//set = { a b  }
//count = 0 -> 2

//"a b c c c c d d" 
//         ^ 
//set = { a b c }
//count = 0 -> 2

//"a b c c c c d d" 
//           ^ 
//set = { a b  }
//count = 0 -> 2 -> 4

//"a b c c c c d d" 
//             ^ 
//set = { a b d }
//count = 0 -> 2 -> 4

//"a b c c c c d d" 
//               ^ 
//set = { a b }
//count = 0 -> 2 -> 4 -> 6

//count + 1 = 7

longestPalindrome("a"); //1 - "a"
