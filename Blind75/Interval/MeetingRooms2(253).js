//Meeting Rooms2 (253)
//given an array of meeting time intervals 'intervals'
//where intervals[i] = [start_i, end_i]
//return the minimum num of conference rooms required

//Approach:
//how many overlaps are there at any point in time within the intervals

var meetingRooms2 = (intervals) => {
  //edge case
  if (!intervals || intervals.length < 1) { //meaning there is no intervals within the array
    return 0;
  }

  //sort intervals to start & end
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b); //ascending order
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b); 

  //create two pointers
  let rooms = 0;
  let end = 0; //indicating the index of ends array

  //loop over
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
}
//TC: O(n * lonN) - n: loop through and map values | logN: sort by first and second values
//SC: O(n + m) - n is the length of starts array | m is the length of ends array
meetingRooms2([[0, 30], [5, 10], [15, 20]]); //2
//start = [0, 5, 15]
//         i  i   i
//end = [10, 20, 30]
//      end  end

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
