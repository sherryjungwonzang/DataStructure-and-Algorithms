//2000. Reverse Prefix Of Word
//given a 0-indexed string word and a character ch
//reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch - inclusive
//if the character ch does not exist in word, do nothing

//for example,
//if word = abcdefg and ch = "d"
//then you should reverse the segment that starts at 0 and ends at 3 - inclusive
//the resulting string will be dcbaefd

//return the resulting string
var reversePrefix = (word, ch) => {
    //searching the index of ch
    let index = word.indexOf(ch);

    //base case
    if (index === -1) return word;

    let prefix = word.substring(0, index + 1); //extract substring before "ch"
    let reversed = prefix.split('').reverse().join('');

    return reversed + word.substring(index + 1);
}
//TC: O(n)
//SC: O(1)
reversePrefix("abcdefd", "d"); //"dcbaefd" - the first occurence of "d" is at index 3
//index = 3
//prefix = "abcd"
//reversed = "dcba"
//reversed + the rest of word = "dcba" + "efd"

reversePrefix("xyxzxe", "z"); //"zxyxxe" - the first and only occurence of "z" is at index 3
//index = 3
//prefix = "xyxz"
//reversed = "zxyx"
//reversed + the rest of word = "zxyx" + "xe"

reversePrefix("abcd", "z"); //"abcd" - "z" does not exist in word
