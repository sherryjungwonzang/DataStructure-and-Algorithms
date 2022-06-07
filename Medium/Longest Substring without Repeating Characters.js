//Longest Substring without Repeating Characters
//given a string s
//find the length of the longest substring without repeating characters

//Approach 1: Sliding Window with HashMap
var lengthOfLongestSubstring = (s) => {
    //setting up window boundary
    let left = 0;
    let right = 0;
    
    let charSet = new Map();
    let subStrLength = 0;

    while(right < s.length) {
        //for contracting window
        if (charSet.has(s[right])) {
            left = Math.max(charSet.get(s[right]) + 1, left);
        }

        //update charSet, subStrLength and extending window rightward
        charSet.set(s[right], right);
        subStrLength = Math.max(subStrLength, right - left + 1);
        right++;
    }
    return subStrLength;
}
