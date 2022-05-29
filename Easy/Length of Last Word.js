//Length of Last Word
//given a string s consisting of words and spaces
//return the length of the last word in the string
var lengthOfLastWord = (s) => {
    let count = 0; //counting the length of the word

    for (let i = s.length - 1; i >= 0; i--) { //starting from the back for the last word
        //if it is empty and count is greater than 0, already there is a word
        if (s[i] === " " && count > 0) return count;

        //if it is an empty at the start of the back, just continue instead of adding it as a letter
        if(s[i] === " ") continue;

        //if it isn't an empty, it means we are on the final word
        //add it to the count and move on to the next index
        count++;
    }
    return count; //return the length of the last word
};

//Time Complexity: O(n)
//Space Complexity: O(1)
