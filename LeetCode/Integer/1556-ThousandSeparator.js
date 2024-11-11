//1556. Thousand Separator
//given an integer n
//add a dot (".") as the thousands separator
//return it in string format
var thousandSeparator = (n) => {
    n = "" + n;
    let m = n.length;
    let res = "";

    for (let i = 0; i < m; i++) {
        //thousand separating
        if ((m - i) % 3 === 0 && i) res += "."
        
        res += n[i];
    }
    
    return res;
}
thousandSeparator(987); //"987"
//n = 987 || m = 3 

//9 8 7
//^
//i = 0 -> 3 - 0 = 3 % 3 = 0: T & i = 0: F
//res = "" -> "9"

//9 8 7
//  ^
//i = 1 -> 3 - 1 = 2 % 3 != 0: F & i = 1: T
//res = "" -> "9" -> "98"

//9 8 7
//    ^
//i = 2 -> 3 - 2 = 1 % 3 != 0: F & i = 2: T
//res = "" -> "9" -> "98" -> "987"

thousandSeparator(1234); //"1.234"
//n = 1234 || m = 4

//1 2 3 4
//^
//i = 0 -> 4 - 0 = 4 % 3 != 0: F & i = 0: F
//res = "" -> "1"

//1 2 3 4
//  ^
//i = 1 -> 4 - 1 = 3 % 3 = 0: T & i = 1: T -> thousand separator
//res = "" -> "1" -> "1."
//res = "" -> "1" -> "1." -> "1.2"

//1 2 3 4
//    ^
//i = 2 -> 4 - 2 = 2 % 3 != 0: F & i = 1: T
//res = "" -> "1" -> "1." -> "1.2" -> "1.23"

//1 2 3 4
//      ^
//i = 3 -> 4 - 3 = 1 % 3 != 0: F & i = 1: T
//res = "" -> "1" -> "1." -> "1.2" -> "1.23" -> "1.234"
