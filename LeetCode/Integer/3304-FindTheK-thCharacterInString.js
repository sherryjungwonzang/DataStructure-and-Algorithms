//3304. Find The K-th Character In String 
//alice and Bob are playing a game
//initially, Alice has a string word = "a"
//given a positive integer k
//now Bob will ask Alice to perform the following operation forever:
//generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word
//for example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac"
//return the value of the kth character in word, after enough operations have been done for word to have at least k characters
//note that the character 'z' can be changed to 'a' in the operation

var findKthChar = (k) => {
    let str = "a";

    while (str.length < k) {
        let m = str.length;

        for (let i = 0; i < m; i++) {
            let next = "";

            //checking next char
            if (str[i] === "z") next = "a"; //special case
            else next = String.fromCharCode(str[i].charCodeAt(0) + 1);

            str = str + next;
        }
    }

    return str[k - 1];
}
findKthChar(5); //"b"
//str = "a"
//i = 0 
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"
//str = "a" + "b" = "ab"

//str = "ab"
//i = 0                                                             i = 1
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"            str[1] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"
//str = "ab" -> "abb"                                               str = "abb" + "c" = "abbc"

//str = "abbc"
//i = 0                                                             i = 1                                                           i = 2                                                           i = 3
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"            str[1] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[2] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[3] = "c" -> next = "" -> b.charCodeAt(0) + 1 = "d"
//str = "abbc" -> "abbcb"                                           str = "abbcb" + "c" = "abbcbc"                                  str = "abbcbc" + "c" = "abbcbcc"                                str = "abbcbcc" + "d" = "abbcbccd"

//str = "abbcbccd" length > k -> str[k - 1 = 4] = "b"

findKthChar(10); //"c"
//str = "a"
//i = 0 
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"
//str = "a" + "b" = "ab"

//str = "ab"
//i = 0                                                             i = 1
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"            str[1] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"
//str = "ab" -> "abb"                                               str = "abb" + "c" = "abbc"

//str = "abbc"
//i = 0                                                             i = 1                                                           i = 2                                                           i = 3
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"            str[1] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[2] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[3] = "c" -> next = "" -> c.charCodeAt(0) + 1 = "d"
//str = "abbc" -> "abbcb"                                           str = "abbcb" + "c" = "abbcbc"                                  str = "abbcbc" + "c" = "abbcbcc"                                str = "abbcbcc" + "d" = "abbcbccd"

//str = "abbcbccd"
//i = 0                                                             i = 1                                                           i = 2                                                           i = 3
//str[0] = "a" -> next = "" -> a.charCodeAt(0) + 1 = "b"            str[1] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[2] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"          str[3] = "c" -> next = "" -> c.charCodeAt(0) + 1 = "d"
//str = "abbcbccd" -> "abbcbccdb"                                   str = "abbcbccdb" + "c" = "abbcbccdbc"                          str = "abbcbccdbc" + "c" = "abbcbccdbcc"                        str = "abbcbccdbcc" + "d" = "abbcbccdbccd"

//i = 4                                                             i = 5                                                           i = 6                                                           i = 7
//str[4] = "b" -> next = "" -> b.charCodeAt(0) + 1 = "c"            str[5] = "c" -> next = "" -> c.charCodeAt(0) + 1 = "d"          str[6] = "c" -> next = "" -> c.charCodeAt(0) + 1 = "d"          str[7] = "d" -> next = "" -> d.charCodeAt(0) + 1 = "e"
//str = "abbcbccdbccd" + "c" -> "abbcbccdbccdc"                     str = "abbcbccdbccdd" + "d" = "abbcbccdbccdcd"                  str = "abbcbccdbccdcd" + "d" = "abbcbccdbccdcdd"                str = "abbcbccdbccdcdd" + "e" = "abbcbccdbccdcdde"

//str = "abbcbccdbccdcdde" length > k -> str[k - 1 = 9] = "c"
