//253. Meeting Room2
//given an array of meeting time intervals 'intervals'
//where intervals[i] = [start_i, end_i]
//return the minimum num of conference rooms required

//how many overlaps are there at any point in time within the intervals

//Approach:
//extract first element and last element respectively and sorted
//compare with starts and ends to figure out whether it is overlapping or not
var meetingRooms2 = (intervals) => {
    //edge case
    if (!intervals || intervals.length < 1) { //no intervals
        return 0;
    }

    //extract first and second elements
    //sort in ascending order
    const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b); 
    const ends = intervals.map((interval) => interval[i]).sort((a, b) => a - b);

    let rooms = 0; //counting the num of rooms
    let endIndex = 0; //indicating the index of ends array

    //loop over
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endIndex]) { //overlapping
            rooms++;
        } else { //non-overlapping - closing rooms
            endIndex;
        }
    }
    return rooms;
}
//TC: O(n * logN) - n: loop through and map values | logN: sort by first and second values
//SC: O(n + m) - n is the length of starts array | m is the length of ends array
meetingRooms2([[0, 30], [5, 10], [15, 20]]); //2
//start = [0, 5, 15]
//         i  i   i
//end = [10, 20, 30]
//     endI  endI

//0 < 10 -> rooms++ | 5 < 10 -> rooms++ | 15 > 10 -> end++ 
//rooms = 0 -> 1 -> 2
//end = 0 -> 1

//out of range of start -> return rooms value = 2


meetingRooms2([[7, 10], [2,4]]); //1 - because there is no overlap within this meeting room
//start = [2, 7]
//         i  i
//end = [4, 10]
//      end end

//2 < 4 -> rooms++ | 7 > 4 -> end 
//rooms = 0 -> 1
//end = 0

//out of range of start -> return rooms value = 1
