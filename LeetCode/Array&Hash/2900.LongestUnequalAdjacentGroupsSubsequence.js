//2900. Lonest Unequal Adjacent Groups Subsequence
//You are given a string array words and a binary array groups both of length n, where words[i] is associated with groups[i]
//Your task is to select the longest alternating subsequence from words
//A subsequence of words is alternating if for any two consecutive strings in the sequence, their corresponding elements in the binary array groups differ
//Essentially, you are to choose strings such that adjacent elements have non-matching corresponding bits in the groups array

//Formally, you need to find the longest subsequence of an array of indices [0, 1, ..., n - 1] denoted as [i0, i1, ..., ik-1], 
//such that groups[ij] != groups[ij+1] for each 0 <= j < k - 1 and then find the words corresponding to these indices
//Return the selected subsequence. If there are multiple answers, return any of them
var longestUnequalAdjacentSubsequence = (words, groups) => {
    let res = [];

    //base setting
    res.push(words[0]);

    //checking groups
    for (let i = 0, j = 0; j < groups.length; j++) {
        //unequal adjacent groups
        if (groups[i] !== groups[j]) {
            res.push(words[j]);

            //updating
            i = j;
        }
    }

    return res;
}
//TC: O(n)
//SC: O(n)
longestUnequalAdjacentSubsequence(words = ["e","a","b"], groups = [0,0,1]); //["e","b"]
//res = [ "e", ]

//starting with i = 0, j = 0
//[0, 0, 1]
// i  j     -> i = j

//[0, 0, 1]
// i     j     -> i != j
//res = [ "e", "b"]

longestUnequalAdjacentSubsequence(words = ["a","b","c","d"], groups = [1,0,1,1]); //["a","b","c"]
//res = [ "a", ]

//starting with i = 0, j = 0
//[1, 0, 1, 1]
// i  j     -> i != j
//res = [ "a", "b" ] & updating i

//[1, 0, 1, 1]
//    i  j     -> i != j
//res = [ "a", "b", "c" ]  & updating i

//[1, 0, 1, 1]
//       i  j     -> i = j
//res = [ "a", "b", "c" ] 
