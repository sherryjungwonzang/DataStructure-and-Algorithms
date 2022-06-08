//Integer to Roman
//given an integer to convert it to a roman numeral
//Roman numnerals: I, V, X, L, C, D, M
//Integer value: 1, 5, 10, 50, 100, 500, 1000
//written largest to smallest from left to right

//I(1) can be placed before V(5) and X(10) to make 4(IV) and 9(IX)
//X(10) can be placed before L(50) and C(100) to make 40(XL) and 90(XC)
//C(100) can be placed before D(500) and M(1000) to make 400(CD) and 900(CM)

//Approach: Greedy Algorithm
//look for the largest symbol fits into it
//suntract and look for tha largest symbols fits into the remainder
//until the remainder is 0
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var intToRoman = (N) => {
    let ans = "";
    for (let i = 0; N; i++) {
        while(N >= val[i]) {
            ans += rom[i];
            N -= val[i];
        }
    }
    return ans;
}


//Approach: using map
//using forEach()
function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, IV: 4, I: 1 };
    let result = '';

    Object.entries(map).forEach(([roman, n]) => { //Object.entries(): to return an array consisting of enumerable property [key, value] pairs of the object
        result += roman.repeat(Math.floor(num / n)); //repeat(): to build a new string containing a specified number of copies of the string
        num %= n;
    });
    return result;
}

//using reduce()
function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, IV: 4, I: 1 };
    return Object.entries(map).reduce((result, [roman, n]) => { 
        //reduce(): reduce the array to a single value and executes a provided function for each value of the array from left-to-right
        //return value of the function is stored in an accumulator
        result += roman.repeat(Math.floor(num / n));
        num %= n;
        return result;
    }, '');
}
