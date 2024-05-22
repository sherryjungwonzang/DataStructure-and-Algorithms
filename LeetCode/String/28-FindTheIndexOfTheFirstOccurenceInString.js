//28. Find the index of the first occurence in a string
//given two strings 'needle' and 'haystack'
//return the index of the first occurence of needle in haystack
//or -1 - if needle is not part of haystack

//Approach: 
//using looping through the given string
var findIndexOfFirstOccurence = (needle, haystack) => {
    if (haystack === needle || needle === "") return 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            //creating a substring from here -> .substring(start, end)
            let sub = haystack.substring(i, i + needle.length);

            //find the needle in haystack
            if (sub === needle) {
                return i;
            }
        }
    }
    return -1;
}
//TC: O(n^2)
//SC: O(n)
findIndexOfFirstOccurence("sadbutsad", "sad"); //0 - "sad" occurs at index 0 and 6 | the first occurence is at index 0
// 0 1 2 3 4 5 6 7 8    0 1 2
//"s a d b u t s a d", "s a d"

//s = s
//creating substring -> (i, i+3) = (0, 3) -> sad
//sad = sad -> return 0

findIndexOfFirstOccurence("leetcode", "leeto"); //-1 - "leeto" did not occur in "leetcode"
// 0 1 2 3 4 5 6 7    0 1 2 3 4
//"l e e t c o d e", "l e e t o"

//l = l
//creating substring -> (i, i+3) = (0, 5) -> leetc
//leetc != leeto -> return -1
