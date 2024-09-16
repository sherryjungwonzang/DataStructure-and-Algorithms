//1668. Maximum Repeating Substring
//for a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence
//the word's max k-repeating value is the highest value k where word is k-repeating in sequence
//if word is not a substring of sequence, word's maximum k-repeating value is 0

//given strings sequence and word
//return the maximum k-repeating value of word in sequence
var maxRepeatingSubstring = (sequence, word) => {
    let str = word;
    let count = 0;

    while (sequence.includes(str)) {
        count++;

        //checking repeating
        str += word;
    }

    return count;
}
maxRepeatingSubstring("ababc", "ab"); //2 - ab, abab
//str = ab

//ababc -> includes "ab"
//count = 0 -> 1
//str = abab

//ababc -> includes "ab"
//count = 0 -> 1 -> 2
//str = ababab

//there is no ababab

maxRepeatingSubstring("ababc", "ba"); //1 - ba
//str = ba

//ababc -> includes "ba"
//count = 0 -> 1
//str = baba

//there is no baba

maxRepeatingSubstring("ababc", "ac"); //0
