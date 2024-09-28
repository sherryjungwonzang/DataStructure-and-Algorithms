//2185. Counting Words With A Given Prefix
//given an array of strings words and a string pref
//return the number of strings in words that contain pref as a prefix
//a prefix of a string s is any leading contiguous substring of s

//Approach:
//using startsWith()
var countWithGivenPrefix = (words, pref) => {
    let count = 0;

    for (let word of words) {
        //checking prefix matching
        if (word.startsWith(pref)) count++;
    }

    return count;
}
countWithGivenPrefix(words = ["pay","attention","practice","attend"], pref = "at"); //2
//count = 0

//["pay", "attention", "practice", "attend"]
//   ^
//pay is not starting with at
//count = 0

//["pay", "attention", "practice", "attend"]
//             ^
//attention is starting with at
//count = 0 -> 1

//["pay", "attention", "practice", "attend"]
//                          ^
//practice is not starting with at
//count = 0 -> 1

//["pay", "attention", "practice", "attend"]
//                                     ^
//attend is starting with at
//count = 0 -> 1 -> 2

countWithGivenPrefix(words = ["leetcode","win","loops","success"], pref = "code"); //0
//count = 0

//["leetcode", "win", "loops", "success"]
//   ^
//leetcode is not starting with code
//count = 0

//["leetcode", "win", "loops", "success"]
//               ^
//win is not starting with code
//count = 0

//["leetcode", "win", "loops", "success"]
//                       ^
//loops is not starting with code
//count = 0

//["leetcode", "win", "loops", "success"]
//                                 ^
//success is not starting with code
//count = 0
