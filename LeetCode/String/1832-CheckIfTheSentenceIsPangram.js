//1832. Check If The Sentence Is Pangram
//a pangram is a sentence where every letter of the English alphabet appears at least once
//given a string sentence containing only lowercase English letters
//return true if sentence is a pangram, or false otherwise

//Approach:
//using set
var isPangram = (sentence) => {
    //checking no duplicates
    return new Set(sentence.split("")).size === 26;
}
isPangram("thequickbrownfoxjumpsoverthelazydog"); //true
//set = { t, h, e, q, u, i, c, k, b, r, o,
//        w, n, f, j, x, v, u, m, p, s, g, l, a, z, y, d
//}

isPangram("leetcode"); //false
