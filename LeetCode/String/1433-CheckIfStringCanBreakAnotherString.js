//1433. Check If String Can Break Another String
//given two strings: s1 and s2 with the same size
//check if some permutation of string s1 can break some permutation of string s2 or vice-versa
//in other words s2 can break s1 or vice-versa
//a string x can break string y (both of size n ) 
//if x[i] >= y[i] (in alphabetical order) for all i between 0 and n -1

//Approach:
//using sort()
var stringBreakString = (s1, s2) => {
    let n = s1.length;
    let count1 = 0; //s1 can break s2
    let count2 = 0; //s2 can break s1
    //lexicographical order
    let char1 = Array.from(s1).sort();
    let char2 = Array.from(s2).sort();

    //iterating & comparing characters at position
    for (let i = 0; i < n; i++) {
        if (char1[i] >= char2[i]) count1++;
        if (char2[i] >= char1[i]) count2++;
    }

    if (count1 === n || count2 === n) return true; //s1 can break s2 or vice versa

    return false;
}
//TC: O(n * logn) - sort() method and iteration operation
//SC: O(n) - the lengh of the input strings
stringBreakString(s1 = "abc", s2 = "xya"); //true - "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc"

stringBreakString(s1 = "abe", s2 = "acd"); //false
//All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa

stringBreakString(s1 = "leetcodee", s2 = "interview"); //true
