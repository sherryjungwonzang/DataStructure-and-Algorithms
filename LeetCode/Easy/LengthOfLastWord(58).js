//58. Length of Last word
//given a string 's' consisting of words and spaces
//return the length of the last word in the string
//a word is maximal substring consisting of non-space characters only

//Approach:
//1.
//using .trim() method - removing spaces
//using .split() method - returning an array of all the words within the string
//and then select the last word within the splitted array
//TC: O(n) - length of string
//SC: O(n)

//2.
//iterating from backwards and set count variable with counting until there is an empty space
//if the count is 0 when it met the empty space - ignore
//TC: O(n) - length of string
//SC: O(1)
var lengthOfLastWord1 = (s) => {
  //trimming the spaces and creating an array of all words
  const words = s.trim().split(" ");

  //finding the last word in the array
  return words[words.length - 1].length;
}


var lengthOfLastWord2 = (s) => {
  //index of last character within the string
  let i = s.length - 1;
  //to count up characters within the string
  let count = 0;

  while(i >= 0) { //if not the first character in the string
    if (s[i] === " " && count > 0) {
      //want to iterate backwards
      return count;
    } else if (s[i] !== " ") {
      //since visited a character within the word
      count++;
    }
    i--;
  }
  return count;
}
lengthOfLastWord1("Hello World"); //5

lengthOfLastWord2("   fly me   to   the moon  "); //4

lengthOfLastWord1("luffy is still joyboy"); //6
