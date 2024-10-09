//1859. Sorting The Sentence
//a sentence is a list of words that are separated by a single space with no leading or trailing spaces
//each word consists of lowercase and uppercase English letters
//a sentence can be suffled by appending the 1-indexed word position to each work then rearranging the words in the sentence
//for example, the sentence "This is a sentence" can be shuffled as "sentence4 as3 is2 This1" or "is2 sentence4 This1 a3"

//given a shuffled sentence s containing no more than 9 words
//reconstruct and return the original sentence

//Approach:
//using split and sorting
var sortingSentence = (s) => {
    return s.split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1]) //sorting by number
    .map((word) => word.slice(0, word.length - 1)) //slicing only words
    .join(' ');
}
sortingSentence(s = "is2 sentence4 This1 a3"); //This is a sentence"
//splitting = is2, sentence4, This1, a3
//              ^          ^      ^   ^

//sorting = This1, is2, a3, sentence4

//slicing
//This1, is2, a3, sentence4
//----   --   -   -------- -> This, is, a, sentence
//"This is a sentence"

sortingSentence(s = "Myself2 Me1 I4 and3"); //"Me Myself and I"
//splitting = Myself2, Me1, I4, and3
//                  ^    ^   ^     ^

//sorting = Me1, Myself2, and3, I4

//slicing
//Me1, Myself2, and3, I4
//--   ------   ---   -  -> Me, Myself, and, I
//"Me Myself and I"
