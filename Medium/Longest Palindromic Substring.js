//Longest Palindromic Substring
//given a strings
//return the longest palindrime substring in s

const longestPalindrome = (s) => {
    const getPalindromAt = (s, left, right) => {
        let palindrome = '';
        while(s[left] && s[left] === s[right]) {
            if (left === right) {
                palindrome += s[left];
            } else {
                palindrome = s[left] + palindrome + s[right];
            }
            left -= 1;
            right += 1;
        }
        return palindrome;
    }

    let result = '';
    for (let i = 0; i < s.length; i += 1) {
        const odd = getPalindromAt(s, i, i);
        const even = getPalindromAt(s, i, i+1);
        result = [result, odd, even].reduce((max, s) => max.length > s.length ? max : s);
        //reduce: to reduce the array to a single value and executes a provided function for each value of the array
    }
    return result;
}


//another solution: expand around center
function longestPalindrome(s) {
    //ll: left index of the longest palindrome
    //rr: right index of the longest palindrome
    let ll = 0;
    let rr = 0;

    //iterate all palindromes wit center indices
    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i+1]) {
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
                //found a new palindrome
                //update the ll and rr if the newly found palindrome is longer thatn the existing one
                [ll, rr] = (r - l + 1) > (rr - ll + 1) ? [l, r] : [ll, rr];
            }
        }
    }
    return s.substring(ll, rr+1);
}


//Approach: Dynamic Programming (DP)
//having 2D array dp
//in each cell, it indicates whether range(i, j) can become a palindrome or not

//base case with one char: dp[i][i] = true when i === j
//base case with two chars: dp[i][i+1] = true when s[i] === s[i+1]
//expand case with three or more chars: dp[i][j] = dp[i+1][j-1] && s[i] === s[j]

//more runtime and memory
var longestPalindrome = (s) => {
    if (s.length <= 1) return s;

    //construct 2D array
    const dp = [... new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

    let lps = '';

    //base case for one char
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    //base case for two chars
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = true;
        if (dp[i][i + 1]) lps = s.substring(i, i + 2);
    }

    //expand to three or more characters
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    return lps;
}
