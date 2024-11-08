//1450. Number Of Students Doing Homework At A Given Time
//given two integer arrays startTime and endTime and given an integer queryTime
//the ith student started doing their homework at the time startTime[i] and finished it at time endTime[i]
//return the number of students doing their homework at time queryTime
//more formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive
var studentsHomeworkTime = (startTime, endTime, queryTime) => {
    let m = startTime.length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }

    return count;
}
//TC: O(n)
//SC: O(1)
studentsHomeworkTime(startTime = [1,2,3], endTime = [3,2,7], queryTime = 4); //1
//startTime = [1, 2, 3], endTime = [3, 2, 7]
//             ^                    ^
//startTime <= queryTime but endTime <= queryTime -> not finishing in a given time

//startTime = [1, 2, 3], endTime = [3, 2, 7]
//                ^                    ^
//startTime <= queryTime but endTime <= queryTime -> not finishing in a given time

//startTime = [1, 2, 3], endTime = [3, 2, 7]
//                   ^                    ^
//startTime <= queryTime and endTime >= queryTime -> finishing in a given time
//count = 0 -> 1

studentsHomeworkTime(startTime = [4], endTime = [4], queryTime = 4); //1
//startTime = [4], endTime = [4]
//             ^              ^
//startTime <= queryTime and endTime >= queryTime -> finishing in a given time
//count = 0 -> 1
