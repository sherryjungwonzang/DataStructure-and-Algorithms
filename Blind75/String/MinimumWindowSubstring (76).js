//Minimum Window Substring (76)
//given two strings 's' and 't' of lengths 'm' and 'n' respectively
//return the minimum window substring of s such that every character in t(including duplicates) is included  in the window
//if there is no such substring - return the empty string ""s

//Approach:
//using Map, two pointers and sliding window
var minWindowSubstring = (s, t) => {
  //set Map 
  let map = new Map();

  //loop through the values of t
  //create frequency map
  for (let letter of t) {
    if (!map.has(letter)) {
      //initialize it with 1
      map.set(letter, 1);
    } else {
      //add the current value within the map
      map.set(letter, map.get(letter) + 1);
    }
  }

  //populate the frequency map
  let left = 0;
  let right = 0;
  let len = Infinity;
  let count = map.size;
  let minWindow = "";

  while(right < s.length) {
    let rLetter = s[right];

    if (map.has(rLetter)) { //if the frequency map has the letter at the right pointer
      map.set(rLetter, map.get(rLetter) - 1); //decrement the value of that letter within the frequency map

      //additional check: whether the value is now equal to 0 - decrement count as well
      if (map.get(rLetter) === 0) count--;
    }
    right++;

    while(count === 0) { //meaning that we find the substring
      if (right - left < len) { //need to update len variable
        len = right - left; //update to the current length of the substring
        minWindow = s.slice(left, right); //not including the right pointer - slice()
      }

      //sliding window - to increment the left pointer
      let lLetter = s[left];

      if (map.has(lLetter)) {
        map.set(lLetter, map.get(lLetter) + 1);
        //to check whether the value at the letter  is greater than 0 - can increment count
        if (map.get(lLetter) > 0) count++;
      }
      left++;
    }
  }
  return minWindow;
} 
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
