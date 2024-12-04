//2437. Number Of Valid Clock Times
//given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm"
//the earliest possible time is "00:00" and the latest possible time is "23:59"
//in the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9
//return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9
var validClockTimes = (time) => {
    let [hours, minutes] = time.split(':');
    let res = 1;

    //checking hours
    if (hours == '??') res *= 24;
    else {
        if (hours[0] == "?") hours[1] > 3 ? res *= 2 : res *= 3;
        if (hours[1] == "?") hours[0] == 2 ? res *= 4 : res *= 10;
    }

    //checking minutes
    if (minutes[0] == '?') res *= 6;
    if (minutes[1] == '?') res *= 10;

    return res;
}
validClockTimes("?5:00"); //2 - 0 or 1
//times = [?5, 00]
//         ^
//checking hours[1] = 5 > 3 -> res *= 2 = 2

//res = 1 -> 2

validClockTimes("0?:0?"); //100 - Each ? can be replaced by any digit from 0 to 9
//times = [0?, 0?]
//          ^
//checking hours[0] = 0 -> res *= 10 = 10
//res = 1 -> 10

//times = [0?, 0?]
//              ^
//minutes[1] can have 10 numbers ->  res *= 10 = 100
//res = 1 -> 10 -> 100

validClockTimes("??:??"); //1440
