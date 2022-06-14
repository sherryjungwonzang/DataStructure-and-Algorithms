//Shortest Word Distance
//given an array of strings: wordsDict
//two different strings already exist in the array: word1, word2
//return the shortest distance between two words in the list
var shortestDistance = (words, word1, word2) => {
    let index1 = null;
    let index2 = null;
    let currMin = Number.MAX_SAFE_INTEGER; //having a value of 9007199254740991

    words.forEach((word, index) => {
        //will store most recent occurence of word1 in index1 and word2 in index2
        if (word.length === word1.length && word === word1) {
            index1 = index;
        } else if (word.length === word2.length && word === word2) {
            index2 = index;
        }


        //when we get both, we will keep updating currMin
        if (index1 !== null && index2 !== null) {
            currMin = Math.min(currMin, Math.abs(index2 - index1));
        }
    });
    return currMin === Number.MAX_SAFE_INTEGER ? -1 : currMin;
};


//Approach: One pass
var shortestDistance = (words, word1, word2) => {
    let ptr = 0;

    let idx1 = -1;
    let idx2 = -1;

    let res = Infinity;

    while(ptr < words.length) {
        if (words[ptr] == word1) idx1 = ptr;
        if (words[ptr] == word2) idx2 = ptr;

        if (idx1 > -1 && idx2 > -1) {
            res = Math.min(res, Math.abs(idx1 - idx2)); //returns the lowest value
        }
        ptr++;
    }
    return res;
}
//Time Complexity: O(n)
//Space Complexity: O(1)


