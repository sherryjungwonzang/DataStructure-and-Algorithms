//3014. Minimum Number Of Pushes To Type Word
//given a string word containing distinct lowercase English letters
//telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them
//for example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c"
//it is allowed to remap the keys numbered 2 to 9 to distinct collections of letters
//the keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key
//you need to find the minimum number of times the keys will be pushed to type the string word
//return the minimum number of pushes needed to type word after remapping the keys
//an example mapping of letters to keys on a telephone keypad is given below
//Note that 1, *, #, and 0 do not map to any letters

//Approach:
//using greedy algorithms
var minNumPushes = (word) => {
    let len = word.length;

    //base is 8 chars
    //only 1 press for 8 chars
    if (len <= 8) return len; 

    //from 9 - 16 chars, press 2 times
    else if (len <= 16) return 8 + (len - 8) * 2;

    //from 17 - 24 chars, press 3 times
    else if (len <= 24) return 8 + 16 + (len - 16) * 3;

    //else, press 4 times
    else return 8 + 16 + 24 + (len - 24) * 4;
}
//TC: O(1)
//SC: O(1)
minNumPushes("abcde"); //5
//"abcde" -> len = 5 <= 8
//5

minNumPushes("xycdefghij"); //12
//xycdefghij -> len = 10 > 8
//press 2 times: 8 + (10 - 8) * 2 = 12
