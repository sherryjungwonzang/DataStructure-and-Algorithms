//Longest Substring without repeating (3)
//given a string s
//find the length of the longest substring without repeating characters

//Approach: Set and Sliding window algorithm
var lengthOfLongestSubstring = (s) => {
  let longestStr = 0;
  let set = new Set();

  let left = 0;
  let right = 0;

  //sliding window
  while(right < s.length) {
    let letter = s[right]; //the letter that needs to be compared with 

    if (!set.has(letter)) {
      set.add(letter);
      longestStr = Math.max(longestStr, set.size);
      right++;
    } else { //if there is no letter in the set
      set.delete(s[left]);
      left++;
    }
  }
  return longestStr;
}
//TC: O(2n)-> O(n)
//SC: O(n)
lengthOfLongestSubstring("a b c a b c b b"); //3 - abs
//                        l
//                        r
//check if the element is in the set{} - if not, add it and move right pointer to the right
//if there is, remove the left element from set and move left pointer to the right
//set={ a }
//Longest = 1
//                        l
//                          r
//set={ a b }
//Longest = 2
//                        l
//                            r
//set={ a b c }
//Longest = 3
//                        l
//                              r
//set={ b c } - remove a and move left pointer to the next
//Longest = 3
//                          l
//                              r
//set={ b c a } - add a at the end
//Longest = 3
//...
//                                      l
//                                      r
//set={ b }


lengthOfLongestSubstring("b b b b"); //1 - b
//                        l
//                        r
//set={ b }
//Longest = 1
//                        l
//                          r
//set={  } - remove b and move left pointer to the next
//Longest = 1
//                          l
//                          r
//set={ b } - add b again and move right pointer
//Longest = 1
//                          l
//                            r
//set={  } - remove b and move left pointer to the next
//Longest = 1
//...

lengthOfLongestSubstring("p w w k e w"); //3 - wke
//                        l
//                        r
//set={ p }
//Longest = 1
//                        l
//                          r
//set={ p w }
//Longest = 2
//                        l
//                             r
//set={ w } - remove p and move left pointer
//Longest = 2
//                          l
//                             r
//set={  } - remove w and move left pointer
//Longest = 2
//                             l
//                             r
//set={ w } - add w and move right pointer
//Longest = 2
//                             l
//                               r
//set={ w k } - add k and move right pointer
//Longest = 2
//                             l
//                                 r
//set={ w k e } - add e and move right pointer
//Longest = 3
//                             l
//                                   r
//set={ k e } - remove w and move left pointer
//Longest = 3
//                               l
//                                   r
//set={ k e w } - add w and move right pointer
//Longest = 3
//the end


