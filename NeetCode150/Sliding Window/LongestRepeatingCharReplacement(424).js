//Longest Repeating character replacement (424)
//given a string s and an integer k
//can choose any character of the string and change it to any other uppercase character
//can perform this operation at most k times
//return the length of the longest substring containing the same letter you can get after performing the abovr operation

//Approach: 
//map - to store how many times we see each characters
//two pointers - left and right
//moving the right pointer when it is not valid -> (right - left + 1) - topFreq > 0
//moving the left pointer when it is valid -> (right - left + 1) - topFreq < 0

//the length of substring = (right - left + 1)
//(right - left + 1) - Top frequency = Small frequency
//the freq in map has relating to topFreq

//**longest = max(longest, (right - left + 1))
var longestRepeatingCharReplacement = (s, k) => {
  let map = {};
  
  let topFreq = 0; //the character that we have seen the most throughout the map
  let longest = 0;

  let left = 0; //will move when it is not a valid
  let right = 0; //will move when it is valid

  while(right < s.length) {
    //extract the right character
    let rightChar = s[right];

    //update the map
    //if already there is a value, add 1 - otherwise, just add 1
    map[rightChar] = map[rightChar] + 1 || 1; 
    //update the topFreq
    topFreq = Math.max(topFreq, map[rightChar]);

    //equation to check whether it is valid or not
    while((right - left + 1) - topFreq > k) { //meaning not valid
      //need to update the left pointer
      let leftChar = s[left];
      map[leftChar]--; //decrement the leftChar's value
      left++; //shift the left pointer
    }

    //update the longest
    //comparing between the current longest value and the length of the string
    longest = Math.max(longest, (right - left + 1));

    //shift the right pointer
    right++;
  }
  return longest;
}
//TC: O(n) - n is the length of the string
//SC: O(n) - n is the amount of keys within the map

//ex: A A B A B B A
//        ^
//        A
//    l     r
//    --------  --> to have the length of substring: (r - l + 1)
//to get the amount of 'B' within this substring -> need to subtract the A's
//so need to grab the frequency of A's
//(R - L + 1) -A's frequency = B and when B is less than or equal to k, then we can update the longest to the length of this substring 

longestRepeatingCharReplacement("AABABBA", 1); //4 - replace the one 'A' in the middle with 'B' and form 'AABBBBA' | BBBB is the longest repeating letters
//  0 1 2 3 4 5 6 : index
//  A A B A B B A
//  l
//      r
//topFreq: 2 
//map = { A: 2, B: 1 }
//longest = 2

//(when the r is in the first B) to check the equation -> (2 - 0 + 1) - 2 = 1 || so B which is the smallest frequency in the map is 1 || B is valid
//(when we compare with k and the smallest frequency -> smallest freq is less than or equal to k) YES : then we need to update the longest with (r - l + 1) amount
//longest = 3

//  A A B A B B A
//  l
//        r
//topFreq: 3 
//map = { A: 3, B: 1 }
//longest = 3
//to check the equation -> (3 - 0 + 1) - 3 = 1 || the smallest frequency in the map is 1 || Valid
//(smallest freq is less than or equal to k) YES : then we need to update the longest with (r - l + 1) amount
//longest = 4

//  A A B A B B A
//  l
//          r
//topFreq: 3 
//map = { A: 3, B: 2 }
//longest = 4
//to check the equation -> (4 - 0 + 1) - 3 = 2 || the smallest frequency in the map is 2
//(smallest freq is less than or equal to k) NO : then we need to decrement the value of A from the map and shift the left pointer
//map = { A: 2, B: 2 } and need to update the topFreq to the highest point topFreq: 2

//  A A B A B B A
//    l
//          r
//topFreq: 2
//map = { A: 2, B: 2 }
//longest = 4
//to check the equation -> (4 - 1 + 1) - 2 = 2 || the smallest frequency in the map is 2
//(smallest freq is less than or equal to k) NO : then we need to decrement the value of A from the map and shift the left pointer
//topFreq is still 2 but map = { A: 1, B: 2 } - A decrements

//  A A B A B B A
//      l
//          r
//topFreq: 2
//map = { A: 1, B: 2 }
//to check the equation -> (4 - 2 + 1) - 2 = 1 || the smallest frequency in the map is 1 || Valid
//longest = 4 vs BAB -> longest is still the longest so keep doing

//  A A B A B B A
//    l
//            r
//topFreq: 3
//map = { A: 1, B: 3 }
//longest = 4
//to check the equation -> (5 - 2 + 1) - 3 = 1 || the smallest frequency in the map is 1 || Valid
//longest = 4 vs BABB -> found the same longest length of substring so keep 4
//there is no longest length that we can make from the string -> so THE END

longestRepeatingCharReplacement("ABAB", 2); //4 - replace the two 'A's with two 'B's or vice versa
//  A B A B
//  l
//  r
//topFreq: 1
//map = { A: 1 }
//longest = 1

//  A B A B
//  l
//    r
//topFreq: 1
//map = { A: 1, B: 1 }
//longest = 1
//to check the equation -> (1 - 0 + 1) - 1 = 1 || the smallest frequency in the map is 1 || Valid
//(smallest freq is less than or equal to k) YES : then we need to update the longest with (r - l + 1) amount
//longest = 2

//  A B A B
//  l
//      r
//topFreq: 2
//map = { A: 2, B: 1 }
//longest = 2
//to check the equation -> (2 - 0 + 1) - 2 = 1 || the smallest frequency in the map is 1 || Valid
//(smallest freq is less than or equal to k) YES : then we need to update the longest with (r - l + 1) amount
//longest = 3

//  A B A B
//  l
//        r
//topFreq: 2
//map = { A: 2, B: 2 }
//longest = 3
//to check the equation -> (3 - 0 + 1) - 2 = 2 || the smallest frequency in the map is 2 || Valid
//(smallest freq is less than or equal to k) YES : then we need to update the longest with (r - l + 1) amount
//longest = 4 - THE END
