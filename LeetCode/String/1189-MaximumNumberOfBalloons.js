//1189. Maximum Number Of Balloons
//given a string text
//you want to use the characters of text to form as many instances of the word "balloon" as possible
//you can use each characters in text at most once
//return the max number of instances that can be formed

//Approach:
//using hash map
var maxNumBalloons = (text) => {
    let map = {}; //to collect frequency
    let count = 0;

    //checking its frequency
    for (let char of text) map[char] = (map[char] || 0) + 1;

    //checking 'balloon'
    while (map['b'] > 0 && map['a'] > 0 && map['l'] > 1 && map['o'] > 1 && map['n'] > 0) {
        count++;

        //reduce the frequency
        map['b']--;
        map['a']--;
        map['l'] -= 2;
        map['o'] -= 2;
        map['n']--;
    }

    return count;
}
maxNumBalloons("nlaebolko"); //1
//map = {
//  n: 1
//  l: 1 -> 2
//  a: 1
//  e: 1
//  b: 1
//  o: 1 -> 2
//  k: 1
//}

//checking b, a, l, l, o, o, n
//map = {
//  n: 1            -> 0
//  l: 1 -> 2       -> 1 -> 0
//  a: 1            -> 0
//  e: 1
//  b: 1            -> 0
//  o: 1 -> 2       -> 1 -> 0
//  k: 1
//}
//count = 0 -> 1

maxNumBalloons("loonbalxballpoon"); //2
//map = {
//  n: 1 -> 2
//  l: 1 -> 2 -> 3 -> 4
//  a: 1 -> 2
//  x: 1
//  b: 1 -> 2
//  o: 1 -> 2 -> 3 -> 4
//  p: 1
//}

//checking b, a, l, l, o, o, n
//map = {
//  n: 1 -> 2                   -> 1
//  l: 1 -> 2 -> 3 -> 4         -> 3 -> 2 
//  a: 1 -> 2                   -> 1
//  x: 1
//  b: 1 -> 2                   -> 1
//  o: 1 -> 2 -> 3 -> 4         -> 3 -> 2
//  p: 1
//}
//count = 0 -> 1

//map = {
//  n: 1 -> 2                   -> 1                -> 0
//  l: 1 -> 2 -> 3 -> 4         -> 3 -> 2           -> 1 -> 0
//  a: 1 -> 2                   -> 1                -> 0
//  x: 1
//  b: 1 -> 2                   -> 1                -> 0
//  o: 1 -> 2 -> 3 -> 4         -> 3 -> 2           -> 1 -> 0
//  p: 1
//}
//count = 0 -> 1 -> 2

maxNumBalloons("leetcode"); //0
