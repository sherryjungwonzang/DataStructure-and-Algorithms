//1736. Latest Time By Replacing Hidden Digits
//given a string time in the form of hh:mm - where some of the digits in the string are hidden - represented by ?
//the valid times are those inclusively between 00:00 and 23:59
//return the latest valid time you can get from time by replacing the hidden digits
var latestTimeHiddenDigits = (time) => {
    time = time.split('');

    //each position's latest time
    if (time[0] === "?") time[0] = time[1] > 3 ? "1" : "2";
    if (time[1] === "?") time[1] = time[0] > 1 ? "3" : "9";
    //time[2] is normally ":"
    if (time[3] === "?") time[3] = "5";
    if (time[4] === "?") time[4] = "9";

    return time.join('');
}
latestTimeHiddenDigits("2?:?0"); //"23:50" - The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50
//time = [ '2', '?', ':', '?', '0' ]
//               ^
//time[1] = ? -> time[0] != time[1] & 2 > 1 -> "3"

//time = [ '2', '3', ':', '?', '0' ]
//                         ^
//time[3] = ? -> "5"

//time = [ '2', '3', ':', '5', '0' ] -> "23:50"

latestTimeHiddenDigits("0?:3?"); //"09:39"
//time = [ '0', '?', ':', '3', '?' ]
//               ^
//time[1] = ? -> time[0] != time[1] & 0 < 1 -> "9"

//time = [ '0', '9', ':', '3', '?' ]
//                              ^
//time[4] = ? -> "9"

//time = [ '0', '9', ':', '3', '9' ] -> "09:39"

latestTimeHiddenDigits("1?:22"); //"19:22"
//time = [ '1', '?', ':', '2', '2' ]
//               ^
//time[1] = ? -> time[0] != time[1] & 1 = 1 -> "9"

//time = [ '1', '9', ':', '2', '2' ] -> "19:22"
