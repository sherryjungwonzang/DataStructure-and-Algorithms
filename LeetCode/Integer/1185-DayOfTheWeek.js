//1185. Day Of The Week
//given a date, return the corresponding day of the week for that date
//the input is given as three integers representing the day, month and year respectively
//return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}

//Approach:
//using .getDay() function
var dayOfTheWeek = (day, month, year) => {
    let weekdays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    let date = new Date(`${month}/${day}/${year}`);
  
    return weekdays[date.getDay()];
}
dayOfTheWeek(day = 31, month = 8, year = 2019); //saturday
//date = 2019-08-31T00:00:00.000Z
//Saturday

dayOfTheWeek(day = 18, month = 7, year = 1999); //sunday
//date = 1999-07-18T00:00:00.000Z
//Sunday

dayOfTheWeek(day = 15, month = 8, year = 1993); //sunday
//date = 1993-08-15T00:00:00.000Z
//Sunday
