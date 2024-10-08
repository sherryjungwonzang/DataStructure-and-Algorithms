//1154. Day Of The Year
//given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD
//return the day number of the year
var dayOfyear = (date) => {
    let year = Number(date.substring(0, 4)); //YYYY
    let month = Number(date.substring(5, 7)); //MM
    let day = Number(date.substring(8)); //DD
    let daysForMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    let res = 0;

    //leap year - Febuary
    if (isLeap(year)) daysForMonth[1] = 29; 

    //calculating the whole number of month
    for (let i = 0; i < month - 1; i++) res += daysForMonth[i];

    //checking leap year
    function isLeap (year) {
        if (year % 4 !== 0) return false;
        else if (year % 100 !== 0) return true;
        else if (year % 400 !== 0) return false;
        else return true;
    }

    return res + day;
}
dayOfyear("2019-01-09"); //9
//year = 2019
//month = 01
//day = 09

//checking leaf -> 2019 % 4 != 0: not leaf year
//i = 0 < 1 - 1 -> no month count: meaning January
//res = 0 + day = 9 = 9

dayOfyear("2019-02-10"); //41
//year = 2019
//month = 02
//day = 10

//checking leaf -> 2019 % 4 != 0: not leaf year
//i = 0 < 2 - 1 -> need to count 1 month (January)
//daysForMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
//                ^
