//205. Isomorphic Strings
//given two strings 's' and 't'
//determine if they are isomorphic
//two strings s and t are isomorphic if the characters in s can be replaced to get t

//all occurences of a character must be replaced with another character while preserving the order of characters
//no two characters may map to the same character, but a character may map to itself

//Approach:
//using hashmap
var isomorphicStrings = (s, t) => {
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (!mapS.has(charS) && !mapT.has(charT)) {
            mapS.set(charS, charT);
            mapT.set(charT, charS);
        } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
            return false;
        }
    }
    return true;
}
//TC: O(n) - the length of the input strings s and t
//SC: O(k) - num of distinct characters in the input string s and t
isomorphicStrings("egg", "add"); //true

isomorphicStrings("foo", "bar"); //false

isomorphicStrings("paper", "title"); //true
