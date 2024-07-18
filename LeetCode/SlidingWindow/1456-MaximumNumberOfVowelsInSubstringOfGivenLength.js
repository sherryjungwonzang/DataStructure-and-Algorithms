//1456. Maximum Number Of Vowels In Substring Of Given Length
//given a string 's' and an integer 'k'
//return the max number of vowel letters in any substring of a with length k

//Approach:
//using sliding window
var maxNumVowels = (s, k) => {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let start = 0;
    let count = 0; //vowels for curr substring
    let maxCount = 0;

    //expanding the right window
    for (let end = 0; end < s.length; end++) {
        //count of vowels for curr substring
        if (vowels.has(s[end])) count += 1;

        //shrinking the window
        if (end - start + 1 > k) {
            if (vowels.has(s[start])) count -= 1; //reducing curr count if there is vowel

            start += 1; //shrinking
        }

        maxCount = Math.max(maxCount, count);

        if (maxCount === k) return maxCount;
    }

    return maxCount;
}
maxNumVowels("abciiidef", 3); //3 - 'iii' contains 3 vowel letters
//"a b c i i i d e f"
// s
// e
//count = 0 -> 1
//maxCount = 0 -> 1
//end-start+1 = 1

//"a b c i i i d e f"
// s
//   e
//count = 0 -> 1 -> 1
//maxCount = 0 -> 1 -> 1
//end-start+1 = 1 2

//"a b c i i i d e f"
// s
//     e
//count = 0 -> 1 -> 1 -> 1
//maxCount = 0 -> 1 -> 1 -> 1
//end-start+1 = 1 2 3

//"a b c i i i d e f"
// s
//       e
//count = 0 -> 1 -> 1 -> 1 -> 2 -> 1(a)
//maxCount = 0 -> 1 -> 1 -> 1 -> 2 -> 2
//end-start+1 = 1 2 3 4

//"a b c i i i d e f"
//   s
//         e
//count = 0 -> 1 -> 1 -> 1 -> 2 -> 1(a) -> 2 -> 2(b)
//maxCount = 0 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2
//end-start+1 = 1 2 3 4 4

//"a b c i i i d e f"
//     s
//           e
//count = 0 -> 1 -> 1 -> 1 -> 2 -> 1(a) -> 2 -> 2(b) -> 3
//maxCount = 0 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3
//end-start+1 = 1 2 3 4 4 4 

//"a b c i i i d e f"
//       s
//             e
//count = 0 -> 1 -> 1 -> 1 -> 2 -> 1(a) -> 2 -> 2(b) -> 3
//maxCount = 0 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3
//end-start+1 = 1 2 3 4 4 4 

//3
maxNumVowels("aeiou"), 2; //2 - any substring of length 2 contains 2 vowels

maxNumVowels("leetcode", 3); //2 - "lee", "eet", "ode" contain 2 vowels
