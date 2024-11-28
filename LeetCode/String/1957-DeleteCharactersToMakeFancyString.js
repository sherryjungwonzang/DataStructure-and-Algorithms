//1957. Delete Characters To Make Fancy String
//a fancy string is a string where no three consecutive characters are equal
//given a string s
//delete the minimum possible number of characters from s to make it fancy
//return the final string after the deletion. It can be shown that the answer will always be unique
var fancyString = (s) => {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        let len = res.length;

        //fancy string
        if (len < 2 || !(res[len - 1] === s[i] && res[len - 2] === s[i])) res += s[i];
    }  

    return res;
}
//TC: O(n)
//SC: O(n)
fancyString("leeetcode"); //"leetcode"
//res = ''

//l e e e t c o d e
//^
//len = 0 < 2 -> fancy string
//res = '' -> 'l'

//l e e e t c o d e
//  ^
//len = 1 < 2 -> fancy string
//res = '' -> 'l' -> 'le'

//l e e e t c o d e
//    ^
//len = 2 = 2 || 'e' = 'e' && 'l' != 'e' -> fancy string
//res = '' -> 'l' -> 'le' -> 'lee'
//                    ^^

//l e e e t c o d e
//      ^
//len = 3 > 2 || 'e' = 'e' && 'e' = 'e' -> non fancy string
//res = '' -> 'l' -> 'le' -> 'lee'
//                             ^^

//l e e e t c o d e
//        ^
//len = 3 > 2 || 'e' != 't' && 'e' != 't' ->  fancy string
//res = '' -> 'l' -> 'le' -> 'lee' -> 'leet'
//                             ^^

//l e e e t c o d e
//          ^
//len = 4 > 2 || 't' != 'c' && 'e' != 'c' ->  fancy string
//res = '' -> 'l' -> 'le' -> 'lee' -> 'leet' -> 'leetc'
//                                       ^^

//l e e e t c o d e
//            ^
//len = 5 > 2 || 'c' != 'o' && 't' != 'o' ->  fancy string
//res = '' -> 'l' -> 'le' -> 'lee' -> 'leet' -> 'leetc' -> 'leetco'
//                                                  ^^

//l e e e t c o d e
//              ^
//len = 6 > 2 || 'o' != 'd' && 'c' != 'd' ->  fancy string
//res = '' -> 'l' -> 'le' -> 'lee' -> 'leet' -> 'leetc' -> 'leetco' -> 'leetcod'
//                                                              ^^

//l e e e t c o d e
//                ^
//len = 7 > 2 || 'd' != 'e' && 'o' != 'e' ->  fancy string
//res = '' -> 'l' -> 'le' -> 'lee' -> 'leet' -> 'leetc' -> 'leetco' -> 'leetcod' -> 'leetcode'
//                                                                           ^^

fancyString("aaabaaaa"); //"aabaa"

fancyString("aab"); //"aab"
