//482. License Key Formatting
//you are given a license key represented as a string 's' that consists of only alphanumeric characters and dashed
//the string is separated into n + 1 groups by n dashes
//we want to reformat the string s such that each group contains exactly k chars,
//except for the first group, which could be shorter than k but still must contain at least one char
//furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase

//Approach:
//using reget
var licenseKeyFormatting = (s, k) => {
    let regex = /\-/g;
    let head = s.length % k;
    let res = [];

    //remove dashes
    s = s.replace(regex, "");

    //for first group
    if (head) res.push(s.substring(0, head));

    //general cases:
    for (let i = head; i < s.length; i += k) res.push(s.substring(i, i + k));

    return res.join("-").toUpperCase();
}
licenseKeyFormatting(s = "5F3Z-2e-9-w", k = 4); //"5F3Z-2E9W"
//removing dash -> "5F3Z2e9w"
//res = []

//s.length = 8 % 4 = 0
//general cases:
//"5 F 3 Z 2 e 9 w"
// h
//s.substring(0, 0 + 4) = "5F3Z"
//res = [5F3Z, 

//"5 F 3 Z 2 e 9 w"
//         h
//s.substring(4, 4 + 4) = "2e9w"
//res = [5F3Z, 2e9w]

//.join() & uppercase = res = "5F3Z-2E9W"

licenseKeyFormatting(s = "2-5g-3-J", k = 2); //"2-5G-3J"
//removing dash -> "25g3J"
//res = []

//s.length = 5 % 2 = 1
//special case:
//"2 5 g 3 J"
//   h
//s.substring(0, 1) = "2"
//res = [ "2",

//general cases:
//"2 5 g 3 J"
//   h
//s.substring(1, 1 + 2) = "5g"
//res = [ "2", "5g"

//"2 5 g 3 J"
//       h
//s.substring(3, 3 + 2) = "3J"
//res = [ "2", "5g", "3J"]

//.join() & uppercase = res = "2-5G-3J"

