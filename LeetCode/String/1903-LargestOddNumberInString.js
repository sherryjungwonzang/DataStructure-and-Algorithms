//1903. Largest Odd Number In String
//given a string 'num'- representing a large integer
//return the largest-valued odd intefer as a string that is a non-empty substring of num
//or an empty string "" if no odd integer exists
var largestOddNumInString = (num) => {
    let m = num.length;

    //base case
    if (parseInt(num[m - 1]) % 2 !== 0) return num;

    //checking from backwards
    for (let i = m - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) return num.substring(0, i + 1);
    }
    
    return '';
}
largestOddNumInString("52"); //"5"
//m = 2
//2 % 2 = 0 -> even

//i = 1
//"5 2"
//   ^
//parseInt(2) % 2 = 0 -> even

//i = 0
//"5 2"
// ^
//parseInt(5) % 2 != 0 -> odd
//substring(0, 1) = "5"

largestOddNumInString("4206"); //""

largestOddNumInString("35427"); //"35427" - already an odd number
//m = 5
//7 % 2 != 0 -> odd
//"35427" itself is max odd
