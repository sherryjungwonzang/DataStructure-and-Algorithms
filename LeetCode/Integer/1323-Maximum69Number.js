//1323. Maximum 69 Number
//given a positive integer num consisting only of digits 6 and 9
//return the max number you can get by changing at most one digit
//6 becomes 9 and 9 becomes 6

//Appraoch:
//using replace()
var max69Num = (num) => {
    //replacing 6 to 9 is max value
    let replace = num.toString().replace("6", "9");

    return parseInt(replace);
}
max69Num(9669); //9969
//9 6 6 9
//  ^
//the first 6 -> 9 => 9969

max69Num(9996); //999
//9 9 9 6
//      ^
//the first 6 -> 9 => 9999

max69Num(9999); //9999
