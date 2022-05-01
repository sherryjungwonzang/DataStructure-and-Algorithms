//An integer is a palindrome when it reads the same backward as forward

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0 || x%10 === 0 && x !== 0) return false;
    let reverse = 0;
    let num = x;
    while(num > reverse) {
        reverse = num%10 + reverse*10;
        num = parseInt(num/10);
    }
    return  (num === reverse || num === parseInt(reverse/10));
};
