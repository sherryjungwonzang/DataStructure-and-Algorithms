//1360. Number Of Days Between Two Dates
//write a program to count the number of days between two dates
//the two dates are given as strings, their format is YYYY-MM-DD as shown in the examples
var daysBetweenDates = (date1, date2) => {
    let day1 = new Date(date1);
    let day2 = new Date(date2);
    let res = Math.abs(day2 - day1);

    return (res / 1000 / 60 / 60 / 24); //1000 - milliseconds
}
daysBetweenDates(date1 = "2019-06-29", date2 = "2019-06-30"); //1
//day1 = 2019-06-29T00:00:00.000Z
//day2 = 2019-06-30T00:00:00.000Z
//res = 86400000
//86400000 / 1000 / 60 / 60 / 24 = 1

daysBetweenDates(date1 = "2020-01-15", date2 = "2019-12-31"); //15
//day1 = 2020-01-15T00:00:00.000Z
//day2 = 2019-12-31T00:00:00.000Z 
//res = 1296000000
//1296000000 / 1000 / 60 / 60 / 24 = 15
