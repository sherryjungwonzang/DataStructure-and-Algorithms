//Palindrome Substrings(647)
//given a string 's'
//return the num of palindromic sunstrings in it
//string is a palindrome when it reads the same backward as forward
//substring is a contiguous sequence of characters within the string

//Approach:
//using left and right pointer and expand it to find the palindrome
//using the helper function for odd and even array
var palindromicSubstrings = (s) => {
  let count = 0;

  //loop through strings
  for (let i = 0; i < s.length; i++) {
    //left and right is starting from the same index
    let left = i;
    let right = i;

    //helper function for odd
    helper(left, right);

    //helper function for even
    helper(left, right + 1);
  }

  function helper(left, right) {
    //loop through the substrings
    while(left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      count++;

      //expand our left and right
      left--;
      right++;
    }
  }
  return count;
}
palindromicSubstrings("abc"); //3 - three palindromic strings: "a", "b", "c"
//   a b c 
//   ^
//count = 1 - 'a' itself
// <   > : expand - out of range
//     ^
//count = 2 - 'b' itself
//   <   > : expand - a vs c is not palindrome
//       ^
//count = 3 - 'c' itself
//     <   > : expand - out of range

palindromicSubstrings("aaa"); //6 - six palindrome strings: "a", "a", "a", "aa", "aa"
//   a a a 
//   ^
//count = 1 - 'a' itself
// <   > : expand - out of range
//     ^
//count = 2 - 'a' itself
//   <    > : expand - a vs a is palindrome
//count = 3 - 'aa'
//   -  - : a vs a is palindrome
//count = 4 - 'aa'
//     -  - : a vs a is palindrome
//count = 5 - 'aa'
//        ^
//count = 6 - 'a' itself
//      <   > : expand - out of range
