//1768. Merge Strings Alternately
//given two strings word1 and word2
//merge the strings by adding letters in alternating order, starting with word1
//if a string is longer than the other, append the additional letters onto the end of the merged string
//return the merged string
var mergeStrings = (word1, word2) => {
    let res = [];

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) res.push(word1[i]);
        if (i < word2.length) res.push(word2[i]);
    }

    return res.join("");
}
//TC: O(m + n)
//SC: O(m + n)
mergeStrings("abc", "pqr"); //apbqcr
//word1:  a   b   c
//word2:    p   q   r
//merged: a p b q c r

//i = 0
//"a b c", "p q r"
// ^        ^
//res = [a, p, ]

//i = 1
//"a b c", "p q r"
//   ^        ^
//res = [a, p, b, q, ]

//i = 2
//"a b c", "p q r"
//     ^        ^
//res = [a, p, b, q, c, r]
//res = "apbqcr"

mergeStrings("ab", "pqrs"); //apbqrs
//word1:  a   b 
//word2:    p   q   r   s
//merged: a p b q   r   s

//i = 0
//"a b", "p q r s"
// ^      ^
//res = [a, p, ]

//i = 2
//"a b", "p q r s"
//   ^      ^
//res = [a, p, b, q ]

//i = 3
//"a b", "p q r s"
//     ^      ^
//res = [a, p, b, q, r ]

//i = 4
//"a b", "p q r s"
//     ^        ^
//res = [a, p, b, q, r, s]
//res = "apbqrs"

mergeStrings("abcd", "pq"); //"apbqcd"
//word1:  a   b   c   d
//word2:    p   q 
//merged: a p b q c   d
