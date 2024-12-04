//2423. Remove Letter To Equalize Frequency
//given a 0-indexed string word, consisting of lowercase English letters
//you need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal
//return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise
//note:
//the frequency of a letter x is the number of times it occurs in the string
//you must remove exactly one letter and cannot choose to do nothing

//Approach:
//using hash map and set
var toEqualizeFrequency = (word) => {
    let map = {};

    //checking frequency
    for (let i = 0; i < word.length; i++) {
        if (!map[word[i]]) map[word[i]] = 1;
        else map[word[i]]++;
    }

    let val = Object.values(map);

    for (let i = 0; i < val.length; i++) {
        let arr = Array.from(val);

        if (arr[i] === 1) arr.splice(i, 1);
        else arr[i]--;

        if (new Set(arr).size === 1) return true;
    }

    return false;
}
toEqualizeFrequency("abcc"); //true
// a b c c
// ^
//map = {
//   a: 1,
//   b: 1,      -> val = [1, 1, 2]
//   c: 2
//}

//arr = [1, 1, 2]                           arr = [1, 1, 2]                             arr = [1, 1, 2]
//       ^                                            ^                                              ^
//arr[0] = 1 -> splice(0, 1) = [1, 2]       arr[1] = 1 -> splice(1, 1) = [1, 2]         arr[2] = 2 -> reducing = [1, 1, 1]
//set = {1, 2} -> length != 1               set = {1, 2} -> length != 1                 set = {1} -> length = 1
//False                                     False                                       True

//True

toEqualizeFrequency("aazz"); //false
// a a z z
// ^
//map = {
//   a: 2,
//   z: 2,      -> val = [2, 2]
//}

//arr = [2, 2]                              arr = [2, 2]
//       ^                                            ^
//arr[0] = 2 -> reducing = [1, 2]           arr[1] = 2 -> reducing = [2, 1]
//set = {1, 2} -> length != 1               set = {2, 1} -> length != 1  
//False                                     False  

//False
