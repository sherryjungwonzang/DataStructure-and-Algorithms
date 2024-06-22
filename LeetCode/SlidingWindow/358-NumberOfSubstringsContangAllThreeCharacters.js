//1358. Number of substrings containing all three characters
//given a string 's' consisting only of characters a, b and c
//return the number of substrings containing at least one occurence of all these characters a,b and c

//Approach:
//using sliding windows
var threeCharSubstrings = (s) => {
    //sliding window pointers
    let start = 0;
    let end = 0;
    let count = 0;

    while (end < s.length) {
        let subStr = s.substring(start, end + 1);

        if (!hasAll(subStr)) {
            end++;
        } else { //has all a,b,c
            count = count + (s.length - end);
            start++;
        }
    }
    return count;

    //to check whether it has all characters
    function hasAll(str) {
        return str.includes("a") && str.includes("b") && str.includes("c");
    };
}
threeCharSubstrings("abcabc"); //10
//"abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again)

threeCharSubstrings("aaacb"); //3
//"aaacb", "aacb" and "acb"

threeCharSubstrings("abc"); //1
