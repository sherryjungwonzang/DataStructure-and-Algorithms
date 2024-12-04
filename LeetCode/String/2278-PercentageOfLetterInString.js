//2278. Percentage Of Letter In String
//given a string s and a character letter
//return the percentage of characters in s that equal letter rounded down to the nearest whole percent
var percentageOfLetter = (s, letter) => {
    let count = 0;
    
    //checking frequency of equal
    for (let chat of s) {
        if (chat === letter) count++;
    }

    //calculating percentage
    return Math.floor((count / s.length) * 100);
}
percentageOfLetter(s = "foobar", letter = "o"); //33 - 2 / 6 * 100% = 33%
//f o o b a r
//  ^ ^
//count = 0 -> 1 -> 2

//floor((2 / 6) * 100) = 33%

percentageOfLetter(s = "jjjj", letter = "k"); //0
