//389. Find The Difference
//given two strings s and t
//string t is generated by random shuffling string s
//and then add one more letter at a random position
//return the letter that was added to t

//Approach:
//using hash table
var findDifference = (s, t) => {
    let map1 = {}; //for s
    let map2 = {}; //for t

    for (let i = 0; i < t.length; i++) {
        map1[s[i]] = (map1[s[i]] || 0) + 1;
        map2[t[i]] = (map2[t[i]] || 0) + 1;
    }

    //checking difference
    for (let key in map2) {
        if (map2[key] !== map1[key]) return key;
    }
}
findDifference("abcd", "abcde"); //"e"
//map1 = { a: 1, b: 1, c: 1, d: 1 }
//map2 = { a: 1, b: 1, c: 1, d: 1, e: 1 }
//map1 != map2 = "e"

findDifference("", "y"); //"y"
