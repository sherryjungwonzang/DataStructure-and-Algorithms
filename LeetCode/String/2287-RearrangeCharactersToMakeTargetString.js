//2287. Rearrange Characters To Make Target String
//given two 0-indexed strings s and target
//you can take some letters from s and rearrange them to form new strings
//return the maximum number of copies of target that can be formed by taking letters from s and rearranging them

//Approach:
//using hash map
var rearrangeCharacter = (s, target) => {
    let sourceMap = new Map();
    let targetMap = new Map();
    let count = Infinity;

    //frequency checking
    for (let char of target) targetMap.set(char, (targetMap.get(char) || 0) + 1);

    for (let char of s) {
        //checking target word
        if (targetMap.has(char)) sourceMap.set(char, (sourceMap.get(char) || 0) + 1);
    }

    for (let [char, targetFreq] of targetMap) {
        //edge case
        if (!sourceMap.has(char)) return 0;

        count = Math.min(count, Math.floor(sourceMap.get(char) / targetFreq));
    }

    return count;
}
rearrangeCharacter(s = "ilovecodingonleetcode", target = "code"); //2
//target = "c o d e"
//          ^ ^ ^ ^    -> targetMap = {
//                                      c: 1     
//                                      o: 1
//                                      d: 1
//                                      e: 1
//                                    }

//s = "i l o v e c o d i n g o n l e e t c o d e"
//         ^   ^ ^ ^ ^       ^     ^ ^   ^ ^ ^ ^
//sourceMap = {
//          o: 1 -> 2 -> 3 -> 4
//          e: 1 -> 2 -> 3 -> 4
//          c: 1 -> 2       
//          d: 1 -> 2
//             }

//targetMap = { c: 1, o: 1, d: 1, e: 1 } || sourceMap = { o: 4, e: 4, c: 2, d: 2 } 
//              ^                                                        ^
//count = Infi -> min(Infi, 2 / 1) = 2

//targetMap = { c: 1, o: 1, d: 1, e: 1 } || sourceMap = { o: 4, e: 4, c: 2, d: 2 } 
//                    ^                                      ^
//count = Infi -> min(Infi, 2 / 1) = 2 -> min(2, 4 / 1) = 2

//targetMap = { c: 1, o: 1, d: 1, e: 1 } || sourceMap = { o: 4, e: 4, c: 2, d: 2 } 
//                          ^                                                  ^
//count = Infi -> min(Infi, 2 / 1) = 2 -> min(2, 4 / 1) = 2 -> min(2, 2 / 1) = 2

//targetMap = { c: 1, o: 1, d: 1, e: 1 } || sourceMap = { o: 4, e: 4, c: 2, d: 2 } 
//                                ^                                ^
//count = Infi -> min(Infi, 2 / 1) = 2 -> min(2, 4 / 1) = 2 -> min(2, 2 / 1) = 2 -> min(2, 4 / 1) = 2

rearrangeCharacter(s = "abcba", target = "abc"); //1

rearrangeCharacter(s = "abbaccaddaeea", target = "aaaaa"); //1
