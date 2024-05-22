//13. Roman to Integer
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D, M
//I - 1, V - 5, X - 10, L - 50, C - 100, D - 500, M - 1000
//for example, 2 is written as II in Roman numeral, just two ones added together
//12 is written as XII, which is simply X + II
//the number 27 is written as XXVII, which is XX + V + II

//roman numerals are usually written largest to smallest from left to right
//however, the numeral for four is not IIII
//instead, the number four is written as IV
//because the one is before the five we subtract it making four
//the same principle applies to the number 9, which is written as IX
//there are six instances where subtraction is used

//I - can be placed before V(5) and X(10) to make 4 and 9
//X - can be placed before L(50) and C(100) to make 40 and 90
//C - can be placed before D (500) and M (1000) to make 400 and 900

//given a roman numeral, convert it to an integer
var romanToInt = (s) => {
    //create map with roman numerals
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        //for comparison
        let curr = s[i];
        let next = s[i + 1];

        if (symbols[curr] < symbols[next]) {
            total -= symbols[curr];
        } else {
            total += symbols[curr];
        }
    }
    return total;
}
romanToInt("III"); //3 - III=3

romanToInt("LVIII"); //58 - L is 50, V is 5, III is 3

romanToInt("MCMXCIV"); //1994 - M is 1000, CM is 900, XC is 90, and IV is 4

