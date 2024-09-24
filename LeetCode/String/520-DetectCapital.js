//520. Detect Capital
//we define the usage of capitals in a word to be right when one of the following cases holds:
//all letters in this word are capitals, like "USA"
//all letters in this word are not capitals like "leetcode"
//only the first letter in this word is capital, like "Google"
//given a string word
//return true if the usage of capitals in it is right
var detectCapital = (word) => {
    //capital case
    if (word.toLowerCase() === word || word.toUpperCase() === word) return true;
    else if ((word[0] + word.slice(1).toLowerCase()) === word) return true;
    else return false; //non capital case
}
detectCapital("USA"); //true

detectCapital("FlaG"); //false 
