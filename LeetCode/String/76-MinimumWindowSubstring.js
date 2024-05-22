//76. Minimum Window Substring
//given two strings 's' and 't' of lengths 'm' and 'n' respectively
//return the minimum window substring of s such that every character in t(including duplicates) is included  in the window
//if there is no such substring - return the empty string ""

//Approach:
//using Map - two pointers and sliding window
//1) setting map and create a frequency map with 't'
//2) populate the frequency map with 's'
//when count is 0 -> slice the substring and store into minWindow
var minWindowSubstring = (s, t) => {
    let map = new Map();

    //frequency map of 't'
    for (let letter of t) {
        if (!map.has(letter)) {
            map.set(letter, 1);
        } else {
            map.set(letter, map.get(letter) + 1);
        }
    }

    //populating the frequency map
    let left = 0;
    let right = 0;
    let count = map.size;
    let minWindow = "";
    let len = Infinity;

    //sliding window
    while(right < s.length) {
        let rLetter = s[right];

        if (map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter) - 1); //rLetter - decrementing the map

            if (map.get(rLetter) === 0) count--;
        }
        right++;
 
        //when find the substring
        while(count === 0) {
            if (right - left < len) {
                len = right - left; //updating the curr length of the substring
                minWindow = s.slice(left, right);
            }

            let lLetter = s[left];

            if (map.has(lLetter)) {
                map.set(lLetter, map.get(lLetter) + 1);

                if (map.get(lLetter) > 0) count++;
            }
            left++;
        }
    }
    return minWindow;
}
//TC:O(t + s) - t is all the values within t string, s is all the letters winthin the string
minWindowSubstring("ADOBECODEBANC", "ABC"); //"BANC" - including A, B, and C from string t
// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
// r
//map = { A: 1, B: 1, C: 1 } - t's frequency map
//len = Infinity
//count = 3
//minWindow = ""
//A is in map -> map = { A: 0, B: 1, C: 1 } || count = 2 || right++

// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
//    r  r
//map = { A: 0, B: 1, C: 1 }
//len = Infinity
//count = 2
//minWindow = ""
//D is not in map || O is not in map  

// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
//          r
//map = { A: 0, B: 1, C: 1 }
//len = Infinity
//count = 2
//minWindow = ""
//B is in map -> map = { A: 0, B: 0, C: 1 } || count = 1 || right++

// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
//             r
//map = { A: 0, B: 0, C: 1 }
//len = Infinity
//count = 1
//minWindow = ""
//E is not in map -> right++

// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
//                r
//map = { A: 0, B: 0, C: 1 }
//len = Infinity
//count = 1
//minWindow = ""
//C is in map -> map = { A: 0, B: 0, C: 0 } || count = 0 || right++
//count is 0 -> create a subsstring: "ADOBEC"
//sliding window -> left pointer

// A  D  O  B  E  C  O  D  E  B  A  N  C
// l
//                   r
//map = { A: 0, B: 0, C: 0 }
//len = Infinity
//count = 0
//minWindow = "" -> "ADOBEC"
//A is in map -> map = { A: 1, B: 0, C: 0 } || count = 1 || left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//    l   
//                   r
//map = { A: 1, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"


// A  D  O  B  E  C  O  D  E  B  A  N  C
//    l 
//                         r
//map = { A: 1, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//D is not in map || E is not in map -> right++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//    l 
//                            r
//map = { A: 1, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//B is in map -> map = { A: 1, B: -1, C: 0 } || count = 1 || right++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//    l 
//                               r
//map = { A: 1, B: -1, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//A is in map -> map = { A: 0, B: -1, C: 0 } || count = 0 || right++
//count is 0 -> create a subsstring: "DOBECODEBA" : not less than minWindow
//sliding window -> left pointer

// A  D  O  B  E  C  O  D  E  B  A  N  C
//    l  l
//                                  r
//map = { A: 0, B: -1, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//D is not in map || O is not in map -> left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//          l
//                                  r
//map = { A: 0, B: -1, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//B is in map -> map = { A: 0, B: 0, C: 0 } || count = 0 || left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//             l
//                                  r
//map = { A: 0, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//E is not in map -> left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//                l
//                                  r
//map = { A: 0, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//C is in map -> map = { A: 0, B: 0, C: 1 } || count = 1 || left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//                   l
//                                  r
//map = { A: 0, B: 0, C: 1 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//N is not in map -> right++
 
// A  D  O  B  E  C  O  D  E  B  A  N  C
//                   l
//                                     r
//map = { A: 0, B: 0, C: 1 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//C is in map -> map = { A: 0, B: 0, C: 0 } || count = 0 || right++
//count is 0 -> create a subsstring: "ODEBANC" : not less than minWindow
//sliding window -> left pointer

// A  D  O  B  E  C  O  D  E  B  A  N  C
//                      l  l
//                                     r
//map = { A: 0, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//D is not in map || E is not in map -> left++

// A  D  O  B  E  C  O  D  E  B  A  N  C
//                            l
//                                     r
//map = { A: 0, B: 0, C: 0 }
//len = Infinity
//count = 1
//minWindow = "" -> "ADOBEC"
//B is in map -> map = { A: 0, B: 1, C: 0 } || count = 1 || right++
//create a subsstring: "BANC" : less than minWindow
//right pointer is out of bound

//minWindow = "" -> "BANC"

minWindowSubstring("a", "a"); //"a" - the entire string s is the min window

minWindowSubstring("a", "aa"); //"" - both 'a's from t must be included in the window
