//459. Repeated Substring Pattern
//given a string s
//check it is can be constructed by taking a substring of it and appending multiple copies of the substring together

//Approach:
//using slice
var repeatedSubstringPattern = (s) => {
    let n = s.length;

    for (let i = 1; i <= n / 2; i++) {
        if (n % 1 === 0) { //valid repeated substr length
            let substr = s.slice(0, i);
            let repeated = "";

            //check all possible substrings
            for (let j = 0; j < n / i; j++) {
                repeated += substr;
            }

            if (repeated === s) return true;
        }
    }

    return false;
}
repeatedSubstringPattern("abcabcabcabc"); //true - "abc" four times or "abcabc twice
//n = 12
//i = 1 || 12 % 1 = 0
//substr = s.slice(0, 1) = a
//repeated = " "                j = 0 -> repeated = a
//                              j = 1 -> repeated = aa
//                              j = 2 -> repeated = aaa
//...
//                              j = 11 -> repeated = aaaaaaaaaaaa

//i = 2 || 12 % 2 === 0
//substr = s.slice(0, 2) = ab
//repeated = " "                j = 0 -> repeated = ab
//                              j = 1 -> repeated = abab
//                              j = 2 -> repeated = ababab
//                              j = 3 -> repeated = abababab
//                              j = 4 -> repeated = ababababab
//                              j = 5 -> repeated = abababababab

//i = 3 || 12 % 3 === 0
//substr = s.slice(0, 3) = abc
//repeated = " "                j = 0 -> repeated = abc
//                              j = 1 -> repeated = abcabc
//                              j = 2 -> repeated = abcabcabc
//                              j = 3 -> repeated = abcabcabcabc
//repeated = s -> True

repeatedSubstringPattern("aba"); //false
//n = 3
//i = 1 || 3 % 1 = 0
//substr = s.slice(0, 1) = a
//repeated = " "                j = 0 -> repeated = a
//                              j = 1 -> repeated = aa
//                              j = 2 -> repeated = aaa

//no repeated substring

repeatedSubstringPattern("abab"); //true - substring "ab twice"
//n = 4
//i = 1 || 4 % 1 = 0
//substr = s.slice(0, 1) = a
//repeated = " "                j = 0 -> repeated = a
//                              j = 1 -> repeated = aa
//                              j = 2 -> repeated = aaa
//                              j = 3 -> repeated = aaaa

//i = 2 || 4 % 2 = 0
//substr = s.slice(0, 2) = ab
//repeated = " "                j = 0 -> repeated = ab
//                              j = 1 -> repeated = abab
//
//repeated = s -> True
