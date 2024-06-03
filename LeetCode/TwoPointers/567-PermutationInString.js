//567. Permutation In String
//given two strings 's1' and 's2'
//return true if s2 contains a permutation of s1 or false otherwise
//in other words, return true if one of s1's permutations is the substring of s2

//Appraoch:
//using sliding windows
var permutationInString = (s1, s2) => {
    //base case
    if (s1.length > s2.length) return false;

    let char = {}; //to store frequency of s1
    let left = 0;
    let right = 0;
    let length = s1.length;

    //checking frequencies
    for (let i = 0; i < length; i++) {
        char[s1[i]] = (char[s1[i]] || 0) + 1;
    }

    //sliding windows
    while (right < s2.length) {
        //when we find s2 char in s1
        if (char[s2[right]] > 0) length--;
        char[s2[right]]--;
        right++;

        if (length === 0) return true;

        //when window length is equal to s1 length - remove left element
        if (right - left === s1.length) {
            if (char[s2[left]] >= 0) length++;
            char[s2[left]]++;
            left++;
        }
    }
    return false;
}
permutationInString("ab", "eidbaooo"); //true

permutationInString("ab", "eidboaoo"); //false

