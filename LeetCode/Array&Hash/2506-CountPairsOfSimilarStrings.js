//2506. Count Pairs Of Similar Strings
//given a 0-indexed string array words
//two strings are similar if they consist of the same characters
//for example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'
//however, "abacba" and "bcfd" are not similar since they do not consist of the same characters
//return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar

//Approach:
//using hash set
var countPairs = (words) => {
    let m = words.length;
    let count = 0;

    //traversing
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            if (similarStrings(words[i], words[j]) && i !== j) count++;
        }
    }

    //checking similar strings
    function similarStrings(word1, word2) {
        let set1 = new Set(word1);
        let set2 = new Set(word2);

        //base case
        if (set1.size !== set2.size) return false;

        //checking set 1 and set2
        return [...set1].every((i) => set2.has(i));
    }

    return count;
}
countPairs(words = ["aba","aabb","abcd","bac","aabc"]); //2
//["aba", "aabb", "abcd", "bac", "aabc"]
//   i
//           j
//set1 = { a, b } = set2 = { a, b }
//set2 has a, b -> true
//count = 0 -> 1

//["aba", "aabb", "abcd", "bac", "aabc"]
//   i
//                   j
//set1 = { a, b } != set2 = { a, b, c, d }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//   i
//                          j
//set1 = { a, b } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//   i
//                                 j
//set1 = { a, b } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//           i
//                   j
//set1 = { a, b } != set2 = { a, b, c, d }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//           i
//                          j
//set1 = { a, b } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//           i
//                                 j
//set1 = { a, b } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//                  i
//                           j
//set1 = { a, b, c, d } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//                  i
//                                  j
//set1 = { a, b, c, d } != set2 = { a, b, c }
//false

//["aba", "aabb", "abcd", "bac", "aabc"]
//                          i
//                                  j
//set1 = { a, b, c } = set2 = { a, b, c }
//set2 has a, b, c -> true
//count = 0 -> 1 -> 2

countPairs(words = ["aabb","ab","ba"]); //3

countPairs(words = ["nba","cba","dba"]); //0
