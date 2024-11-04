//2351. First Letter To Appear Twice
//given a string s consisting of lowercase English letters
//return the first letter to appear twice
//Note:
//a letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b
//s will contain at least one letter that appears twice

//Approach:
//using hash set
var firstRepeatedChar = (s) => {
    let set = new Set();

    //traversing
    for (let i = 0; i < s.length; i += 1) {
        let curr = s[i];

        //appears twice
        if (set.has(curr)) return curr;
        else set.add(curr);
    }
}
firstRepeatedChar("abccbaacz"); //"c"
//a b c c b a a c z
//^
//set = { a, }

//a b c c b a a c z
//  ^
//set = { a, b,  }

//a b c c b a a c z
//    ^
//set = { a, b, c, }

//a b c c b a a c z
//      ^
//c is already in set, meaning the first repeated char
//"c"

firstRepeatedChar("abcdd"); //"d"
//a b c d d
//^
//set = { a, }

//a b c d d
//  ^
//set = { a, b, }

//a b c d d
//    ^
//set = { a, b, c }

//a b c d d
//      ^
//set = { a, b, c, d }

//a b c d d
//        ^
//d is already in set, meaning the first repeated char
//"d"
