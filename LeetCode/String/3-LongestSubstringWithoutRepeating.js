//3. Longest Substring without repeating
//given a string s
//find the length of the longest substring without repeating characters

//Approach: 
//Set() - allow for constant lookup
//Sliding window algorithm - using with two pointers(left & right)
//moving right pointer for comparing, otherwise case
//moving left pointer when the element is already is Set

//**longestStr = max(longestStr, set.size) - set will be added and reloved based on the string
var lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let longest = 0;

    //sliding window
    let left = 0;
    let right = 0;

    while(right < s.length) {
        let letter = s[right];

        if (!set.has(letter)) {
            set.add(letter);
            longest = Math.max(longest, set.size);
            right++;
        } else {
            set.delete(s[left]); //deleting the left pointer value
            left++;
        }
    }
    return longest;
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
//longest = 3

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

