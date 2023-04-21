//1328. Break a Palindrome
//given a palindromic string of lowercase English letters 'palindrome'
//replace exacly one character with any lowercase english letter so that the resulting string is not a palindrome
//and that is is the lexicographically smallest one possible

//return the resulting string
//if there is no way to replace a character to make it not a palindrome
//return an empty string

//a string 'a' is lexicographically smaller than a string 'b' of the same length
//if in the first position where a and b differs
//a has a character strictly smaller than the corresponding character in b

//ex: "abcc" is lexicographically smaller than "abcd"
//because the first position they differ is at the fourth character, and 'c' is smaller than 'd'
var breakPalindrome = (palindrome) => {
  //base case
  if (palindrome.length === 1) return "";

  //create an array from palindrome
  //.split() - splits by word
  let arr = palindrome.split("");

  //loop through array - to the half
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== "a") {
      //then this will be the first occurene that does not equal to "a"
      arr[i] = "a";
      return arr.join(""); //creates and return a new string
    }
  }

  //update the last character
  arr[arr.length - 1] = "b";

  return arr.join("");
}
//TC: O(n)
//SC: O(n)
breakPalindrome("abccba"); //"aaccba" - There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
//Of all the ways, "aaccba" is the lexicographically smallest
//arr.split() -> a b c c b a
//               i    |
//looping through till |
//b -> a

breakPalindrome("a"); //"" - there is no way to replace a single character to make "a" not a palindrome, so return an empty string
