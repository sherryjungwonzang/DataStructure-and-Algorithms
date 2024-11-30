//2325. Decode The Message
//given the strings key and message, which represent a cipher key and a secret message, respectively
//the steps to decode message are as follows:
//use the first appearance of all 26 lowercase English letters in key as the order of the substitution table
//align the substitution table with the regular English alphabet
//each letter in message is then substituted using the table
//spaces ' ' are transformed to themselves

//for example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), 
//we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f')
//return the decoded message

//Approach:
//using hash map
var decodeMessage = (key, message) => {
    let res = '';
    let map = new Map();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    //clearing key and splitting - no duplicates
    key = Array.from(new Set(key.split(' ').join('')));

    //mapping
    for (let i = 0; i < alphabet.length; i++) map.set(key[i], alphabet[i]);

    //checking message
    for (let char of message) res += map.get(char) || ' ';

    return res;
}
decodeMessage(key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"); //"this is a secret"
//key = [ 't', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'x', 'j', 'm', 'p', 's', 'v', 'l', 'a', 'z', 'y', 'd', 'g' ]
//         ^

//map = {
// 't' => 'a',  'n' => 'm', 'd' => 'y',
// 'h' => 'b',  'f' => 'n', 'g' => 'z'
// 'e' => 'c',  'x' => 'o',
// 'q' => 'd',  'j' => 'p',
// 'u' => 'e',  'm' => 'q',
// 'i' => 'f',  'p' => 'r',
// 'c' => 'g',  's' => 's',
// 'k' => 'h',  'v' => 't',
// 'b' => 'i',  'l' => 'u',
// 'r' => 'j',  'a' => 'v',
// 'o' => 'k',  'z' => 'w',
// 'w' => 'l',  'y' => 'x',
//}

//"vkbs bs t suepuv" -> "this is a secret"

decodeMessage(key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"); //"the five boxing wizards jump quickly"
