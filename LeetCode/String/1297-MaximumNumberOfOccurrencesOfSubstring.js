//1297. Maximum number of occurrences of a substring
//given a string 's'
//return the max number of occurrences of any substring under the following rules
//the num of unique characters in the substring must be less than or equal to maxLetters
//the substring size must be between minSize and maxSize inclusive

//Approach:
//using hashmap and set() - to count only non-duplicate string
var maxNumOccurenceSubstr = (s, maxLetters, minSize, maxSize) => {
    let map = {}; //to collect frequencies
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let subStr = s.substring(i, i + minSize);
        let count = new Set(subStr).size; //to remove duplicates

        if (subStr.length >= minSize && count <= maxLetters) {
            map[subStr] = map[subStr] + 1 || 1;

            if (map[subStr] > max) max = map[subStr];
        }
    }
    return max;
}
maxNumOccurenceSubstr(s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4); //2 - aab has 2 occurences

maxNumOccurenceSubstr(s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3); //2 - aaa occurs 2 times in the string | can be overlapped
