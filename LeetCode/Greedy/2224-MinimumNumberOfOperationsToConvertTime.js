//2224. Minimum Number Of Operations To Convert Time
//given two strings current and correct representing two 24-hour times
//24-hour times are formatted as "HH:MM" - where HH is between 00 and 23 and MM is between 00 and 59
//the earliest 24-hour time is 00:00, and the latest is 23:59

//in one operation you can increase the time current by 1, 5, 15 or 60 minutes
//you can perform this operation any number of times
//return the min number of operations needed to convert current to correct

//Approach:
//using Greedy Algorithm
var operationsConvertTime = (current, correct) => {
    let count = 0;
    let minuteVals = [60, 15, 5, 1]; //ascending order - for efficiency
    //separate hh and mm
    let currHM = current.split(":");
    let correctHM = correct.split(":");
    let timeDiff = ((correctHM[1] - currHM[1])) + ((correctHM[0] - currHM[0]) * 60); //calculating time difference based on minutes

    for (let minute of minuteVals) {
        while (timeDiff >= minute) { //until there should be no more operations
            timeDiff -= minute;

            count++;
        }
    }

    return count;
}
operationsConvertTime(current = "02:30", correct = "04:35"); //3
//Add 60 minutes to current. current becomes "03:30"
//Add 60 minutes to current. current becomes "04:30"
//Add 5 minutes to current. current becomes "04:35"

//current = "02:30" -> [ "02", "30" ]
//correct = "04:35" -> [ "04", "35" ]
//timeDiff based on minutes:(35 - 30) + (04 - 02) * 60 = 125

//minuteVals = [60, 15, 5, 1]
//              ^       ^
//125 > 60 -> can proceed the operations with 60
//timeDiff = 125 - 60 = 65
//count = 0 -> 1

//65 > 60 -> can proceed the operations with 60
//timeDiff = 65 - 60 = 5
//count = 0 -> 1 -> 2

//5 < 15 -> cannot proceed the operations with 15

//5 >= 5 -> can proceed the operations with 560
//timeDiff = 5 - 5 = 0
//count = 0 -> 1 -> 2 -> 3

operationsConvertTime(current = "11:00", correct = "11:01"); //1 - We only have to add one minute to current
//current = "11:00" -> [ "11", "00" ]
//correct = "11:01" -> [ "11", "01" ]
//timeDiff based on minutes:(01 - 00) + (11 - 11) * 60 = 1

//minuteVals = [60, 15, 5, 1]
//                         ^
//1 < 60 -> cannot proceed the operations with 60
//1 < 15 -> cannot proceed the operations with 15
//1 < 5 -> cannot proceed the operations with 5
//1 >= 1 -> can proceed the operations with 1
//timeDiff = 1 - 1 = 0
//count = 0 -> 1
