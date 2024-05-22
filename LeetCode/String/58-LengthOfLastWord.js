//58. Length of Last word
//given a string 's' consisting of words and spaces
//return the length of the last word in the string
//a word is maximal substring consisting of non-space characters only

//Approach 1:
//using .trim() method - removing spaces
//using .split() method - returning an array of all the words within the string
//and then select the last word within the splitted array
var lengthOfLastWord1 = (s) => {
    //trim()
    const words = s.trim().split(" ");

    //find the last word in the array and extract the length
    return words[words.length - 1].length;
}
//TC: O(n) - length of string
//SC: O(n)
lengthOfLastWord1("luffy is still joyboy"); //6

lengthOfLastWord1("Hello World"); //5


//Approach 2:
//iterating from backwards and set count variable with counting until there is an empty space
//if the count is 0 when it met the empty space - ignore
var lengthOfLastWord2 = (s) => {
    //starting from backwards
    let i = s.length - 1;
    let count = 0;

    //backwards looping
    while (i >= 0) {
        //loop until we meet the empty space
        if(s[i] === " " && count > 0) {
            return count;
        } else if (s[i] !== " ") {
            count++; //updating count within the valid string
        }
        i--; //keep moving
    }
    return count;
}
//TC: O(n) - length of string
//SC: O(1)
lengthOfLastWord2("   fly me   to   the moon  "); //4
