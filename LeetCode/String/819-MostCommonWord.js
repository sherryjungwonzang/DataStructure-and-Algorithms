//819. Most Common Word
//given a string 'paragraph' and a string array of the banned words 'banned'
//return the most frequent word that is not banned
//it is guaranteed there is at least one word that is not banned, and that the answer is unique
//the words in paragraphs are case-inseneitive and the answer should be returned in lowercase

//Approach:
//using hash map and regex
var mostCommonWord = (paragraph, banned) => {
    let res = '';
    let map = {};
    let words = paragraph.toLowerCase().split(/[ !?',;.]/); //removing non-alphabets

    words.forEach(word => {
        if (word && !banned.includes(word)) {
            //filling hash map
            map[word] = (map[word] || 0) + 1;

            if (!res || map[word] > map[res]) res = word;
        }
    });

    return res;
}
mostCommonWord(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]); //"ball"
//words = [ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//    ^
//'bob' -> not banned
//map = {
//  bob: 1,
//}
//res = '' -> bob

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//           ^
//'hit' -> banned

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                 ^
//'bob' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//}
//res = '' -> bob -> bob

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                       ^
//'ball' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1,
//}
//res = '' -> bob -> bob -> bob

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                   ^
//'the' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1,
//  the: 1,
//}
//res = '' -> bob -> bob -> bob -> bob

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                          ^
//'hit' -> banned

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                  ^
//'ball' -> not banned & already in map
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                         ^
//'flew' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//  flew: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                                  ^
//'flew' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//  flew: 1,
//  far: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball -> ball -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                                          ^
//'flew' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//  flew: 1,
//  far: 1,
//  after: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball -> ball -> ball -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                                                ^
//'flew' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//  flew: 1,
//  far: 1,
//  after: 1,
//  it: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball -> ball -> ball -> ball -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                                                       ^
//'flew' -> not banned
//map = {
//  bob: 1,
//  a: 1,
//  ball: 1 -> 2
//  the: 1,
//  flew: 1,
//  far: 1,
//  after: 1,
//  it: 1,
//  was: 1,
//}
//res = '' -> bob -> bob -> bob -> bob -> ball -> ball -> ball -> ball -> ball -> ball

//[ 'bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
//                                                                                              ^
//'hit' -> banned

//res = ball as this frequency is 2

mostCommonWord(paragraph = "a.", banned = []); //"a"

